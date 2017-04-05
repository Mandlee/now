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

        this.articleComment = [
            {
                name: "Mike Taylor",
                text: "Such a massive change in such a short time is extremely unusual.",
                date: "Apr 3, 1:22pm",
                like: 12,
                img: "../img/user.svg"
            },
            {
                name: "Sophia Anderson",
                text: "Loss of Article sea ice is just one of the many changes that are accelerating it.",
                date: "Apr 3, 5:04pm",
                like: 8,
                img: "../img/user.svg"
            },
            {
                name: "Charlie Harris",
                text: "Perhaps they had the same thing in the early 20th century.",
                date: "Apr 3, 10:34am",
                like: 5,
                img: "../img/user.svg"
            }
        ];
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
