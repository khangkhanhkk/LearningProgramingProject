$(document).ready(function(){
  $("#loadtime").addClass("hidden");
  //show headline
  $.ajax({
    type: "GET",
    url: "https://gnews.io/api/v4/top-headlines?token=8415128c73104ee6f766bc28478993d0&lang=en",
    dataType: 'json', //return data -> JSON
    beforeSend: function () {},
    success: function (data) {
      console.log(data);
        let title ="";
        let date ="";
        let des ="";
        let link ="";
        $("#newslist").html(''); 
        $.each(data.articles,function(){
          console.log($(this));
          title = $(this)[0].title + "<br>";
          date = $(this)[0].publishedAt + "<br>";
          des = $(this)[0].description + "<br>";
          link = $(this)[0].url;
          picture = $(this)[0].image;
          $("#newslist").append("<div class='ncontainer'><img src=" + picture + " class='ftimg'>" + "<div class='imgtxt'><b><a target='_blank' href=" + link + ">" + title + "</a></b><i>" + date +"</i><b>" + des+"</b></div></div><br><br>");
      });      

    },
    complete: function () {},
}); 
//open search box
  $("#btn1").click(function(){
    $('.backdrop, .box').animate({'opacity':'0.5'},300,'linear');
    $('.box').animate({'opacity':'1.00'},300,'linear');
    $(".backdrop, .box").css('display','block');
    $("#")
  });
  $('.close').click(function(){
    close_box();
  });
  $('.backdrop').click(function(){
    close_box();
  });

  function close_box(){
    $('.backdrop, .box').animate({'opacity':'0'},300,'linear',function(){
      $(".backdrop, .box").css('display','none');
    });
  };
//search
  $("#btn2").click(function(){
  
    let topics = $("#topics").val();
    let limit =$("#nums").val(); 
    let keywords = $("#keywordsearch").val();
    $.ajax({
      type: "GET",
      url: "https://gnews.io/api/v4/search?q=" + keywords + "&token=8415128c73104ee6f766bc28478993d0&lang=en&topic="+topics+"&max="+limit,
      dataType: 'json', //return data -> JSON
      beforeSend: function () { // Before sending the request, remove the .hidden class from the spinner and default to inline-block.
          $("#loader").removeClass("hidden");
         
      },
      success: function (data) {
        console.log(data);
          let title ="";
          let date ="";
          let des ="";
          let link ="";
          $("#newslist").html(''); 
          $.each(data.articles,function(){
            console.log($(this));
            title = $(this)[0].title + "<br>";
            date = $(this)[0].publishedAt + "<br>";
            des = $(this)[0].description + "<br>";
            link = $(this)[0].url;
            picture = $(this)[0].image;
            $("#newslist").append("<div class='ncontainer'><img src=" + picture + " class='ftimg'>" + "<div class='imgtxt'><a target='_blank' href=" + link + ">" + title + "</a><i>" + date +"</i><b>" + des+"</b></div></div><br><br>");
        });      

      },
      complete: function () { // Set complete callback, adding the .hidden class and hiding the spinner, show the load time.
        $("#loader").addClass("hidden");
     
       
    },
  });
});
});
    
  /* datefrom for search filter by time, not completed
        var lhour = objToday.setHours(objToday.getHours()-1);
        var lday = objToday.setDate(objToday.getDate()-1);
        var lweek = objToday.setDate(objToday.getDate()-7);
        var lmonth = objToday.setMonth(objToday.getMonth()-1);
        var lyear = objToday.setFullYear(objToday.getFullYear()-1);
        var dateFrom = objToday.toISOString();
        console.log(dateFrom);*/

        /*loading time for showing load time not completed
          var start = new Date().getTime();
          var now = new Date().getTime();
          var latency = now - start;
          $(#loadtime).html("Results loading time " + latency/1000 + "seconds");
        */
  /*  });  */

