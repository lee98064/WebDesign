<script>
import { getAssetsFile } from "./util/pub-use";
export default {
  setup() {
    return { getAssetsFile };
  },
  data() {
    return {
      nowIndex: 0,
      items: [
        {
          id: 0,
          name: "波斯貓",
          imgs: [
            {
              id: "cat-1",
              type: "幼年時",
              url: "cat/1.png",
            },
            {
              id: "cat-1-1",
              type: "中年時",
              url: "cat/1-1.png",
            },
            {
              id: "cat-1-2",
              type: "成年時",
              url: "cat/1-2.png",
            },
          ],
        },
        {
          id: 1,
          name: "波斯貓gg",
          imgs: [
            {
              id: "cat-2",
              type: "幼年時",
              url: "cat/2.png",
            },
            {
              id: "cat-2-1",
              type: "中年時",
              url: "cat/2-1.png",
            },
            {
              id: "cat-2-2",
              type: "成年時",
              url: "cat/2-2.png",
            },
          ],
        },
        {
          id: 2,
          name: "波斯貓ggg",
          imgs: [
            {
              id: "cat-3",
              type: "幼年時",
              url: "cat/3.png",
            },
            {
              id: "cat-3-1",
              type: "中年時",
              url: "cat/3-1.png",
            },
            {
              id: "cat-3-2",
              type: "成年時",
              url: "cat/3-2.png",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    document.getElementById(this.items[0].imgs[0].id).scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  },
  methods: {
    next() {
      if (this.nowIndex + 1 > this.items.length - 1) {
        return;
      }
      this.nowIndex += 1;
      document
        .getElementById(this.items[this.nowIndex].imgs[0].id)
        .scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
    last() {
      if (this.nowIndex - 1 < 0) {
        return;
      }

      this.nowIndex -= 1;
      document
        .getElementById(this.items[this.nowIndex].imgs[0].id)
        .scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
  },
};
</script>

<template>
  <header class="header">
    <h1 class="nav-title"><i class="fa-solid fa-cat"></i>Animal</h1>

    <ul class="nav-item">
      <li>貓咪</li>
      <li>狗狗</li>
      <li>兔子</li>
    </ul>
    <ul class="nav-func">
      <li><i class="fa-solid fa-user"></i></li>
      <li><i class="fa-solid fa-bag-shopping"></i></li>
    </ul>
  </header>
  <img src="./assets/circle.png" class="bg" alt="" />

  <div class="container">
    <ul class="img-list" id="img-list">
      <li></li>
      <li></li>
      <li v-for="item in items" :key="item.id">
        <img
          :src="getAssetsFile(img.url)"
          alt=""
          v-for="img in item.imgs"
          :key="img.id"
          :id="img.id"
        />
      </li>
      <li></li>
      <li></li>
    </ul>
    <h1 class="info">{{ items[nowIndex].name }}</h1>
    <div class="func">
      <button @click="last()">上一張</button>
      <button @click="next()">下一張</button>
    </div>
  </div>
</template>
