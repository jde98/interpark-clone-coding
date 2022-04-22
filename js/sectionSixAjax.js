$(document).ready(function () {

    var bookSlideQueryArray = ['변화와 생존', '우리 모두', '초등 수학, 문해력이 답이다', '손석희의 앵커브리핑. 1', '143층 나무 집', '따라 하면 무조건 돈 버는 실전 부동산 경매: 수익실현편', '거시기 머시기', '스테이트 오브 테러(State of Terror)'];

    bookSlideQueryArray.forEach(function (value, index) {

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

            $(".book_slide" + (index + 1) + " .books_img").append('<img src="' + data.documents[0].thumbnail + '"/>');
            $(".book_slide" + (index + 1) + " .books_info").append('<p>' + data.documents[0].title + '</p>');
            $(".book_slide" + (index + 1) + " .books_info").append('<span>' + price + '</span>');
        });
    });

    var bookFirstDiscountArray = ['자석으로 동물원(41조각)', '피규어 동물백과', '한글 매칭퍼즐', '썼다지웠다: 한글(64개)'];

    var bookTwoDiscountArray = [ '메모리 게임', '썼다지웠다: 미로찾기(64개)', '도미노 게임', '썼다지웠다: 창의미술(64개)'];

    bookFirstDiscountArray.forEach(function (value, index) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {
                query: value,
            },
            async: false, //데이터를 ajax로 여러번 요청 하다보니 데이터 순서가 꼬이는 결과를 발생하여 비동기 > 동기 처리로 변경하여 순서대로 데이터처리 하게 변경
            headers: {
                Authorization: "KakaoAK a4610a3a643e2b59cc5306bc4fb5bd37"
            },
        }).done(function (data) {

            var price = String(data.documents[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            var discount = String(data.documents[0].sale_price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            var persent = 100 - Math.round(data.documents[0].sale_price / data.documents[0].price * 100);

            //$(".book_discount" + (index + 1) + " a .discount_book_img").append('<img src="' + data.documents[0].thumbnail + '"/>');
            //$(".book_discount" + (index + 1) + " a .book_title").append('<p>' + + '</p>');
            //$(".book_discount" + (index + 1) + " a .book_current_price").append('<span>' + price + "원" + '</span>');

            //$(".book_discount_list").append();

            //const li = document.createElement("li");
            //li.className = "book_discount";

            var item = $("<li>", { class: "book_discount_1" });
            var aTag = $("<a>");

            //책 이미지 
            var discountImgDiv = $("<div>", { class: "discount_book_img" });
            var discountImg = $("<img>", { src: data.documents[0].thumbnail });

            discountImgDiv.append(discountImg);
            aTag.append(discountImgDiv);
            //이미지 할인가 표시 
            var rebateDiv = $("<div>", { class: "rebate" });

            var discountTextDiv = $("<div>", { class: "discount-text", text: "특가할인" });
            var discountPersent = $("<div>", { class: "discount-persent", text: persent + "%" });

            rebateDiv.append(discountTextDiv);
            rebateDiv.append(discountPersent);

            aTag.append(rebateDiv);

            // 책 타이틀
            var bookTitleDiv = $("<div>", { class: "book_title" });
            var titleTag = $("<p>", { text: data.documents[0].title });

            bookTitleDiv.append(titleTag);
            aTag.append(bookTitleDiv);

            //정가 할인가
            var price = $("<div>", { class: "book_price", text: '정가 ' + price + '원' });
            var discountPrice = $("<div>", { class: "book_current_price", text: discount + '원' });

            aTag.append(price);
            aTag.append(discountPrice);

            item.append(aTag);

            $("#book_discount_list_1").append(item);

        });
    });

    bookTwoDiscountArray.forEach(function (value, index) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {
                query: value,
            },
            async: false, //데이터를 ajax로 여러번 요청 하다보니 데이터 순서가 꼬이는 결과를 발생하여 비동기 > 동기 처리로 변경하여 순서대로 데이터처리 하게 변경
            headers: {
                Authorization: "KakaoAK a4610a3a643e2b59cc5306bc4fb5bd37"
            },
        }).done(function (data) {

            var price = String(data.documents[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            var discount = String(data.documents[0].sale_price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            var persent = 100 - Math.round(data.documents[0].sale_price / data.documents[0].price * 100);

            //$(".book_discount" + (index + 1) + " a .discount_book_img").append('<img src="' + data.documents[0].thumbnail + '"/>');
            //$(".book_discount" + (index + 1) + " a .book_title").append('<p>' + + '</p>');
            //$(".book_discount" + (index + 1) + " a .book_current_price").append('<span>' + price + "원" + '</span>');

            //$(".book_discount_list").append();

            //const li = document.createElement("li");
            //li.className = "book_discount";

            var item = $("<li>", { class: "book_discount_2" });
            var aTag = $("<a>");

            //책 이미지 
            var discountImgDiv = $("<div>", { class: "discount_book_img" });
            var discountImg = $("<img>", { src: data.documents[0].thumbnail });

            discountImgDiv.append(discountImg);
            aTag.append(discountImgDiv);
            //이미지 할인가 표시 
            var rebateDiv = $("<div>", { class: "rebate" });

            var discountTextDiv = $("<div>", { class: "discount-text", text: "특가할인" });
            var discountPersent = $("<div>", { class: "discount-persent", text: persent + "%" });

            rebateDiv.append(discountTextDiv);
            rebateDiv.append(discountPersent);

            aTag.append(rebateDiv);

            // 책 타이틀
            var bookTitleDiv = $("<div>", { class: "book_title" });
            var titleTag = $("<p>", { text: data.documents[0].title });

            bookTitleDiv.append(titleTag);
            aTag.append(bookTitleDiv);

            //정가 할인가
            var price = $("<div>", { class: "book_price", text: '정가 ' + price + '원' });
            var discountPrice = $("<div>", { class: "book_current_price", text: discount + '원' });

            aTag.append(price);
            aTag.append(discountPrice);

            item.append(aTag);

            $("#book_discount_list_2").append(item);

        });
    });

    var bookfirstPriceReduyctionArray = ['설민석의 세계사 대모험 정가 인하 세트(1-10권)', '설민석의 한국사 대모험 정가 인하 세트', 'who? 인물 사이언스 정가 인하 세트(1~10권)', 'Go Go 카카오프렌즈 정가 인하 세트'];
    var bookTwoPriceReduyctionArray = ['메모리 게임', '썼다지웠다: 미로찾기(64개)', '도미노 게임', '썼다지웠다: 창의미술(64개)']

    bookfirstPriceReduyctionArray.forEach(function (value, index) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {
                query: value,
            },
            async: false, //데이터를 ajax로 여러번 요청 하다보니 데이터 순서가 꼬이는 결과를 발생하여 비동기 > 동기 처리로 변경하여 순서대로 데이터처리 하게 변경
            headers: {
                Authorization: "KakaoAK a4610a3a643e2b59cc5306bc4fb5bd37"
            },
        }).done(function (data) {

            var price = String(data.documents[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            var discount = String(data.documents[0].sale_price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            var persent = 100 - Math.round(data.documents[0].sale_price / data.documents[0].price * 100);

            var item = $("<li>", { class: "book_discount_1" });
            var aTag = $("<a>");

            //책 이미지 
            var discountImgDiv = $("<div>", { class: "discount_book_img" });
            var discountImg = $("<img>", { src: data.documents[0].thumbnail });

            discountImgDiv.append(discountImg);
            aTag.append(discountImgDiv);
            //이미지 할인가 표시 
            var rebateDiv = $("<div>", { class: "rebate" });

            var discountTextDiv = $("<div>", { class: "discount-text", text: "정가인하" });
            var discountPersent = $("<div>", { class: "discount-persent", text: persent + "%" });

            rebateDiv.append(discountTextDiv);
            rebateDiv.append(discountPersent);

            aTag.append(rebateDiv);

            // 책 타이틀
            var bookTitleDiv = $("<div>", { class: "book_title" });
            var titleTag = $("<p>", { text: data.documents[0].title });

            bookTitleDiv.append(titleTag);
            aTag.append(bookTitleDiv);

            //정가 할인가
            var price = $("<div>", { class: "book_price", text: '정가 ' + price + '원' });
            var discountPrice = $("<div>", { class: "book_current_price", text: discount + '원' });

            aTag.append(price);
            aTag.append(discountPrice);

            item.append(aTag);

            $("#book_price_reduction_list_1").append(item);

        });
    });

    bookTwoPriceReduyctionArray.forEach(function (value, index) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {
                query: value,
            },
            async: false, //데이터를 ajax로 여러번 요청 하다보니 데이터 순서가 꼬이는 결과를 발생하여 비동기 > 동기 처리로 변경하여 순서대로 데이터처리 하게 변경
            headers: {
                Authorization: "KakaoAK a4610a3a643e2b59cc5306bc4fb5bd37"
            },
        }).done(function (data) {

            var price = String(data.documents[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            var discount = String(data.documents[0].sale_price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            var persent = 100 - Math.round(data.documents[0].sale_price / data.documents[0].price * 100);

            var item = $("<li>", { class: "book_discount_2" });
            var aTag = $("<a>");

            //책 이미지 
            var discountImgDiv = $("<div>", { class: "discount_book_img" });
            var discountImg = $("<img>", { src: data.documents[0].thumbnail });

            discountImgDiv.append(discountImg);
            aTag.append(discountImgDiv);
            //이미지 할인가 표시 
            var rebateDiv = $("<div>", { class: "rebate" });

            var discountTextDiv = $("<div>", { class: "discount-text", text: "정가인하" });
            var discountPersent = $("<div>", { class: "discount-persent", text: persent + "%" });

            rebateDiv.append(discountTextDiv);
            rebateDiv.append(discountPersent);

            aTag.append(rebateDiv);

            // 책 타이틀
            var bookTitleDiv = $("<div>", { class: "book_title" });
            var titleTag = $("<p>", { text: data.documents[0].title });

            bookTitleDiv.append(titleTag);
            aTag.append(bookTitleDiv);

            //정가 할인가
            var price = $("<div>", { class: "book_price", text: '정가 ' + price + '원' });
            var discountPrice = $("<div>", { class: "book_current_price", text: discount + '원' });

            aTag.append(price);
            aTag.append(discountPrice);

            item.append(aTag);

            $("#book_price_reduction_list_2").append(item);

        });
    });
});