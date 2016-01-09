/**
 * New tickets not assigned yet
 */
(function() {
    'use strict';

    angular.module("helpdesk")
        .controller('InboxController', ['myTickets', 'NgTableParams', '$state', 'myLoading', InboxController]);

    function InboxController(myTickets, NgTableParams, $state, myLoading) {
        var vm = this;

        vm.notAssigned = null;
        vm.gotoDetail = gotoDetail;

        activate();

        function activate() {
            myLoading.loading(function() {
                myTickets.getNotAssigned().then(function success(response) {
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
                id: ticket._id
            };
            $state.go('tab.ticket-detail', params);
        }
    }
})();
