'use strict'

function ajax_function(method_type,url,send_data,callback) {
    let xhr = new XMLHttpRequest();
    let data = send_data ? send_data:{};

    xhr.onreadystatechange = function () {
        if(xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }

    let sender = {"Data":data};
    xhr.open(method_type,url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(sender));
}

// *  숫자
// *  N-1 : 연산 가능한 범위를 넘어섬
// *  N-2 : 소수점의 개수가 적절하지 못함 EX) 1.1.1
// *  N-3 : 숫자가 아닙니다.
// *  연산자
// *  O-1 : 연속될 수 없는 연산자가 연속되어 나타났습니다.
// *  함수
// *  F-1 : 인식 할 수 없는 함수입니다.
// *  F-2 : 함수의 인자 형태가 적절하지 않습니다.
// *  F-3 : 함수의 인자 개수가 적절하지 않습니다.
// *  F-4 : 괄호의 개수가 맞지 않습니다.
// *  F-5 : 괄호의 형태가 맞지 않습니다.
// *  함수 에러 코드 :
//     *  sin, cos, tan, asin, acos, atan, root, round, if
//     *  그밖에
// *  E-1 : 네트워크 연결에 문제가 있습니다.
// *  E-2 : 적합하지 못한 요청입니다.

function requestCalculation(data,callback) {
    let errorCode = new Map( [
        ["N-1", ""],
        ["N-2", ""],
        ["N-3", ""],
        ["O-1", ""],
        ["F-1", ""],
        ["F-2", ""],
        ["F-3", ""],
        ["F-4", ""],
        ["F-5", ""],
        ["E-1", ""],
        ["E-2", ""]
    ])

    ajax_function('POST','/calculation/module',data,function (result){
        return callback(result)
    })
}

function requestInsertResult(data,callback) {
    ajax_function('POST','/calculation',data,function (result){
        return callback(result)
    })
}