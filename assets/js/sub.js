
const urlParams = new URL(location.href).searchParams;
const idVal = urlParams.get('id');



console.log(idVal);


fetch(`https://www.omdbapi.com/?i=${idVal}&apikey=679ad12`)
.then(res=>res.json())
.then(json=>{

    strActor = json.Actors;
    strActorsplit = strActor.split(",")

    let actorEl='';
    strActorsplit.forEach(element => {
        actorEl+=`
        <li class="swiper-slide">${element}</li>
        `;
    });

    


    html = ` <div class="play-area">
    <div class="img">
        <img src="${json.Poster}" alt="">
    </div>
    <i class="ico-play"><span class="blind">재생</span></i>
</div>
<div class="align">
    <div class="btn-area">
        <a href="">
            <i class="ico-like"><span class="blind">좋아요</span></i>
        </a>
        <a href="">
            <i class="ico-download"><span class="blind">다운로드</span></i>
        </a>
        <a href="">
            <i class="ico-pick"><span class="blind">담기</span></i>
        </a>
        <a href="">
            <i class="ico-share"><span class="blind">공유</span></i>
        </a>
    </div>
    <div class="score-area">
        <i class="ico-star"><span class="blind">별점</span></i>
        <em>6.1</em><span>/10</span>
    </div>
</div>
<h2 class="movie-tit">${json.Title}</h2>
<p class="info">${json.Year} · Comedy/Family film · 2h 7m</p>
<hr class="line">
<section class="sc-about">
    <span>About</span>
    <p>
        ${json.Plot}
    </p>
</section>
<section class="sc-tab">
    <div class="swiper tabSwiper">
        <ul class="swiper-wrapper">
            <li class="swiper-slide">
                <a href="">Cast & crew</a>
            </li>
            <li class="swiper-slide">
                <a href="">Trailers & clips</a>
            </li>
            <li class="swiper-slide">
                <a href="">Reviews</a>
            </li>
        </ul>
    </div>
    
    <div class="swiper detailSwiper">
        <ul class="swiper-wrapper" >
           ${actorEl}
        </ul>
    </div>
    <div class="txt-wrap">
        <span class="title">Director</span>
        <span class="content">Christian Landon</span>
    </div>
    <div class="txt-wrap">
        <span class="title">Writers</span>
        <span class="content">Christian Landon</span>
        <span>·</span>
        <span class="content">Geoff Manaugh</span>
    </div>
    
</section>

`



    $('#detail').html(html);




})

