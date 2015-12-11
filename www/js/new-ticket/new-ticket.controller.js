(function() {
	'use strict';

	angular.module("new-ticket")
	.controller('NewTicketController',['myUsers','myTickets','$state',NewTicketController]);

	function NewTicketController(myUsers,myTickets,$state) {
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
            vm.names = {
                bcn:getRandomNames('bcn'),
                ldn:getRandomNames('ldn'),
                mad:getRandomNames('mad')
            };
            vm.issues = [
                {id: 23, group: 'Emails', description: 'Emails on Outlook'},
                {id: 24, group: 'Printers', description: 'Network problem'},
                {id: 25, group: 'Applications', description: 'AIM Underwriting'},
                {id: 26, group: 'Telephony', description: 'Phone Configuration'},
                {id: 27, group: 'Printers', description: 'Replace toner'},
                {id: 28, group: 'Other', description: null},
            ];
        }

        function getIssueDescription(id) {
            if(id === null){
                return '';
            } else {
                for(var i = 0; i < vm.issues.length; i++) {
                    if (id === vm.issues[i].id){
                        if(vm.issues[i].description === null){
                            return 'Other';
                        }else {
                            return vm.issues[i].description;
                        }
                    }
                }
            }
        }

        function setWhoOffice (office) {
            vm.whoOffice = office;
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

        function getRandomNames(office) {

            var ldn = [];
            ldn.push('Mattie  Walters');
            ldn.push('Luz Hogan');
            ldn.push('Ruth    Mendoza');
            ldn.push('Daniel  Sparks');
            ldn.push('Jo  Burton');
            ldn.push('Leo Carlson');
            ldn.push('Brenda  Boone');
            ldn.push('Elmer   Brown');
            ldn.push('Tony    Simon');
            ldn.push('Elsie   Washington');

            var mad = [];
            mad.push('Nancy   Castro');
            mad.push('Kristi  Cohen');
            mad.push('Luis    Reynolds');
            mad.push('Catherine   Curtis');
            mad.push('Jerome  Bishop');
            mad.push('Dustin  Nichols');
            mad.push('Freddie Stewart');
            mad.push('Evelyn  Thomas');
            mad.push('Henry   Pierce');
            mad.push('Fannie  Watts');
            mad.push('Emma    Mcdaniel');
            mad.push('Otis    Lloyd');
            mad.push('Cheryl  Owens');
            mad.push('Della   Mccormick');
            mad.push('Wendy   Hopkins');
            mad.push('Jeff    Stokes');
            mad.push('Jerry   Barton');
            mad.push('Rochelle    Walker');
            mad.push('Dennis  Cannon');
            mad.push('Wilma   Hunt');
            mad.push('Jeannette   Fisher');
            mad.push('Eva Norton');
            mad.push('Beth    Ford');
            mad.push('Brad    Moss');
            mad.push('Marian  Price');
            mad.push('Francisco   Martin');
            mad.push('Delbert Medina');
            mad.push('Brooke  Stanley');
            mad.push('Carmen  Gilbert');
            mad.push('Carol   May');
            mad.push('Steven  Bennett');
            mad.push('Cora    Ferguson');
            mad.push('Emanuel Schmidt');

            var bcn = [];
            bcn.push('Raquel  Holloway');
            bcn.push('Carrie  Rodriguez');
            bcn.push('Cedric  Perkins');
            bcn.push('Herbert Vega');
            bcn.push('Garry   Morgan');
            bcn.push('Gerardo Moore');
            bcn.push('Dora    Garrett');
            bcn.push('Emilio  Lawson');
            bcn.push('Colleen Banks');
            bcn.push('Juan    Freeman');
            bcn.push('Laurence    Gutierrez');
            bcn.push('Lester  Kennedy');
            bcn.push('Ebony   Richardson');
            bcn.push('Roosevelt   Saunders');
            bcn.push('Kirk    Alvarez');
            bcn.push('Ruby    Perez');
            bcn.push('Beulah  Neal');
            bcn.push('Damon   Mckenzie');
            bcn.push('Judith  Butler');
            bcn.push('Thelma  Jones');
            bcn.push('Phillip Sharp');
            bcn.push('Debbie  Figueroa');
            bcn.push('Robin   Webb');
            bcn.push('Joe Munoz');
            bcn.push('Jill    Wilkerson');
            bcn.push('Cary    Fitzgerald');
            bcn.push('Bill    Bradley');
            bcn.push('Laverne Ruiz');
            bcn.push('Forrest Fuller');
            bcn.push('Julian  Kim');
            bcn.push('Cecelia George');
            bcn.push('Rene    Barber');
            bcn.push('Angelina    Howell');
            bcn.push('Stephanie   Olson');
            bcn.push('Christopher Love');
            bcn.push('Terry   Vaughn');
            bcn.push('Alexander   Barnett');
            bcn.push('Kim Bryant');
            bcn.push('Jeremy  Mcgee');
            bcn.push('Gwen    Johnson');
            bcn.push('Grady   Pope');
            bcn.push('Joanna  Blake');
            bcn.push('Angel   Blair');
            bcn.push('Mercedes    Waters');
            bcn.push('Rolando Mccoy');
            bcn.push('Allan   Lynch');
            bcn.push('Karl    Cox');
            bcn.push('Janie   Murray');
            bcn.push('Benny   Ortiz');
            bcn.push('Patty   Benson');
            bcn.push('Phil    Marsh');
            bcn.push('Brian   Norman');
            bcn.push('Judy    Swanson');
            bcn.push('Teresa  Weber');
            bcn.push('Gretchen    Rogers');
            bcn.push('Cynthia Hill');
            bcn.push('Kristin Poole');

            if(office === 'bcn'){
                return bcn;
            }else if (office === 'mad') {
                return mad;
            }else if (office === 'ldn') {
                return ldn;
            }
        }
	}
})();