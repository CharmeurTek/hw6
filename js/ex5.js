const makeTable = () => {
  const elements = document.getElementById("output");
  var table = document.createElement('table');
  
  for (var i = 1; i <= 12; i++) {
    var list = document.createElement('tr');
    var newElement = document.createElement('td');
    newElement.appendChild(document.createTextNode("" + i));
    if (i % 4 === 0) {
      newElement.classList.add("divisiblebyfour");
    }
    list.appendChild(newElement);
    table.appendChild(list);
  }

  elements.appendChild(table);
}

makeTable();