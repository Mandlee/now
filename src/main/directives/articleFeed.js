/**
 * Created by bence_mandli on 2017. 03. 27..
 */
module.exports = function () {
    return {
        restrict: 'E',
        scope: {
            data: "=",
            index: "=",
            landscape: "=?"
        },
        //templateUrl: 'main/views/main/article_feed.html',
        template: '<ng-include src="getTemplateUrl()"/>',
        link: function ($scope, element) {
            $scope.getTemplateUrl = () => {
                switch ($scope.index % 4) {
                    case 0:
                        return 'main/views/main/article_feed.html';
                        break;
                    case 1:
                        return 'main/views/main/article_feed_2.html';
                        break;
                    case 2:
                        return 'main/views/main/article_feed_3.html';
                        break;
                    default:
                        return 'main/views/main/article_feed.html';
                }
            };

            $scope.bgImage = {
                backgroundImage: "url('" + $scope.data.img + "')"
            };

        }
    }
};
