//Beta2.1 Bulid9
function WriteConsole(WriteText) {
    console.log(WriteText);
}
function WriteErrorText(WriteText) {
    console.error(WriteText);
}
function Message(ShowText) {
    window.alert(ShowText);
}
function GotoLink(Link) {
    document.location.href = Link
}
function LoadLink(Link) {
    window.open(Link);
}
function zwf() {
    //No Code
}
function EditValue(KJName, XGText) {
    document.getElementById(KJName).innerHTML = XGText;
}
function WriteWarnText(WriteText) {
    console.warn(WriteText);
}
function ClearScreen() {
    document.write("<!-- Null -->");
}
function WriteScreen(WriteText) {
    document.write(WriteText);
}
//function TestCode1(VAR1, VAR2,VAR3) {
//    document.getElementsByClassName(VAR1)[VAR2].innerHTML = VAR3;
//}