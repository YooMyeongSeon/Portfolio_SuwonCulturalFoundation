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
var bt_pv = $("#main_bt_1");
var bt_nt = $("#main_bt_2");
var swiper = new Swiper(".mySwiper", {navigation: {nextEl: "#main_bt_2", prevEl: "#main_bt_1"},
    on: {activeIndexChange: function() {
        if (this.realIndex == 0) {
            bt_pv.css("opacity","0.25");
        } else if (this.realIndex == 1) {
            bt_pv.css("opacity","1");
            bt_nt.css("opacity","1");
        } else {
            bt_nt.css("opacity","0.25");
        }
    }}
});
//브랜드배너 스크립트
var brand_slide_01 = document.querySelector("#brand_back_01");
var brand_slide_02 = document.querySelector("#brand_back_02");
var brand_slide_03 = document.querySelector("#brand_back_03");
var brand_slide_Text_01 = document.querySelector("#brand_left_box_01");
var brand_slide_Text_02 = document.querySelector("#brand_left_box_02");
var brand_slide_Text_03 = document.querySelector("#brand_left_box_03");
var brand_lbt = document.querySelector("#brand_lbt");
var brand_rbt = document.querySelector("#brand_rbt");
var brand_current = 0;
brand_lbt.onclick = function() {
    if (brand_current == 1) {
        brand_slide_01.style.transform = `translateX(0px)`;
        brand_slide_02.style.transform = `translateX(0px)`;
        brand_slide_03.style.transform = `translateX(0px)`;
        brand_slide_Text_01.style.transform = `translateX(0px)`;
        brand_slide_Text_02.style.transform = `translateX(0px)`;
        brand_slide_Text_03.style.transform = `translateX(0px)`;
        brand_current--;
        brand_lbt.style.opacity = "0.5";
    } else if (brand_current == 2) {
        brand_slide_01.style.transform = `translateX(-1920px)`;
        brand_slide_02.style.transform = `translateX(-1920px)`;
        brand_slide_03.style.transform = `translateX(-1920px)`;
        brand_slide_Text_01.style.transform = `translateX(-1100px)`;
        brand_slide_Text_02.style.transform = `translateX(-1100px)`;
        brand_slide_Text_03.style.transform = `translateX(-1100px)`;
        brand_current--;
        brand_rbt.style.opacity = "1";
    }
}
brand_rbt.onclick = function() {
    if (brand_current == 0) {
        brand_slide_01.style.transform = `translateX(-1920px)`;
        brand_slide_02.style.transform = `translateX(-1920px)`;
        brand_slide_03.style.transform = `translateX(-1920px)`;
        brand_slide_Text_01.style.transform = `translateX(-1100px)`;
        brand_slide_Text_02.style.transform = `translateX(-1100px)`;
        brand_slide_Text_03.style.transform = `translateX(-1100px)`;
        brand_lbt.style.opacity = "1";
        brand_current++;
    } else if (brand_current == 1) {
        brand_slide_01.style.transform = `translateX(-3840px)`;
        brand_slide_02.style.transform = `translateX(-3840px)`;
        brand_slide_03.style.transform = `translateX(-3840px)`;
        brand_slide_Text_01.style.transform = `translateX(-2200px)`;
        brand_slide_Text_02.style.transform = `translateX(-2200px)`;
        brand_slide_Text_03.style.transform = `translateX(-2200px)`;
        brand_current++;
        brand_rbt.style.opacity = "0.5";
    }
}
//공고 스크립트
var etc_acbox_01 = document.querySelector("#etc_acbox_01");
var etc_acbox_02 = document.querySelector("#etc_acbox_02");
var etc_ac_01 = document.querySelector("#etc_ac_01");
var etc_ac_02 = document.querySelector("#etc_ac_02");
var etc_current = 0;
var etc_ac_current = 0;
etc_ac_01.onclick = function() {
    if (etc_current == 1) {
        etc_acbox_01.style.transform = `translateX(0px)`;
        etc_acbox_02.style.transform = `translateX(0px)`;
        document.querySelector("#etc_ac_01 > p").style.color="#3F69B2";
        document.querySelector("#etc_ac_02 > p").style.color="#D1D3D4";
        etc_current--;
    }
}
etc_ac_02.onclick = function() {
    if (etc_current == 0) {
        etc_acbox_01.style.transform = `translateX(-360px)`;
        etc_acbox_02.style.transform = `translateX(-360px)`;
        document.querySelector("#etc_ac_01 > p").style.color="#D1D3D4";
        document.querySelector("#etc_ac_02 > p").style.color="#3F69B2";
        etc_current++;
    }
}
//공지사항 스크립트
$(document).ready(function() {
    if (!$.cookie("todayCookie")) {
        $("#announcement").css("display","block");
    };
});
function closeann() {
    $("#announcement").css("display","none");
}
function closeann_today() {
    popToday();
    $("#announcement").css("display","none");
}
function popToday() {
    $.cookie("todayCookie", "Y", {expires: 1, path: '/'});
}