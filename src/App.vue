<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const rootViews = [
	{ path: "/errorView", name: "Expertise" },
	{ path: "/", name: "Technologie & CMS" },
	{ path: "/", name: "Réalisations" },
	{ path: "/", name: "Agences" },
	{ path: "/", name: "Equipe" },
	{ path: "/", name: "Blog" },
];

const servicesPanels = [
	{
		image: "conseil",
		title: "Conseil stratégie digital",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "design",
		title: "UI/UX Design",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "devweb",
		title: "Développement Web",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "appmobile",
		title: "Application Mobile",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "ecommerce",
		title: "E-commerce",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "innovation",
		title: "Innovation",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "centreservice",
		title: "Centre de service",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit !",
	},
	{
		image: "tma",
		title: "TMA",
		text: "Découvrez notre service de Tierce Maintenance Applicative",
	},
];

const breakPointFirstCarousel = {
	1400: {
		itemsToShow: 2.5,
		snapAlign: "right",
	},
};
const breakPointSecondCarousel = {
	1400: {
		itemsToShow: 3,
		snapAlign: "center",
	},
};

const settingsFirstCarousel = {
	itemsToShow: 1,
	slideWidth: 375,
	snapAlign: "center",
};
const settingsSecondCarousel = {
	itemsToShow: 1,
	slideWidth: 335,
	snapAlign: "center",
};
</script>

