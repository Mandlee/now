/**
 * Created by bence_mandli on 2017. 03. 31..
 */
module.exports = () => {
    return {
        restrict: 'E',
        templateUrl: 'main/views/main/comments.html',
        scope: {
            comments: "="
        },
        link: function (scope, element) {

        }
    }
};