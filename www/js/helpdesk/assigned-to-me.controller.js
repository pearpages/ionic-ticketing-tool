/**
 * Tickets assigned to the current IT member who is logged.
 */
(function() {
    'use strict';

    angular.module("helpdesk")
        .controller('AssignedToMeController', ['myTickets', 'NgTableParams', '$state', 'myLoading', AssignedToMeController]);

    function AssignedToMeController(myTickets, NgTableParams, $state, myLoading) {
        var vm = this;

        vm.myTickets = null;
        vm.gotoDetail = gotoDetail;

        activate();

        function activate() {
            myLoading.loading(function() {
                myTickets.getMine().then(function success(response) {
                    var data = response.data;
                    vm.notAssigned = new NgTableParams({
                        count: data.length,
                        sorting: {
                            notified: 'desc'
                        }
                    }, {
                        data: data,
                        counts: []
                    });
                }, function error(response) {
                    console.log(response);
                });
            });

        }

        function gotoDetail(ticket) {
            var params = {
                id: ticket._id,
                back: 'tab.assigned-to-me'
            };
            $state.go('tab.ticket-detail', params);
        }
    }
})();