<template>
	<header>
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
						class="contact-btn pb-4 text-light d-flex justify-content-center justify-content-lg-start"
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
							<div
								v-for="(panel, index) in servicesPanels"
								class="col-md-3 col-sm-6 col-6 pb-5"
							>
								<div class="panel-item d-flex flex-column">
									<div class="panel-image d-flex justify-content-center">
										<img
											:alt="panel.title"
											class="logo"
											:src="'icon/' + panel.image + '.svg'"
										/>
									</div>
									<div
										class="panel-title text-center d-flex justify-content-center pt-3"
									>
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
			<div class="title d-flex justify-content-center pt-5 pb-4">
				<h2>Nos réalisations</h2>
			</div>
			<div class="text text-center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod
				</p>
			</div>
			<div class="slide-navigation position-relative">
				<div class="mobile d-lg-none">
					<div class="btn-container d-flex justify-content-center pt-1 pb-3">
						<div class="btn-slide previous">
							<a href="#" alt="">
								<img src="icon/arrow.svg" alt="" />
							</a>
						</div>
						<div class="btn-slide next" style="fill: blue">
							<a href="#" alt="">
								<img src="icon/arrow.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
				<div class="desktop d-none d-sm-none d-lg-inline">
					<div class="btn-container d-flex justify-content-end pt-1 pb-3">
						<div class="btn-slide previous">
							<a href="#" alt="">
								<img src="icon/arrow.svg" alt="" />
							</a>
						</div>
						<div class="btn-slide next" style="fill: blue">
							<a href="#" alt="">
								<img src="icon/arrow.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-container">
				<div class="desktop container-fluid d-md-none">
					<Carousel
						snapAlign="start"
						:slideWidth="550"
						:wrap-around="true"
						:settings="settingsFirstCarousel"
						:breakpoints="breakPointFirstCarousel"
					>
						<Slide v-for="slide in 10" :key="slide">
							<div class="carousel__item position-relative">
								<div class="left-content">
									<div class="collab-logo">
										<img src="img/jpp.svg" alt="" />
									</div>
									<div
										class="collab-details position-absolute d-flex flex-column"
									>
										<div class="collab-logo d-flex justify-content-start">
											<img src="logo/tf1.svg" alt="" />
										</div>
										<div
											class="collab-name d-flex justify-content-start text-white pt-1"
										>
											<span>JPP TV</span>
										</div>
										<div
											class="collab-stack d-flex justify-content-start text-white"
										>
											Développement - Symfony
										</div>
									</div>
								</div>

								<div class="right-content">
									<div class="collab-cta position-absolute d-flex flex-column">
										<a href="#" alt=""><img src="icon/arrow.svg" alt="" /></a>
									</div>
								</div>
							</div>
						</Slide>
					</Carousel>
				</div>
				<div class="mobile d-none d-md-block">
					<Carousel
						snapAlign="start"
						:slideWidth="375"
						:wrap-around="true"
						:settings="settingsFirstCarousel"
						:breakpoints="breakPointFirstCarousel"
					>
						<Slide v-for="slide in 10" :key="slide">
							<div class="carousel__item">
								<div class="position-relative">
									<div class="left-content">
										<div class="collab-logo">
											<img src="img/jpp.svg" alt="" />
										</div>
										<div
											class="collab-details position-absolute d-flex flex-column"
										>
											<div class="collab-logo d-flex justify-content-start">
												<img src="logo/tf1.svg" alt="" />
											</div>
											<div
												class="collab-name d-flex justify-content-start text-white pt-1"
											>
												<span>JPP TV</span>
											</div>
											<div
												class="collab-stack d-flex justify-content-start text-white"
											>
												Développement - Symfony
											</div>
										</div>
									</div>

									<div class="right-content">
										<div
											class="collab-cta position-absolute d-flex flex-column"
										>
											<a href="#" alt=""><img src="icon/arrow.svg" alt="" /></a>
										</div>
									</div>
								</div>
							</div>
						</Slide>

						<!-- <template #addons>
							<navigation />
							<pagination />
						</template> -->
					</Carousel>
				</div>
			</div>
			<div class="btn-more pt-3 pb-5 text-center">
				<a href="">Voir toutes les réalisations</a>
			</div>
		</div>
		<div class="temoignages-container">
			<div class="title d-flex justify-content-center pt-5 pb-4">
				<h2>Témoignages</h2>
			</div>
			<div class="text text-center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod
				</p>
			</div>

			<div class="carousel-container">
				<div class="container">
					<Carousel
						snapAlign="start"
						:slideWidth="550"
						:wrap-around="true"
						:settings="settingsSecondCarousel"
						:breakpoints="breakPointSecondCarousel"
					>
						<Slide v-for="slide in 3" :key="slide">
							<div class="carousel__item row">
								<div class="temoin-container">
									<div class="temoin-image">
										<img src="img/temoin.svg" alt="temoin" />
									</div>
									<div
										class="temoin-details pt-5 pb-3 d-flex flex-column justify-content-between"
									>
										<div class="text col-10 offset-1 pt-3">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.”
										</div>
										<div class="infos pb-2 d-flex flex-column">
											<span class="name">Martin Dupont</span>
											<span class="job">CEO | Onatera</span>
										</div>
									</div>
								</div>
							</div>
						</Slide>

						<template #addons>
							<pagination class="p-0 pt-3" />
						</template>
					</Carousel>
				</div>
			</div>
		</div>
		<div class="technologies-container">
			<div class="title d-flex justify-content-center pt-5 pb-4">
				<h2>Les meilleurs technologies</h2>
			</div>
			<div class="container">
				<div
					class="text text-center col-lg-8 offset-lg-2 offset-sm-0 col-sm-12 offset-md-0 pb-5"
				>
					<p>
						Nos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
			<div
				class="technos-container d-flex flex-column flex-sm-column flex-md-row"
			>
				<div class="d-flex col-md-6 col-sm-12">
					<div
						class="techno col-6 symfony position-relative d-flex justify-content-center align-items-center"
					>
						<div class="logo">
							<img src="icon/symfony.svg" alt="" />
						</div>
					</div>
					<div
						class="techno col-6 react position-relative d-flex justify-content-center align-items-center"
					>
						<div class="logo">
							<img src="icon/react.svg" alt="" />
						</div>
					</div>
				</div>
				<div class="d-flex col-md-6 col-12">
					<div
						class="techno col-6 node position-relative d-flex justify-content-center align-items-center"
					>
						<div class="logo">
							<img src="icon/node.svg" alt="" />
						</div>
					</div>
					<div
						class="techno col-6 vue position-relative d-flex justify-content-center align-items-center"
					>
						<div class="logo">
							<img src="icon/vue.svg" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div class="btn-more pt-3 pb-5 text-center">
				<a href="">Voir toutes les technologies</a>
			</div>
		</div>

		<div class="blog-container">
			<div class="title d-flex justify-content-center pt-5 pb-4">
				<h2>Le blog d'ACSEO</h2>
			</div>
			<div class="container">
				<div
					class="text text-center col-lg-8 offset-lg-2 offset-sm-0 col-sm-12 offset-md-0 pb-5"
				>
					<p>
						Nos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>

				<div class="cards-container pb-3 d-lg-flex justify-content-around">
					<div v-for="card in 3" class="card mb-3 mx-auto">
						<div class="image">
							<img src="img/debug.svg" alt="" />
						</div>
						<div class="container h-100">
							<div
								class="details h-100 d-flex flex-column justify-content-around"
							>
								<div class="title mt-3 mb-3">
									<span>Débbugger un projet PHP Symfony en 2021</span>
								</div>
								<div class="text mb-4">
									Si debugger, c’est supprimer des bugs, alors programmer ne
									peut être (...)
								</div>
								<div class="footer mb-5 d-flex justify-content-between">
									<div class="date">08 Juillet2021</div>
									<div class="cta">
										<div
											class="collab-cta position-absolute d-flex flex-column"
										>
											<a href="#" alt=""
												><img src="icon/arrowRed.svg" alt=""
											/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="btn-more pt-3 pb-5 text-center">
					<a href="">Voir toutes les articles</a>
				</div>
			</div>
		</div>

		<div class="appelprojet-container">
			<div class="container">
				<div class="logo pt-5 mt-5 d-flex justify-content-center">
					<img src="logo/acseo-mini.svg" alt="" />
				</div>
	
				<div class="title d-flex  justify-content-center pt-5 pb-4">
					<h2>Une idée, un projet ?</h2>
				</div>
				<span class="sentence2 d-flex text-center justify-content-center"
					>Nos sommes à votre disposition pour discuter.</span
				>
				<div
					class="contact-btn p-0 pt-5 pb-5 d-flex justify-content-center"
				>
					<RouterLink
						to="/contact"
						class="nav-link  btn-text text-light text-nowrap"
					>
						Contactez-nous
					</RouterLink>
				</div>
			</div>
		</div>

		<div class="footer-container">
			
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

