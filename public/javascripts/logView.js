window.addEventListener('DOMContentLoaded', function()
{
    requestGetCalculationLog(0,function (result) {
        generatePage ("span_paging",result.count,1,8)
        initLogList (result.document)
    })
});

function generatePage (divID,totalCount,currentPage,divideNumber) {
    let pagingTarget = document.getElementById(divID);
    pagingTarget.innerHTML = "";
    let maxLength = Math.ceil(totalCount/divideNumber);
    let tempDocument = document.createDocumentFragment();
    // 전체 페이지가 10 초과일때
    if(maxLength > 10) {
        if(currentPage > 10) {
            let pre_page = Math.floor((currentPage-1)/10)*10;
            let post_page = pre_page+10;
            let tempLabel = document.createElement("label");
            tempLabel.index = pre_page;
            tempLabel.innerText = "<";
            tempLabel.classList.add("pagingLabelColor");

            tempLabel.addEventListener("click",function (event) {
                let currentTargetIndex = event.currentTarget.index
                requestGetCalculationLog(currentTargetIndex-1,function (result) {
                    generatePage ("span_paging",result.count,currentTargetIndex,8)
                    initLogList (result.document)
                })
            })

            tempDocument.append(tempLabel)
            let to_index = post_page;
            if(maxLength<post_page) {
                to_index = maxLength;
            }
            for(let i=pre_page+1;i<=to_index;i++) {
                tempLabel = document.createElement("label");
                tempLabel.index = i;
                tempLabel.innerText = i;
                if(currentPage === i) {
                    tempLabel.classList.add("pagingSelectedLabelColor");
                }
                else {
                    tempLabel.classList.add("pagingLabelColor");
                }
                tempLabel.addEventListener("click",function (event) {
                    requestGetCalculationLog(i-1,function (result) {
                        generatePage ("span_paging",result.count,i,8)
                        initLogList (result.document)
                    })
                })
                tempDocument.append(tempLabel)
            }
            if(maxLength>post_page) {
                tempLabel = document.createElement("label");
                tempLabel.index = post_page+1;
                tempLabel.innerText = ">";
                tempLabel.classList.add("pagingLabelColor");
                tempLabel.addEventListener("click",function (event) {
                    let currentTargetIndex = event.currentTarget.index
                    requestGetCalculationLog(currentTargetIndex-1,function (result) {
                        generatePage ("span_paging",result.count,currentTargetIndex,8)
                        initLogList (result.document)
                    })
                })
                tempDocument.append(tempLabel)
            }
            pagingTarget.append(tempDocument);
        }
        else {
            let tempLabel = null;
            for(let i=1;i<=10;i++) {
                tempLabel = document.createElement("label");
                tempLabel.index = i;
                tempLabel.innerText = i;
                if(currentPage === i) {
                    tempLabel.classList.add("pagingSelectedLabelColor");
                }
                else {
                    tempLabel.classList.add("pagingLabelColor");
                }
                tempLabel.addEventListener("click",function (event) {
                    requestGetCalculationLog(i-1,function (result) {
                        generatePage ("span_paging",result.count,i,8)
                        initLogList (result.document)
                    })
                })
                tempDocument.append(tempLabel)
            }
            tempLabel = document.createElement("label");
            tempLabel.index = 11;
            tempLabel.innerText = ">";
            tempLabel.classList.add("pagingLabelColor");
            tempLabel.addEventListener("click",function (event) {
                let currentIndex = event.currentTarget.index
                requestGetCalculationLog(currentIndex-1,function (result) {
                    generatePage ("span_paging",result.count,currentIndex,8)
                    initLogList (result.document)
                })
            })
            tempDocument.append(tempLabel)
            pagingTarget.append(tempDocument);
        }
    }
    else {
        for(let i=1;i<=maxLength;i++) {
            let tempLabel = document.createElement("label");
            tempLabel.index = i;
            tempLabel.innerText = i;
            if(currentPage === i) {
                tempLabel.classList.add("pagingSelectedLabelColor");
            }
            else {
                tempLabel.classList.add("pagingLabelColor");
            }
            tempLabel.addEventListener("click",function (event) {
                requestGetCalculationLog(i-1,function (result) {
                    generatePage ("span_paging",result.count,i,8)
                    initLogList (result.document)
                })
            })
            tempDocument.append(tempLabel)
        }
        pagingTarget.append(tempDocument);
    }

}

function initLogList (result) {
    let mainTable = document.getElementsByClassName("log_view_table")[0];
    mainTable.querySelector("tbody").innerHTML = ""
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