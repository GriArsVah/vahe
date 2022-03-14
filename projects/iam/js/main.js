(function () {
	'use strict'
	

	
	// sidebars.js
	/* global bootstrap: false */
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		tooltipTriggerList.forEach(function (tooltipTriggerEl) {
		new bootstrap.Tooltip(tooltipTriggerEl)
	})
})()