$(function(){
//   alert('a');
    //logoの表示
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });
    $('.slider').delay(1500).fadeIn(1500);
    $('.sizing').delay(2000).fadeIn(2000);
    $('.sizing2').delay(2500).fadeIn(3000);
    $(".header").delay(1800).queue(function () {
    $(this).addClass('fixed-top').addClass('addClass');
  });
});