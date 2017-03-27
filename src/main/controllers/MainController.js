'use strict';

class MainIndexController {

    constructor($state) {
        this.$state = $state;
        this.hamburgerMenuActive = false;

        console.log('MainCtrl   ');
    }

    isActivePage(route, clazz) {
        if (this.$state.current.name.indexOf(route) === -1) {
            return '';
        }
        return clazz || 'active';
    };

    toggleActiveHamburgerMenu() {
        this.hamburgerMenuActive = !this.hamburgerMenuActive;
    }

    isActiveHamburgerMenu() {
        return this.hamburgerMenuActive;
    }

}

MainIndexController.$inject = ['$state'];

module.exports = MainIndexController;
