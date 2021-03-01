<template>
  <section class="container-fluid fix-height">

      <h2 class="text-video">Видео о нашей компании</h2>
    <div class="video-block">
      <client-only>
<!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" -->
        <!-- <iframe
          width="680"
          height="415"
          src="https://www.youtube.com/embed/p0ggtmXghPg"
          allowfullscreen>
        </iframe> -->


        <iframe
          width="680"
          height="420"
          srcdoc="<a href=//www.youtube.com/embed/qUdgfoTRMn4><img src=img/pool_1.jpg></a>"
          allowfullscreen>
        </iframe>
        </client-only>
    </div>

  </section>
</template>

<style scoped>
  .fix-height {
    min-height: 550px;
    margin: 50px 0;
  }
  .video-block{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-video {
    text-align: center;
    margin: 50px 0;
    color: #062f59;
  }

img {
    width: 680px;
    height: 420px;

  }
</style>
