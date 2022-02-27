window.onload = function () {
  let correctAnswers = ["Mars", "Venus", "Earth", "Saturn"];
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = dragSrcEl.innerHTML;
      resultsContainer.appendChild(dragSrcEl);
    }
  }
  let resultsContainer = document.querySelector(".results");
  resultsContainer.addEventListener("drop", drop_handler);
  resultsContainer.addEventListener("dragover", dragover_handler, false);
  function handleDragStart(e) {
    this.style.opacity = "0.4";
    resultsContainer.style.border = "2px dotted grey";
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";
    resultsContainer.style.border = "2px solid grey";
    if (correctAnswers.includes(dragSrcEl.id)) {
      console.log("correct");
      this.style.background = "green";
    } else {
      this.style.background = "red";
    }
  }
  function handleDragLeave(e) {
    this.classList.remove("over");
  }
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }
  function handleDragEnter(e) {}

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
  }
  let items = document.querySelectorAll(".optionBox");

  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
  });
};
