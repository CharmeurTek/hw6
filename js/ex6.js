const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const final = document.getElementById("content");
var list = document.createElement('dl');

for (word of words) {
  var strong = document.createElement('strong');
  var title = document.createElement('dt');
  title.appendChild(document.createTextNode(word.term));
  strong.appendChild(title);
  list.appendChild(strong);

  var definition = document.createElement('dd');
  definition.appendChild(document.createTextNode(word.definition));
  list.appendChild(definition);
}

final.appendChild(list);