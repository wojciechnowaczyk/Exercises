window.onload = function () {
  var fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("onchange", readFiles);
  function readFiles(event) {
    console.log(event);
  }
  function drop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var fileList = evt.dataTransfer.files;
    for (var i = 0; i < fileList.length; i++) {
      file = fileList.item(i);
      var fileEl = document.createElement("p");
      fileEl.innerHTML = file.name;
      dropZone.appendChild(fileEl);
    }

    // access files via fileList
  }

  function dragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy";
  }

  var dropZone = document.getElementById("dropZone");
  dropZone.addEventListener("dragover", dragOver, false);
  dropZone.addEventListener("drop", drop, false);
};
