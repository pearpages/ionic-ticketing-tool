(function() {
    'use strict';
    angular.module("ticketing-users",['angular-cache'])
    // .config(function (CacheFactoryProvider) {
    //     angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
    // })
    .run(function(CacheFactory) {
        CacheFactory.createCache("ticketingUsersCache", {storageMode: "localStorage"});
    });
})();