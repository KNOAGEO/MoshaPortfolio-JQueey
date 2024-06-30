// カルーセル ※できたっぽい→divとidを3つの項目ごとに作ったため量が多かったので解答コードに変更
$('.slider').slick({
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    arrows: false,
    pauseOnHover: false
});

// ナビゲーションメニューのアニメーション　※かなり苦戦したが実現できたオリジナルコード
$(function(){
    $('a').hover(function(){
        $(this).css('opacity','0.7');
    },function(){
        $(this).css('opacity', '1.0');
    });
});

// スクロールするとTOPアイコンが現れる　※TOPは上に戻ると消える仕組み　実現できたオリジナルコード
$(window).on('scroll', function(){
    if($(this).scrollTop() > 100) {
        $('#top-button').fadeIn();
    } else {
        $('#top-button').fadeOut();
    }

// ページ内リンクのスクロールを滑らかにする ※滑らかになりませんでした（降参
$('a[herf^="#]').click(function(){
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if(href == '#'){
        $target = $('html');
    }else {
        $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({
        'scrollTop': position
        }, speed, 'swing');
});

// スクロールするとセクションをフェードイン　※できなかった
    $(window).scroll(function(){
        const scrollAmount =$(window).scrollTop();
        const windowHeight =$(window).height();
        $('section').each(function(){
            const position = $(this).offset().top;
            if(scrollAmount > position - windowHeight + 100){
                $(this).addClass('fade-in');
            }
   });
  });



// Worksの画像をクリックしたときにモーダルで拡大表示する ※モーダル自体つくれませんでした
$('.works img').click(function(){
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
});

// 閉じるボタン
$('.close-btn').click(function(){
        $('.modal').fadeOut();
        return false
    });
});
