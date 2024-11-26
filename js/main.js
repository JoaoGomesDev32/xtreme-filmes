//Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
  });
  // Mostra Video
  let playButton = document.querySelector('.play-movie');
  let video = document.querySelector('.video-container');
  let myvideo = document.querySelector('#myvideo');
  let closebtn = document.querySelector('.close-video');

  playButton.onclick = () => {
    video.classList.add("show-video");
    // Autoplay quando clicar no botão
    myvideo.play();
  };
  closebtn.onclick = () => {
    video.classList.remove("show-video");
    // Pausa ao fechar o Video
    myvideo.pause();
  };
  const addToFavorites = (movieId) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(movieId)) {
        favorites.push(movieId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Adicionado aos Favoritos!');
    }
};
fetch('https://api.themoviedb.org/3/movie/popular?api_key=SUA_API_KEY')
    .then(response => response.json())
    .then(data => console.log(data.results));

