$(function(){

    function movieList(keyword,frame){
        fetch(`https://www.omdbapi.com/?apikey=679ad12&s=${keyword}`)
        .then(res=>res.json())
        .then(json=>{
            allData = json.Search;
            let html = ''
            allData.forEach(element => {
                html +=`<li class="swiper-slide">
                <div class="img">
                    <img src="${element.Poster}" alt="${element.Title}">
                    <a href="./sub.html?id=${element.imdbID}">
                        <i class="ico-detail"><span class="blind">자세히보기</span></i>
                    </a>
                </div>
                <em>${element.Title}</em>
                <p>${element.Year}</p>
            </li>`
            });

            $(frame).html(html)
        })
    }


    movieList('Harry%20Potter','#list1')
    movieList('avengers','#list2')
    movieList('x%20men','#list3')











    var categorySwiper = new Swiper(".categorySwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });

    var visualSwiper = new Swiper(".visualSwiper", {
        initialSlide:1,//slide 인덱스 1번 부터 노출
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween:15,
    });

    var trendSwiper = new Swiper(".trendSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });

    var rankSwiper = new Swiper(".rankSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });

    var pickSwiper = new Swiper(".pickSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });




    var tabSwiper = new Swiper(".tabSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });
    var detailSwiper = new Swiper(".detailSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });


    var photoSwiper = new Swiper(".photoSwiper", {
        slidesPerView:'auto',
        spaceBetween:10,
    });

    var searchSwiper = new Swiper(".searchSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });

})