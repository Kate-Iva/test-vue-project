<template>
  <div :class="$style.container">
    <swiper
      :pagination="true"
      :autoplay="true"
      class="mySwiper"
      @swiper="onSwiper"
      ref="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index" :class="$style.slide">
        <img :src="image" :class="$style.slideImage" />
        <div :class="$style.textOverlay">
          <div :class="$style.textContainer">
          <h1>Welcome!</h1>
          </div>
          <FirstCard />
        </div>
      </swiper-slide>
    </swiper>
    <button :class="$style.navButton + ' ' + $style.prev" @click="prevSlide">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <button :class="$style.navButton + ' ' + $style.next" @click="nextSlide">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import FirstCard from '../../components/FirstCard/FirstCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
library.add(faChevronLeft, faChevronRight);
export default {
  components: { Swiper, SwiperSlide, FirstCard, FontAwesomeIcon },
  data() {
    return {
      images: [image1, image2, image3],
      swiperInstance: null, // Зберігати екземпляр Swiper
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper; 
    },
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext(); 
      }
    },
    prevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev(); 
      }
    },
  },
};
</script>
<style module src="./FirstPage.module.css"></style>