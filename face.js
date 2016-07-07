<!-- 多说评论表情-->
 
<script>
document.write("<div class='facediv'>");//输出div
var facenumber;
for (facenumber=1;facenumber<=50;facenumber++) {   //为了减少大小这里我用了for循环来减少加载时间
document.write("<span onclick='insertFace("+facenumber+")' ><img src='https://app.haotown.cn/face/tieba/32/"+facenumber+".png'></span>")
}  
document.write("</div>");//界面部分结束
var facecodestart="<img src='https://app.haotown.cn/face/tieba/32/";
var facecodeend= ".png'  >";
function insertFace(faceid) { //插入函数
var textname=document.getElementsByName("message");
var textid=textname[0];     //插入到name为message的第一个标签
//兼容IE
faceid=facecodestart+ faceid+facecodeend;
if (document.selection) {
textid.focus();
sel = document.selection.createRange();
sel.text =faceid;
sel.select();
}
//IE部分结束 
else if (textid.selectionStart || textid.selectionStart == '0') {
var startPos = textid.selectionStart;
var endPos = textid.selectionEnd;
var restoreTop = textid.scrollTop;
textid.value = textid.value.substring(0, startPos) + faceid + textid.value.substring(endPos, textid.value.length);
if (restoreTop > 0) {
textid.scrollTop = restoreTop;
}
textid.focus();
textid.selectionStart = startPos + faceid.length;
textid.selectionEnd = startPos + faceid.length;
} else {
textid.value += faceid;
textid.focus();
}
} 
</script>
