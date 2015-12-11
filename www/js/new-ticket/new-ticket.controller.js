(function() {
	'use strict';

	angular.module("new-ticket")
	.controller('NewTicketController',[
        'myUsers',
        'myTickets',
        '$state',
        'CategoriesMocks',
        'UserMocks',
        NewTicketController]);

	function NewTicketController(myUsers,myTickets,$state,CategoriesMocks,UserMocks) {
		var vm = this;

		vm.ticket = null;
        vm.view = null;
        vm.show = show;
        vm.names = null;
        vm.issues = null;
        vm.me = null;
        vm.seeExpress = false;
        vm.whoOffice = null;
        vm.getIssueDescription = getIssueDescription;
        vm.transformName = transformName;
        vm.setWhoOffice = setWhoOffice;
        vm.submit = submit;

        activate();

        function activate() {
            myUsers.isLogged();
            
            if(myUsers.getCurrentUser()){
                vm.ticket = myTickets.make(myTickets,myUsers.getCurrentUser().id);
                vm.me = myUsers.getCurrentUser().id;
                vm.whoOffice = myUsers.getCurrentUser().office;    

                vm.seeExpress = (myUsers.getCurrentUser().role === 'admin' ||
                myUsers.getCurrentUser().role === 'helpdesk') ? true : false;
            }else {
                vm.whoOffice = 'bcn';

                vm.seeExpress= false;
            }
                        
            vm.view = 'form';
            vm.names = UserMocks.getAllOffices();
            vm.issues = CategoriesMocks.getAll();
        }

        function getIssueDescription(id) {
            return CategoriesMocks.getDescription(id);
        }

        function setWhoOffice (office) {
            vm.whoOffice = office;
            console.log(vm.whoOffice);
        }

        function show(id) {
            vm.view = id;
        }
        
        function transformName(name) {
            var temp = name.toLowerCase().split(' ');
            var res = temp[0][0] + temp[temp.length-1];
            return res;
        }

        function submit() {
            vm.ticket.issueDescription = vm.getIssueDescription(vm.ticket.issue);
            vm.ticket.save();
            $state.go('tab.my-tickets');
        }

	}
})();