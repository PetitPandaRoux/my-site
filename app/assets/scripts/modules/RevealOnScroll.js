import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll{
    constructor(elements,offset){
        this.itemToReveal=elements;
        this.offsetPercentage=offset;
        this.hideInitially();
        this.createWaypoints();

    }

    hideInitially(){
        this.itemToReveal.addClass("reveal-item");
    }

    createWaypoints(){
        var that=this;
        this.itemToReveal.each(function(){
            //alert("testing");
            var currentItem=this;
            new Waypoint({
                element:currentItem,
                handler:function(){
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset:that.offsetPercentage,

            });
        });
    }
}

export default RevealOnScroll;
