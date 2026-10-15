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
  const Movies_Category = Movies_Category_old.slice(0, 20);

  const api_data_series = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/SeriseData.json");
  const data_series = await api_data_series.json();
  await AOS.refresh();
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

  displayMovies(new Map([]), dataUse);

  seriesBtn.addEventListener('click', () => {
    categoryType = "Series";
    dataUse = data_series.Series;
    displayMovies(Series_Category[0], dataUse);
    changeType();
    seriesBtn.classList.add('active');
    moviesBtn.classList.remove('active');
    switchAnimation.classList.add('switch-btn-category-section-right');
    switchAnimation.classList.remove('switch-btn-category-section-left');

  });

  moviesBtn.addEventListener('click', () => {
    categoryType = "Movies";
    dataUse = data.Movies;
    displayMovies(Movies_Category[0], dataUse);
    changeType();
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

      newEle.setAttribute('data-aos', 'fade-up');
      newEle.setAttribute('data-aos-duration', '800');
      newEle.setAttribute('data-aos-anchor-placement', 'top-bottom');
      newEle.setAttribute('data-aos-delay', num * 50 % 800);

      newEle.innerHTML = `
        <button data-category="${c[0]}" class="w-full flex justify-between items-center cursor-pointer category-btn-check">
          <div class="flex items-center">
            <iconify-icon icon="akar-icons:square-fill" class="text-gray-600/80 mr-2 md:text-lg iconify-me"></iconify-icon>
            <h6 class="text-white/80 md:text-sm  xl:text-lg text-xs font-inter">${c[0]}</h6>
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
        numOfSelectCat.innerHTML = dataFilter.size;

        displayMovies(dataFilter, dataUse);

      });

      categoryCheckList.append(newEle);


    });


  }

  function displayMovies(dataFilter, data) {


    var moviesDisplaySec = document.querySelector('#moviesDisplaySec');
    moviesDisplaySec.innerHTML = "";

    var dataUse = [];


    if (dataFilter.size === 0) {
      dataUse = data;

    } else {
      data.forEach(e => {
        var category_str = e.Category.toString();
        category_str = ',' + category_str + ',';
        var flag = false;
        dataFilter.forEach(ele => {
          if (category_str.includes(',' + ele + ',') && !flag) {
            dataUse.push(e);
            flag = true;
          }
        });

      });
    }
    document.querySelector('#numOfMoviesFound').innerHTML = dataUse.length;
    dataUse.forEach(m => {
      var article = document.createElement('article');
      article.className = [
        "p-2",
        "xl:w-[25%]",
        "md:w-[33%]",
        "sm:w-[50%]",
        "w-full",
        "hover:scale-95",
        "hover:duration-400"

      ].join(" ");

      article.innerHTML = `
        <div class=" w-full h-full bg-[var(--secondary-b)] pb-3 rounded-xl ">
          <a href="Movie.html?Id=${m.Id}">
            
            <div class="lg:h-[300px] h-48 relative rounded-xl">
              <img src="${m.Images}" class="absolute inset-0 w-full h-full rounded-t-xl z-10">
              <div class="bg-black/50 absolute inset-0 z-20 hover:bg-black/30 transition-colors rounded-xl"></div>
              <h6 class="flex justify-center items-center lg:text-base text-xs rounded-xl px-2 bg-slate-700/80 absolute top-3 left-3 z-30"><iconify-icon icon="ant-design:star-filled" class="mr-1 text-yellow-500"></iconify-icon>${m.Rate}</h6>
            </div>
            
            <div class="px-2 pt-2">
              <h4 class="text-white/90 lg:text-sm text-xs line-clamp-1">${m.Title}</h4>
              <p class="text-[var(--primary-c)] font-inter text-xs lg:text-sm pt- line-clamp-1">[${m.Year}] <span class="font-extrabold">.</span> [${m.Stars[0]}]</p>
            </div>
          </a>
          </div>
      `;

      article.setAttribute('data-aos', 'fade-up');
      article.setAttribute('data-aos-duration', '800');


      moviesDisplaySec.append(article);
    });






  }
























  console.log("done get news data and run the C");
  console.log("done get movie data and run the C");
  AOS.refresh();
}
getMoviesData_home();

