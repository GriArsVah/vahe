'use strict';
/* bootstrap nav */
/* bootstrap nav offcanvas collapse */
document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function() {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
})


(function() {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()