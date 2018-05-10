<template>
  <div>
    <!-- Contact -->
  	<section class="contactform clearfix">
  		<div class="container_16">
  			<h3>Contactez-moi</h3>
  			<p>Remplissez le formulaire ci-dessous afin de m'envoyer un message. Je vous répondrais dans les plus bref délai.
  			<br><em>Tous les champs sont requis.</em></p>
  			<form novalidate="novalidate" method="post" action="#" name="contact" class="grid_16">
  				<p class="grid_10"><textarea name="message" placeholder="Votre message" class="required"></textarea></p>
  				<p class="grid_6">
  					<input name="nom" placeholder="Nom - Prénom" class="required" type="text">
  					<input name="email" placeholder="Adresse email" class="required" type="email">
  					<input name="envoi" value="Envoyer le message" class="required" type="submit">
  					<span class="messageform"></span>
  				</p>
  			</form>
  		</div>
  	</section>

  	<!-- Corps -->
  	<section role="main" class="container_16 clearfix">
  		<div class="grid_16">
  			<!-- A propos -->
  			<div class="grid_8 apropos">
  				<h3>A propos</h3>
  				<p>Cette section vous sert de présentation.</p>
  				<p>Pellentesque nec nisi at sapien sagittis sagittis. Aliquam eu
  condimentum mauris. Proin accumsan enim at risus hendrerit lobortis.
  Nunc sollicitudin sodales lectus, et rhoncus mi molestie hendrerit.
  Vestibulum velit lorem, rhoncus a congue ultricies, faucibus facilisis
  risus. Mauris turpis ante, aliquet ac venenatis at, ornare ut velit.
  Duis ut erat neque, eget consectetur tellus. </p>
  			</div>

  			<!-- Compétences -->
  			<div class="grid_8 competences">
  				<h3>Compétences</h3>
  				<ul class="barres">
  					<li data-skills="80">Compétences 1<span style="width: 80%;"></span></li>
  					<li data-skills="60">Compétences 2<span style="width: 60%;"></span></li>
  					<li data-skills="75">Compétences 3<span style="width: 75%;"></span></li>
  					<li data-skills="40">Compétences 4<span style="width: 40%;"></span></li>
  					<li data-skills="95">Compétences 5<span style="width: 95%;"></span></li>
  				</ul>
  			</div>
  		</div>

  			<!-- Expériences -->
  			<div class="grid_16 experiences">
  				<h3>Expériences</h3>
  				<ul>
  					<li>
  						<h4><strong>Nom du poste</strong> chez nom de l'employeur</h4>
  						<span class="lieu">Lieu</span>
  						<span class="dates">Dates</span>
  						<p>Une petite description du poste, décrivez votre rôle et vos
  tâches en quelques mots afin que le recruteur en sache plus sur la
  nature de votre travail.</p>
  					</li>
  					<li>
  						<h4><strong>Nom du poste</strong> chez nom de l'employeur</h4>
  						<span class="lieu">Lieu</span>
  						<span class="dates">Dates</span>
  						<p>Une petite description du poste, décrivez votre rôle et vos
  tâches en quelques mots afin que le recruteur en sache plus sur la
  nature de votre travail.</p>
  					</li>
  				</ul>
  			</div>

  			<!-- Formations -->
  			<div class="grid_16 formations">
  				<h3>Formations</h3>
  				<ul>
  					<li>
  						<h4><strong>Nom de la formation / diplôme</strong> à nom de l'école</h4>
  						<span class="lieu">Lieu</span>
  						<span class="dates">Période</span>
  						<p>Clarifiez la formation (les abréviations ne sont pas connues de tout le monde).</p>
  					</li>
  					<li>
  						<h4><strong>Nom de la formation / diplôme</strong> à nom de l'école</h4>
  						<span class="lieu">Lieu</span>
  						<span class="dates">Période</span>
  						<p>Clarifiez la formation (les abréviations ne sont pas connues de tout le monde).</p>
  					</li>
  				</ul>
  			</div>

  			<!-- Loisirs -->
  			<div class="grid_8 loisirs">
  				<h3>Loisirs</h3>
  				<p><strong>Sports :</strong> si vous en pratiquez</p>
  				<p><strong>Association :</strong> si vous êtes membre d'une association</p>
  				<p>D'autres loisirs plus vagues, complétez ici.</p>
  			</div>

  			<!-- Contact -->
  			<div class="grid_8 contact">
  				<h3>Contact</h3>
  				<p>Si mon profil vous intéresse, n'hésitez pas à me contacter :</p>
  				<ul>
  					<li class="lieu">Paris, France</li>
  					<li class="phone">06 00 00 00 00</li>
  					<li class="mail"><a href="mailto:mon.adresse@email.fr">mon.adresse@email.fr</a></li>
  					<li class="site"><a href="http://www.mon-site.fr/">www.mon-site.fr</a></li>
  					<li class="form"><a class="toContactform">via le formulaire de contact</a></li>
                      <li class="form"><a class="toContactform">via le formulaire de contact</a></li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/**********
/* Grille - 960.gs
**********/
.container_16 {
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

.container_16 .grid_6 {
	width:35.5%;
}

.container_16 .grid_8 {
	width:48.0%;
}

.container_16 .grid_10 {
	width:60.5%;
}

.container_16 .grid_16 {
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



/**********
/* Header
**********/
	header[role=banner] {
		background:#fff;
		border-bottom:4px solid #33a4c9;
		padding: 19px 0;
		overflow: hidden;
	}

	header figure {
		border: 3px solid #eee;
		border-radius: 78px;
		float: right;
		height: 156px;
		width: 156px;
	}

	header figure img {
		border-radius: 75px;
		height: 150px;
		position: relative;
		width: 150px;
	}

	header hgroup {
		float: left;
		padding: 42px 0;
	}

	header hgroup h1 {
		color:#555;
		font-family:'DroidSansBold', Arial, sans-serif;
	}

	header hgroup h2 {
		color:#cecece;
		font-style: italic;
		text-shadow: 1px 1px 0 rgba(0,0,0,.3);
	}

/************
/* Contact
************/
	::-webkit-input-placeholder  { color:#fff; }
	input:-moz-placeholder { color:#fff; }
	.placeholder { color: #fff; }

	.contactform {
		background-color: #33a4c9;
		color: #fff;
		display: none;
	}

	.contactform > div {
		padding: 21px 0;
	}

	.contactform input[type=text], .contactform input[type=email], .contactform textarea {
		background: #2983a0;
		border: 1px solid #226d85;
		border-radius: 2px;
		color: #fff;
		max-width: 100%;
		opacity: .7;
		padding: 10px 10px 9px 10px;
		margin-top: 0;
		position: relative;
		vertical-align: top;
		width: 100%;
	}

	.contactform input[type=text], .contactform input[type=email] {
		margin-bottom: 21px;
	}

	.contactform textarea {
		font-family: 'DroidSansRegular', Arial, sans-serif;
		font-size: 14px;
		height: 148px;
	}

	.contactform input[type=text]:focus, .contactform input[type=email]:focus, .contactform textarea:focus {
		border: 1px solid #226d85;
		opacity: 1;
		outline: none;
		-webkit-transition: opacity 1s;
	}

	.contactform input[type=submit] {
		background: #ff9f39;
		border: 1px solid #ff9f39;
		border-radius: 2px;
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		font-size: 14px;
		margin: 0;
		padding: 10px 10px 9px 10px;
		width: 100%;
	}

	.contactform input.error, .contactform textarea.error {
		border: 1px solid red;
	}

	.contactform label.error {
		display: none !important;
	}

	/***********************
	/* Message du formulaire
	***********************/
		.messageform {
			display: none; /* Affiché via jQuery */
			border-radius: 2px;
			font-size: 14px;
			font-weight: bold;
			line-height: 17px;
			padding:10px 10px 9px 10px;
			margin: 0;
			text-align: center;
			width: 100%;
		}
		.envoi-valid, .envoi-error {
			display: inline-block;
		 }
		.envoi-valid {
			background-color: #31D869;
			border:1px solid #108D3A;
			color: #108D3A;
		}
		.envoi-error {
			background-color: #FF5839;
			border:1px solid #A62913;
			color: #A62913;
		}
		.envoi-error a {
			color: #A62913;
			text-decoration: underline;
		}


/***************
/* Corps - Main
***************/
	section[role=main] {
		padding: 21px 0;
		overflow: hidden;
	}

	section[role=main] > div {
		margin-top: 63px;
	}

	section[role=main] h3 {
		border-bottom: 1px solid #e1e1e1;
		padding: 0 0 20px 60px;
		margin-top: 0px;
		position: relative;
 	}

	section[role=main] h3:after, h3:before {
		content: ' ';
		display: block;
		height: 50px;
		left: 0;
		position: absolute;
		top: -15px;
		width: 50px;
	}

	section[role=main] h3:before {
		background-color: #33a4c9;
		border-radius: 25px;
	}

		/***************
		/* Pictos titres
		***************/

		section[role=main] h3:after {
			/* background:url('../assets/profile_picture_2.png') no-repeat 11px 10px; */
		}

		section[role=main] .competences h3:after {
			background-position: 11px -34px;
		}

		section[role=main] .experiences h3:after {
			background-position: 11px -86px;
		}

		section[role=main] .formations h3:after {
			background-position: 10px -139px;
		}

		section[role=main] .loisirs h3:after {
			background-position: 10px -250px;
		}

		section[role=main] .contact h3:after {
			background-position: 11px -194px;
		}


	.experiences ul, .formations ul {
		margin-left: 60px;
	}

	section[role=main] h4 {
		margin-bottom: 0px;
	}

	section[role=main] h4 strong {
		color: #147393;
		font-weight: normal;
	}

	.experiences li, .formations li {
		margin-bottom: 63px;
	}

	.experiences li:last-child, .formations li:last-child {
		margin-bottom: 21px;
	}

	.experiences li p, .formations li p {
		margin-left: 30px;
	}

	/**********************************************
	/* Affichage des compétences sous forme de tags
	**********************************************/
	.competences .tags li {
		background-color:#33a4c9;
		border:1px solid #1b91b7;
		border-radius: 15px;
		color:#fff;
		display: inline-block;
		line-height: 13px;
		margin: 0 7px 17px 0;
		padding: 5px 10px;
	}

	/************************************************
	/* Affichage des compétences sous forme de barres
	*************************************************/
	.competences .barres li {
		margin-bottom: 21px;
		position: relative;
	}

	.competences .barres li:after {
		background: #e1e1e1;
		bottom: -4px;
		content: ' ';
		display: block;
		height: 5px;
		position: absolute;
		width:100%;
	}

	.competences .barres li span {
		background: #33a4c9;
		bottom: -4px;
		content: ' ';
		display: block;
		height: 5px;
		left: 0;
		position: absolute;
		width: inherit;
		z-index: 1;
	}


	/***********
	/* Pictos
	***********/
	.lieu, .dates, .phone, .mail, .site, .form, .twitter, .facebook, .dribbble, .skype {
		/* background: url('../img/pictos-gris.png') no-repeat; */
		padding-left: 25px;
		margin: 0 10px 1px 10px;
	}

	.lieu {
		background-position: 0 -2px;
		color: #999;
	}

	.dates {
		background-position: 0 -22px;
		color: #999;
	}

	.phone {
		background-position: 0 -40px;
	}

	.mail {
		background-position: 0 -58px;
	}

	.site {
		background-position: 0 -80px;
	}

	.form {
		background-position: 0 -100px;
	}

	.twitter {
		background-position: 0 -122px;
	}

	.facebook {
		background-position: 0 -140px;
	}

	.dribbble {
		background-position: 0 -160px;
	}

	.skype {
		background-position: 0 -180px;
	}
</style>
