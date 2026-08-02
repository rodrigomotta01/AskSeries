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

form.addEventListener("submit", (getFilters))

function getFilters(event) {
    event.preventDefault()

    const filters = {    
        genero: fieldGenero.value,
        ano: fieldAno.value,
        plataforma: fieldPlataforma.value,
        tamep: fieldTamep.value
    }

    console.log(filters.genero)
    console.log(filters.ano)
    console.log(filters.plataforma)
    console.log(filters.tamep)  
    getSeries(filters)
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
}

