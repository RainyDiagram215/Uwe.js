//Uwe.js
//Edition Beta 1 Bulid 7
//By ������
/*
 * WriteConsole(WriteText); �����ڿ���̨(Console)�����һ����������Ϣ
  * WriteErrorText(WriteText); �����ڿ���̨(Console)�����һ����ʾ�д������Ϣ
  * Message(ShowText); ������ʾһ����Ϣ��(MessageBox)
  * GotoLink(Link); ��ת��ָ������
  * LoadLink(Link); ���´��ڴ�����
  * zwf(); ռλ��
 */
console.info('Uwe.js Is Starting!');
function WriteConsole(WriteText) {
    console.log(WriteText); //��console��log(info)�������һ��������Ϣ
}
function WriteErrorText(WriteText) {
    console.error(WriteText); //��console��error�����ڿ���̨���һ��������Ϣ
}
function Message(ShowText) {
    window.alert(ShowText); //��Window��alert������ʾ��Ϣ����
}
function GotoLink(Link) {
    document.location.href = Link //��ת��Link������ָ������
}
function LoadLink(Link) {
    window.open(Link); //���´��ڴ�����
}
function zwf() {
    //ʲô���붼û�У���ֻ�Ǹ�ռλ����
}