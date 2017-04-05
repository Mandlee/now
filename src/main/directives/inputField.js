/**
 * Created by bence_mandli on 2017. 01. 30..
 */
module.exports = function () {
    return {
        restrict: 'E',
        scope: {
            type: "@",
            placeholder: '@?',
            autofocus: '=?',
            imgSrc: '@',
            imgAlt: '@?',
            lightStyle: '=?'
        },
        templateUrl: 'main/views/main/input_field.html',
        link: function ($scope, element) {

            if ($scope.autofocus) {
                angular.element(element).find('input').focus();
            }

        }
    }
};
