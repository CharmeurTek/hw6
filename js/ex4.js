const addLink = () => {
  const elements = document.getElementsByTagName("ul");
  var newElement = document.createElement('li');
  var link = document.createElement('a');
  link.text = "College of Business";
  link.href = "https://www.csulb.edu/college-of-business";
  newElement.appendChild(link);
  elements[2].childNodes[1].appendChild(newElement);
}

addLink();