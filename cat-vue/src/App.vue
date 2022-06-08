<script>
import { getAssetsFile } from "./util/pub-use";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
export default {
  setup() {
    return { getAssetsFile };
  },
  data() {
    return {
      nowIndex: 0,
      nowImgIndex: 0,
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
      this.nowImgIndex = 0;
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
      this.nowImgIndex = 0;
      document
        .getElementById(this.items[this.nowIndex].imgs[0].id)
        .scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
    nextAge() {
      if (this.nowImgIndex + 1 > this.items[this.nowIndex].imgs.length - 1) {
        return;
      }
      this.nowImgIndex += 1;
    },
    lastAge() {
      if (this.nowImgIndex - 1 < 0) {
        return;
      }
      this.nowImgIndex -= 1;
    },
  },
  components: { Header, Menu },
};
</script>

<template>
  <Header></Header>

  <div class="container">
    <img src="./assets/circle.png" class="bg" alt="" />
    <ul class="img-list" id="img-list">
      <li></li>
      <li></li>
      <li v-for="(item, itemIndex) in items" :key="item.id">
        <img
          :src="getAssetsFile(item.imgs[0].url)"
          alt=""
          :class="itemIndex != nowIndex ? '' : 'hidden'"
        />
        <img
          :src="getAssetsFile(img.url)"
          alt=""
          v-for="(img, imgIndex) in item.imgs"
          :key="img.id"
          :id="img.id"
          :class="
            imgIndex == nowImgIndex && itemIndex == nowIndex ? '' : 'hidden'
          "
        />
      </li>
      <li></li>
      <li></li>
    </ul>
    <h1 class="info">{{ items[nowIndex].name }}</h1>
    <div class="func">
      <button class="button" @click="lastAge()">上一年紀</button>
      <button class="button" @click="last()">上一張</button>
      <button class="button" @click="next()">下一張</button>
      <button class="button" @click="nextAge()">下一年紀</button>
    </div>
  </div>
  <div class="shadow one"></div>
  <div class="shadow two"></div>
  <Menu></Menu>
</template>
