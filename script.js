$(function(){

  $('#thumbnail img').on('mouseover', function(){

    // ホバーされた画像のパスを取得
    let img_src = $(this).attr("src");

    // メインと同じなら実行しない
    if($('#mainvisual img').attr("src") != img_src) {

      // 0.5秒のフェードイン・アウトし、ホバーされた画像のパスを変更
      $('#mainvisual img').fadeOut(500, function() {
        $("#mainvisual img").attr({src:img_src});
        $("#mainvisual img").fadeIn(500);
      })
    }
  });

});