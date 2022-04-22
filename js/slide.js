// 공통 슬라이드 함수
function slider(nextBtn, prevBtn, slide) {

    let position = 0;
    let imgSize = document.getElementById(slide).clientWidth;
    let status = document.getElementById(slide).children[0].clientWidth;
    imgSize -= status;

    // 버튼 동작 부분
    // next 버튼
    function nextSlideShow() {
        if (position == -imgSize) {
            position = 0;
            document.getElementById(slide).style.left = position + "px";

            console.log("click");
        } else {
            position += -status;
            document.getElementById(slide).style.left = position + "px";
            console.log(status);

            console.log("click");
        }
    }

    // prev 버튼
    function prevSlideShow() {
        if (position == 0) {
            position = -imgSize;
            document.getElementById(slide).style.left = position + "px";

            console.log("click");
        } else {
            position += status;
            document.getElementById(slide).style.left = position + "px";
            
            console.log("click");
        }
    }
    //btn 호출
    document.getElementById(nextBtn).addEventListener("click", nextSlideShow);
    document.getElementById(prevBtn).addEventListener("click", prevSlideShow);

}