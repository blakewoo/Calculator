window.addEventListener('DOMContentLoaded', function()
{
    requestGetCalculationLog(0,function (result) {
        generatePage (result.count)
        initLogList (result.document)
    })
});

function generatePage (count) {
    let pagingTarget = document.getElementById("span_paging");
    let str = "";
}

function initLogList (result) {
    let mainTable = document.getElementsByClassName("log_view_table")[0];
        let parsed_result = result;
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
    if(event.currentTarget.value === "수정") {
        textboxes[0].readOnly = false;
        textboxes[0].classList.add("editable");
        event.currentTarget.value = "저장"
    }
    else {
        let data = {}
        textboxes[0].readOnly = true;
        textboxes[0].classList.remove("editable");
        data.name = textboxes[0].value;
        data.id = tr.id;
        requsetUpdateCalculationLog(data,function (result) {
            event.currentTarget.value = "수정"
        })
    }

}