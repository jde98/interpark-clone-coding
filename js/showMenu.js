function headerNavMenu(ele) {
    let headerNavAllSub = document.getElementById(ele);

    if(headerNavAllSub.style.display == "none") {
        headerNavAllSub.style.display = "block";
    } else {
        headerNavAllSub.style.display = "none";
    }
}