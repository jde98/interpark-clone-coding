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

            $("#literature_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#literature_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#literature_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

    var queryArray = ['카스트', '워터', '내가 틀릴 수도 있습니다',
        '한없이 가까운 세계와의 포옹', '지구 닦는 황 대리', '어쩌다 마주친 철학',
        '더 밴드', '우리는 피를 나눈 타인입니다', '다정한 개인주의자',
        '컬러의 시간', '진실의 조건', '어쩌다 클래식'];

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

            $("#humanities_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#humanities_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#humanities_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

    var queryArray = ['나의 투자는 새벽 4시에 시작된다', '고민의 답', '나답게 일한다는 것',
        '일 잘하는 사람의 시간은 다르게 흘러간다', '무조건 돈 버는 부동산 절세 비법', '워런 버핏의 위대한 부자 수업',
        '그때그때 가볍게 산다', '집 한 채만 있어도 꼭 알아야 하는 상속증여 절세 45', '사이에서',
        '머발욕마', '한경스포츠 명품스윙 에이미 조 이지 골프', '바이크 투어 길라잡이'];

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

            $("#economy_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#economy_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#economy_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

    var queryArray = ['흔한남매 10', '이상한 과자 가게 전천당 14', '나도 세금 내는 아이가 될래요!',
        '내일은 실험왕 시즌 2 3: 암호 화폐와 블록체인', '나는 나를 지켜요', '사랑을 뿌려요, 조금씩, 더 많이', '포닥포닥 짝짝짝',
        '집중력놀이 스파이 미로 찾기: 미션을 수행하라!', '신통한 책방 필로뮈토 2: 두 번째 고민 내 몸', '법 만드는 아이들',
        '이상한 과자 가게 전천당 공식 가이드북', '내 아이를 위한 30일 인문학 글쓰기의 기적'];

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

            $("#child_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#child_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#child_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

    var queryArray = ['2022 선재국어 실전 봉투 모의고사 2', '2023 해커스변호사 민법 맥 암기장', '2022 경찰학 기출 1000',
        '무작정 따라하기 윈도우 10+엑셀&파워포인트&워드+한글', '나는 영어가 재미있다', '유하다요의 10시간 일본어 단어',
        '유형 해결의 법칙 초등 수학 4-2(2022)', '문제 해결의 길잡이 심화 초등 수학 4학년', '특목고 대비 일등전략 중학 국어 문학 3(2022)',
        '상상내공 EBS 수능특강 평가문제집 3000제 문학(하)(2023)', '최강의 실험경제반 아이들', 'EBS 강사가 추천하는 약대 바이오 인기학과 진로코칭'];

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

            $("#learning_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#learning_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#learning_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

    var queryArray = ['All the Light We Cannot See', 'Love You By Heart (with StoryPlus QR)', 'The Story Orchestra : The Magic Flute: ',
        'Ventures Level 1 ', 'Garfield 가필드 영어만화 세트', '노부영 Mel Fell',
        'Wonderful WORLD PRIME 5 SB with App QR', 'Numberblocks Annual 2022', 'The Little Book of Joy',
        '(최신개정판) Grammaire progressive du francais - Niveau debutant - 3 edition - Livre + CD', 'Bricks Reading 120 1: Non-Fiction', '[부케북] Happy Day (A Bouquet in a Book)'];

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

            $("#foreign_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#foreign_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#foreign_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });

    var queryArray = ['최강창민 - Devil [2nd Mini Album][Red Ver.]', '진진&라키(ASTRO) - Restore [1st Mini Album][STAYCATION+VACATION ver.][패키지]', '빅톤(VICTON) - Chronograph [3rd Single Album][Chronos ver. + Graphein ver. SET]',
        '규현 - 연애소설(Love Story (4 Season Project 季))[4th Mini Album][Letter Ver. or Story Ver. 2종 중 1종 랜덤발송]', '드리핀(DRIPPIN) - Villain[3rd Mini Album][A ver. + B ver. SET]', '최예나 - ˣ‿ˣ (SMiLEY) [SMILE Ver.  or HERO Ver 2종 중 1종 랜덤발송]  ',
        '펜타곤(PENTAGON) - IN:VITE U[12th Mini Album][Nouveau Ver.  + Flare Ver. SET]', '온리원오브(OnlyOneOf) - Instinct Part. 2 [6종 중 1종 랜덤발송]', '루미너스(LUMINOUS) - Self n Ego [2nd Mini Album]',
        '아라시(ARASHI) - This is 嵐 LIVE 2020.12.31[통상반][DVD]', '아담스 패밀리 더블팩 [한정수량](2Disc) - DVD', '007 노타임투다이 : 콜렉터스에디션[4KUHD+BD+블루레이 보너스 디스크][스틸북 한정판](3DISC) -블루레이'];

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

            $("#cd_slide #book" + (index + 1)).append('<img src="' + data.documents[0].thumbnail + '"/>');
            $("#cd_slide #book" + (index + 1)).append('<p>' + data.documents[0].title + '</p>');
            $("#cd_slide #book" + (index + 1)).append('<span>' + price + '</span>');
        });
    });
});