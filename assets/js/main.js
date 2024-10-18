let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function () {
    menuOpen.classList.toggle('bx-x');
    menuWrapper.classList.toggle('active')
})


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});

var swiper = new Swiper(".mySwiperTesti", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

    // Mostrar o botão quando o usuário rolar 20px para baixo
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTop").style.display = "block";
        } else {
            document.getElementById("backToTop").style.display = "none";
        }
    }

    // Voltar ao topo da página ao clicar
    function backToTop() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
    }