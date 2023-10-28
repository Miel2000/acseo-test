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
		<div class="navbar-container shadow-sm">

			<div class="navigation-mobile d-lg-none">
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
			<div class="navigation-desktop d-lg-inline d-none d-xs-none d-sm-inline d-md-inline d-xl-inline d-flex justify-content-center">
				<nav
					class="navbar navbar-expand-lg navbar-light bg-white mb-5"
				>
					<div class="container">
						<div class="container d-flex ">
							<div class="logo-desktop col-3 d-xs-none d-sm-none d-lg-inline">

								<RouterLink to="/" class="nav-link"
									><img
										alt="logo-acseo"
										class="logo"
										src="@/assets/logo.svg"
								/></RouterLink>
						
							</div>
							<div class="collapse navbar-collapse col-7" id="navbarNav">
								<ul class="navbar-nav align-items-center">
								
	
									<li class="nav-item">
										<RouterLink to="contact" class="nav-link">
											Expertise
										</RouterLink>
									</li>
									<li class="nav-item">
										<RouterLink to="contact" class="nav-link">
											Technologie & CMS
										</RouterLink>
									</li>
									<li class="nav-item">
										<RouterLink to="contact" class="nav-link">
											Réalisations
										</RouterLink>
									</li>
									<li class="nav-item">
										<RouterLink to="contact" class="nav-link">
											Agences
										</RouterLink>
									</li>
									<li class="nav-item">
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
							<div class="contact-btn d-lg-flex align-items-center col-1 col-lg-2 col-xl-3 d-xs-none d-sm-none">
								<RouterLink to="/contact" class="nav-link">
										Contact
								</RouterLink>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</header>

	<RouterView />
</template>

<style scoped lang="scss">
.navbar-container {
	.navigation-desktop {
		height: 98px;
	

		.desktop {
			.logo {
				width: 200px;
				height: 200px;
			}
		}
	}

	
}


// Large devices (desktops, 992px and up)
@media (min-width: 992px) { 

	.navigation-mobile {
		height: 73px;
	}
}
</style>
