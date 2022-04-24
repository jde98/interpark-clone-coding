$(document).ready(function () {
    /* 특가할인 탭 클릭 이벤트 */
    $("#discountTab").click(function () {
        $(this).addClass("book_discount_active");
        $("#priceReductionTab").removeClass("book_discount_active");
        $(".special_discount").show();
        $(".price_reduction").hide();
    });

    /* 정가인하 탭 클릭 이벤트 */
    $("#priceReductionTab").click(function () {
        $(this).addClass("book_discount_active");
        $("#discountTab").removeClass("book_discount_active");
        $(".price_reduction").show();
        $(".special_discount").hide();
    });
});