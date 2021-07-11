window.addEventListener('DOMContentLoaded', function()
{
    initLogList ()

});

function initLogList () {
    let mainTable = document.getElementsByClassName("log_view_table")[0];
    requestGetCalculationLog(function (result) {
        let parsed_result = JSON.parse(result);
        let temp = document.createDocumentFragment();
        for(let i=0;i<parsed_result.length;i++) {
            let tr = document.createElement("tr");
            tr.id = parsed_result[i]._id
            tr.innerHTML = "<td>" +"<input class='log_text_box' readOnly value='"+parsed_result[i].name +"'>"+
                "</td>" +
                "<td>" +"<input class='log_text_box' readOnly value='"+parsed_result[i].expression+"'>"+
                "</td>" +
                "<td>" +"<input class='log_text_box' readOnly value='"+parsed_result[i].result+"'>"+
                "</td>" +
                "<td><input class='calc_button modify_button' type='button' value='수정'>"+
                "</td>";
            temp.append(tr);
        }

        mainTable.querySelector("tbody").append(temp);
        dynamicButtonEventBinder()
    })
}


function dynamicButtonEventBinder() {
    let buttonList = document.getElementsByClassName("modify_button");
    console.log(buttonList.length)
    for(let i=0;i<buttonList.length;i++) {
        buttonList[i].removeEventListener("click",buttonEvent);
        buttonList[i].addEventListener("click",buttonEvent);
    }
}

function buttonEvent(event) {
    let tr = event.currentTarget.parentNode.parentNode;
    let textboxes = tr.querySelectorAll(".log_text_box")
    for (let i = 0; i < textboxes.length; i++) {
        textboxes[i].readOnly = false;
    }
}