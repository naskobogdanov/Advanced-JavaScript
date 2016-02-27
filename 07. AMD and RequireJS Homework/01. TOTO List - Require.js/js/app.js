require.config({
    paths: {
        'factory': 'factory',
        'container': 'models/container',
        'section': 'models/section',
        'item': 'models/item'
    }
});

require(['factory'],function (models){
    "use strict";

    var bodyElem = document.getElementById('wrapper');
    var newContainer = new models.Container("TODO List");
    bodyElem.appendChild(newContainer.createDomElement());
});