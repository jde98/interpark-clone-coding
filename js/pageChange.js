function mouseoverSlide(slide) {

    let slideList = document.getElementsByClassName(slide);

    if (slide == 'event_slide_list_form') {
        for (let i = 0; i < slideList.length; i++) {

            slideList[i].addEventListener("mouseover", function () {
                let eventId = "evnet_slide_num_form" + String(i + 1);

                for (let j = 0; j < slideList.length; j++) {
                    let delId = "evnet_slide_num_form" + String(j + 1);
                    if (document.getElementById(delId)) {
                        document.getElementById(delId).classList.remove("show_evnet_slide_num_form");
                    }
                    slideList[j].classList.remove("event_slide_list_over");
                }

                if (document.getElementById(eventId)) {
                    document.getElementById(eventId).classList.add("show_evnet_slide_num_form");
                }

                slideList[i].classList.add("event_slide_list_over");
            });
        }
    } else {
        for (let i = 0; i < slideList.length; i++) {
            slideList[i].addEventListener("mouseover", function () {
                let eventId = "field_menu" + String(i + 1);
                const childList = slideList[i].children;
                let childListChild = childList[0].children;

                for (let j = 0; j < slideList.length; j++) {
                    let delId = "field_menu" + String(j + 1);
                    console.log(delId);
                    if (document.getElementById(delId)) {
                        childListChild[0].classList.remove("field_menu_show_i");
                        console.log(childListChild);
                    }
                    slideList[j].classList.remove("field_menu_show");
                }
                if (document.getElementById(eventId)) {
                    childListChild[0].classList.add("field_menu_show_i");
                    console.log(childListChild);
                }
                console.log(eventId);
                slideList[i].classList.add("field_menu_show");
            });
        }
    }
}