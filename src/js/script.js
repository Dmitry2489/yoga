window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tabs = require('./parts/tabs.js').default,
        tamer = require('./parts/tamer.js').default,
        modal = require('./parts/modal.js').default,
        form = require('./parts/form.js').default,
        slider = require('./parts/slider.js').default,
        calc = require('./parts/calc.js').default;


    tabs();
    tamer();
    modal();
    form();
    slider();
    calc();
});