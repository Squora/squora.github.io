function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link1','.burger-menu__link2','.burger-menu__link3');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        
    }
}

burgerMenu ('.burger-menu');