<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

const rootViews = [
	{ path: "/errorView", name: "Expertise" },
	{ path: "/", name: "Technologie & CMS" },
	{ path: "/", name: "Réalisations" },
	{ path: "/", name: "Agences" },
	{ path: "/", name: "Equipe" },
	{ path: "/", name: "Blog" },
];


const servicesPanels = [
	{ image: "conseil", title: "Conseil stratégie digital", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "design", title: "UI/UX Design", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "devweb", title: "Développement Web", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "appmobile", title: "Application Mobile", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "ecommerce", title: "E-commerce", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "innovation", title: "Innovation", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "centreservice", title: "Centre de service", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !" },
	{ image: "tma", title: "TMA", text: "Découvrez notre service de Tierce Maintenance Applicative" },
]



</script>

<template>
	<header>
		<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

		<div class="navbar-container">
			<div
				class="navigation-mobile shadow-sm d-lg-none d-flex align-items-center"
			>
				<div class="container">
					<div class="d-flex align-items-center">
						<div class="mobile-menu-burger d-flex justify-content-center col-2">
							<img
								alt="icon-menu-burger"
								class="icon-menu-buger"
								src="@/assets/icon/burger.svg"
							/>
						</div>

						<div class="mobile-logo d-flex justify-content-center col-8">
							<RouterLink to="/" class="nav-link">
								<img
									alt="logo-acseo"
									class="logo-mobile"
									src="@/assets/logo.svg"
							/></RouterLink>
						</div>

						<div class="mobile-mail d-flex justify-content-center col-2">
							<RouterLink to="/" class="nav-link">
								<img alt="icon-mail" class="logo" src="@/assets/icon/mail.svg"
							/></RouterLink>
						</div>
					</div>
				</div>
			</div>
			<div
				class="navigation-desktop d-none d-sm-none d-lg-inline d-flex justify-content-center"
			>
				<nav class="navbar navbar-expand-lg navbar-light bg-white mb-5">
					<div class="container">
						<div class="logo-desktop col-3 d-lg-inline">
							<RouterLink to="/" class="nav-link"
								><img alt="logo-acseo" class="logo" src="@/assets/logo.svg"
							/></RouterLink>
						</div>
						<div
							class="collapse navbar-collapse d-flex justify-content-end"
							id="navbarNav"
						>
							<ul class="navbar-nav align-items-center d-flex">
								<li v-for="root in rootViews" class="nav-item bordering-right">
									<RouterLink :to="root.path" class="nav-link">
										{{ root.name }}
									</RouterLink>
								</li>
							</ul>
						</div>

						<div
							class="contact-btn d-lg-flex align-items-center justify-content-center"
						>
							<RouterLink
								to="/contact"
								class="nav-link btn-text text-light text-nowrap"
							>
								Contactez-nous
							</RouterLink>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</header>

	<main>
		<div class="container">
			<div class="presentation-container d-flex">
				<div
					class="left-content col-lg-6 d-flex flex-column justify-content-center"
				>
				<div class="title mb-4 text-center text-md-center text-lg-start">
					<h1 class="text-center text-md-left">PROJETS WEB</h1>
					<h1 class="text-center text-md-left">ET MOBILES</h1>
				</div>

					<div
						class="text mb-4 col-lg-9 text-center text-sm-center text-lg-start"
					>
						<p>
							Depuis 2009, nous concevons et réalisons des applications web et
							mobiles complexes à forte valeur ajoutée, avec la conviction que
							les nouvelles technologies sont un facilitateur d'innovation.
						</p>
					</div>

					<div
						class="contact-btn p-0 text-light d-flex justify-content-center justify-content-lg-start"
					>
						<RouterLink to="/contact" class="nav-link btn-text text-nowrap">
							Contactez-nous
						</RouterLink>
					</div>
				</div>

				<div
					class="right-content col-6 d-none d-lg-block d-flex justify-content-sm-center mx-auto my-auto"
				>
					<img
						alt="logo-acseo"
						class="logo img-fluid d-block"
						src="@/assets/icon/presentation.svg"
					/>
				</div>
			</div>
		</div>
		<div class="expertises-container d-flex">
			<div class="container">
				<div class="title d-flex justify-content-center pt-5 pb-4">
					<h2>Nos expertises</h2>
				</div>
				<div class="text col-10 text-center justify-content-center w-100 pb-5">
					<p>
						Nos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div class="services">
					<div class="panels-container">
						<div class="row d-md-flex justify-content-around">
							<div v-for="(panel, index) in servicesPanels" class="col-md-3 col-sm-6 col-6 pb-5">
								<div class="panel-item d-flex flex-column">
									<div class="panel-image d-flex justify-content-center">
										<img
											:alt="panel.title"
											class="logo"
											:src="'icon/' + panel.image + '.svg' "
										/>
									</div>
									<div class="panel-title  text-center d-flex justify-content-center pt-3">
										<p>{{ panel.title }}</p>
									</div>
									<div
										class="panel-text d-flex justify-content-center text-center"
									>
										<p>
											{{ panel.text }}
										</p>
									</div>
									<div class="panel-btn d-flex justify-content-center">
										<a href="">En savoir plus</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="realisations-container">
			<div class="container">

				<div class="title d-flex justify-content-center pt-5 pb-4">
					<h2>Nos réalisations</h2>
				</div>
				<div class="text text-center">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
				</div>
				<div class="carousel-container">

				</div>
				<div class="btn-realisation text-center">
					<a href="">Voir toutes les réalisations</a>
				</div>
			</div>

		</div>
		
	</main>

	<!-- <RouterView /> -->
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,900;1,100;1,200&display=swap");


$primary: #ff6d74;
$grayBackground: #f5f5f5;
$grayText: #737b7d;
$darkText: #282828;
$greenColor: #a7d9db;
$ctaLinkColor: #ff6d74;
$fontSize: 14px;

.bordering-right {
	border-right: solid 1px $greenColor;
}

.navbar-container {
	font-size: $fontSize;
	.navigation-desktop {
		height: 98px;
		.nav-item {
			padding-right: 10px;
			padding-left: 10px;
			&:nth-last-child(1){
				border: none;
			}
		}
	}

	.navigation-mobile {
		height: 73px;
	}
}

.presentation-container,
.expertises-container {
	min-height: 65vh;
	font-size: $fontSize;
}

// Mixin
@mixin underlineText-h1 {
	&::before {
		content: "";
		z-index: -1;
		position: absolute;
		left: 0;
		bottom: 15px;
		width: calc(100% + 3px);
		height: 20px;
		background-color: $greenColor;
	}
}
@mixin underlineText-h2 {
	&::before {
		content: "";
		z-index: -1;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0px;
		width: 80%;
		height: 20px;
		background-color: $greenColor;
	}
}

@mixin title-h1 {
	position: relative;
	font-family: "Raleway", sans-serif;
	display: inline-block;
	font-size: 60px;
	font-weight: 900;
}

@mixin title-h2 {
	position: relative;
	font-family: "Raleway", sans-serif;
	display: inline-block;
	font-size: 32px;
	line-height: 38px;
	font-weight: 700;
}
@mixin title-h3 {
	position: relative;
	font-family: "Raleway", sans-serif;
	display: inline-block;
	font-size: 22px;
	line-height: 18px;
	font-weight: 700;
}

@mixin ctaLink {
	color: $ctaLinkColor;
	font-size: 14px;
	line-height: 18px;
}

@mixin subtitleWithUnderline {
	.title {
		position: relative;
		z-index: 5;
		h2 {
			@include title-h2;
			@include underlineText-h2;
		}
	}
}

.presentation-container {
	.title {
		h1 {
			@include title-h1;
			@include underlineText-h1;
		}
	}
	.text {
		font-family: "Raleway", sans-serif;
		color: $grayText;
	}
}

.expertises-container {
	background-color: $grayBackground;

	@include subtitleWithUnderline;

	.panel-item {
		// border: 1px solid grey;
		.panel-title {
			p {
				@include title-h3;
				color: $darkText;
			}
		}

		.panel-btn {
			a {
				@include ctaLink;
			}
		}
	}
}

.realisations-container {
	@include subtitleWithUnderline;
	.btn-realisation {
		a {	
			@include ctaLink;
		}
	}
}

.contact-btn {
	padding: 0px 0px 0px 25px;
	.btn-text {
		height: 40px;
		width: 160px;
		align-items: center;
		background-color: $primary;
		display: flex;
		justify-content: center;
		padding: 3px 28px;
		border-radius: 50px;
	}
}
</style>
