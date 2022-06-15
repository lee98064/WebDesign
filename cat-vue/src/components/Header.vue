<script>
export default {
  name: "Header",
  mounted() {
    const header = document.querySelector(".header");
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".links");
    const container = document.querySelector(".container");
    const shadow_one = document.querySelector(".one");
    const shadow_two = document.querySelector(".two");

    hamburger_menu.addEventListener("click", () => {
      header.classList.toggle("active");
      menu.classList.toggle("active");
      container.classList.toggle("active");
      shadow_one.classList.toggle("active");
      shadow_two.classList.toggle("active");
    });
  },
};
</script>
<template>
  <header class="header">
    <h1 class="nav-title"><i class="fa-solid fa-cat"></i>Animal</h1>

    <!-- <ul class="nav-item">
      <li>貓咪</li>
      <li>狗狗</li>
      <li>兔子</li>
    </ul> -->
    <ul class="nav-func">
      <li><i class="fa-solid fa-user"></i></li>
      <li><i class="fa-solid fa-bag-shopping"></i></li>
      <li>
        <div class="hamburger-menu">
          <div class="bar"></div>
        </div>
      </li>
    </ul>
  </header>
</template>
