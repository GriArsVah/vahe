(function() {
'use strict';

    /* bootstrap nav offcanvas collapse */
    if(".navbar"){
        document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function() {
            document.querySelector('.offcanvas-collapse').classList.toggle('open')
        })
    }

    /* bootstrap navbarSideCollapse */
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()