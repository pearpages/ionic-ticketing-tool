(function() {
    'use strict';

    angular.module("ticketing")
    .directive('detail',['$state','myUsers',detail]);

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
            
            function controller(myUsers) {
                var vmd = this;

                vmd.evaluate = null;
                vmd.showEvaluation = showEvaluation;
                vmd.evaluateTicket = evaluateTicket;
                vmd.assignTicket = assignTicket;

                activate();
                
                function activate() {
                    
                }

                function showEvaluation() {
                    if(vmd.ticket !== null){
                        if(vmd.ticket.who === myUsers.getCurrentUser().id && vmd.ticket.status === 'closed'){
                            return true;
                        }else{
                            return false;
                        }       
                    }
                }

                function evaluateTicket() {

                }

                function assignTicket() {
                    $state.go('tab.assign',{id: vmd.ticket.id});
                }

            }
        }
    })();