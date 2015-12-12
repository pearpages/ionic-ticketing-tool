(function() {
    'use strict';

    angular.module("helpdesk")
    .directive('helpdeskMenu',[helpdeskMenu]);

    function helpdeskMenu() {
        return {
                restrict: 'E',
                bindToController: true,
                controllerAs: 'vmd',
                scope: {
                    title: '@'
                },
                templateUrl: 'js/helpdesk/directives/helpdesk-menu.html',
                controller: controller
            };
        
        function controller() {
               
        }
    }
})();