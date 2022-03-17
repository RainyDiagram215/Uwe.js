//Uwe.js
//Edition Beta 2 Bulid 8
//By 无名者
/*
 * WriteConsole(WriteText); 用于在控制台(Console)中输出一条正常的信息
  * WriteErrorText(WriteText); 用于在控制台(Console)中输出一条提示有错误的信息
  * Message(ShowText); 用于显示一个信息框(MessageBox)
  * GotoLink(Link); 跳转到指定链接
  * LoadLink(Link); 用新窗口打开链接
  * zwf(); 占位符
  * EditValue(KJName,XGText); 修改控件属性
  * WriteWarnText(WriteText); 用于在控制台(Console)中输出一条警告形式的信息
  * ClearScreen(); 清空显示内容
  * WriteScreen(WriteText);  输出HTML文本
 */
console.info('Uwe.js启动完成!');
function WriteConsole(WriteText) {
    console.log(WriteText); //用console的log(info)方法输出一条正常信息
}
function WriteErrorText(WriteText) {
    console.error(WriteText); //用console的error方法在控制台输出一条错误信息
}
function Message(ShowText) {
    window.alert(ShowText); //用Window的alert方法显示消息窗口
}
function GotoLink(Link) {
    document.location.href = Link //跳转到Link变量所指的链接
}
function LoadLink(Link) {
    window.open(Link); //用新窗口打开链接
}
function zwf() {
    //什么代码都没有，这只是个占位符！
}
function EditValue(KJName, XGText) {
    document.getElementById(KJName).innerHTML = XGText; //修改控件属性
    console.log("已修改" + KJName + "的属性"); //提示修改完成
}
function WriteWarnText(WriteText) {
    console.warn(WriteText); //用console的warn方法在控制台输出一条警告信息
}
function ClearScreen() {
    document.write("<!-- Null -->"); //输出一条注释
}
function WriteScreen(WriteText) {
    document.write(WriteText); //输出内容
}