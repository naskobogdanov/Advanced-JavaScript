function createParagraph(id, text) {
    document.getElementById(id).innerHTML = '<p>' + text + '</p>';
}

createParagraph('wrapper', 'Some text');