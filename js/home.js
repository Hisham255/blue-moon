// * home page js file 

// todo until use the web with react movies
async function getMoviesData_home() {
  const api_data_movies = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/MoviesData.json");
  const data = await api_data_movies.json();
  const api_data_news = await fetch("https://raw.githubusercontent.com/Hisham255/MyAPI/refs/heads/main/NewsData.json");
  const data_news = await api_data_news.json();





  // ! movies section
  var top1Move = document.querySelector('[data-movies-top="1"]');
  var top2Move = document.querySelector('[data-movies-top="2"]');
  var top3Move = document.querySelector('[data-movies-top="3"]');



  var tops = [0, 0, 0];
  var one = 0;
  var two = 0;
  var three = 0;
  data.Movies.forEach(e => {
    if (e.Rate > one) {
      three = two;
      two = one;
      one = e.Rate;
      tops[2] = tops[1];
      tops[1] = tops[0];
      tops[0] = e;
    } else if (e.Rate > two) {
      three = two;
      two = e.Rate;
      tops[2] = tops[1];
      tops[1] = e;
    } else if (e.Rate > three) {
      three = e.Rate;
      tops[2] = e;
    }
  });

  top1Move.innerHTML = `
    <div class="bg-[var(--secondary-c)]/20 p-2 rounded-xl hover:scale-102 duration-400">

              <div class="bg-[url('${tops[0].Images}')] bg-cover  rounded-tr-xl rounded-tl-xl bg-center bg-no-repeat ">
                <div class="p-4 pb-0 flex flex-col justify-between w-full h-full bg-black/60">
                  <div class="flex justify-between items-start">
                    <h5 class="font-boo text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/50">01</h5>
                    <h6 class="bg-gray-600/40 sm:py-1 px-2 sm:px-3 rounded-lg flex justify-center items-center text-sm text-white">
                      ${tops[0].Rate}<iconify-icon icon="ant-design:star-filled" class="ml-1 text-yellow-500"></iconify-icon></h6>
                  </div>

                  <div class="w-full lg:pt-30 pb-4">
                    <p class="text-[var(--primary-b)]/70 tracking-wider font-bold  mb-3">[${tops[0].Category[0]}] . [${tops[0].Category[1]}] .
                      [${tops[0].Year}]
                    </p>
                    <h4 class="font-boo text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white select-text" >${tops[0].Title}</h4>
                    <p class="text-white/50 tracking-wide mt-3 pr-5 text-sm ">${tops[0].Description}</p>
                  </div>

                </div>
              </div>

              <div class=" border-t border-t-white/40 ">
                <a href="Movie.html?Id=${tops[0].Id}"
                  class="w-full text-center block h-full py-4 text-white/50 md:text-base tracking-wider text-xs ">Explore
                  Movie</a>

              </div>

            </div>
    `;
  top2Move.innerHTML = `
     <div class="bg-[var(--secondary-c)]/30 p-2 rounded-xl hover:scale-102 duration-400">
            <div class="bg-[url('${tops[1].Images}')] bg-cover  rounded-tr-xl rounded-tl-xl bg-top bg-no-repeat ">
              <div class="p-4 pb-0 flex flex-col justify-between w-full h-full bg-black/60">

                <div class="flex justify-between items-start">
                  <h5 class="font-boo text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/50">02</h5>
                  <h6 class="bg-gray-600/40 sm:py-1 px-2 sm:px-3 rounded-lg flex justify-center items-center text-xs text-white">
                    ${tops[1].Rate}<iconify-icon icon="ant-design:star-filled" class="ml-1 text-yellow-500"></iconify-icon></h6>
                </div>
  
                <div class="w-full pt-5 xl:pt-0 pb-2">
                  <p class="text-[var(--primary-b)]/70 tracking-wider text-sm font-bold hidden sm:block mb-3">[${tops[1].Category[0]}] . [${tops[1].Category[1]}] .
                    [${tops[1].Year}]
                  </p>
                  <h4 class="font-boo text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white select-text">${tops[1].Title}</h4>
                  <p class="text-white/50 tracking-wide mt-1 pr-5 text-xs sm:block hidden">${tops[1].Description}</p>
                </div>
              </div>
              </div>

              <div class=" border-t border-t-white/40 ">
                <a href="Movie.html?Id=${tops[1].Id}"
                  class="w-full text-center block h-full py-2 text-white/50 tracking-wider text-xs ">Explore
                  Movie</a>
              </div>

            </div>
    `;
  top3Move.innerHTML = `
     <div class="bg-[var(--secondary-c)]/20 p-2 rounded-xl hover:scale-102 duration-400">
            <div class="bg-[url('${tops[2].Images}')] bg-cover  rounded-tr-xl rounded-tl-xl bg-top bg-no-repeat ">
              <div class="p-4 pb-0 flex flex-col justify-between w-full h-full bg-black/60">

                <div class="flex justify-between items-start">
                  <h5 class="font-boo text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/50">03</h5>
                  <h6 class="bg-gray-600/40 sm:py-1 px-2 sm:px-3 rounded-lg flex justify-center items-center text-xs text-white">
                    ${tops[2].Rate}<iconify-icon icon="ant-design:star-filled" class="ml-1 text-yellow-500"></iconify-icon></h6>
                </div>
  
                <div class="w-full pt-5 xl:pt-0 pb-2">
                  <p class="text-[var(--primary-b)]/70 tracking-wider text-sm font-bold hidden sm:block mb-3">[${tops[2].Category[0]}] . [${tops[2].Category[1]}] .
                    [${tops[2].Year}]
                  </p>
                  <h4 class="font-boo text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white select-text">${tops[2].Title}</h4>
                  <p class="text-white/50 tracking-wide mt-1 pr-5 text-xs sm:block hidden">${tops[2].Description}</p>
                </div>
              </div>
              </div>

              <div class=" border-t border-t-white/40 ">
                <a href="Movie.html?Id=${tops[2].Id}"
                  class="w-full text-center block h-full py-2 text-white/50 tracking-wider text-xs ">Explore
                  Movie</a>
              </div>

            </div>
    `;


  // ! news section
  var news1 = document.querySelector('[data-news="1"]');
  var news2 = document.querySelector('[data-news="2"]');
  var news3 = document.querySelector('[data-news="3"]');

  var date_now = new Date();
  var lastNews = [0, 0, 0];


  data_news.News.forEach(n => {
    if (lastNews[0] == 0) {
      lastNews[0] = n;
    } else if (lastNews[1] == 0) {
      lastNews[1] = n;
    } else if (lastNews[2] == 0) {
      lastNews[2] = n;
    } else if (new Date(n.PublishedAt) > new Date(lastNews[0].PublishedAt)) {
      lastNews[2] = lastNews[1];
      lastNews[1] = lastNews[0];
      lastNews[0] = n;
    } else if (new Date(n.PublishedAt) > new Date(lastNews[1].PublishedAt)) {
      lastNews[2] = lastNews[1];
      lastNews[1] = n;
    } else if (new Date(n.PublishedAt) > new Date(lastNews[2].PublishedAt)) {
      lastNews[2] = n;
    }

  });


  news1.innerHTML = `
            <div class="bg-[var(--secondary-c)]/20 p-2 rounded-xl hover:scale-102 duration-400">

            <div
              class=" bg-[url('${data.Movies[lastNews[0].MovieId - 1].Images}')] bg-cover  rounded-tr-xl rounded-tl-xl bg-top bg-no-repeat ">

              <div class="p-4 pb-0 flex flex-col justify-between w-full h-full bg-black/60">
                
                <div class="flex justify-between items-start">
                  <h5 class="font-boo text-2xl sm:text-4xl  text-white/50">Movie</h5>
                  <h6
                    class="bg-gray-600/40 sm:py-1 px-2 sm:px-3 rounded-lg flex justify-center items-center text-sm text-white">
                    ${new Date(lastNews[0].PublishedAt).toLocaleDateString("en-US", { weekday: "long" })}</h6>
                </div>

                <div class="w-full pt-10 md:pt-18 lg:pt-20 xl:pt-30 pb-4">
                  <p class="text-[var(--primary-b)]/70 tracking-wider font-bold sm:block hidden mb-3">
                    [${lastNews[0].Tags[0]}] .
                    [${lastNews[0].Tags[1]}]
                  </p>
                  <h4 class="font-boo text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white select-text">
                    ${lastNews[0].MovieTitle}</h4>
                  <p class="text-white/50 tracking-wide mt-3 pr-5 text-sm  max-h-32 overflow-hidden">${lastNews[0].Content}</p>
                </div>

              </div>

            </div>

            <div class=" border-t border-t-white/40 ">
              <a href="Movie.html?Id=${lastNews[0].MovieId}"
                class="w-full text-center block h-full py-2 md:py-4 text-white/50 tracking-wider text-sm ">Explore
                Movie</a>
            </div>

          </div>
  
  
  `
  news2.innerHTML = `
              <div class="bg-[var(--secondary-c)]/20 p-2 rounded-xl hover:scale-102 duration-400">

              <div
                class=" bg-[url('${data.Movies[lastNews[1].MovieId - 1].Images}')] bg-cover  rounded-tr-xl rounded-tl-xl bg-top bg-no-repeat ">

                <div class="p-2 pb-0 flex flex-col justify-between w-full h-full bg-black/60">
                  
                  <div class="flex justify-between items-start">
                    <h5 class="font-boo text-xl sm:text-2xl  text-white/50">Movie</h5>
                    <h6
                      class="bg-gray-600/40 sm:py-1 px-2 sm:px-3 rounded-lg flex justify-center items-center text-xs text-white">
                      ${new Date(lastNews[1].PublishedAt).toLocaleDateString("en-US", { weekday: "long" })}</h6>
                  </div>

                  <div class="w-full  pb-4">
                    <p class="text-[var(--primary-b)]/70 tracking-wider font-bold xl:block hidden mb-3">
                      [${lastNews[1].Tags[0]}] .
                      [${lastNews[1].Tags[1]}]
                    </p>
                    <h4 class="font-boo text-lg sm:text-xl md:text-2xl lg:text-3xl hidden md:block  text-white select-text">
                      ${lastNews[1].MovieTitle}</h4>
                    <p class="text-white/50 tracking-wide mt-3 pr-5 text-xs  max-h-24 overflow-hidden">${lastNews[1].Content}</p>
                  </div>

                </div>

              </div>

              <div class=" border-t border-t-white/40 ">
                <a href="Movie.html?Id=${lastNews[1].MovieId}"
                  class="w-full text-center block h-full py-1 md:py-2 text-white/50 tracking-wider text-xs ">Explore
                  Movie</a>
              </div>

            </div>
    
    
    `
  news3.innerHTML = `
              <div class="bg-[var(--secondary-c)]/20 p-2 rounded-xl hover:scale-102 duration-400">

              <div
                class=" bg-[url('${data.Movies[lastNews[2].MovieId - 1].Images}')] bg-cover  rounded-tr-xl rounded-tl-xl bg-center bg-no-repeat ">

                <div class="p-2 pb-0 flex flex-col justify-between w-full h-full bg-black/60">
                  
                  <div class="flex justify-between items-start">
                    <h5 class="font-boo text-xl sm:text-2xl  text-white/50">Movie</h5>
                    <h6
                      class="bg-gray-600/40 sm:py-1 px-2 sm:px-3 rounded-lg flex justify-center items-center text-xs text-white">
                      ${new Date(lastNews[2].PublishedAt).toLocaleDateString("en-US", { weekday: "long" })}</h6>
                  </div>

                  <div class="w-full  pb-4">
                    <p class="text-[var(--primary-b)]/70 tracking-wider font-bold xl:block hidden mb-3">
                      [${lastNews[2].Tags[0]}] .
                      [${lastNews[2].Tags[1]}]
                    </p>
                    <h4 class="font-boo text-lg sm:text-xl md:text-2xl lg:text-3xl hidden md:block  text-white select-text">
                      ${lastNews[2].MovieTitle}</h4>
                    <p class="text-white/50 tracking-wide mt-3 pr-5 text-xs max-h-24 overflow-hidden">${lastNews[1].Content}</p>
                  </div>

                </div>

              </div>

              <div class=" border-t border-t-white/40 ">
                <a href="Movie.html?Id=${lastNews[2].MovieId}"
                  class="w-full text-center block h-full py-1 md:py-2 text-white/50 tracking-wider text-xs ">Explore
                  Movie</a>
              </div>

            </div>
    
    
    `






  console.log("done get news data and run the C");
  console.log("done get movie data and run the C");
  AOS.refresh(); 
}
getMoviesData_home();


// todo until use the web with react news



