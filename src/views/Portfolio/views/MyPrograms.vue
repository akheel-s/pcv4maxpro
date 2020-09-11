<template>
  <div>
    <div class="my-program">
      <div class="my-programs pc-container">
        <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">My Programs</h4>
          <program-card />
          <program-card class="mt-10" />
        </div>
        <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">Manage</h4>
          <program-card />
        </div>
        <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">Completed</h4>
          <div class="my-programs__wrapper-col">
            <program-card :tile="true" />
            <program-card :tile="true" />
            <program-card :tile="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-programs {
  & {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 93.5%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  &__programs-title {
    width: 100%;
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 33px;
    font-family: Raleway;
    font-weight: 800;
  }
  &__wrapper {
    width: 100%;
    max-width: 80%;
    margin-top: 50px;
  }
  &__wrapper-col {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    justify-items: start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 54px;
    grid-row-gap: 16px;
    grid-template-areas: 'Area Area-2' 'Area-3 Area-4';
    -ms-grid-columns: 1fr 0vw 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto 16px auto;
    grid-template-rows: auto auto;
  }
}
.my-program {
  display: block;
}
@media screen and (min-width: 1920px) {
  .my-programs__wrapper-col {
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 991px) {
  .my-programs__tab {
    margin-right: 0px;
    margin-left: 0px;
  }
  .my-programs__wrapper-col {
    grid-template-areas: 'Area' 'Area-3';
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 767px) {
  .my-programs__container {
    margin-top: 213px;
  }
}
</style>
<script lang="ts">
import ProgramCard from '../components/PCProgramCard.vue';

export default {
  components: {
    'program-card': ProgramCard
  },
  setup() {
    return {};
  }
};
</script>
