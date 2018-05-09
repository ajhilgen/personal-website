<template>
  <div id="app">
    <input type="checkbox" id="lightswitch" />
    <label for="lightswitch" id="lightlabel">
        <i class="fa fa-lightbulb-o"/>
        <span class="light-text">Lights</span>
    </label>
    <div id="app-container">
      <div class="nav-header nav-margin nav-dark row align-items-center">
        <div class="offset-sm-2 col-sm-3">
          <span class="first-name text-medium">Adam</span>
          <span class="last-name text-medium">Hilgenberg</span>
        </div>
        <ul class="nav col-sm-7 justify-content-end">
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
        route: '/',
        isActive: true
      }, {
        text: 'Snippets',
        route: '/',
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

<style>
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
  padding: 5px 5px 0 0;
}

.social-widget > a > label {
    cursor: pointer;
    width: 100%;
}

.nav-header.row {
  width: 100%;
  margin-left: 0px;
}

#lightlabel {
  cursor: pointer;
  position: absolute;
}
#lightlabel span {
    text-align:center;
    padding:3px 0px;
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

.circular-image {
  border-radius: 10%;
  width: auto;
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
}

#lightswitch:checked + #lightlabel {
  background-color: #E0E0E0;
  border-color: #282828;
  color: #282828;
}
#lightswitch + #lightlabel {
  background-color:#282828;
  border-color: #D0D0D0;
}

#lightswitch:checked + #lightlabel + #app-container label {
  background-color: #E0E0E0;
  border-color: #282828;
  color: #282828;
}
#lightswitch + #lightlabel + #app-container label {
  background-color:#282828;
  border-color: #D0D0D0;
}

#lightswitch:checked + #lightlabel + #app-container {
  background-color: #ffffff;
  color: #343a40;
}
#lightswitch + #lightlabel + #app-container {
  background-color: #343a40;
  color: #ffffff;
}

#lightswitch + #lightlabel > .light-text::after {
  content: ' On';
}
#lightswitch:checked + #lightlabel > .light-text::after{
  content: ' Off';
}

#lightswitch:checked + #lightlabel + #app-container hr {
  border-color: #606060;
}
#lightswitch + #lightlabel + #app-container hr {
  border-color: #ffffff;
}

#lightswitch:checked + #lightlabel + #app-container .section-title {
  color: #0000CC;
}
#lightswitch + #lightlabel + #app-container .section-title {
  color: #D00000;
}

#lightswitch:checked + #lightlabel + #app-container .first-name {
  color: #0000CC;
}
#lightswitch + #lightlabel + #app-container .first-name {
  color: #D00000;
}

#lightswitch:checked + #lightlabel + #app-container .last-name {
  font-weight: 500;
  color: #343a40;
}
#lightswitch + #lightlabel + #app-container .last-name {
  color: #ffffff;
}

#lightswitch:checked + #lightlabel + #app-container .nav-header {
  border-bottom: 2px solid #E0E0E0;
}
#lightswitch + #lightlabel + #app-container .nav-header {
  border-bottom: 2px solid #808080;
}

#lightswitch:checked + #lightlabel + #app-container .nav-header.nav-dark {
  background-color: #F0F0F0;
}
#lightswitch + #lightlabel + #app-container .nav-header.nav-dark {
  background-color: #282828;
}

#lightswitch:checked + #lightlabel + #app-container .nav-link {
  color: #343a40;
}
#lightswitch + #lightlabel + #app-container .nav-link {
  color: #808080;
}

#lightswitch:checked + #lightlabel + #app-container .nav-link:hover {
  font-weight: 500;
  color: #282828;
}
#lightswitch + #lightlabel + #app-container .nav-link:hover {
  color: #ffffff;
}

#lightswitch:checked + #lightlabel + #app-container .nav-item.active a {
  color: #282828;
}
#lightswitch + #lightlabel + #app-container .nav-item.active a {
  color: #ffffff;
}
</style>
