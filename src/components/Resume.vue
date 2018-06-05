<template>
  <div class="resume-container justify-content-center">
    <div class="row">
    	<div class="col-12 col-sm-6">
        <div class="section-header col-12">
          <span class="fa fa-user-circle-o fa-3x icon-color-scheme" aria-hidden="true"/>
    		  <h4>About Me</h4>
        </div>
        <p>
          Hi! My name is Adam Hilgenberg and I am a software developer, casual gamer, and eSport enthusiast.
        </p>
        <p>
          In my free time I am typically bingeing on some TV show, cooking, gaming, doing personal projects, or training agility with my dog.
        </p>
        <p>
          My experience revolves primarily around building web applications for enterprise,
          so whether it is front-end, back-end, databases, or any combination thereof, then I am your man.
        </p>
    	</div>

    	<div class="col-12 col-sm-6 competencies">
        <div class="section-header col-12">
          <span class="fa fa-bar-chart-o fa-3x icon-color-scheme" aria-hidden="true"/>
    		  <h4>Competencies</h4>
        </div>
    		<ul class="bars">
    			<li data-skills="80">Java<span style="width: 95%;"></span></li>
    			<li data-skills="60">Javascript<span style="width: 70%;"></span></li>
    			<li data-skills="75">RESTful API's<span style="width: 85%;"></span></li>
    			<li data-skills="40">Web Design<span style="width: 50%;"></span></li>
    			<li data-skills="95">SQL<span style="width: 95%;"></span></li>
    		</ul>
    	</div>
    </div>
  	<div class="row experiences">
      <div class="section-header col-12">
        <span class="fa fa-briefcase fa-3x icon-color-scheme" aria-hidden="true"/>
  		  <h4>Work Experience</h4>
      </div>
  		<ul>
  			<li>
  				<h5><strong>Software Developer</strong> State Farm Insurance</h5>
  				<span>Tempe, AZ, United States</span>
  				<span> -- April 2015 to Current</span>
  				<p>
            <ul>
              <li>
                Built and managed an application/micro-services to simplify the IT application change process.<br/>
                The tool is being used to house all information on IT application assets in StateFarm
                as well as absorbing functionality current provided by vendor products
                for handling registration, ownership, versioning, and risk analysis.
              </li>
              <li>
                Built and managed a set of analytics dashboards for the enterprise.<br/>
                These dashboards took aggregated information from every application in every evironment in the enterprise.<br/>
                Key usages of these dashboards include monitoring applications availability, performance, resource consumption, costing, and dependency management.<br/>
                Other use cases were to monitor, at a high level, business line application uptime and long term environment level resource utilization.
              </li>
            </ul>
          </p>
          <p>
            <i>*All the above were done in a CI/CD environment will fully automated pipelines, testing, and security scanning.</i>
          </p>
          <p>
            <strong>Tools :</strong>
            Java, Spring MVC, Javascript, HTML5, CSS3, Docker, Ember.js, Pivotal Cloud Foundry,
            PostgreSQL, Git, Jenkins, GitlabCI
          </p>
  			</li>
  			<li>
  				<h5><strong>Software Engineer</strong> Syntel Inc contracted to American Express</h5>
  				<span>Phoenix, AZ, United States</span>
  				<span> -- July 2014 to April 2015</span>
  				<p>
            Worked on upgrading the File Transfer system for financial transactions.
          </p>
          <p>
            <strong>Tools :</strong>
            Java, RedHat Enterprise Linux (RHEL), other vendor products.
          </p>
  			</li>
        <li>
  				<h5><strong>Software Engineer</strong> Northern Arizona University</h5>
  				<span>Flagstaff, AZ, United States</span>
  				<span> -- November 2013 to July 2014</span>
  				<p>
            Built a SQL table relationship application to allow our developers to navigate and view the columns and keys for ~5000 tables quickyl and efficiently.
          </p>
          <p>
            <strong>Tools :</strong>
            C#, ASP.NET, .NET, SQL Server(T-SQL)
          </p>
  			</li>
  		</ul>
  	</div>

  	<!-- Formations -->
  	<div class="row education">
      <div class="section-header col-12">
        <span class="fa fa-graduation-cap fa-3x icon-color-scheme" aria-hidden="true"/>
  		  <h4>Education</h4>
      </div>
  		<ul>
  			<li>
  				<h5><strong>BS in Computer Science</strong> from Northern Arizona University</h5>
  				<span>Flagstaff, AZ, United States</span>
  				<span> -- August 2010 - May 2014</span>
          <span> -- <i>Minor in Mathematics</i></span>
  			</li>
  		</ul>
  	</div>

  	<!-- Loisirs -->
    <div class="row">
  		<div class="col-12 col-sm-6">
        <div class="section-header">
          <span class="fa fa-gamepad fa-3x icon-color-scheme" aria-hidden="true"/>
  			  <h4>Hobbies / Interests</h4>
        </div>
  			<p>
          <strong>Sports / eSports :</strong>
          <ul>
            <li>Football (Philadelphia Eagles)</li>
            <li>League of Legends (TSM)</li>
            <li>Overwatch (London Spitfire)</li>
            <li>Fortnite (TSM)</li>
          </ul>
        </p>
  			<p>
          <strong>Games :</strong>
          Final Fantasy, Kingdom Hearts, a lot of JRPG's, the above games.</p>
        <p>
          <strong>Activites :</strong>
          Working out, Hiking, Dog Agility, Snowboarding
        </p>
  		</div>

  		<!-- Contact -->
  		<div class="col-12 col-sm-6 contact"  >
        <div class="section-header">
          <span class="fa fa-vcard-o fa-3x icon-color-scheme" aria-hidden="true"/>
          <h4>Contact</h4>
        </div>
  			<p>If you are interested in my profile, do not hesitate to contact me.</p>
  			<ul>
  				<li class="home">Scottsdale, AZ, United States</li>
  				<li class="phone">+1 (480) 358-7701</li>
  				<li class="email"><a href="mailto:ajhilgen@gmail.com">ajhilgen@gmail.com</a></li>
  			</ul>
  		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  .resume-container {
  	max-width: 960px;
  	width: 92%;
  	margin: 0 auto;
    padding-top: 40px;

    .row {
        margin-bottom: 30px;
    }
  }

	.resume-container h4 {
		padding: 0 0 10px 20px;
		margin-top: 12px;
		position: relative;
 	}

	.resume-container h5 strong {
		font-weight: normal;
	}

  .section-header {
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  }

  .section-header h4 {
    flex-grow: 1;
  }

	.experiences li:not(:last-child) {
		margin-bottom: 25px;
    padding-bottom: 20px;
	}

  .experiences > ul > li:not(:last-child) {
    border-bottom: 1px dashed white;
  }

  .experiences li li{
		margin-bottom: 5px;
	}

	.experiences li:last-child, .education li:last-child {
		margin-bottom: 21px;
	}

	.experiences li p, .education li p {
		margin-left: 30px;
	}
	.competencies .bars li {
		margin-bottom: 21px;
		position: relative;
	}

	.competencies .bars li:after {
		background: #e1e1e1;
		bottom: -4px;
		content: ' ';
		display: block;
		height: 5px;
		position: absolute;
		width:100%;
	}

	.competencies .bars li span {
		bottom: -4px;
		content: ' ';
		display: block;
		height: 5px;
		left: 0;
		position: absolute;
		width: inherit;
		z-index: 1;
	}

  .contact ul  {
    list-style:none;
  }

  .contact li:before {
    font-family: 'FontAwesome';
    content: '\f067';
    margin:0 5px 0 -15px;
  }

  .contact li.phone:before {
    content: '\f095';
  }

  .contact li.email:before {
    content: '\f1fa';
  }

  .contact li.home:before {
    content: '\f015';
  }

  #lightswitch + #lightlabel + #app-container {
    .competencies .bars li:after {
  		background: #e1e1e1;
  	}

    .section-header {
      border-bottom: 1px solid #e1e1e1;
    }

    .resume-container h5 strong {
      color: #D00000;
    }

    .icon-color-scheme  {
      color: #D00000;
    }

    .contact li:before {
      color: #D00000;
    }

    .competencies .bars li span {
  		background: #D00000;
  	}
  }

  #lightswitch:checked + #lightlabel + #app-container {
    .competencies .bars li:after {
  		background: #E0E0E0;
  	}

    .section-header {
      border-bottom: 1px solid #282828;
    }

    .resume-container h5 strong {
      color: #0000CC;
    }

    .icon-color-scheme  {
      color: #0000CC;
    }

    .contact li:before {
      color: #0000CC;
    }

    .competencies .bars li span {
  		background: #0000CC;
  	}
  }
</style>
