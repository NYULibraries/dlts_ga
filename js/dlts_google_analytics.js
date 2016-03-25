; (function ($) {
  Drupal.behaviors.dlts_google_analytics = {
    attach: function (context, settings) {
      if (settings.dlts_google_analytics) {
        var enable = settings.dlts_google_analytics.enable;
        var debug = settings.dlts_google_analytics.debug;
        if (enable === 1 && jQuery.isFunction(window.ga)) {
          window.ga("create", settings.dlts_google_analytics.ua, { "cookieDomain": settings.dlts_google_analytics.cookieDomain });
          window.ga("set", "anonymizeIp", settings.dlts_google_analytics.anonymizeIp);
          // https://jira.nyu.edu/browse/DLTSVIDEO-83 
          // https://jira.nyu.edu/browse/DLTSVIDEO-67
          /**
          if (jQuery.isArray(settings.dlts_google_analytics.dimensions.collections)) {
            $.each(settings.dlts_google_analytics.collections, function(key, collection) {
              window.ga("set", "dimension1", collection.name);
            });            
          }
          */
          /* we only send the first item in the collections dimensions */
          if (settings.dlts_google_analytics.dimensions.collections &&
              settings.dlts_google_analytics.dimensions.collections.length > 0) {
            window.ga("set", "dimension1", settings.dlts_google_analytics.dimensions.collections[0].name);
          }          
          if (debug) {
            console.log('GoogleAnalyticsObject: ' + GoogleAnalyticsObject);
            console.log(settings.dlts_google_analytics);
          }
          else {
            window.ga("send", "pageview");
          }
        }
      }
    }    
  }
})(jQuery);
