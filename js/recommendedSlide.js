// 자동슬라이드

function recommendedSliderTimer(ele) {
    var index = 1;


    setInterval(() => {
        if (index == 4) {
            index = 0;
        } else {
            document.getElementById(ele).setAttribute("class", "on" + (index + 1));
            index++;
        }

    }, 3000);
}
