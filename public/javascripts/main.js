window.addEventListener('DOMContentLoaded', function()
{
    btnEventBinder()

});


function btnEventBinder() {
    let buttons =  document.getElementsByClassName("calc_button")
    for(let i=0;i<buttons.length;i++) {
        buttons[i].removeEventListener("click",btnEvent)
        buttons[i].addEventListener("click",btnEvent)
    }
}

function btnEvent(event) {
    alert("aaaa")
    document.getElementById("math_expression").innerText = "aaaaaa";
    // document.getElementById("math_expression").innerText += event.currentTarget.value;
}