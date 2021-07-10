window.addEventListener('DOMContentLoaded', function()
{
    initLogList ()
});

function initLogList () {
    let mainTable = document.getElementById("log_view_table");
    let result = requestGetCalculationLog(function (result) {

        let temp = document.createDocumentFragment();
        for(let i=0;i<result;i++) {
            let tr = document.createElement("tr");
            tr.innerHTML = "<td class='log_view_td'>" +result[i].name+
                "</td>" +
                "<td class='log_view_td'>" +result[i].expression+
                "</td>" +
                "<td class='log_view_td'>" +result[i].result+
                "</td>";
            temp.append(tr);
        }

        mainTable.querySelector("tbody").append(temp);
    })
}