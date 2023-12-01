//============= include-html ====================
// $(function () {
//   $("+[include-html]").each(function () {
//     var t = $(this).attr("include-html"),
//       u = this.id;
//     jQuery.ajax({
//       url: t,
//       success: function (t) {
//         $("#" + u).html(t)
//       },
//       error: function (n, c, i) {
//         var s = n.status + ": " + n.statusText;
//         $("#" + u).html(t + "-" + s)
//       }
//     })
//   })
// });


document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("[include-html]");
    elements.forEach(function (element) {
      var url = element.getAttribute("include-html");
      var id = element.id;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.getElementById(id).innerHTML = xhr.responseText;
          } else {
            var statusText = xhr.status + ": " + xhr.statusText;
            document.getElementById(id).innerHTML = url + " - " + statusText;
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  });
  



  // pricing --------
  jQuery.noConflict();
  (function ($) {
    $(function () {
      var toggleSwitch = $("#js-pricing-switch input");
  
      (function () {
        $(toggleSwitch).change(function () {
          // Change prices for plans
          togglePriceContent();
  
          // Toggle monthly/yearly style
          $(".js-switch-label-monthly, .js-switch-label-yearly").toggleClass(
            "active"
          );
        });
      })();
  
      function togglePriceContent() {
        if ($(toggleSwitch).is(":checked") === true) {
          // if toggle is yearly
          $(".js-toggle-price-content").each(function () {
            $(this).html($(this).data("price-yearly"));
          });
        } else {
          // if toggle is monthly
          $(".js-toggle-price-content").each(function () {
            $(this).html($(this).data("price-monthly"));
          });
        }
      }
    });
  })(jQuery);
  
  window.odometerOptions = {
    duration: 400
  };