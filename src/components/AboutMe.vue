<template>
  <div class="row justify-content-center">
    <div class="col-sm-4">
      <div class="row justify-content-center">
        <div class="col-sm-9">
          <b-carousel id="profile-carousel" indicators :interval="0">
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100 circular-image"
                   src="../assets/profile_picture_2.png" alt="BlackAndWhite">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100 circular-image"
                   src="../assets/profile_picture_3.png" alt="Pups">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100 circular-image"
                   src="../assets/profile_picture_4.png" alt="FriendAndSnow">
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 content-center name-plate">
          <span class="first-name text-large">Adam</span>
          <span class="last-name text-large">Hilgenberg</span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 content-center sub-job-title">
          Full-Stack Web Developer @ StateFarm
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="link in socialLinks" class="col-3 col-sm-4 content-center social-widget">
          <a :href="link.url" target="_blank">
            <label>
              <i :class="link.labelIcon"/>
              <span v-if="screenWidth > 768">{{link.labelText}}</span>
            </label>
          </a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <span class="section-title">About</span>
      <hr>
      <p>
        Hi! My name is Adam Hilgenberg and I am a software developer, casual gamer, and eSport enthusiast.
      </p>
      <p>
        In my free time I am typically bingeing on some TV show, cooking, gaming, doing personal projects, or training agility with my dog.
      </p>
      <p>
        My experience revolves primarily around building web applications for enterprise,
        so whether it is front-end, back-end, databases, or any combination thereof, then I am your man.
        If you would like to know more, check out <router-link to="/resume" >my resume/cv</router-link>.
      </p>
      <p>
        <i>"We don't get to choose how we start in this life. Real 'greatness' is what you do with the hand you're dealt."</i></br>
        - Victor Sullivan, Uncharted 3
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      slide: 0,
      sliding: null,
      socialLinks: [{
          labelIcon: 'fa fa-twitter',
          labelText: 'Twitter',
          url: 'https://twitter.com/rpgadam'
        },
        {
          labelIcon: 'fa fa-linkedin',
          labelText: 'LinkedIn',
          url: 'https://www.linkedin.com/in/adam-hilgenberg'
        },
        {
          labelIcon: 'fa fa-github',
          labelText: 'Github',
          url: 'https://github.com/ajhilgen'
        }
      ],
      screenWidth: screen.width
    };
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    handleResize() {
      this.screenWidth = screen.width;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

#profile-carousel {
  text-shadow: 1px 1px 2px #333;

  .carousel-item {
    outline: none;
  }

  .carousel-indicators {
    bottom: -30px;
  }
}

.name-plate {
  padding-top: 15px;
}

.circular-image {
  border-radius: 10%;
  width: auto;
}

</style>
