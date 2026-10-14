// * category page js file

async function getMoviesData_home() {
  const api_data_movies = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/MoviesData.json");
  const data = await api_data_movies.json();

  // ! movies category and nums
  const Movies_Category_u = new Map([]);

  data.Movies.forEach(e1 => {
    e1.Category.forEach(e2 => {

      if (Movies_Category_u.has(e2)) {
        Movies_Category_u.set(e2, Movies_Category_u.get(e2) + 1);
      } else {
        Movies_Category_u.set(e2, 1);
      }

    })
  });

  const Movies_Category_old = [...Movies_Category_u].sort((a, b) => b[1] - a[1]);
  Movies_Category = Movies_Category_old.slice(0, 20);

  const api_data_series = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/SeriseData.json");
  const data_series = await api_data_series.json();

  // ! movies category and nums
  const Series_Category_u = new Map([]);
  data_series.Series.forEach(e1 => {
    e1.Category.forEach(e2 => {

      if (Series_Category_u.has(e2)) {
        Series_Category_u.set(e2, Series_Category_u.get(e2) + 1);
      } else {
        Series_Category_u.set(e2, 1);
      }

    })
  });
  const Series_Category = [...Series_Category_u].sort((a, b) => b[1] - a[1]);

  // ! header 
  var dataUse = data.Movies;
  var seriesBtn = document.querySelector('#seriesBtnCategory');
  var moviesBtn = document.querySelector('#moviesBtnCategory');
  var switchAnimation = document.querySelector('#switchAnimation');

  // ! main 
  var numOfSelectCat = document.querySelector('#numOfSelectCat');
  var categoryCheckList = document.querySelector('#categoryCheckList');
  let categoryType = "Movies";
  changeType();
  

  seriesBtn.addEventListener('click', () => {
    categoryType = "Series";
    changeType();
    dataUse = data_series.Series;
    seriesBtn.classList.add('active');
    moviesBtn.classList.remove('active');
    switchAnimation.classList.add('switch-btn-category-section-right');
    switchAnimation.classList.remove('switch-btn-category-section-left');

  });

  moviesBtn.addEventListener('click', () => {
    categoryType = "Movies";
    changeType();
    dataUse = data.Movies;
    moviesBtn.classList.add('active');
    seriesBtn.classList.remove('active');
    switchAnimation.classList.add('switch-btn-category-section-left');
    switchAnimation.classList.remove('switch-btn-category-section-right');
  });

  function changeType() {

    const source = categoryType === "Movies" ? Movies_Category : Series_Category;
    categoryCheckList.innerHTML = "";
    var dataFilter = new Set();
    dataFilter.clear();
    

    source.forEach((c, num) => {
      var newEle = document.createElement('li');
      newEle.className = [
        "p-1 ",
        "mt-1",
        "rounded-sm"
      ].join(" ");

      newEle.innerHTML = `
        <button data-category="${c[0]}" class="w-full flex justify-between items-center cursor-pointer category-btn-check">
          <div class="flex items-center">
            <iconify-icon icon="akar-icons:square-fill" class="text-gray-600/80 mr-2 md:text-lg iconify-me"></iconify-icon>
            <h6 class="text-white/80 md:text-base xl:text-lg text-xs font-inter">${c[0]}</h6>
          </div>
  
          <span class="text-xs xl:text-sm text-white/40">${c[1]}</span>
        </button>
          `
      var btn = newEle.querySelector('button');
      var btnIcon = newEle.querySelector('.iconify-me');

      btn.addEventListener('click', () => {
        const activeIcon = btn.classList.toggle("active");
        btnIcon.classList.toggle("active", activeIcon);
        btnIcon.setAttribute('icon', activeIcon
          ? 'akar-icons:check-box-fill'
          : 'akar-icons:square-fill');

        if (btn.classList.contains('active')) {
          dataFilter.add(btn.dataset.category);
        } else {

          dataFilter.delete(btn.dataset.category);
        }
        displayMovies(dataFilter);
        
      });

      categoryCheckList.append(newEle);
      

    });


  }


  function displayMovies(dataFilter){
    
  }
























  console.log("done get news data and run the C");
  console.log("done get movie data and run the C");
  AOS.refresh();
}
getMoviesData_home();

