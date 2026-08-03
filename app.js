const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDU4YmZkMmIwODI4MDBkZDYyMjE1ZDFlZWY1OWE3OSIsIm5iZiI6MTc4NTcwNzU1Ny43NTMsInN1YiI6IjZhNmZiYzI1ZTIzZmU0ZjdiY2ZjNzI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrrS66f8NzjGvHn_5z02Bvo0LWePZirrKFxLryaCsnE'
  }
};

const fieldGenero = document.querySelector("#genero");
const fieldAno = document.querySelector("#ano");
const fieldPlataforma = document.querySelector("#plataforma");
const fieldTamep = document.querySelector("#tamep");

const form = document.querySelector("#busca");

form.addEventListener("submit", (fetchSeries))

async function fetchSeries(event){
    const filters = getFilters(event);
    const results = await getSeries(filters);
    const finalresult = sortSeries(results);
    console.log(finalresult.name);
}

function getFilters(event) {
    event.preventDefault()

    const filters = {    
        genero: fieldGenero.value,
        ano: fieldAno.value,
        plataforma: fieldPlataforma.value,
        tamep: fieldTamep.value
    }

    return filters
}

async function getSeries(filters) {

    const params = new URLSearchParams();

    params.set("watch_region", "BR");
    params.set("vote_count.gte", "100");

    if (filters.genero)
        params.set("with_genres", filters.genero);

    if (filters.ano)
        params.set("first_air_date_year", filters.ano);

    if (filters.plataforma)
        params.set("with_watch_providers", filters.plataforma);

    if (filters.tamep) {
        const [min, max] = filters.tamep.split("-");
        params.set("with_runtime.gte", min);
        params.set("with_runtime.lte", max);
    }

    console.log(params.toString())
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=true&language=pt-BR&sort_by=popularity.desc&${params.toString()}`, options)
    const series = await response.json()
    
    return series.results
}

function sortSeries(results){
    if (results){
        const index = Math.floor(Math.random() * results.length)
        return results[index]
    }
}
