'use strict';

class MainIndexController {

    constructor($state) {
        this.$state = $state;
        this.hamburgerMenuActive = false;

        this.articleFeed = [
            {
                title: "Lorem ipsum",
                img: "../img/sun.jpg"
            },
            {
                title: "Lorem ipsum 2",
                img: "../img/city.jpg"
            },
            {
                title: "Lorem ipsum 3",
                img: "../img/phone.png"
            },
            {
                title: "Lorem ipsum 4",
                img: "../img/fox.jpg"
            },
            {
                title: "Lorem ipsum",
                img: "../img/bg.png"
            }

        ];
        console.log('MainCtrl');
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
