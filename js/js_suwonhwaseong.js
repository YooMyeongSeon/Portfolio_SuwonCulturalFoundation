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
            img_ex.text("수원 화성 : 북수문, 화홍문(北水門, 華虹門) [1/8]");
        } else if (this.realIndex == 1) {
            img_ex.text("수원 화성 : 동북각루, 방화수류정(東北角樓, 訪花隨柳亭) [2/8]");
        } else if (this.realIndex == 2) {
            img_ex.text("수원 화성 : 서북공심돈(西北空心墩) [3/8]");
        } else if (this.realIndex == 3) {
            img_ex.text("수원 화성 : 서장대(西將臺) [4/8]");
        } else if (this.realIndex == 4) {
            img_ex.text("수원 화성 : 동북포루, 각건대(東北舖樓, 角巾臺) [5/8]");
        } else if (this.realIndex == 5) {
            img_ex.text("수원 화성 : 창룡문(蒼龍門) [6/8]");
        } else if (this.realIndex == 6) {
            img_ex.text("수원 화성 : 북포루(北舖樓) [7/8]");
        } else {
            img_ex.text("수원 화성 : 서장대(西將臺) [8/8]");
        }
    }}});
//메인 이미지 설명 스크립트
var main_img_text_ex = document.querySelector('#main_img_text_ex');
var main_search_box = document.querySelector('#main_search_box');
var main_img_text = document.querySelector('#main_img_text');
var text_ex_b = document.querySelector("#text_ex_b");
var plus_bt = document.querySelector('#text_ex_b_i');
var plus_tt = document.querySelector('#text_ex_b_t');
var p = document.createElement("p")
var closetext = document.createTextNode("닫기")
p.appendChild(closetext);
var main_img_text_ex_current = 0;
function main_img_text_ex_v() {
    if (main_img_text_ex_current == 0) {
        main_img_text_ex.style.height = "775px";
        main_img_text.style.height = "1025px";
        main_search_box.style.marginTop = "845px";
        plus_bt.style.transform = `rotate(45deg)`;
        text_ex_b.replaceChild(p, plus_tt);
        main_img_text_ex_current++;
    } else {
        main_img_text_ex.style.height = "0px";
        main_img_text.style.height = "275px";
        main_search_box.style.marginTop = "70px";
        plus_bt.style.transform = `rotate(0deg)`;
        text_ex_b.replaceChild(plus_tt, p);
        main_img_text_ex_current--;
    }
}