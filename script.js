const updateText = () => {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

const makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

const makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

const makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let formattedText = document.getElementById("text-output");
  if (formattedText.classList.contains("underline")) {
    formattedText.classList.remove("underline");
  } else {
    formattedText.classList.add("underline");
  }
};

const alignText = (elem, alignType) => {
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");
  for (let button of buttonList) {
    button.classList.remove("active");
  }
  // buttonList.map((button) => {
  //   button.classList.remove("active");
  // }); //arrays do not work on html elements and buttons are not array but html collection
  elem.classList.add("active");
};
