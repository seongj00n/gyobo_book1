$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"여행" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );



    var boxs = document.getElementsByClassName('content_box');


        for(var i=0; i<boxs.length; i++){

          $("#list_a >.content_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_a >.content_box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_a >.content_box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,40);

          $("#list_a >.content_box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $("#list_a >.content_box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

        }

  });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"외국" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );


          // for문 (8개)
        var boxs = document.getElementsByClassName('content_box');


        for(var i=0; i<boxs.length; i++){

          $("#list_b >.content_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_b >.content_box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_b >.content_box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,50);

          $("#list_b >.content_box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $("#list_b >.content_box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

        }
  });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"e" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );

       // for문 (8개)
        var boxs = document.getElementsByClassName('content_box');


        for(var i=0; i<boxs.length; i++){

          $("#list_c >.content_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_c >.content_box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_c >.content_box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,50);

          $("#list_c >.content_box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $("#list_c >.content_box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

        }




  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"경제" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );

       // for문 (8개)
        var boxs = document.getElementsByClassName('content_box');


        for(var i=0; i<boxs.length; i++){

          $("#list_d >.content_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_d >.content_box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_d >.content_box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,50);

          $("#list_d >.content_box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $("#list_d >.content_box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

        }




  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"음악" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );

       // for문 (8개)
        var boxs = document.getElementsByClassName('content_box');


        for(var i=0; i<boxs.length; i++){

          $("#list_e >.content_box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_e >.content_box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_e >.content_box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,50);

          $("#list_e >.content_box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $("#list_e >.content_box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

        }




  });