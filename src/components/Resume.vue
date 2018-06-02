<template>
  <div>
  	<!-- Corps -->
  	<section role="main" class="resume_container clearfix">
  		<div class="grid_16">
  			<!-- A propos -->
  			<div class="grid_8">
          <div class="section-header">
            <span class="fa fa-user-circle-o fa-3x icon-red" aria-hidden="true"/>
  				  <h4>About Me</h4>
          </div>
          <p>
            Hi! My name is Adam Hilgenberg and I am a software developer, casual gamer, and eSport enthusiast.
          </p>
          <p>
            In my free time I am typically bingeing on some TV show, cooking, gaming, doing personal projects, or training agility with my dog.
          </p>
          <p>
            My experience revolves primarily around building web applications for enterprise.
            Whether it is front-end, back-end, databases, or any combination thereof.
          </p>
          <p>
            I can do it all and I am always looking for ways to become better!
          </p>
  			</div>

  			<!-- Compétences -->
  			<div class="grid_8 competencies">
          <div class="section-header">
            <span class="fa fa-bar-chart-o fa-3x icon-red" aria-hidden="true"/>
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

  			<!-- Expériences -->
  			<div class="grid_16 experiences">
          <div class="section-header">
            <span class="fa fa-briefcase fa-3x icon-red" aria-hidden="true"/>
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
  			<div class="grid_16 education">
          <div class="section-header">
            <span class="fa fa-graduation-cap fa-3x icon-red" aria-hidden="true"/>
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
  			<div class="grid_8">
          <div class="section-header">
            <span class="fa fa-gamepad fa-3x icon-red" aria-hidden="true"/>
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
  			<div class="grid_8 contact"  >
          <div class="section-header">
            <span class="fa fa-vcard-o fa-3x icon-red" aria-hidden="true"/>
            <h4>Contact</h4>
          </div>
  				<p>If you are interested in my profile, do not hesitate to contact me.</p>
  				<ul>
  					<li class="home">Scottsdale, AZ, United States</li>
  					<li class="phone">+1 (480) 358-7701</li>
  					<li class="email"><a href="mailto:ajhilgen@gmail.com">ajhilgen@gmail.com</a></li>
  				</ul>
  			</div>
  	</section>
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

<style>
  .resume_container {
  	max-width: 960px;
  	width: 92%;
  	margin: 0 auto;
  }
  .grid_6,
  .grid_8,
  .grid_10,
  .grid_16 {
  	display:inline;
  	float: left;
  	position: relative;
  	margin-left: 1%;
  	margin-right: 1%;
  }

  .resume_container .grid_6 {
  	width:35.5%;
  }

  .resume_container .grid_8 {
  	width:48.0%;
  }

  .resume_container .grid_10 {
  	width:60.5%;
  }

  .resume_container .grid_16 {
  	width:98.0%;
  }

  .clearfix:after {
  	clear: both;
  	content: ' ';
  	display: block;
  	font-size: 0;
  	line-height: 0;
  	visibility: hidden;
  	width: 0;
  	height: 0;
  }

  .clearfix {
  	display: inline-block;
  }

  * html .clearfix {
  	height: 1%;
  }

  .clearfix {
  	display: block;
  }

	::-webkit-input-placeholder  { color:#fff; }
	input:-moz-placeholder { color:#fff; }
	.placeholder { color: #fff; }

	section[role=main] {
		padding: 21px 0;
		overflow: hidden;
	}

	section[role=main] > div {
		margin-top: 63px;
	}

	section[role=main] h4 {
		padding: 0 0 10px 20px;
		margin-top: 12px;
		position: relative;
 	}

	section[role=main] h5 {
		margin-bottom: 0px;
	}

	section[role=main] h5 strong {
		color: #D00000;
		font-weight: normal;
	}

  .icon-red  {
    color: #D00000;
  }

  .section-header {
    display: flex;
    justify-content: start;
    border-bottom: 1px solid #e1e1e1;
  }

  .section-header h4 {
    flex-grow: 1;
  }

	.experiences li, .education li {
		margin-bottom: 63px;
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
		background: #D00000;
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
    color: #D00000;
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
</style>
