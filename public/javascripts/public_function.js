'use strict'

function ajax_function(method_type,url,send_data,callback) {
    let xhr = new XMLHttpRequest();
    let data = send_data ? send_data:{};

    xhr.onreadystatechange = function () {
        if(xhr.readyState === xhr.DONE) {

        }
        else {

        }
    }

    xhr.open(method_type,url);
    xhr.send(data);
}