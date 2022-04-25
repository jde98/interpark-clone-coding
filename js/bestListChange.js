function bestListHideEvent(eleId) {

    const bestList = document.getElementsByClassName("best_list");

    for (let i = 0; i < bestList.length; i++) {
        bestList[i].className = 'best_list';
    }
    document.getElementById("bestList" + eleId).className += ' hide_list';

    if(eleId == 'Today'){
        document.getElementById("todayTab").classList.add("day_click");
        document.getElementById("weekTab").classList.remove("day_click");
        
        document.getElementById("dayBorder").style.left = "";
        document.getElementById("dayBorder").style.right = 0;
    } else {
        document.getElementById("todayTab").classList.remove("day_click");
        document.getElementById("weekTab").classList.add("day_click");

        document.getElementById("dayBorder").style.right = "";
        document.getElementById("dayBorder").style.left = 0;
    }


}
