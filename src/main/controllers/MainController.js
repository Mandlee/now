'use strict';

class MainIndexController {

    constructor($state) {
        this.$state = $state;

        console.log('MainCtrl   ');
    }

    isActivePage(route, clazz) {
        if (this.$state.current.name.indexOf(route) === -1) {
            return '';
        }
        return clazz || 'active';
    };

}

MainIndexController.$inject = ['$state'];

module.exports = MainIndexController;
