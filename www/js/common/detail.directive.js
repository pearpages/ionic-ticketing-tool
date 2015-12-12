(function() {
    'use strict';

    angular.module("ticketing")
    .directive('detail',['$state',detail]);

    function detail($state) {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope:{
                ticket: '=',
                assign: '@'
            },
            templateUrl: 'js/common/detail.html',
        };
        
            //call ang-link if needed
            
            function controller() {
                var vmd = this;

                vmd.assignTicket = assignTicket;

                activate();
                
                function activate() {
                }

                function assignTicket() {
                    $state.go('tab.assign',{id: vmd.ticket.id});
                }

            }
        }
    })();