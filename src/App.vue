<template>
  <div id="app">
    <input type="checkbox" id="lightswitch" />
    <label for="lightswitch" id="lightlabel">
        <i class="fa fa-lightbulb-o"/>
        <span class="light-text">Lights</span>
    </label>
    <div id="app-container">
      <div class="nav-header nav-margin nav-dark row align-items-center">
        <div class="offset-sm-2 col-sm-4 justify-content-start">
          <span class="first-name text-medium">Adam</span>
          <span class="last-name text-medium">Hilgenberg</span>
        </div>
        <ul class="nav col-sm-6 justify-content-end">
          <li v-for="link in navLinks" @mouseover="toggleLinks" @mouseout="toggleLinks" :class="{active: link.isActive}" class="nav-item">
            <router-link :to="link.route" class='nav-link'>{{ link.text }}</router-link>
          </li>
        </ul>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navLinks: [{
        text: 'About',
        route: '/',
        isActive: true
      }, {
        text: 'Portfolio',
        route: '/under-construction',
        isActive: true
      }, {
        text: 'Snippets',
        route: '/under-construction',
        isActive: true
      }, {
        text: 'Resume',
        route: 'resume',
        isActive: true
      }]
    }
  },
  methods: {
    toggleLinks: function(mouseEvent) {
      let linkName = mouseEvent.target.innerText;
      this.navLinks.forEach((link) => {
        if (link.text !== linkName) {
          link.isActive = !link.isActive;
        }
      });
      return;
    }
  }
};
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import 'font-awesome/css/font-awesome.css';

/* Body CSS */
html, body, #app, #app-container {
  height: 100%;
}

#app > input, label {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
}

/* Element CSS */
p {
  font-size: 0.85rem;
}
hr {
  margin: 0.5rem 0rem;
}
label {
  padding: 0 0.2rem;
  text-align: center;
  top: 1.2rem;
  left: 1.2rem;
  font-size: 0.70rem;
  border-radius:4px;
  border:1px solid;
  overflow:hidden;
}

.social-widget {
  padding: 10px 5px 0 0;

  > a > label {
    cursor: pointer;
    width: 100%;
  }
}

.nav-header.row {
  width: 100%;
  margin-left: 0px;
}

#lightlabel {
  cursor: pointer;
  position: absolute;

  span {
    text-align:center;
    padding:3px 0px;
  }
}

span.fa.fa-lightbulb-o {
  width: auto;
}

/* Simple class CSS */
.text-small {
  font-size: 0.5rem;
}
.text-medium {
  font-size: 1.3rem;
}
.text-large {
  font-size: 2rem;
}
.section-title {
  font-size: 1.5rem;
}
.sub-job-title {
  margin-top: 0.2rem;
  font-size: 0.75rem;
}

.content-center {
  text-align: center;
}

.nav-margin {
  margin-bottom: 1.0rem;
  padding: 0.5rem;
}

/* Toggable lightswitch CSS */
#lightswitch {
  position:absolute;
  top:-9999px;
  left:-9999px;

  + #lightlabel {
    background-color:#282828;
    border-color: #D0D0D0;

    + #app-container {
      background-color: #343a40;
      color: #ffffff;

      label {
        background-color:#282828;
        border-color: #D0D0D0;
      }

      hr {
        border-color: #ffffff;
      }

      .container {
        background-color: #343a40;
        max-width: 1920px;
      }

      .section-title {
        color: #D00000;
      }

      .first-name {
        color: #D00000;
      }

      .last-name {
        color: #ffffff;
      }

      .nav-header {
        border-bottom: 2px solid #808080;
      }

      .nav-header.nav-dark {
        background-color: #282828;
      }

      .nav-link {
        color: #808080;
      }

      .nav-link:hover {
        color: #ffffff;
      }

      .nav-item.active a {
        color: #ffffff;
      }

      .carousel-indicators {
        li {
          outline: none;
          background-color: rgba(255, 0, 0, 0.5);
        }

        li.active {
          background-color: rgba(255, 0, 0, 1);
        }
      }
    }

    > .light-text::after {
      content: ' On';
    }
  }
}

#lightswitch:checked {

  + #lightlabel {
    background-color: #E0E0E0;
    border-color: #282828;
    color: #282828;

    + #app-container {
      background-color: #ffffff;
      color: #343a40;

      label {
        background-color: #E0E0E0;
        border-color: #282828;
        color: #282828;
      }

      hr {
        border-color: #606060;
      }

      .container {
        background-color: #ffffff;
        max-width: 1920px;
      }

      .section-title {
        color: #0000CC;
      }

      .first-name {
        color: #0000CC;
      }

      .last-name {
        font-weight: 500;
        color: #343a40;
      }

      .nav-header {
        border-bottom: 2px solid #808080;
      }

      .nav-header.nav-dark {
        background-color: #F0F0F0;
      }

      .nav-link {
        color: #343a40;
      }

      .nav-link:hover {
        font-weight: 500;
        color: #282828;
      }

      .nav-item.active a {
        color: #282828;
      }

      .carousel-indicators {
        li {
          outline: none;
          background-color: rgba(0, 0, 255, 0.5);
        }

        li.active {
          background-color: rgba(0, 0, 255, 1);
        }
      }
    }

    > .light-text::after{
      content: ' Off';
    }
  }
}
</style>
