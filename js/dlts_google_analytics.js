; (function ($) {
  Drupal.behaviors.dlts_google_analytics = {
    attach: function (context, settings) {
      if (settings.dlts_google_analytics) {
        var enable = settings.dlts_google_analytics.enable;
        var debug = settings.dlts_google_analytics.debug;
        if (enable === 1 && jQuery.isFunction(window.ga)) {
          window.ga("create", settings.dlts_google_analytics.ua, { "cookieDomain": settings.dlts_google_analytics.cookieDomain });
          window.ga("set", "anonymizeIp", settings.dlts_google_analytics.anonymizeIp);

          if (settings.dlts_google_analytics.dimensions.collections &&
              settings.dlts_google_analytics.dimensions.collections.length > 0) {

            /* We will only record the first collection for now.  Later we might start
             tracking the full list of collections once we come up with a strategy.
             We can't use pageviews because that would cause hit inflation.
             Event tracking might work but requires planning, and it's possible
             Google rate throttling would cause problems.

             So one day, we might put something like this here:

             $.each(settings.dlts_google_analytics.collections, function(key, collection) {
               window.ga("set", "dimension1", collection.name);
               window.ga('send', {
                 hitType: 'event',
                 dimension1: collection_name,
                 eventCategory: 'Collection Usage',
                 eventAction: 'view',
                 eventLabel: 'Asset viewed'
               });
             });

             For more details, refer to:
                 https://jira.nyu.edu/browse/DLTSVIDEO-83
                 https://jira.nyu.edu/browse/DLTSVIDEO-67
             */

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
