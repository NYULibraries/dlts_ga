; (function ($) {
  Drupal.behaviors.dlts_ga = {
    attach: function (context, settings) {
      if (settings.dlts_ga) {
        var enable = settings.dlts_ga.enable;
        var debug = settings.dlts_ga.debug;        
        if (enable === 1 && jQuery.isFunction(window.ga)) {
          window.ga("create", settings.dlts_ga.ua, { "cookieDomain": settings.dlts_ga.cookieDomain });
          window.ga("set", "anonymizeIp", settings.dlts_ga.anonymizeIp);
          // https://jira.nyu.edu/browse/DLTSVIDEO-83 
          // https://jira.nyu.edu/browse/DLTSVIDEO-67
          /**
          if (jQuery.isArray(settings.dlts_ga.dimensions.collections)) {
            $.each(settings.dlts_ga.collections, function(key, collection) {
              window.ga("set", "dimension1", collection.name);
            });            
          }
          */
          /* we only send the first item in the collections dimensions */
          if (jQuery.isArray(settings.dlts_ga.dimensions.collections)) {
            window.ga("set", "dimension1", settings.dlts_ga.dimensions.collections[0].name);
          }          
          if (debug) {
            console.log('GoogleAnalyticsObject: ' + GoogleAnalyticsObject);
            console.log(settings.dlts_ga);
          }
          else {
            window.ga("send", "pageview");
          }
        }
      }
    }    
  }
})(jQuery);
