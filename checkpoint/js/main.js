var target = document.getElementById("TextArea");
function boldText(){
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}
function italicText(){
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}
function undrText(){
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}
var selectSize=document.getElementById("size");
function changeSize(){
    target.style.fontSize=selectSize.value;
}
function changefont(){
    target.style.fontFamily=document.getElementById("fnt").value;
}
document.getElementById("bld").addEventListener("click", boldText);
document.getElementById("itlc").addEventListener("click", italicText);
document.getElementById("undr").addEventListener("click", undrText);
document.getElementById("size").addEventListener("change", changeSize);
document.getElementById("fnt").addEventListener("change", changefont);






