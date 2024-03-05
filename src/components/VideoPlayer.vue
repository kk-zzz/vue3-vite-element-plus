<template>
  <div class="video-player">
    <div ref="videoContainer" class="video-container"></div>
  </div>
</template>

<script setup name="VideoPlayer">
import { nextTick, onMounted, ref } from 'vue'
import Player, { Events } from 'xgplayer'
// import HlsPlugin from 'xgplayer-hls'
// import FlvPlugin from 'xgplayer-flv'
// import Mp4Plugin from 'xgplayer-mp4'

const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  }
})

const videoContainer = ref('')
onMounted(() => {
  nextTick(() => {
    const playerOptions = {
      el: videoContainer.value,
      ...props.options,
      fluid: true // 确保自适应
      // plugins: [HlsPlugin, FlvPlugin, Mp4Plugin],
      // mp4plugin: {
      //   maxBufferLength: 30,
      //   minBufferLength: 10
      //   reqOptions:{
      //       mode: 'cors',
      //       method: 'POST',
      //       headers: { // 需要带的自定义请求头
      //           'x-test-header': 'rrrr'
      //       },
      //   }
      //   // ... 其他配置
      // }
    }

    if (videoContainer.value) {
      const player = new Player(playerOptions)

      player.on(Events.AUTOPLAY_PREVENTED, () => {
        console.log('autoplay was prevented!!')
      })

      player.on(Events.AUTOPLAY_STARTED, () => {
        console.log('autoplay success!!')
      })

      player.emit('resourceReady', [
        {
          name: '超清',
          definition: '1080p',
          url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'
        },
        {
          name: '高清',
          definition: '720p',
          url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4'
        },
        {
          name: '标清',
          definition: '480p',
          url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4'
        }
      ])
    }
  })
})
</script>

<style lang="scss" scoped>
.video-player {
  position: relative;
  width: 100%;
  height: auto;

  @media screen and (max-width: 425px) {
    width: 100vw;
    height: 56.25vw;
  }

  .video-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100% !important;
    height: 100% !important;

    .xgplayer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
    }
  }
}
</style>
