function execCmd(command, value = null) {
    document.execCommand(command, false, value);
  }
  
  function insertCode() {
    const code = prompt("Enter code:");
    if (code) {
      const pre = document.createElement("pre");
      pre.textContent = code;
      document.getElementById("editor").appendChild(pre);
    }
  }
  
  function insertVideo() {
    const url = prompt("Enter video URL:");
    if (url) {
      const video = document.createElement("iframe");
      video.src = url;
      video.width = "560";
      video.height = "315";
      document.getElementById("editor").appendChild(video);
    }
  }
  
  function submitQuestion() {
    const content = document.getElementById("editor").innerHTML;
    console.log(content);
  }
  