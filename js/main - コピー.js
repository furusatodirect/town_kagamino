(function ($) {
  "use strict";

  $(document).ready(function () {
    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();

    // Sticky Navbar
    $(window).scroll(function () {
      var $navbar = $(".navbar");
      if ($(this).scrollTop() > 45) {
        $navbar.addClass("sticky-top shadow-sm");
      } else {
        $navbar.removeClass("sticky-top shadow-sm");
      }
    });

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
      items: 1,
      autoplay: false,
      loop: true,
      slideSpeed: 1000,
      smartSpeed: 1000,
      mouseDrag: true,
      touchDrag: true,
      dots: true,
      nav: true,
      navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    });

    // Modal Video
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
      console.log($videoSrc);
    });

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", "");
    });

    // Back to top button
    $(window).scroll(function () {
      var $backToTop = $(".back-to-top");
      if ($(this).scrollTop() > 300) {
        $backToTop.fadeIn("slow");
      } else {
        $backToTop.fadeOut("slow");
      }
    });

    // ボタンをクリックした時の処理
    $(".back-to-top").click(function (e) {
      e.preventDefault(); // リンクのデフォルトの動作を無効化する
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    });

    // PageLink
    $('a[href^="#"]').click(function () {
      var adjust = $(".navbar").outerHeight();
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href === "#" || href === "" ? "html" : href);
      if (target.length) {
        var position = target.offset().top - adjust;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
      }
    });

    // Swiper .swiper-step
    new Swiper(".swiper-step", {
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * swiper product detail
     */
    const mySwiperPdThumb = new Swiper(".pd_thumb", {
      slidesPerView: document.querySelectorAll(".pd_thumb .swiper-slide").length > 5 ? 5.5 : 5,
      spaceBetween: 6,
      grabCursor: true,
    });

    const mySwiperPdMain = new Swiper(".pd_main", {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 600,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: mySwiperPdThumb,
      },
    });

    // SNSリンク
    function toggleBalloon() {
      $("#share-list").toggleClass("balloon balloon1");
    }

    $("#share-list a").click(function () {
      toggleBalloon();
    });

    // アコーディオン
    $(".ac-open").hide();
    $(".ac-btn").on("click", function () {
      var $openSection = $(this).prev(".ac-open");
      $openSection.slideToggle("slow", "swing");
      $(this).toggleClass("active");
      var buttonText = $(this).text().trim();
      $(this).text(buttonText === "もっと見る" ? "閉じる" : "もっと見る");
    });

    // Cart addition
    $(".addition").hide();
    $(".go-cart").click(function () {
      $(this).parent("div").prev(".addition").fadeIn();
    });

    // ポップアップ
    $("#popupbtns, #popupbtnf").click(function () {
      $("#js-popup").show();
    });

    $("#popup-close, #popup-bg").click(function () {
      $("#js-popup").hide();
    });
  });
})(jQuery);

