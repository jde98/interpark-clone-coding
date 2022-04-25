// 공통 슬라이드 함수
function slider(nextBtn, prevBtn, slide) {

    let position = 0;
    let imgSize, status;

    if(slide == 'price_reduction_slide'){
        imgSize = document.getElementById("special_discount_slide").clientWidth;
        status = document.getElementById("special_discount_slide").children[0].clientWidth;
    } else if(slide == 'books_slide'){
        position = -350;
        status = document.getElementById(slide).firstElementChild.clientWidth + 155;
        imgSize = document.getElementById(slide).clientWidth;
    
        let clonedFirst = document.getElementById(slide).firstElementChild.cloneNode(true);
        let clonedLast = document.getElementById(slide).lastElementChild.cloneNode(true);

        document.getElementById(slide).appendChild(clonedFirst);
        document.getElementById(slide).insertBefore(clonedLast, document.getElementById(slide).firstChild);
    } else {
        imgSize = document.getElementById(slide).clientWidth;
        status = document.getElementById(slide).firstElementChild.clientWidth;
    }


    imgSize -= status;

    // 버튼 동작 부분
    // next 버튼
    function nextSlideShow() {
        if (position == -imgSize) {
            position = 0;
            document.getElementById(slide).style.left = position + "px";
        } else if (position == -1010 || slide == 'books_slide') {
            position += (-status+155);
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