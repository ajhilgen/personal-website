<template>
  <div class="row justify-content-center">
    <div class="col-sm-4">
      <div class="row">
        <div class="col-sm-12 content-center">
          <b-carousel id="profile-carousel" indicators>
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
        <div class="col-sm-12 content-center">
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
        <div v-for="link in socialLinks" class="col-sm-3 content-center social-widget">
          <a :href="link.url" target="_blank">
            <label>
              <i :class="link.labelIcon"/>
              {{link.labelText}}
            </label>
          </a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <span class="section-title">About</span>
      <hr>
      <p>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
      ]
    };
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
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
}

.circular-image {
  border-radius: 10%;
  width: auto;
}

</style>
