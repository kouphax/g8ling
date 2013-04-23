$(document).ready(function() {

    function debounce(fn, delay) {
      var timer = null;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }

    var repos = $(".repo");
    
    $("#filter").keyup(debounce(function(){
        var query = this.value.toLowerCase();
        var whereQueryDoesntMatch  = function() {
            return $(this).data("keywords").indexOf(query) === -1
        }
        
        repos.show().filter(whereQueryDoesntMatch).hide();
    }, 250));
});

