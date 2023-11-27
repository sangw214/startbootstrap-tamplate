/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const menuToggle = document.body.querySelectorAll("#managementBtn, #historyBtn");

    menuToggle.forEach( o => {
        o.addEventListener('click', event => {
            event.preventDefault();
            const nm = event.target.id.replace(/Btn/g,'')
            const items = document.body.querySelectorAll('#managementMenu,#historyMenu,#managementBtn, #historyBtn')
            items.forEach( item => {
                if( item.id.indexOf( 'Menu' ) != -1 ){
                    item.classList.remove('d-none')
                    if( item.id.indexOf( nm ) == -1 ){
                        item.classList.add('d-none')
                    }
                }
                if( item.id.indexOf( 'Btn' ) != -1 ){
                    item.classList.add('fw-bolder')
                    if( item.id.indexOf( nm ) == -1 ){
                        item.classList.remove('fw-bolder')
                    }
                }                
            } )
        });
    } )

});
