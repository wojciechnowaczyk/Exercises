window.onload = function () {
  //reading files
  var multipleFilesInput = document.getElementById("multipleFilesInput");
  multipleFilesInput.addEventListener("change", getFiles, false);
  function getFiles() {
    var files = this.files;
    console.log(files);
  }

  //file reader
  var fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", getFiles, false);
  function getFiles() {
    var file = this.files[0];
    console.log(file);
    //load as text
    var reader = new FileReader();
    reader.onload = function (loadedEvent) {
      console.log(loadedEvent.target.result);
    };
    // reader.readAsText(file);

    //monitoring progress of file loading
    var reader = new FileReader();

    reader.onprogress = function (progressEvent) {
      console.log("onprogress");
      if (progressEvent.lengthComputable) {
        var percentLoaded = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      }
      console.log(
        "total: " +
          progressEvent.total +
          ", loaded: " +
          progressEvent.loaded +
          "(" +
          percentLoaded +
          "%)"
      );
    };
  }
  //drag & drop file api
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
