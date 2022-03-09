const changeCssOnParagraph = () => {
  const elements = document.getElementsByTagName("p")
  for (const element of elements) {
    element.style.fontWeight = "bold";
    element.style.backgroundColor = "yellow";
  }
}

changeCssOnParagraph();
