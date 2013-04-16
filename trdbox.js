/* 	
TrdBox
Very simple lightbox to display html-content.
*/

;(function($) {
  "use strict";

	var TrdBox = function(el, data, opts) {
		this.$el  = $(el);
        this.data = data;
		this.opts = opts;
        this.visible = false;

		var trdbox = this;
		
		this.$el.on('click', function(){
			trdbox.show();
			return false;
		});
		
		$("body").on('click', "#trdbox", function(){
			trdbox.close();
		});
		
		$("body").on('click', "#trdbox_content", function(e) {
			e.stopPropagation();
		});
		
		this.show = function(){
            var $overlay = $("body").append("<div style=\"display: none;\" id=\"trdbox\"><div id=\"trdbox_content\">" + this.data + "</div><div id=\"trdbox_divhelper\"></div></div>");
            $("#trdbox").fadeIn(400);
            this.visible = true;
        }
    
		this.close = function(){
            $("#trdbox").fadeOut(400, function(){
                $("#trdbox").remove();
            });
            this.visible = false;
        }
        
        return this;
	}

	$.fn.trdbox = function(data, opts) {
		return this.each(function() {
           var el = $(this);
           if (el.data('trdbox')) return;
           var trdbox = new TrdBox(this, data, opts);
           el.data('trdbox', trdbox);
		});
	};
	
})(jQuery);