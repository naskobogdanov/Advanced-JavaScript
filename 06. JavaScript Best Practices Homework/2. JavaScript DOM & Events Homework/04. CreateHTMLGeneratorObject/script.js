var HTMLGen = {
    crateParagraph: function(id, text) {
        document.getElementById(id).innerHTML += '<p>' + text + '</p>';
    },
    createDiv: function(id, classs) {
        document.getElementById(id).innerHTML += '<div class=' + classs + '></div>';
    },
    createLink: function(id, text, url){
        document.getElementById(id).innerHTML += '<a href=' + url + '>' + text + '</a>';
    }
};

HTMLGen.crateParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
