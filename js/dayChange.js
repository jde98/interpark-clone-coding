function dayChange() {
    let today = document.getElementById("day").firstElementChild;
    let week = document.getElementById("day").lastElementChild;

    if(today.classList.contains('day_click')) {   
        today.classList.add("day_click");
        week.classList.remove("day_click");
    } else {
        week.classList.add("day_click");
        today.classList.remove("day_click");
    }
}