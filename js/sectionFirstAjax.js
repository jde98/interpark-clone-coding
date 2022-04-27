$(document).ready(function () {

    var issueArray = ['무엇이 옳은가', '작별인사', '나의 투자는 새벽 4시에 시작된다', '지구 닦는 황대리'];

    issueArray.forEach(function (value, index) {

        //console.log(index);

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {
                query: value,
            },
            headers: {
                Authorization: "KakaoAK a4610a3a643e2b59cc5306bc4fb5bd37"
            },
        }).done(function (data) {
            var price = String(data.documents[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            // $("#literature_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            // $("#literature_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            // $("#literature_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

});