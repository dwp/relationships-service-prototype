window.onload = function() {
  if(window.history && window.history.pushState) {
    window.history.pushState('forward', null, './#forward');

    window.onpopstate = function(event) {
        if(event.state && location.hash == "#forward") {
          window.location.href = "/appointee/iteration-12/searchlight/service/application-complete";
        }
    };
  }
};
