// * for get movies data 

async function getMoviesData_movies() {
    const api_data = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/MoviesData.json");
    const data = await api_data.json();
}

getMoviesData_movies();






    

 





