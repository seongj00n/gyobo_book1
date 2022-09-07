$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"추천" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );

       // for문 (8개)
        var boxs = document.getElementsByClassName('content_box1');


        for(var i=0; i<boxs.length; i++){

          $("#list_1 >.content_box1").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_1 >.content_box1").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_1 >.content_box1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,30);

          $("#list_1 >.content_box1").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $("#list_1 >.content_box1").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

        }




  });