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
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }
  elem.classList.add("active");
};
