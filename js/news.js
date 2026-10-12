// *



async function getMoviesData_newa() {
    const api_data = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/NewsData.json");
    const data = await api_data.json();
}

getMoviesData_newa();