$(document).ready(function () {

    var queryArray = ['스테이트 오브 테러', '사과는 떨어지지 않는다', '헬프 미 시스터',
        '용서받지 못한 밤', '오래되고 멋진 클래식 레코드', '우리 모두',
        '제주는 잘 있습니다', '끝없이 투명해지는 언어', '파친코. 1',
        '식탁 위의 고백들', '먹는 것과 싸는 것', '인소의 법칙. 4(한정판)(만화)'];

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
            var price = String(data.documents[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            $(".book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $(".book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $(".book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });
});