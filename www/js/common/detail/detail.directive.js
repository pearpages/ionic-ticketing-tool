/**
 * Displays all the information concerning a detail.
 *
 * The information varies depending on the user profile who's seeing it.
 */
(function() {
    'use strict';

    angular.module("ticketing")
        .directive('detail', ['$state', 'myUsers', 'myTickets','$ionicLoading', detail]);

    function detail($state, myUsers, myTickets,$ionicLoading) {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
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
                if (vmd.ticket !== null) {
                    if ((vmd.ticket.who === myUsers.getCurrentUser().id && vmd.ticket.status === 'closed')) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            function save() {

                if (vmd.form.close) {
                    vmd.ticket.status = 'closed';
                    vmd.ticket.closed = new Date();
                    vmd.form.close = false;
                }
                if (typeof vmd.ticket.save === 'function') {
                    vmd.ticket.save();
                } else {
                    $ionicLoading.show({
                        template: 'Saving...'
                    });
                    myTickets.save(vmd.ticket, function() {
                        $ionicLoading.hide();
                    });
                }
            }

            function isIT() {
                return myUsers.isIT();
            }

            function evaluateTicket() {
                $state.go('tab.evaluate', {
                    id: vmd.ticket._id
                });
            }

            function assignTicket() {
                $state.go('tab.assign', {
                    id: vmd.ticket._id
                });
            }

            function isClosable() {
                if (vmd.ticket === null) {
                    return false;
                }
                if (vmd.ticket.it === myUsers.getCurrentUser().id && vmd.ticket.status === 'open') {
                    return true;
                }
                return false;
            }

        }
    }
})();
