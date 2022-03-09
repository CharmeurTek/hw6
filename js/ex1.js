const bodyNodes = () => {
  const nodeList = document.body.childNodes;
  for (const element of nodeList) {
    console.log(element);
  }
}

bodyNodes();
