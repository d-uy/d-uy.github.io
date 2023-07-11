console.log("这是一个JavaScript示例");

function changeColor() {
    document.body.style.backgroundColor = "pink";
}

function replaceWithText() {
    var image = document.getElementById("myImage");
    var text = document.getElementById("myText");
    var sentence = "博，快含住";

    image.style.display = "none";  // 隐藏图片
    text.innerText = sentence;  // 设置句子内容
}

