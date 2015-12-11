(function() {
    'use strict';

    angular.module("tickets-mocks")
    .factory('CategoriesMocks',[CategoriesMocks]);

    function CategoriesMocks() {

        var self = this;

        self.categories = null;
        
        activate();

        return {
            getAll: getAll,
            getDescription: getDescription
        };

        function getAll() {
            return self.categories;
        }

        function getDescription(id) {
            if(id === null){
                return '';
            } else {
                for(var i = 0; i < self.categories.length; i++) {
                    if (id === self.categories[i].id){
                        if(self.categories[i].description === null){
                            return 'Other';
                        }else {
                            return self.categories[i].description;
                        }
                    }
                }
            }
        }

        function activate() {
            self.categories = [
                {id: 23, group: 'Emails', description: 'Emails on Outlook'},
                {id: 24, group: 'Printers', description: 'Network problem'},
                {id: 25, group: 'Applications', description: 'AIM Underwriting'},
                {id: 26, group: 'Telephony', description: 'Phone Configuration'},
                {id: 27, group: 'Printers', description: 'Replace toner'},
                {id: 28, group: 'Other', description: null},
            ];
        }
    }
})();