/**
 *
 * Given a ticket: <badge ticket="ticket"></badge>
 * Renders an html badge with the appropiate color for its state
 */
(function() {
    'use strict';

    angular.module("ticketing")
    .directive('badge',[badge]);

    function badge() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope:{
                ticket: '='
            },
            templateUrl: 'js/common/badge/badge.html',
        };
        
            //call ang-link if needed
            
            function controller() {
                var vmd = this;

                vmd.badgeColor = badgeColor;
                
                activate();
                
                function activate() {
                    //directives only activate once
                }

                function badgeColor() {
                    if(vmd.ticket){
                        if(vmd.ticket.status === 'open'){
                            return 'badge-balanced';
                        } else if (vmd.ticket.status === 'closed') {
                            return 'badge-assertive';
                        }    
                    }
                    
                }
            }
        }
    })();