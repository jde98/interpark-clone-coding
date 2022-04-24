function count(type) {
    // 결과를 표시할 element
    let resultElement = document.getElementById('count_result');
    console.log(resultElement);

    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    console.log(number);

    // 더하기/빼기
    if (type === 'plus') {
        if (number == 4) {
            number = 1;
        } else {
            number = parseInt(number) + 1;
        }
    } else if (type === 'minus') {
        if (number == 1) {
            number = 4;
        } else {
            number = parseInt(number) - 1;
        }
    }

    // 결과 출력
    resultElement.innerText = number;
}