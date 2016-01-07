module.exports = function() {

    var self = this;

    self.categories = null;

    activate();

    return {
        getAll: getAll,
        getDescription: getDescription,
        randomCategory: randomCategory
    };

    function getAll() {
        return self.categories;
    }

    function randomCategory() {
        return Math.ceil(Math.random() * 6);
    }

    function getDescription(id) {
        if (id === null) {
            return '';
        } else {
            for (var i = 0; i < self.categories.length; i++) {
                if (id === self.categories[i].id) {
                    if (self.categories[i].description === null) {
                        return 'Other';
                    } else {
                        return self.categories[i].description;
                    }
                }
            }
        }
    }

    function activate() {
        self.categories = [{
            id: 1,
            group: 'Emails',
            description: 'Emails on Outlook'
        }, {
            id: 2,
            group: 'Printers',
            description: 'Network problem'
        }, {
            id: 3,
            group: 'Applications',
            description: 'AIM Underwriting'
        }, {
            id: 4,
            group: 'Telephony',
            description: 'Phone Configuration'
        }, {
            id: 5,
            group: 'Printers',
            description: 'Replace toner'
        }, {
            id: 6,
            group: 'Other',
            description: null
        }, ];
    }

}();