(function ($) {
  "use strict";

  function DeductionCalcSet() {
    this.deduction = [
      ["あなたの年収・あなたの家族構成を選択してください", "あなたの年収を選択してください", "あなたの年収を選択してください", "あなたの年収を選択してください", "あなたの年収を選択してください", "あなたの年収を選択してください"],
      ["あなたの家族構成を選択してください", "28,000円", "19,000円", "19,000円", "15,000円", "11,000円", "7,000円", "0円"],
      ["あなたの家族構成を選択してください", "31,000円", "23,000円", "23,000円", "18,000円", "14,000円", "10,000円", "3,000円"],
      ["あなたの家族構成を選択してください", "34,000円", "26,000円", "26,000円", "22,000円", "18,000円", "13,000円", "5,000円"],
      ["あなたの家族構成を選択してください", "38,000円", "29,000円", "29,000円", "25,000円", "21,000円", "17,000円", "8,000円"],
      ["あなたの家族構成を選択してください", "42,000円", "33,000円", "33,000円", "29,000円", "25,000円", "21,000円", "12,000円"],
      ["あなたの家族構成を選択してください", "45,000円", "37,000円", "37,000円", "33,000円", "29,000円", "24,000円", "16,000円"],
      ["あなたの家族構成を選択してください", "52,000円", "41,000円", "41,000円", "37,000円", "33,000円", "28,000円", "20,000円"],
      ["あなたの家族構成を選択してください", "56,000円", "45,000円", "45,000円", "40,000円", "36,000円", "32,000円", "24,000円"],
      ["あなたの家族構成を選択してください", "61,000円", "49,000円", "49,000円", "44,000円", "40,000円", "36,000円", "28,000円"],
      ["あなたの家族構成を選択してください", "65,000円", "56,000円", "56,000円", "49,000円", "44,000円", "40,000円", "31,000円"],
      ["あなたの家族構成を選択してください", "69,000円", "60,000円", "60,000円", "57,000円", "48,000円", "44,000円", "35,000円"],
      ["あなたの家族構成を選択してください", "73,000円", "64,000円", "64,000円", "61,000円", "56,000円", "48,000円", "39,000円"],
      ["あなたの家族構成を選択してください", "77,000円", "69,000円", "69,000円", "66,000円", "60,000円", "57,000円", "43,000円"],
      ["あなたの家族構成を選択してください", "81,000円", "73,000円", "73,000円", "70,000円", "64,000円", "61,000円", "48,000円"],
      ["あなたの家族構成を選択してください", "97,000円", "77,000円", "77,000円", "74,000円", "68,000円", "65,000円", "53,000円"],
      ["あなたの家族構成を選択してください", "102,000円", "81,000円", "81,000円", "78,000円", "73,000円", "70,000円", "62,000円"],
      ["あなたの家族構成を選択してください", "108,000円", "86,000円", "86,000円", "83,000円", "78,000円", "75,000円", "66,000円"],
      ["あなたの家族構成を選択してください", "113,000円", "104,000円", "104,000円", "88,000円", "82,000円", "79,000円", "71,000円"],
      ["あなたの家族構成を選択してください", "118,000円", "109,000円", "109,000円", "106,000円", "87,000円", "84,000円", "76,000円"],
      ["あなたの家族構成を選択してください", "124,000円", "114,000円", "114,000円", "111,000円", "105,000円", "89,000円", "80,000円"],
      ["あなたの家族構成を選択してください", "129,000円", "120,000円", "120,000円", "116,000円", "110,000円", "107,000円", "85,000円"],
      ["あなたの家族構成を選択してください", "135,000円", "125,000円", "125,000円", "122,000円", "116,000円", "112,000円", "90,000円"],
      ["あなたの家族構成を選択してください", "140,000円", "131,000円", "131,000円", "127,000円", "121,000円", "118,000円", "108,000円"],
      ["あなたの家族構成を選択してください", "146,000円", "137,000円", "136,000円", "132,000円", "126,000円", "123,000円", "114,000円"],
      ["あなたの家族構成を選択してください", "152,000円", "143,000円", "141,000円", "138,000円", "132,000円", "128,000円", "119,000円"],
      ["あなたの家族構成を選択してください", "159,000円", "150,000円", "148,000円", "144,000円", "138,000円", "135,000円", "125,000円"],
      ["あなたの家族構成を選択してください", "166,000円", "157,000円", "154,000円", "150,000円", "144,000円", "141,000円", "131,000円"],
      ["あなたの家族構成を選択してください", "173,000円", "164,000円", "160,000円", "157,000円", "151,000円", "147,000円", "138,000円"],
      ["あなたの家族構成を選択してください", "180,000円", "171,000円", "166,000円", "163,000円", "157,000円", "153,000円", "144,000円"],
      ["あなたの家族構成を選択してください", "218,000円", "202,000円", "194,000円", "191,000円", "185,000円", "181,000円", "172,000円"],
      ["あなたの家族構成を選択してください", "247,000円", "247,000円", "232,000円", "229,000円", "229,000円", "219,000円", "206,000円"],
      ["あなたの家族構成を選択してください", "326,000円", "326,000円", "261,000円", "258,000円", "261,000円", "248,000円", "248,000円"],
      ["あなたの家族構成を選択してください", "360,000円", "360,000円", "343,000円", "339,000円", "343,000円", "277,000円", "277,000円"],
      ["あなたの家族構成を選択してください", "395,000円", "395,000円", "377,000円", "373,000円", "377,000円", "361,000円", "361,000円"],
      ["あなたの家族構成を選択してください", "429,000円", "429,000円", "412,000円", "408,000円", "412,000円", "396,000円", "396,000円"],
      ["あなたの家族構成を選択してください", "463,000円", "463,000円", "446,000円", "442,000円", "446,000円", "430,000円", "430,000円"],
      ["あなたの家族構成を選択してください", "498,000円", "498,000円", "481,000円", "477,000円", "481,000円", "465,000円", "465,000円"],
      ["あなたの家族構成を選択してください", "533,000円", "533,000円", "516,000円", "512,000円", "516,000円", "500,000円", "500,000円"],
      ["あなたの家族構成を選択してください", "569,000円", "569,000円", "552,000円", "548,000円", "552,000円", "536,000円", "536,000円"],
      ["あなたの家族構成を選択してください", "604,000円", "604,000円", "587,000円", "583,000円", "587,000円", "571,000円", "571,000円"],
      ["あなたの家族構成を選択してください", "640,000円", "640,000円", "623,000円", "619,000円", "623,000円", "607,000円", "607,000円"],
      ["あなたの家族構成を選択してください", "773,000円", "773,000円", "754,000円", "749,000円", "754,000円", "642,000円", "642,000円"],
      ["あなたの家族構成を選択してください", "814,000円", "814,000円", "795,000円", "790,000円", "795,000円", "776,000円", "776,000円"],
      ["あなたの家族構成を選択してください", "855,000円", "855,000円", "835,000円", "830,000円", "835,000円", "817,000円", "817,000円"],
    ];
  }

  DeductionCalcSet.prototype = {
    init: function () {
      this.attachElement();
      this.resultSet();
      this.selectTrigger();
    },

    attachElement: function () {
      this.select1 = $("#select_income");
      this.select2 = $("#select_family");
      this.result = $("#result_value");
    },

    resultSet: function () {
      var self = this,
        num1 = self.select1.prop("selectedIndex"),
        num2 = self.select2.prop("selectedIndex"),
        simulatorResult = document.getElementById("bg-result");

      if (num1 === 0 || num2 === 0) {
        $("#result_value").addClass("bg-simulator-ta");
        simulatorResult.classList.remove("is-over");
      } else {
        $("#result_value").removeClass("bg-simulator-ta");
        simulatorResult.classList.add("is-over");
      }
      self.result.val(self.deduction[num1][num2]);
    },

    selectTrigger: function () {
      var self = this;
      $(self.select1).on("change", function () {
        self.resultSet();
      });
      $(self.select2).on("change", function () {
        self.resultSet();
      });
    },
  };

  (function () {
    window.deductioncalc = new DeductionCalcSet();
  })();

  $(function () {
    window.deductioncalc.init();
  });
})(jQuery);
