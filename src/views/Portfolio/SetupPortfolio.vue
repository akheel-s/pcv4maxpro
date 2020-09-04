<template>
  <div>
    <div class="profile__container pc-container">
      <div class="profile__namepate">
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
            sizes="100vw"
            class="image"
          />
        </div>
        <div class="profile__name">
          <span class="text-h3 white--text font-weight-black">Jerold Inocencio</span>
        </div>
      </div>
      <div class="profile__timeline">
        <div class="pc-timeline horizontal profile-pc-timeline">
          <div class="horizontal-pc-timeline__step">
            <div class="pc-timeline__step-icon"></div>
            <div class="pc-timeline__step-icon active">
              <div class="pc-timeline__step__active"></div>
            </div>
            <div class="pc-timeline__step-text">Step 1</div>
          </div>
          <div class="horizontal-pc-timeline__content"></div>
          <div class="horizontal-pc-timeline__step">
            <div class="pc-timeline__step-icon"></div>
            <div class="pc-timeline__step-text">step 2</div>
          </div>
          <div class="horizontal-pc-timeline__content"></div>
          <div class="horizontal-pc-timeline__step">
            <div class="pc-timeline__step-icon"></div>
            <div class="pc-timeline__step-text">step 3</div>
          </div>
        </div>
      </div>
      <div class="setup-profile__content">
        <div>
          <v-text-field v-model="email" class="login__input" single-line outlined></v-text-field>

          <v-text-field v-model="email" class="login__input" single-line outlined></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.pc-timeline__step {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
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

.pc-timeline__step.parent {
  padding-left: 8px;
}

.pc-timeline {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  &__content {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -3px 24px -11px 23px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: 1px solid #828282;
  }
  &__step-icon {
    position: static;
    display: block;
    width: 16px;
    height: 16px;
    min-width: 16px;
    margin-right: 20px;
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
    border-radius: 50%;
    -o-object-fit: fill;
    object-fit: fill;
  }
  &__step-icon.active {
    display: none;
  }
  &__step-text {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    font-family: Roboto, sans-serif;
    color: #bdbdbd;
    font-size: 9.75px;
    line-height: 11px;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
}

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

.pc-timeline .pc-timeline .pc-timeline__step__active {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6eba7f;
}

.parent-pc-timeline__step-icon {
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 32px;
  height: 32px;
  min-width: 32px;
  margin-right: 10px;
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
  border-radius: 50%;
  -o-object-fit: fill;
  object-fit: fill;
}

.parent-pc-timeline__step-text {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  font-family: Raleway, sans-serif;
  color: #bdbdbd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: capitalize;
}

.parentspc-timeline__step-icon {
  position: static;
  display: block;
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-right: 20px;
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
  border-radius: 50%;
  -o-object-fit: fill;
  object-fit: fill;
}

.parentspc-timeline__step-icon.active {
  display: none;
  width: 32px;
  height: 32px;
  min-width: 32px;
  margin-right: 10px;
}

.parent-pc-timeline__step__active {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background-color: #6eba7f;
}

.left-lock {
  margin-left: 25px;
}

.right-lock {
  margin-right: 25px;
}

.chevron-left {
  margin-left: 17px;
}

.chevron-right {
  margin-right: 17px;
}

.container {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-areas: 'Area Area-2';
  -ms-grid-columns: 36%;
  grid-template-columns: 36%;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
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
