; (function ($) {
  Drupal.behaviors.localhost = {
    attach: function (context, settings) {
      if (settings.localhost) {
        var enable = settings.localhost.enable;
        var debug = settings.localhost.debug;
        if (enable === 1 && jQuery.isFunction(window.ga)) {
          window.ga("create", settings.localhost.ua, { "cookieDomain": settings.localhost.cookieDomain });
          window.ga("set", "anonymizeIp", settings.localhost.anonymizeIp);
          // https://jira.nyu.edu/browse/DLTSVIDEO-83 
          // https://jira.nyu.edu/browse/DLTSVIDEO-67
          /**
          if (jQuery.isArray(settings.localhost.dimensions.collections)) {
            $.each(settings.localhost.collections, function(key, collection) {
              window.ga("set", "dimension1", collection.name);
            });            
          }
          */
          /* we only send the first item in the collections dimensions */
          if (settings.localhost.dimensions.collections &&
              settings.localhost.dimensions.collections.length > 0) {
            window.ga("set", "dimension1", settings.localhost.dimensions.collections[0].name);
          }          
          if (debug) {
            console.log('GoogleAnalyticsObject: ' + GoogleAnalyticsObject);
            console.log(settings.localhost);
          }
          else {
            window.ga("send", "pageview");
          }
        }
      }
    }    
  }
})(jQuery);
