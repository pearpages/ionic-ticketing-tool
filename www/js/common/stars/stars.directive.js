/**
 * It's used to show stars for the evaluation mark.
 */
(function() {
    'use strict';

    angular.module("ticketing")
    .directive('stars',[stars]);

    function stars() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope:{
                stars: '@'
            },
            templateUrl: 'js/common/stars/stars.html',
        };
        
            function controller() {
                var vmd = this;

                vmd.getStars = getStars;

                activate();
                
                function activate() {
                    //directives only activate once
                }

                function getStars() {
                    var html = [];

                    for(var i=0; i<parseInt(vmd.stars); i++) {
                        html.push('<i class="icon ion-star"></i>');
                    }
                    return html.join('');
                }
            }
        }
    })();