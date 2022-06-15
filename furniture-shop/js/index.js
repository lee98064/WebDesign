const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const delay = (s) => {
  return new Promise(function (resolve) {
    // 回傳一個 promise
    setTimeout(resolve, s); // 等待多少秒之後 resolve()
  });
};

$(document).ready(function () {
  $(".nav-menu li").click(async function (e) {
    $(".main-container .main").each(function (index) {
      ele = $(this);
      ele.addClass("op0");
    });

    await delay(500);

    $(".main-container .main").each(function (index) {
      ele = $(this);
      ele.removeClass("main-active");
      ele.removeClass("shadow");
      ele.removeClass("one");
      ele.removeClass("two");
    });

    target = $(this).data("target");

    $(".main-container").prepend($(target));
    ele = $(target);
    ele.addClass("main-active");

    ele = ele.next();
    ele.addClass("shadow");
    ele.addClass("one");

    ele = ele.next();
    ele.addClass("shadow");
    ele.addClass("two");

    await delay(200);

    $(".main-container .main").each(function (index) {
      ele = $(this);
      ele.removeClass("op0");
    });
  });
});
