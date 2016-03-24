; (function ($) {
  Drupal.behaviors.dlts_ga = {
    attach: function (context, settings) {
      if (settings.dlts_ga) {
        var enable = settings.dlts_ga.enable;
        var debug = settings.dlts_ga.debug;        
        if (enable === 1 && jQuery.isFunction(window.ga)) {
          window.ga("create", settings.dlts_ga.ua, { "cookieDomain": settings.dlts_ga.cookieDomain });
          window.ga("set", "anonymizeIp", settings.dlts_ga.anonymizeIp);
          if (jQuery.isArray(settings.dlts_ga.collections)) {
            $.each(settings.dlts_ga.collections, function(key, collection) {
              window.ga("set", "dimension1", collection.name);
            });            
          }
          if (debug) {
            console.log(GoogleAnalyticsObject);
            console.log(settings.dlts_ga);
          }
          window.ga("send", "pageview");
        }
      }
    }    
  }
})(jQuery);
