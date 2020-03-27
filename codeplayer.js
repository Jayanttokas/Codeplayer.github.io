
      function updateoutput(){

          $("iframe").contents().find("html").html("<html> <head> <style type='text/css'> "
            + $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() +
            "</body></html>");

          document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());
      }

        $(".togglebutton").hover(function() {
          $(this).addClass("highlightbutton");
        },function() {
          $(this).removeClass("highlightbutton");
        });

      $(".togglebutton").click(function () {
        $(this).toggleClass("active");
        $(this).removeClass("highlightbutton");
        var panelid = $(this).attr("id") + "panel";
        $("#"+ panelid).toggleClass("hidden");
        var numactivepanel= 4 - $(".hidden").length;
        $(".panel").width(($(window).width()/numactivepanel)-10);
      });

      $("textarea").height($(window).height()-$("#header").height()-15);
      $(".panel").height($(window).height()-$("#header").height()-15);
      $(".panel").width(($(window).width()/2)-10);

      updateoutput();

      $("textarea").on('change keyup paste',function () {
      updateoutput();
      });
