/**
 * All closed tickets.
 */
(function() {
    'use strict';

    angular.module("helpdesk")
        .controller('ClosedController', ['myTickets', 'NgTableParams', '$state', 'myLoading', ClosedController]);

    function ClosedController(myTickets, NgTableParams, $state, myLoading) {
        var vm = this;

        vm.closedTickets = null;
        vm.gotoDetail = gotoDetail;
        activate();

        function activate() {
            myLoading.loading(function() {
                myTickets.getClosed().then(function success(response) {
                    var data = response.data;
                    vm.closedTickets = new NgTableParams({
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
            $state.go('tab.ticket-detail', {
                id: ticket._id,
                back: 'tab.last-closed'
            });
        }
    }
})();
