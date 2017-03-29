'use strict';

class MainIndexController {

    constructor($state) {
        this.$state = $state;
        this.hamburgerMenuActive = false;

        this.articleFeed = [
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                img: "../img/sun.jpg",
                date: "20m ago",
                channel: "science",
                source: "SPACE.com"
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur 2",
                img: "../img/city.jpg",
                date: "20m ago",
                channel: "science",
                source: "SPACE.com"
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
                img: "../img/phone.png",
                date: "20m ago",
                channel: "science",
                source: "SPACE.com"
            },
            {
                title: "Lorem ipsum 4",
                img: "../img/fox.jpg",
                date: "20m ago",
                channel: "science",
                source: "SPACE.com"
            },
            {
                title: "Lorem ipsum",
                img: "../img/bg.png",
                date: "20m ago",
                channel: "science",
                source: "SPACE.com"
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
