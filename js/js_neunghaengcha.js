//검색기능 스크립트
var search_box = document.querySelector('#search_box');
var search_current = 0;
function Search_p() {
    if(search_current == 0) {
        search_box.style.transform = `translateY(75px)`;
        search_current++;
    } else {
        search_box.style.transform = `translateY(0px)`;
        search_current--;
    }
}
//메인배너 스크립트
var img_ex = $("#main_img_cover p");
var swiper = new Swiper(".mySwiper", {spaceBetween: 30, centeredSlides: true,
    autoplay: {delay: 2000, disableOnInteraction: false},
    pagination: {el: ".swiper-pagination", clickable: true},
    navigation: {nextEl: "#main_bt_2", prevEl: "#main_bt_1"},
    on: {activeIndexChange: function() {
        if (this.realIndex == 0) {
            img_ex.text("축제 사진자료 01 [1/5]");
        } else if (this.realIndex == 1) {
            img_ex.text("축제 사진자료 02 [2/5]");
        } else if (this.realIndex == 2) {
            img_ex.text("축제 사진자료 03 [3/5]");
        } else if (this.realIndex == 3) {
            img_ex.text("축제 사진자료 04 [4/5]");
        } else {
            img_ex.text("축제 사진자료 05 [5/5]");
        }
    }}});