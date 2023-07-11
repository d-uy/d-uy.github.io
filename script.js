console.log("这是一个JavaScript示例");

function changeColor() {
    document.body.style.backgroundColor = "pink";
}
<script>
  var image = document.getElementById("myImage");
  var text = document.getElementById("myText");

  image.onclick = function() {
    if (text.style.display === "none") {
      text.style.display = "inline";
    } else {
      text.style.display = "none";
    }
  };
</script>
 
