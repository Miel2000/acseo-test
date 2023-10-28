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
</script>

<template>
	<header>
		
		<div class="navbar-container">
			<div class="navigation-mobile shadow-sm  d-lg-none d-flex align-items-center">
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
								<img
									alt="icon-mail"
									class="logo"
									src="@/assets/icon/mail.svg"
							/></RouterLink>
						</div>
					</div>
				</div>
			</div>
			 <div class="navigation-desktop d-none d-sm-none d-lg-inline d-flex justify-content-center">
				<nav
					class="navbar navbar-expand-lg navbar-light bg-white mb-5"
				>
						<div class="container">
							<div class="logo-desktop col-3 d-lg-inline">

								<RouterLink to="/" class="nav-link"
									><img
										alt="logo-acseo"
										class="logo"
										src="@/assets/logo.svg"
								/></RouterLink>
						
							</div>
							<div class="collapse navbar-collapse  d-flex justify-content-end" id="navbarNav">
								<ul class="navbar-nav align-items-center d-flex">
								
	
									<li class="nav-item  bordering-right">
										<RouterLink to="contact" class="nav-link ">
											Expertise
										</RouterLink>
									</li>
									<li class="nav-item bordering-right">
										<RouterLink to="contact" class="nav-link">
											Technologie & CMS
										</RouterLink>
									</li>
									<li class="nav-item bordering-right">
										<RouterLink to="contact" class="nav-link">
											Réalisations
										</RouterLink>
									</li>
									<li class="nav-item bordering-right">
										<RouterLink to="contact" class="nav-link">
											Agences
										</RouterLink>
									</li>
									<li class="nav-item bordering-right">
										<RouterLink to="contact" class="nav-link">
											Equipes
										</RouterLink>
									</li>
									<li class="nav-item">
										<RouterLink to="/" class="nav-link">
											Blog
										</RouterLink>
									</li>
								</ul>
							</div>
							
							<div class="contact-btn d-lg-flex align-items-center justify-content-center">
								<RouterLink to="/contact" class="nav-link btn-text  text-light text-nowrap">
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

				<div class="left-content d-flex flex-column justify-content-center">
	
					<div class="title mb-4">
						<h1>PROJETS WEB ET MOBILES</h1>
					</div>
		
					<div class="text mb-4 text-center text-sm-center text-md-start">
						<p>Depuis 2009, nous concevons et réalisons des applications web et mobiles complexes à forte valeur ajoutée, avec la conviction que les nouvelles technologies sont un facilitateur d'innovation.</p>
					</div>
		
					<div class="contact-btn p-0 text-light d-flex justify-content-center justify-content-lg-start">
						<RouterLink to="/contact" class="nav-link btn-text text-nowrap">
								Contactez-nous
						</RouterLink>
					</div>
				</div>
	
				<div class="right-content d-none d-lg-block d-flex justify-content-sm-center">
					<img
						alt="logo-acseo"
						class="logo"
						src="@/assets/icon/presentation.svg"
					/>
				</div>
			</div>
		</div>
			<div class="expertises-container d-flex">
				<div class="container">

					<div class="title">
						Nos expertises
					</div>
					<div class="text">
						Nos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					</div>
					<div class="services">

						<div class="panel-item">
							<div class="panel-image">
								<img
									alt="logo-acseo"
									class="logo"
									src="@/assets/icon/conseil.svg"
								/>
							</div>
							<div class="panel-text">
								<p>Conseil stratégie digital</p>
							</div>
							<div class="panel-btn">
								<a href="">En savoir plus</a>
							</div>

						</div>
						
					</div>
				</div>
			</div>
		


	</main>

	<!-- <RouterView /> -->
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,900;1,100;1,200&display=swap');

$primary: #FF6D74;
$grayBackground: #F5F5F5;
$greenColor: #A7D9DB;
$fontSize: 14px;


.bordering-right {
	border-right: solid 1px $greenColor;
}



.navbar-container, .presentation-container {

	font-size: $fontSize;
}

.navbar-container {
	.navigation-desktop {
		height: 98px;
		.nav-item {
			padding-right: 10px;
			padding-left: 10px;
		}

		.desktop {
	
		}
	
	}

	.navigation-mobile {
		height: 73px;
	}	
}


.presentation-container, .expertises-container {
	height: 75vh;
}
.presentation-container {
	border: 1px solid red;
	
	.title {
		h1 {
			position:relative;
			font-family: 'Raleway', sans-serif;
			font-size: 60px;
			font-weight: 900;
			::before {
				content: "";
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 10px;
				background-color:red;
			}
		}
	}
}


.expertises-container {
	background-color: $grayBackground;
}

.contact-btn {
	padding: 0px 0px 0px 25px;
	.btn-text{
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
