(function() {
    "use strict";

    angular.module('gen.genericDirectives', [])
        .directive('genDynamicDirective', ['$compile',
            function($compile) {
                return {
                    restrict: "E",
                    require: '^ngModel',
                    scope: true,
                    link: function(scope, element, attrs, ngModel) {
                        var ngModelItem = scope.$eval(attrs.ngModel);
                        scope.ngModelItem = ngModelItem;

                        var getView = scope.$eval(attrs.genGetDynamicView);
                        if (getView && typeof getView === 'function') {
                            var templateUrl = getView(ngModelItem);
                            if (templateUrl) {
                                element.html('<div ng-include src="\'' + templateUrl + '\'"></div>');
                            }

                            $compile(element.contents())(scope);
                        }
                    }
                };
            }
        ]);
})();

// function getView (ngModelItem) {
//     var template = '';

//     switch (ngModelItem.Type) {
//         case 'Type1':
//             template = 'Type1.html';
//             break;
//         case 'Type2':
//             template = 'Type2.html';
//             break;
//     }

//     return template;
// }