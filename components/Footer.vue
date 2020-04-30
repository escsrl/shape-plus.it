<template>
  <!-- Footer-->
  <div
    class="container-fluid text-white footer"
    style="background-color: black;"
  >
    <div class="pt-bottom pb-bottom">
      <div class="d-flex align-items-stretch mb-3 flex-wrap">
        <div class="p-2 esc_img">
          <img
            src="/img/common/esc_logo_white.png"
            alt="ESC"
            class="text-left"
          />
        </div>
        <div class="p-2">
          <div class="fontLatoBlackBolder fontGrayText">
            ESC Enterprise Software Consulting srl
          </div>
          <div class="fontLatoRegular fontContatti pt-2">
            PI/CF IT 03031480167 <br />
            <a href="mailto:info@esconsulting.it" class="text-white"
              >info@esconsulting.it</a
            >
            <br />
            ESC Copyright. All Rights Reserved. <br />
          </div>
        </div>
        <div class="p-2 ml-lg-auto align-self-center">
          <a
            href="https://www.facebook.com/esctreviglio/"
            target="_blank"
            class="pr-3 pb-3"
            ><font-awesome-icon :icon="fab.faFacebookF" class="fa-3x"
          /></a>
          <a
            href="https://twitter.com/esctreviglio"
            target="_blank"
            class="pr-3 pb-3"
            ><font-awesome-icon :icon="fab.faTwitter" class="fa-3x"
          /></a>
          <a
            href="https://www.youtube.com/channel/UCNRnu3fnIXAg8OMnh87NHOw"
            target="_blank"
            class="pr-3 pb-3"
            ><font-awesome-icon :icon="fab.faYoutube" class="fa-3x"
          /></a>
          <a
            href="https://www.linkedin.com/company/esc-enterprise-software-consulting/"
            target="_blank"
            class="pr-3 pb-3"
            ><font-awesome-icon :icon="fab.faLinkedin" class="fa-3x"
          /></a>
          <a
            href="https://www.github.com/escsrl"
            target="_blank"
            class="pr-3 pb-3"
            style="text-decoration: none"
            ><font-awesome-icon :icon="fab.faGithub" class="fa-3x"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'EscFooter',
  computed: {
    fab() {
      return fab
    }
  }
}
</script>

<style scoped></style>
