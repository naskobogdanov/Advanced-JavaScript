createParagraph('wrapper', 'Some text');

function createParagraph(id, text) {
    document.getElementById(id).innerHTML = "<p>" + text + "</p>";
}