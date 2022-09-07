$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"여행" },
    headers:{Authorization: "KakaoAK e7e3145d7bb1a8d79566a3f31dc0215a"}
  })
  .done(function( msg ) {
    console.log( msg );



    var boxs = document.getElementsByClassName('content_box0000');


        for(var i=0; i<boxs.length; i++){

          $("#list_0 >.content_box0000").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $("#list_0 >.content_box0000").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $("#list_0 >.content_box0000").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


          var str=msg.documents[i].contents;
          var str2=str.substring(0,40);

        }

  });