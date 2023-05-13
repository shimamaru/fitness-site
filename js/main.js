$(function () {
    $('#contents div[id != "tab1"]').hide();
    
    $("a").click(function () {

        $('#contents  div').hide();

        $($(this).attr("href")).fadeIn();

        $(".content").removeClass("content");

        $(this).addClass("current");
        
        return false;

    });
});

new ScrollHint('.price-wrapper', {
  suggestiveShadow: true,
  remainingTime: 5000,
  i18n: {
    scrollable: 'スクロールできます'
  }
  });
// swiper

const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination"
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


function BgFadeAnime() {

    // 背景色が伸びて出現（左から右）
    $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgLRextend'); // 画面内に入ったらbgLRextendというクラス名を追記
        } else {
            $(this).removeClass('bgLRextend'); // 画面外に出たらbgLRextendというクラス名を外す
        }
    });

    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgappear'); // 画面内に入ったらbgappearというクラス名を追記
        } else {
            $(this).removeClass('bgappear'); // 画面外に出たらbgappearというクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//


//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) { //上から200pxスクロールしたら
        $('#page-top').removeClass('RightMove'); //#page-topについているRightMoveというクラス名を除く
        $('#page-top').addClass('LeftMove'); //#page-topについているLeftMoveというクラス名を付与
    } else {
        if (
            $('#page-top').hasClass('LeftMove')) { //すでに#page-topにLeftMoveというクラス名がついていたら
            $('#page-top').removeClass('LeftMove'); //LeftMoveというクラス名を除き
            $('#page-top').addClass('RightMove'); //RightMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
});


// 

// テキストの出現

$(function () {
    $(window).on('load scroll', function () {
        $('.section-02-content,.section-03-content,.item').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var height = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('active-text');
            }
        });
    });

});



$(function () {
    $(".try-menu li").click(function () {
        var num = $(".try-menu li").index(this);
        $("try-menu li").removeClass("active");
        // $(this).addClass('active');
        $(".try-content").removeClass("active").eq(num).addClass("active");
        $(".try-menu li").removeClass("active").eq(num).addClass("active");
    });;
});

// アコーディオン 01

$(function () {
    $('.q-01-wrapper').click(function () {
        $('.a-01').slideToggle();
        $('.a-01').toggleClass('a-01-flex');
        $('.arrow-01').toggleClass('arrow-01-down');
    });
});

// アコーディオン 02

$(function () {
    $('.q-02-wrapper').click(function () {
        $('.a-02').slideToggle();
        $('.arrow-02').toggleClass('arrow-02-down');
    });
});
// アコーディオン 02

$(function () {
    $('.q-03-wrapper').click(function () {
        $('.a-03').slideToggle();
        $('.arrow-03').toggleClass('arrow-03-down');
    });
});


// ヘッダーの出現

$(function () {
    $(window).on('load scroll', function () {
        $('.header-show').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var height = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('active-text');
            }
        });
    });

});



// ヘッダーの固定v

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {//headerの高さ以上になったら
        $('header').addClass('fixed ');//fixedというクラス名を付与

    } else {//それ以外は
        $('header').removeClass('fixed');//fixedというクラス名を除去

    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnimeNone() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {//headerの高さ以上になったら
        $('.header-button-none').removeClass();//fixedというクラス名を付与

    } else {//それ以外は
        $('header > a').addClass('header-button-none');//fixedというクラス名を除去

    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnimeNone();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});


