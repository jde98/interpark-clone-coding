function mainBannerSlide() {

    const nextBtn = document.getElementById("next_banner_slide");
    const prevBtn = document.getElementById("prev_banner_slide");
    let bannerSlide = document.getElementById("banner_slide");
    let position = 0;
    let status = bannerSlide.querySelector("li").clientWidth;
    let imgSize = bannerSlide.clientWidth;
    imgSize -= status;

    function nextBannerSlideShow() {

        if (position == -imgSize) {
            position = 0;
            bannerSlide.style.left = position + "px";
            console.log(imgSize);
        } else {
            position += -status;
            bannerSlide.style.left = position + "px";
        }
    }

    function prevBannerSlideShow() {

        if (position == 0) {
            position = -imgSize;
            bannerSlide.style.left = position + "px";
            console.log(imgSize);
        } else {
            position += status;
            bannerSlide.style.left = position + "px";
        }
    }

    nextBtn.addEventListener("click", nextBannerSlideShow);
    prevBtn.addEventListener("click", prevBannerSlideShow);

}