.presentation-container,
.expertises-container,
.temoignages-container,
.blog-container {
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
	font-family: "Raleway", sans-serif;
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
.btn-more {
	a {
		@include ctaLink;
	}
}

.navbar-container {
	font-size: $fontSize;
	.navigation-desktop {
		height: 98px;
		.nav-item {
			padding-right: 10px;
			padding-left: 10px;
			&:nth-last-child(1) {
				border: none;
			}
		}
	}

	.navigation-mobile {
		height: 73px;
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

	.text {
		color: $grayText;
	}

	.carousel-container {
		.carousel__item {
			display: flex;
			justify-content: center;
			align-items: center;
			color: black;
		}

		.carousel__prev,
		.carousel__next {
			box-sizing: content-box;
			border: 5px solid white;
		}

		.collab-details {
			bottom: 30px;
			left: 30px;
			color: white;
			.collab-name {
				span {
					font-family: "Raleway", sans-serif;
					font-weight: 800;
					font-size: 28px;
				}
			}
		}
		.collab-cta {
			bottom: 30px;
			right: 30px;
			a {
				transition: all 0.25s;
				height: 40px;
				display: flex;
				justify-content: center;
				width: 40px;
				border: 1px solid white;
				border-radius: 50%;
				&:hover {
					border-radius: 50%;
					background-color: $ctaLinkColor;
					border-color: $ctaLinkColor;
				}
			}
		}
	}
	.slide-navigation {
		.desktop {
			.btn-container {
				transform: translate(-15px, -53px);
			}
		}
		.btn-container {
			.btn-slide {
				border: 1px solid #737b7d4a;
				border-radius: 50%;
				margin: 0 10px;
				&:last-child {
					border: 1px solid $ctaLinkColor;
					img {
						svg {
							fill: red;
						}
					}
				}
				&:hover {
					border: 1px solid white;
				}
				&.previous {
					transform: rotate(180deg);
				}
				img {
					filter: invert(1);
					opacity: 0.2;
					width: 12px;
				}
				a {
					transition: all 0.25s;
					height: 40px;
					display: flex;
					justify-content: center;
					width: 40px;
					border: 1px solid white;
					border-radius: 50%;

					&:hover {
						border-radius: 50%;
						background-color: $ctaLinkColor;
						border-color: $ctaLinkColor;
						img {
							filter: invert(0);
							opacity: 1;
						}
					}
				}
			}
		}
	}
}

.temoignages-container {
	@include subtitleWithUnderline;
	background-color: $grayBackground;
	.text {
		color: $grayText;
	}
	.carousel-container {
		transform: translateY(-45px);
		.carousel__item {
			.temoin-container {
				width: 350px;
				.temoin-image {
					transform: translateY(70px);
					img {
						border-radius: 50%;
						border: 20px solid white;
					}
				}

				.temoin-details {
					height: 263px;
					background-color: white;
					border-radius: 30px;
					font-family: "Raleway", sans-serif;

					.text {
						font-size: 16px;
						line-height: 22px;
					}
					.infos {
						.name {
							font-size: 16px;
							font-weight: 900;
						}
						.job {
						}
					}
				}
			}
		}
		.carousel__pagination {
			// background-color: red;
			.carousel__pagination-item {
				.carousel__pagination-button {
					height: 5px;
					border-radius: 50px;
					background-color: red !important;
					width: 5px;
				}
			}
		}
	}
}
.technologies-container {
	@include subtitleWithUnderline;
	.techno {
		font-family: "Raleway", sans-serif;
		min-height: 260px;

		img {
			width: 100%;
			padding: 10px;
		}

		&.symfony {
			background-color: black;
			&::after {
				content: "Symfony";
				color: white;
				position: absolute;
				bottom: 20px;
			}
		}
		&.react {
			background-color: #61dafb;
			&::after {
				content: "React & React Native";
				color: white;
				position: absolute;
				bottom: 20px;
			}
		}
		&.node {
			background-color: #83cd29;
			&::after {
				content: "NodeJS";
				color: white;
				position: absolute;
				bottom: 20px;
			}
		}
		&.vue {
			background-color: #41b883;
			&::after {
				content: "NodeJS";
				color: white;
				position: absolute;
				bottom: 20px;
			}
		}
	}
}

.blog-container {
	@include subtitleWithUnderline;
	background-color: $grayBackground;

	.cards-container {
		.card {
			border: none;
			border-radius: 0 0 30px 30px;
			max-width: 360px;
			min-width: 335px;
			height: 470px;
		}
		.title {
			color: #007c9f;
			font-size: 22px;
			line-height: 28px;
			font-weight: 700;
		}
		.text {
		}
		.footer {
			.date {
			}
			.cta {
				.collab-cta {
					bottom: 26px;
					right: 20px;
					a {
						transition: all 0.25s;
						height: 30px;
						display: flex;
						justify-content: center;
						width: 30px;
						border: 1px solid #ff6d74;
						border-radius: 50%;

						img {
							width: 10px;
						}
						&:hover {
							border-radius: 50%;
							img {
								filter: brightness(10);
								fill: white;
							}
							background-color: $ctaLinkColor;
							border-color: $ctaLinkColor;
						}
					}
				}
			}
		}
	}
}

.appelprojet-container {
	@include subtitleWithUnderline;

	.sentence2 {
		@include title-h2;
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

@media (max-width: 575.98px) {
	.realisations-container {
		.carousel__slide {
			justify-content: inherit !important;
		}
	}
}
</style>
