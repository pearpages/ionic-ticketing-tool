(function() {
    'use strict';

    angular.module("tickets-mocks")
    .factory('UserMocks',[UserMocks]);

    function UserMocks() {

        var self = this;

        self.bcn = null;
        self.mad = null;
        self.ldn = null;
        self.helpdesks = null;

        activate();

        return {
            getOffice: getOffice,
            getAllOffices: getAllOffices,
            getUserId: getUserId,
            getHelpdesks: getHelpdesks
        };

        function activate() {
            createMockUsers();
        }

        function getHelpdesks() {
            return self.helpdesks;
        }

        function createMockUsers() {

            var helpdesks = [];
            helpdesks.push({name: 'Beulah  Neal', office: 'bcn'});
            helpdesks.push({name: 'Damon   Mckenzie', office: 'bcn'});
            helpdesks.push({name: 'Judith  Butler', office: 'bcn'});
            helpdesks.push({name: 'Thelma  Jones', office: 'bcn'});
            helpdesks.push({name: 'Phillip Sharp', office: 'bcn'});
            helpdesks.push({name: 'Debbie  Figueroa', office: 'bcn'});

            var ldn = [];
            ldn.push({name: 'Mattie  Walters', office: 'ldn'});
            ldn.push({name: 'Luz Hogan', office: 'ldn'});
            ldn.push({name: 'Ruth    Mendoza', office: 'ldn'});
            ldn.push({name: 'Daniel  Sparks', office: 'ldn'});
            ldn.push({name: 'Jo  Burton', office: 'ldn'});
            ldn.push({name: 'Leo Carlson', office: 'ldn'});
            ldn.push({name: 'Brenda  Boone', office: 'ldn'});
            ldn.push({name: 'Elmer   Brown', office: 'ldn'});
            ldn.push({name: 'Tony    Simon', office: 'ldn'});
            ldn.push({name: 'Elsie   Washington', office: 'ldn'});
            ldn.sort();

            var mad = [];
            mad.push({name: 'Nancy   Castro', office: 'mad'});
            mad.push({name: 'Kristi  Cohen', office: 'mad'});
            mad.push({name: 'Luis    Reynolds', office: 'mad'});
            mad.push({name: 'Catherine   Curtis', office: 'mad'});
            mad.push({name: 'Jerome  Bishop', office: 'mad'});
            mad.push({name: 'Dustin  Nichols', office: 'mad'});
            mad.push({name: 'Freddie Stewart', office: 'mad'});
            mad.push({name: 'Evelyn  Thomas', office: 'mad'});
            mad.push({name: 'Henry   Pierce', office: 'mad'});
            mad.push({name: 'Fannie  Watts', office: 'mad'});
            mad.push({name: 'Emma    Mcdaniel', office: 'mad'});
            mad.push({name: 'Otis    Lloyd', office: 'mad'});
            mad.push({name: 'Cheryl  Owens', office: 'mad'});
            mad.push({name: 'Della   Mccormick', office: 'mad'});
            mad.push({name: 'Wendy   Hopkins', office: 'mad'});
            mad.push({name: 'Jeff    Stokes', office: 'mad'});
            mad.push({name: 'Jerry   Barton', office: 'mad'});
            mad.push({name: 'Rochelle    Walker', office: 'mad'});
            mad.push({name: 'Dennis  Cannon', office: 'mad'});
            mad.push({name: 'Wilma   Hunt', office: 'mad'});
            mad.push({name: 'Jeannette   Fisher', office: 'mad'});
            mad.push({name: 'Eva Norton', office: 'mad'});
            mad.push({name: 'Beth    Ford', office: 'mad'});
            mad.push({name: 'Brad    Moss', office: 'mad'});
            mad.push({name: 'Marian  Price', office: 'mad'});
            mad.push({name: 'Francisco   Martin', office: 'mad'});
            mad.push({name: 'Delbert Medina', office: 'mad'});
            mad.push({name: 'Brooke  Stanley', office: 'mad'});
            mad.push({name: 'Carmen  Gilbert', office: 'mad'});
            mad.push({name: 'Carol   May', office: 'mad'});
            mad.push({name: 'Steven  Bennett', office: 'mad'});
            mad.push({name: 'Cora    Ferguson', office: 'mad'});
            mad.push({name: 'Emanuel Schmidt', office: 'mad'});
            mad.sort();

            var bcn = [];
            bcn.push({name: 'Raquel  Holloway', office: 'bcn'});
            bcn.push({name: 'Carrie  Rodriguez', office: 'bcn'});
            bcn.push({name: 'Cedric  Perkins', office: 'bcn'});
            bcn.push({name: 'Herbert Vega', office: 'bcn'});
            bcn.push({name: 'Garry   Morgan', office: 'bcn'});
            bcn.push({name: 'Gerardo Moore', office: 'bcn'});
            bcn.push({name: 'Dora    Garrett', office: 'bcn'});
            bcn.push({name: 'Emilio  Lawson', office: 'bcn'});
            bcn.push({name: 'Colleen Banks', office: 'bcn'});
            bcn.push({name: 'Juan    Freeman', office: 'bcn'});
            bcn.push({name: 'Laurence    Gutierrez', office: 'bcn'});
            bcn.push({name: 'Lester  Kennedy', office: 'bcn'});
            bcn.push({name: 'Ebony   Richardson', office: 'bcn'});
            bcn.push({name: 'Roosevelt   Saunders', office: 'bcn'});
            bcn.push({name: 'Kirk    Alvarez', office: 'bcn'});
            bcn.push({name: 'Ruby    Perez', office: 'bcn'});
            bcn.push({name: 'Beulah  Neal', office: 'bcn'});
            bcn.push({name: 'Damon   Mckenzie', office: 'bcn'});
            bcn.push({name: 'Judith  Butler', office: 'bcn'});
            bcn.push({name: 'Thelma  Jones', office: 'bcn'});
            bcn.push({name: 'Phillip Sharp', office: 'bcn'});
            bcn.push({name: 'Debbie  Figueroa', office: 'bcn'});
            bcn.push({name: 'Robin   Webb', office: 'bcn'});
            bcn.push({name: 'Joe Munoz', office: 'bcn'});
            bcn.push({name: 'Jill    Wilkerson', office: 'bcn'});
            bcn.push({name: 'Cary    Fitzgerald', office: 'bcn'});
            bcn.push({name: 'Bill    Bradley', office: 'bcn'});
            bcn.push({name: 'Laverne Ruiz', office: 'bcn'});
            bcn.push({name: 'Forrest Fuller', office: 'bcn'});
            bcn.push({name: 'Julian  Kim', office: 'bcn'});
            bcn.push({name: 'Cecelia George', office: 'bcn'});
            bcn.push({name: 'Rene    Barber', office: 'bcn'});
            bcn.push({name: 'Angelina    Howell', office: 'bcn'});
            bcn.push({name: 'Stephanie   Olson', office: 'bcn'});
            bcn.push({name: 'Christopher Love', office: 'bcn'});
            bcn.push({name: 'Terry   Vaughn', office: 'bcn'});
            bcn.push({name: 'Alexander   Barnett', office: 'bcn'});
            bcn.push({name: 'Kim Bryant', office: 'bcn'});
            bcn.push({name: 'Jeremy  Mcgee', office: 'bcn'});
            bcn.push({name: 'Gwen    Johnson', office: 'bcn'});
            bcn.push({name: 'Grady   Pope', office: 'bcn'});
            bcn.push({name: 'Joanna  Blake', office: 'bcn'});
            bcn.push({name: 'Angel   Blair', office: 'bcn'});
            bcn.push({name: 'Mercedes    Waters', office: 'bcn'});
            bcn.push({name: 'Rolando Mccoy', office: 'bcn'});
            bcn.push({name: 'Allan   Lynch', office: 'bcn'});
            bcn.push({name: 'Karl    Cox', office: 'bcn'});
            bcn.push({name: 'Janie   Murray', office: 'bcn'});
            bcn.push({name: 'Benny   Ortiz', office: 'bcn'});
            bcn.push({name: 'Patty   Benson', office: 'bcn'});
            bcn.push({name: 'Phil    Marsh', office: 'bcn'});
            bcn.push({name: 'Brian   Norman', office: 'bcn'});
            bcn.push({name: 'Judy    Swanson', office: 'bcn'});
            bcn.push({name: 'Teresa  Weber', office: 'bcn'});
            bcn.push({name: 'Gretchen    Rogers', office: 'bcn'});
            bcn.push({name: 'Cynthia Hill', office: 'bcn'});
            bcn.push({name: 'Kristin Poole', office: 'bcn'});
            bcn.sort();

            self.bcn = bcn;
            self.mad = mad;
            self.ldn = ldn;
            self.helpdesks = helpdesks;

        }

        function getUserId(name) {
            var temp = name.toLowerCase().split(' ');
            var res = temp[0][0] + temp[temp.length-1];
            return res;
        }

        function getAllOffices() {
            var res = {};
            res.ldn = getOffice('ldn');
            res.bcn = getOffice('bcn');
            res.mad = getOffice('mad');
            return res;
        }

        function getOffice(office) {
            if(office === 'bcn'){
                return self.bcn;
            }else if (office === 'mad') {
                return self.mad;
            }else if (office === 'ldn') {
                return self.ldn;
            }
        }
    }
})();