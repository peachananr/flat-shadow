/* ===========================================================
 * jquery-flatshadow.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A small jQuery plugin that will automatically
 * cast a shadow creating depth for your flat UI elements
 * https://github.com/peachananr/flat-shadow
 *
 * ========================================================== */

!function($){
  var colors = new Array("#1ABC9C","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22", "#e74c3c");
  var angles = new Array("NE","SE","SW", "NW");

  var defaults = {
		fade: false,
		color: "random",
		boxShadow: false,
		angle: "random"
	};

  function convertHex(hex,opacity){
      hex = hex.replace('#','');
      r = parseInt(hex.substring(0,2), 16);
      g = parseInt(hex.substring(2,4), 16);
      b = parseInt(hex.substring(4,6), 16);

      result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
      return result;
  }

  function colorLuminance(hex, lum) {
  	// validate hex string
  	hex = String(hex).replace(/[^0-9a-f]/gi, '');
  	if (hex.length < 6) {
  		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  	}
  	lum = lum || 0;
  	// convert to decimal and change luminosity
  	var rgb = "#", c, i;
  	for (i = 0; i < 3; i++) {
  		c = parseInt(hex.substr(i*2,2), 16);
  		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
  		rgb += ("00"+c).substr(c.length);
  	}
  	return rgb;
  }

  $.fn.flatshadow = function(options){
    var settings = $.extend({}, defaults, options);

    return this.each(function(){
      el = $(this);
      if (settings.fade == true) {
        width = Math.round(el.outerWidth() / 3);
        height = Math.round(el.outerHeight() / 3);
      } else {
        width = Math.round(el.outerWidth());
        height = Math.round(el.outerHeight());
      }

      if (settings.boxShadow != false) {
        var bg_color = settings.boxShadow;
      }

      if (el.attr('data-color')) {
        var color = el.attr('data-color');
      } else {
        var color = settings.color;
      }
      if (color == "random") {
        color = colors[Math.floor(Math.random() * colors.length)];

      }

      if (el.attr('data-angle')) {
        var angle = el.attr('data-angle');
      } else {
        var angle = settings.angle;
      }
      if (angle == "random") {
        angle = angles[Math.floor(Math.random() * angles.length)];
      }

      var darkercolor = colorLuminance(color, -0.3);
      var text_shadow = "";

      if (settings.boxShadow != false) {
        var box_shadow = "";
      } else {
        var box_shadow = "none";
      }

      var iLimit = angle == 'E' ? width : height;
      var text_color = darkercolor;
      for( var i=1; i <= iLimit; i++ ) {
        if (settings.fade != false) {
          text_color = convertHex( darkercolor, 100 - i/iLimit * 100 );
        }
        switch (angle) {
          case 'N':
            if (settings.boxShadow != false) box_shadow += "0px " + (i * 2) * -1 + "px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += "0px " + i * -1 + "px 0px " + text_color;
            break;
          case 'NE':
            if (settings.boxShadow != false) box_shadow += i * 2 + "px " + (i * 2) * -1 + "px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += i + "px " + i * -1 + "px 0px " + text_color;
            break;
          case 'E':
            if (settings.boxShadow != false) box_shadow += i * 2 + "px " + "0px 0px " + convertHex( bg_color, (50 - i/ width * 100)  );
            text_shadow += i + "px " + "0px 0px " + text_color;
            break;
          case 'SE':
            if (settings.boxShadow != false) box_shadow += i * 2 + "px " + i * 2 + "px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += i + "px " + i + "px 0px " + text_color;
            break;
          case 'S':
            if (settings.boxShadow != false) box_shadow += "0px " + i * 2 + "px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += "0px " + i + "px 0px " + text_color;
            break;
          case 'SW':
            if (settings.boxShadow != false) box_shadow += (i * 2) * -1 + "px " + i * 2 + "px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += i * -1 + "px " + i + "px 0px " + text_color;
            break;
          case 'W':
            if (settings.boxShadow != false) box_shadow += (i * 2) * -1 + "px " + "0px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += i * -1 + "px " + "0px 0px " + text_color;
            break;
          case 'NW':
            if (settings.boxShadow != false) box_shadow += (i * 2) * -1 + "px " + (i * 2) * -1 + "px 0px " + convertHex( bg_color, (50 - i/ height * 100)  );
            text_shadow += i * -1 + "px " + i * -1 + "px 0px " + text_color;
            break;
        }
        if (i != iLimit) {
           text_shadow += ", ";
           box_shadow += ", ";
         }
      }
      el.css({
        "background": color,
        "color": colorLuminance(color, 1),
        "text-shadow": text_shadow,
        "box-shadow": box_shadow
      });
    });
  }

}(window.jQuery);


