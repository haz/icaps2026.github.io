'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "/img/banner_1.jpg",
        "/img/banner_2.jpg",
		"/img/banner_3.jpg",
		"/img/banner_4.jpg",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById("banner-main").style.backgroundImage = `url('${randomImage}')`;
});
