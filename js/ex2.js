const displayText400 = () => {
  const elements = document.getElementsByClassName("400level");
  for (const element of elements) {
    console.log(element.textContent);
  }
}

displayText400();
