(function() {
	'use strict';

	angular.module("new-ticket")
	.controller('NewTicketController',['myUsers','myTickets',NewTicketController]);

	function NewTicketController(myUsers,myTickets) {
		var vm = this;

		vm.ticket = {};
        vm.view = null;
        vm.show = show;
        vm.names = null;
        vm.transformName = transformName;
        vm.selectName = selectName;

        activate();

        function activate() {
            vm.ticket.completed = false;
            myUsers.isLogged();
            vm.view = 'form';
            vm.names = getRandomNames();
        }

        function show(id) {
            vm.view = id;
        }
        
        function transformName(name) {
            var temp = name.toLowerCase().split(' ');
            var res = temp[0][0] + temp[temp.length-1];
            return res;
        }

        function selectName(name) {
            vm.show('form');
        }

        function getRandomNames() {

            var names = [];
            names.push('Raquel  Holloway');
            names.push('Carrie  Rodriguez');
            names.push('Cedric  Perkins');
            names.push('Herbert Vega');
            names.push('Garry   Morgan');
            names.push('Gerardo Moore');
            names.push('Dora    Garrett');
            names.push('Emilio  Lawson');
            names.push('Colleen Banks');
            names.push('Juan    Freeman');
            names.push('Laurence    Gutierrez');
            names.push('Lester  Kennedy');
            names.push('Ebony   Richardson');
            names.push('Roosevelt   Saunders');
            names.push('Kirk    Alvarez');
            names.push('Ruby    Perez');
            names.push('Beulah  Neal');
            names.push('Damon   Mckenzie');
            names.push('Judith  Butler');
            names.push('Thelma  Jones');
            names.push('Phillip Sharp');
            names.push('Debbie  Figueroa');
            names.push('Robin   Webb');
            names.push('Joe Munoz');
            names.push('Jill    Wilkerson');
            names.push('Cary    Fitzgerald');
            names.push('Bill    Bradley');
            names.push('Laverne Ruiz');
            names.push('Forrest Fuller');
            names.push('Julian  Kim');
            names.push('Cecelia George');
            names.push('Rene    Barber');
            names.push('Angelina    Howell');
            names.push('Stephanie   Olson');
            names.push('Christopher Love');
            names.push('Terry   Vaughn');
            names.push('Alexander   Barnett');
            names.push('Kim Bryant');
            names.push('Jeremy  Mcgee');
            names.push('Gwen    Johnson');
            names.push('Grady   Pope');
            names.push('Joanna  Blake');
            names.push('Angel   Blair');
            names.push('Mercedes    Waters');
            names.push('Rolando Mccoy');
            names.push('Allan   Lynch');
            names.push('Karl    Cox');
            names.push('Janie   Murray');
            names.push('Benny   Ortiz');
            names.push('Patty   Benson');
            names.push('Phil    Marsh');
            names.push('Brian   Norman');
            names.push('Judy    Swanson');
            names.push('Teresa  Weber');
            names.push('Gretchen    Rogers');
            names.push('Cynthia Hill');
            names.push('Kristin Poole');
            names.push('Nancy   Castro');
            names.push('Kristi  Cohen');
            names.push('Luis    Reynolds');
            names.push('Catherine   Curtis');
            names.push('Jerome  Bishop');
            names.push('Dustin  Nichols');
            names.push('Freddie Stewart');
            names.push('Evelyn  Thomas');
            names.push('Henry   Pierce');
            names.push('Fannie  Watts');
            names.push('Emma    Mcdaniel');
            names.push('Otis    Lloyd');
            names.push('Cheryl  Owens');
            names.push('Della   Mccormick');
            names.push('Wendy   Hopkins');
            names.push('Jeff    Stokes');
            names.push('Jerry   Barton');
            names.push('Rochelle    Walker');
            names.push('Dennis  Cannon');
            names.push('Wilma   Hunt');
            names.push('Jeannette   Fisher');
            names.push('Eva Norton');
            names.push('Beth    Ford');
            names.push('Brad    Moss');
            names.push('Marian  Price');
            names.push('Francisco   Martin');
            names.push('Delbert Medina');
            names.push('Brooke  Stanley');
            names.push('Carmen  Gilbert');
            names.push('Carol   May');
            names.push('Steven  Bennett');
            names.push('Cora    Ferguson');
            names.push('Emanuel Schmidt');
            names.push('Mattie  Walters');
            names.push('Luz Hogan');
            names.push('Ruth    Mendoza');
            names.push('Daniel  Sparks');
            names.push('Jo  Burton');
            names.push('Leo Carlson');
            names.push('Brenda  Boone');
            names.push('Elmer   Brown');
            names.push('Tony    Simon');
            names.push('Elsie   Washington');
            return names;
        }
	}
})();