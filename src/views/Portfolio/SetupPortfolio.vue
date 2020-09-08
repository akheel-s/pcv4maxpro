<template>
  <div>
    <div class="profile__container pc-container">
      <div class="profile__nameplate">
        <div class="profile__image">
          <img
            src="images/album-cover.jpg"
            loading="eager"
            alt="Profile Picture"
            srcset="
              images/album-cover-p-500.jpeg   500w,
              images/album-cover-p-800.jpeg   800w,
              images/album-cover-p-1080.jpeg 1080w,
              images/album-cover.jpg         1364w
            "
            sizes="(max-width: 479px) 133px, 273px"
            class="image"
          />
        </div>
        <div class="profile__name">
          <span class="text-h3 white--text font-weight-black">Jerold Inocencio</span>
        </div>
      </div>
      <pc-timeline />
      <div class="setup-profile__content">
        <v-text-field></v-text-field>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Timeline from '@/components/Timeline.vue';

export default {
  components: {
    'pc-timeline': Timeline
  },
  setup() {}
};
</script>
<style lang="scss">
.pc-timeline.horizontal {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  &.profile-pc-timeline {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.horizontal-pc-timeline__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: -3px 11px -3px 5px;
  padding: 0px 8px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: 1px solid #bdbdbd;
}

.horizontal-pc-timeline__step {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 0px;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: space-between;
  -ms-flex-line-pack: justify;
  align-content: space-between;
}
.profile__timeline {
  margin-top: 70px;
  padding-right: 16%;
  padding-left: 16%;
}
.profile-pc-timeline {
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.profile-pc-timeline.horizontal {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.setup-profile__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 16%;
  padding-left: 16%;
}

@media screen and (max-width: 479px) {
  .profile__timeline {
    margin-top: 25px;
    padding-right: 16%;
  }
  .profile-pc-timeline {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }

  .pc-timeline.horizontal.profile-pc-timeline {
    display: none;
  }
  .pc-timeline__step-text {
    font-family: Roboto, sans-serif;
  }
}
</style>
