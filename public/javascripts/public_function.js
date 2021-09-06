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


/** 에러 코드 정의
 *  숫자
 *  N-1 : 연산 가능한 범위를 넘어섬
 *  N-2 : 소수점의 개수가 적절하지 못함 EX) 1.1.1
 *  N-3 : 숫자가 아닙니다.
 *  연산자
 *  O-1 : 연속될 수 없는 연산자가 연속되어 나타났습니다.
 *  O-2 : 연산자의 인자 형태가 적절하지 않습니다.
 *  O-3 : 연산자의 형태가 적절하지 않습니다.
 *  함수
 *  F-1 : 인식 할 수 없는 함수입니다.
 *  F-2 : 함수의 인자 형태가 적절하지 않습니다.
 *  F-3 : 함수의 인자 개수가 적절하지 않습니다.
 *  F-4 : 괄호의 개수가 맞지 않습니다.
 *  F-5 : 괄호의 형태가 맞지 않습니다.
 *  F-6 : 괄호안에 인자가 없습니다.
 *  함수 에러 코드 :
 *  sin, cos, tan, asin, acos, atan, root, round, if
 *  그밖에
 *  E-1 : 네트워크 연결에 문제가 있습니다.
 *  E-2 : 적합하지 못한 요청입니다.
 */

function requestCalculation(data,callback) {
    let errorCode = new Map( [
        ["N-1", "연산 가능한 범위를 넘어섰습니다."],
        ["N-2", "소수점의 개수가 적절하지 못합니다."],
        ["N-3", "숫자가 아닙니다."],
        ["O-1", "글자부터 연속될 수 없는 연산자가 연속되어 나타났습니다."],
        ["O-2", "글자에 있는 연산자의 인자 형태가 적절하지 않습니다."],
        ["O-3", "글자에 있는 연산자의 형태가 적절하지 않습니다."],
        ["F-1", "글자는 인식 할 수 없는 함수입니다."],
        ["F-2", "위치에 있는 함수의 인자 형태가 적절하지 않습니다."],
        ["F-3", "위치에 있는 함수의 인자 개수가 적절하지 않습니다."],
        ["F-4", "위치에 있는 함수의 괄호의 개수가 맞지 않습니다."],
        ["F-5", "위치에 있는 괄호의 형태가 맞지 않습니다."],
        ["F-6", "위치에 있는 함수의 괄호안에 인자가 없습니다."],
        ["E-1", "네트워크 연결에 문제가 있습니다."],
        ["E-2", "적합하지 못한 요청입니다."]
    ])

    ajax_function('POST','/calculation/module',data,function (result){
        let calcResult = JSON.parse(result);
        if(calcResult.isError){
            if(!calcResult.error_index || isNaN(calcResult.error_index)) {
                return callback(errorCode.get(calcResult.errorCode).toString());
            }
            else{
                return callback(Number(calcResult.error_index+1)+"번째 "+errorCode.get(calcResult.errorCode).toString());
            }
        }
        else {
            return callback(calcResult.value.toString())
        }
    })
}

function requestInsertResult(data,callback) {
    ajax_function('POST','/calculation',data,function (result){
        return callback(result)
    })
}

function requestGetCalculationLog(index,callback) {
    setCookie("index",index);
    ajax_function('GET','/calculation',null,function (result){
        return callback(JSON.parse(result))
    })
}

function requsetUpdateCalculationLog(data,callback) {
    ajax_function('PATCH','/calculation',data,function (result){
        return callback(result)
    })
}

function getCookie(cookie_name) {
    var x, y;
    var val = document.cookie.split(';');

    for (var i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf('='));
        y = val[i].substr(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
        if (x == cookie_name) {
            return unescape(y); // unescape로 디코딩 후 값 리턴
        }
    }
}

function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정

    var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}