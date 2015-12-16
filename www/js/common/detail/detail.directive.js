(function() {
    'use strict';

    angular.module("ticketing")
    .directive('detail',['$state','myUsers',detail]);

    function detail($state,myUsers) {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope:{
                ticket: '='
            },
            templateUrl: 'js/common/detail/detail.html',
        };
        
            //call ang-link if needed
            
            function controller(myUsers) {
                var vmd = this;

                vmd.form = {};
                vmd.form.close = false;
                vmd.showEvaluation = showEvaluation;
                vmd.isIT = isIT;
                vmd.save = save;
                vmd.evaluateTicket = evaluateTicket;
                vmd.assignTicket = assignTicket;
                vmd.isClosable = isClosable;

                activate();
                
                function activate() {
                    //activation only occurs once. The same directive is kepty in memory like a service. Is a singleton
                }

                function showEvaluation() {
                    if(vmd.ticket !== null){
                        if((vmd.ticket.who === myUsers.getCurrentUser().id && vmd.ticket.status === 'closed')){
                            return true;
                        }else{
                            return false;
                        }       
                    }
                }

                function save() {

                    if(vmd.form.close){
                        vmd.ticket.close();
                        vmd.form.close = false;
                    }
                    vmd.ticket.save();

                }

                function isIT() {
                    return myUsers.isIT();
                }

                function evaluateTicket() {
                    $state.go('tab.evaluate',{id: vmd.ticket.id});
                }

                function assignTicket() {
                    $state.go('tab.assign',{id: vmd.ticket.id});
                }

                function isClosable() {
                    if(vmd.ticket === null){
                        return false;
                    }
                    if(vmd.ticket.it === myUsers.getCurrentUser().id && vmd.ticket.status === 'open'){
                        return true;
                    }
                    return false;
                }

            }
        }
    })();