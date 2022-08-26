function radio_onchange() {
    var radio = document.getElementById('radio1'); //获得可用单选按钮的id
    var text = document.getElementById('text2'); //获得文本框id
    if (radio.checked) {
        text.disabled = "enabled"; //选中文本框为可用
    } else {
        text.disabled = "disabled";
    }
}