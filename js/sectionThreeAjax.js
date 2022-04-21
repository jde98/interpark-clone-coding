$(document).ready(function () {

    var queryArray = ['뭉크씨, 도파민 과잉입니다', '채소 마스터 클래스', '시간을 찾아드립니다.', '유럽 최후의 대국, 우크라이나의 역사', ];

    queryArray.forEach(function (value, index) {

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
            console.log(data);
            $("#book_img_form" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#book_info" + (index + 1) + ' .book_info_title').append(data.documents[0].title);
        });
    });
});