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