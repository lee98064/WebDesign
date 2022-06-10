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
      nowVideoType: null,
      items: [
        {
          id: 0,
          name: "波斯貓",
          videos: [
            {
              id: "cat-1",
              url: "cat/cat-1.webm",
              child: 0.0,
              childEnd: 7.0,
              adult: 7.3,
              adultEnd: 15.0,
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
              child: 0.0,
              childEnd: 4,
              adult: 4.2,
              adultEnd: 9.0,
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
              child: 0.0,
              childEnd: 5.5,
              adult: 5.8,
              adultEnd: 12.0,
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
              child: 0.0,
              childEnd: 2.6,
              adult: 3.3,
              adultEnd: 6.0,
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
              child: 0.0,
              childEnd: 5.5,
              adult: 6,
              adultEnd: 12.0,
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
      this.pause_video();
      this.nowIndex += 1;
      this.nowVideoType = null;
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
      this.pause_video();
      this.nowIndex -= 1;
      this.nowVideoType = null;
      document
        .getElementById(this.items[this.nowIndex].videos[0].id)
        .scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
    adult_to_child() {
      this.nowVideoStatus = true;
      this.nowVideoType = "adult";
      const videoEle = this.get_video_element();
      videoEle.currentTime = this.items[this.nowIndex].videos[0].adult;
      this.play_video();
    },
    child_to_adult() {
      this.nowVideoStatus = false;
      this.nowVideoType = "child";
      const videoEle = this.get_video_element();
      videoEle.currentTime = this.items[this.nowIndex].videos[0].child;
      this.play_video();
    },
    get_video_element() {
      return document.getElementById(this.items[this.nowIndex].videos[0].id);
    },
    play_video() {
      this.nowVideoStatus = true;
      const videoEle = this.get_video_element();
      videoEle.play();
      videoEle.addEventListener("timeupdate", () => {
        let endTime = 0;

        if (this.nowVideoType == "child") {
          endTime = this.items[this.nowIndex].videos[0].childEnd;
        } else if (this.nowVideoType == "adult") {
          endTime = this.items[this.nowIndex].videos[0].adultEnd;
        }

        if (this.get_video_element().currentTime >= endTime) {
          this.pause_video();
        }
      });
    },
    pause_video() {
      this.nowVideoStatus = false;
      this.get_video_element().pause();
    },
  },
  // watch: {
  //   nowVideoStatus(newValue, oldValue) {
  //     if (newValue) {
  //       document.getElementById(this.items[this.nowIndex].videos[0].id).play();
  //     } else {
  //       document.getElementById(this.items[this.nowIndex].videos[0].id).pause();
  //     }
  //   },
  // },
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
      <li></li>
      <li></li>
    </ul>
    <h1 class="info">{{ items[nowIndex].name }}</h1>
    <div class="age">
      <button
        class="button"
        :class="this.nowVideoType == 'child' ? 'active' : ''"
        @click="child_to_adult()"
      >
        Adult
      </button>
      <button
        class="button"
        :class="this.nowVideoType == 'adult' ? 'active' : ''"
        @click="adult_to_child()"
      >
        Child
      </button>
    </div>
    <div class="func">
      <button class="button" @click="last()">上一張</button>
      <button class="button" @click="next()">下一張</button>
    </div>
  </div>
  <div class="shadow one"></div>
  <div class="shadow two"></div>
  <Menu></Menu>
</template>
