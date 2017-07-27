
document.addEventListener("DOMContentLoaded", function(event) {
  var codeSnippets = document.getElementsByTagName('CODE');


  for (var i = 0; i < codeSnippets.length; i++) {
    var aux = codeSnippets[i];

    var content = aux.innerHTML.toString();
    aux.innerHTML = "";
  //  content = content.replace(/</g,"&lt;").replace(/>/g,"&gt;");
    var lineCount = (content.match(/\n/g) || []).length;
    lines = content.split(/\n/);
    console.log(lines);
    var para = document.createElement("pre");
    for (var k = 0; k < lines.length; k++) {


      var spacer = document.createElement("BR");
      var node = document.createTextNode(lines[k]);
      para.appendChild(node);
      para.appendChild(spacer);


    }
    aux.appendChild(para);

    //aux.innerHTML = content;
    console.log(content);
  }
  });
