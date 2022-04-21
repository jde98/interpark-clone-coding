// 공통 슬라이드 함수
function slider(nextBtn, prevBtn, slide, status) {

    let position = 0;
    // let status = slide.querySelector("li").clientWidth;
    let imgSize = slide.clientWidth;
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
            slide.style.left = position + "px";
            console.log(imgSize);
        } else {
            position += -status;
            slide.style.left = position + "px";
        }
    }

    // prev 버튼
    function prevSlideShow() {
        if (position == 0) {
            position = -imgSize;
            slide.style.left = position + "px";
            console.log(imgSize);
        } else {
            position += status;
            slide.style.left = position + "px";
        }
    }
    //btn 호출
    nextBtn.addEventListener("click", nextSlideShow);
    prevBtn.addEventListener("click", prevSlideShow);

}