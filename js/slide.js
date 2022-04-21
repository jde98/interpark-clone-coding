// 공통 슬라이드 함수
function slider(nextBtn, prevBtn, slide) {

    let position = 0;
    // let status = slide.querySelector("li").clientWidth;
    let imgSize = document.getElementById(slide).clientWidth;
    let status = document.getElementById(slide).children[0].clientWidth;

    imgSize -= status;
    // makeClone();
    // initfunction();
    
    // function makeClone() {
    // let cloneSlide_first = slideImg[0].cloneNode(true);
    // let cloneSlide_last = slide.lastElementChild.cloneNode(true);
    // slide.append(cloneSlide_first);
    // slide.insertBefore(cloneSlide_last, slide.firstElementChild);
    // }
    // function initfunction() {
    // slide.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
    // slide.style.left = -(slideWidth + slideMargin) + 'px';
    // }

    // 버튼 동작 부분
    // next 버튼
    function nextSlideShow() {
        if (position == -imgSize) {
            position = 0;
            document.getElementById(slide).style.left = position + "px";
        } else {
            position += -status;
            document.getElementById(slide).style.left = position + "px";
        }
    }

    // prev 버튼
    function prevSlideShow() {
        if (position == 0) {
            position = -imgSize;
            document.getElementById(slide).style.left = position + "px";
        } else {
            position += status;
            document.getElementById(slide).style.left = position + "px";
        }
    }
    //btn 호출
    document.getElementById(nextBtn).addEventListener("click", nextSlideShow);
    document.getElementById(prevBtn).addEventListener("click", prevSlideShow);

}