// * movie page js file

// ! header
var backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', () => {
    window.history.back();
});

async function getMoviesData_movie() {
    const api_data_movies = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/MoviesData.json");
    const data = await api_data_movies.json();
    const api_data_series = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/SeriseData.json");
    const data_series = await api_data_series.json();
    await AOS.refresh();

    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("Id");
    const movieType = params.get("Type");
    var movieSection = document.getElementById("movie");
    var movieImg = movieSection.querySelector('#movieImg');
    var movieTitle = movieSection.querySelector('#movieTitle');
    var movieDescription = movieSection.querySelector('#movieDescription');
    var movieRate = movieSection.querySelector('#movieRate');
    var numOfRates = movieSection.querySelector('#numOfRates');
    var movieDirector = movieSection.querySelector('#movieDirector');
    var movieStars = movieSection.querySelector('#movieStars');
    var movieWriters = movieSection.querySelector('#movieWriters');
    var movieYear = movieSection.querySelector('#movieYear');
    var movieYearEnd = movieSection.querySelector('#movieYearEnd');
    var movieTime = movieSection.querySelector('#movieTime');
    var movieSummary = movieSection.querySelector('#movieSummary');
    var movieCategory = movieSection.querySelector('#movieCategory');
    var SeriesSeasons = movieSection.querySelector('#SeriesSeasons');


    function IsMovie(x) {
        return x == "Movie";
    };

    function getMovieData(id) {
        var allMovies = data.Movies;
        var target = "";
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].Id == id) {
                target = allMovies[i];
                break;
            }
        }

        return target;
    };

    function getSeriesData(id) {
        var allSeries = data_series.Series;
        var target = "";
        for (var i = 0; i < allSeries.length; i++) {
            if (allSeries[i].Id == id) {
                target = allSeries[i];
                break;
            }
        }

        return target;
    };

    function displayMovieData() {
        const target = getMovieData(movieId);
        movieImg.setAttribute('src', target.Images);
        movieTitle.innerHTML = target.Title;
        movieDescription.innerHTML = target.Description;
        movieRate.innerHTML = target.Rate;
        movieDirector.innerHTML = target.Director;
        numOfRates.innerHTML = target.Rate * 2500;
        target.Stars.forEach(e => { movieStars.innerHTML += `<li>${e}</li>`; });
        target.Writers.forEach(e => { movieWriters.innerHTML += `<li>${e}</li>`; });
        movieYear.innerHTML = "[" + target.Year + "]";
        movieTime.innerHTML = "[" + Math.floor(target.Time) + "h " + ((target.Time - Math.floor(target.Time))*100).toFixed(0) + "m]";
        movieSummary.innerHTML = target.Summary;
        target.Category.forEach( e =>{ movieCategory.innerHTML += `<li class="py-1 px-3 bg-[var(--secondary-a)] w-fit rounded-xl text-sm sm:text-base">${e}</li>`});
    };

    function displaySeriesData() {
        const target = getSeriesData(movieId);
        movieImg.setAttribute('src', target.Images);
        movieTitle.innerHTML = target.Title;
        movieDescription.innerHTML = target.Description;
        movieRate.innerHTML = target.Rate;
        movieDirector.innerHTML = target.Creator[0];
        numOfRates.innerHTML = target.Rate * 2500;
        target.Stars.forEach(e => { movieStars.innerHTML += `<li>${e}</li>`; });
        target.Creator.forEach(e => { movieWriters.innerHTML += `<li>${e}</li>`; });
        movieYear.innerHTML = "[ " + target.StartYear + " ]";
        movieYearEnd.innerHTML = "[ " + target.EndYear + " ]";
        movieTime.innerHTML = "["+ target.Episodes + " Episodes]";
        movieSummary.innerHTML = target.Summary;
        target.Category.forEach( e =>{ movieCategory.innerHTML += `<li class="py-1 px-3 bg-[var(--secondary-a)] w-fit rounded-xl text-sm sm:text-base">${e}</li>`});
        SeriesSeasons.innerHTML =  "Seasons: " + target.Seasons;
    };




    if (IsMovie(movieType)) {
        displayMovieData();
    } else {
        displaySeriesData();
    }

    console.log("done get news data and run the C");
    AOS.refresh();
}
getMoviesData_movie();















