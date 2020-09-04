<template>
  <!--  TODO: make the inputs into actual components -->
  <div>
    <div class="profile__container pc-container">
      <div class="profile__namepate">
        <div class="profile__image">
          <img alt="Profile Picture" sizes="(max-width: 479px) 133px, 273px" class="image" />
        </div>
        <div class="profile__name">
          <span class="text-h3 white--text font-weight-black">Jerold Inocencio</span>
        </div>
      </div>
      <div class="profile__tabs">
        <div v-for="tab in tabs" :key="tab" class="profile__tab" @click="currentTab = tab">
          <div class="pc-highlight"></div>
          <span class="font-weight-black text-h6 text-subtitle-2-md text-uppercase">{{ tab }}</span>
        </div>
      </div>
      <component :is="getComponent" />
    </div>
  </div>
</template>
<style lang="scss">
.profile {
  &__namepate {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 354px;
    margin-top: 0px;
    margin-bottom: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    background-color: #4f4f4f;
  }
  &__programs-title {
    width: 100%;
    font-size: 35px;
    line-height: 35px;
    margin-bottom: 33px;
  }
  &__name {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: visible;
    margin-right: 20%;
    margin-bottom: 60px;
    margin-left: 20%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #828282;
    border-radius: 5px;
    text-align: center;
    padding: 18px;
  }
  &__image {
    position: absolute;
    left: 0%;
    top: -35%;
    right: 0px;
    bottom: auto;
    display: block;
    width: 275px;
    height: 275px;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    border: 1px solid #000;
    border-radius: 50%;
  }
  &__container {
    display: block;
    max-width: 93.5%;
    margin-top: 213px;
    margin-bottom: 50px;
    border: 1px solid #000;
    padding-bottom: 50px;
  }
  &__tabs {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 6.4px;
  }
  &__tab {
    // width: 25%;
    flex: 0 1 33.33%;
    margin-right: 12.5px;
    margin-left: 12.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.image {
  border-radius: 50%;
  background-image: url('https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg');
  background-position: 0px 0px;
  background-size: auto;
  background-clip: border-box;
}

@media screen and (max-width: 991px) {
  .profile__tab {
    margin-right: 0px;
    margin-left: 0px;
  }
}

@media screen and (max-width: 767px) {
  .profile {
    &__container {
      margin-top: 213px;
    }
    &__name {
      margin-right: 10%;
      margin-left: 10%;
    }
  }
}

@media screen and (max-width: 479px) {
  .heading {
    font-size: 25px;
    line-height: 25px;
    font-weight: 800;
  }
  .profile {
    &__container {
      margin-top: 106.5px;
    }
    &__image {
      top: -20%;
      width: 135px;
      height: 135px;
    }
    &__name {
      margin: 100px 10% 30px;
      font-family: Raleway, sans-serif;
    }
    &__namepate {
      height: auto;
      min-height: 177px;
    }
  }
}
</style>
<script lang="ts">
import { ref, computed } from '@vue/composition-api';
import Portfolio from './views';

export default {
  name: 'Portfolio',
  components: {
    'my-programs': Portfolio.MyPrograms,
    id: Portfolio.CitizenID,
    settings: Portfolio.Settings
  },
  setup() {
    const tabs = ref(['My Programs', 'Settings', 'ID']);
    const currentTab = ref('My Programs');
    const getComponent = computed(() => {
      let tab = currentTab.value.toLowerCase();
      tab = tab.split(' ').join('-');
      return tab;
    });
    return { tabs, currentTab, getComponent };
  }
};
</script>
