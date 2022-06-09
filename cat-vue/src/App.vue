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
      nowVideoStatus: false,
      items: [
        {
          id: 0,
          name: "波斯貓",
          videos: [
            {
              id: "cat-1",
              url: "cat/cat-1.webm",
            },
          ],
        },
        {
          id: 1,
          name: "波斯貓gg",
          videos: [
            {
              id: "cat-2",
              url: "cat/cat-2.webm",
            },
          ],
        },
        {
          id: 2,
          name: "波斯貓ggg",
          videos: [
            {
              id: "cat-3",
              url: "cat/cat-3.webm",
            },
          ],
        },
        {
          id: 3,
          name: "波斯貓ggg",
          videos: [
            {
              id: "cat-4",
              url: "cat/cat-4.webm",
            },
          ],
        },
        {
          id: 4,
          name: "波斯貓ggg",
          videos: [
            {
              id: "cat-5",
              url: "cat/cat-5.webm",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    document.getElementById(this.items[0].videos[0].id).scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
    this.items.forEach((item) => {
      item.videos.forEach((video) => {
        const videoEle = document.querySelector(`#${video.id}`);
        videoEle.playbackRate = 2;
        videoEle.addEventListener("ended", () => {
          this.nowVideoStatus = false;
        });
      });
    });
  },
  methods: {
    next() {
      if (this.nowIndex + 1 > this.items.length - 1) {
        return;
      }
      this.nowVideoStatus = false;
      this.nowIndex += 1;
      document
        .getElementById(this.items[this.nowIndex].videos[0].id)
        .scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
    last() {
      if (this.nowIndex - 1 < 0) {
        return;
      }
      this.nowVideoStatus = false;
      this.nowIndex -= 1;
      document
        .getElementById(this.items[this.nowIndex].videos[0].id)
        .scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
    nextAge() {
      this.nowVideoStatus = true;
    },
    lastAge() {
      this.nowVideoStatus = false;
    },
  },
  watch: {
    nowVideoStatus(newValue, oldValue) {
      if (newValue) {
        document.getElementById(this.items[this.nowIndex].videos[0].id).play();
      } else {
        document.getElementById(this.items[this.nowIndex].videos[0].id).pause();
      }
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
      <li v-for="item in items" :key="item.id">
        <video
          v-for="video in item.videos"
          :key="video.id"
          :id="video.id"
          :src="getAssetsFile(video.url)"
          muted
        ></video>
      </li>
      <!-- <li v-for="(item, itemIndex) in items" :key="item.id">
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
      </li> -->
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
