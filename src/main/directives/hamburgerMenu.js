/**
 * Created by bence_mandli on 2017. 03. 16..
 */
module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'main/views/main/hamburger_menu.html',
        link: function ($scope, $element) {
            const duration = 500;

            $scope.navToggle = function () {
                let navToggle = $('#nav-toggle');

                navToggle.toggleClass('active');

                if (navToggle.hasClass('active')) {
                    $('#menu-main').animate({left: 0}, duration);
                }
                else {
                    $('#menu-main').animate({left: -350}, duration);

                }

                $('body').toggleClass('notscroll');
                $('.black').toggleClass('hidden');
                return false;
            };

            $('body').delegate('.black, .menu-item', 'click', function (e) {
                $('#menu-main').animate({left: -350}, duration);

                let navToggle = $('#nav-toggle');
                navToggle.removeClass('active');
                navToggle.removeClass('hidden');

                $('#nav-arrow').removeClass('active');

                $('body').removeClass('notscroll');
                $('.black').addClass('hidden');
                return false;
            });
        }
    }
};
