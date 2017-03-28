/**
 * Created by bence_mandli on 2017. 03. 28..
 */
module.exports = ['$window', '$document', ($window, $document) => {
    return {
        restrict: 'A',
        link: function (scope, element) {

            const elem = angular.element(element);

            $document.bind('scroll', function () {
                $window.pageYOffset !== 0 ? elem.addClass('toolbar-shadow') : elem.removeClass('toolbar-shadow');
            });
        }
    }
}];