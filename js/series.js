

async function getMoviesData_home() {
    const api_data_series = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/SeriseData.json");
    const data = await api_data_series.json();
    









    

    
    
    console.log("done get series data and run the C");
}
getMoviesData_home();