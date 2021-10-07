const file = document.getElementById('file');
const image = document.querySelector("img");
const box=document.querySelector(".box")
const h1=document.querySelector("h1")
file.onchange = function() {
    const fileData = this.files[0];//获取到一个FileList对象中的第一个文件( File 对象),是我们上传的文件
    const pattern = /^image/;

    if (!pattern.test(fileData.type)) {
        alert("图片格式不正确");
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(fileData);//异步读取文件内容，结果用data:url的字符串形式表示
    /*当读取操作成功完成时调用*/
    reader.onload = function(e) {

        image.setAttribute("src", this.result)
    }
    box.style.visibility="visible"
    h1.style.display="none"
}
