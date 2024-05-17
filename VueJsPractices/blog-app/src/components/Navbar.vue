<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<router-link class="navbar-brand" to="/">Blog App</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li v-if="!authUser.displayName" class="nav-item">
						<router-link class="nav-link" to="/login">Login</router-link>
					</li>

					<li v-if="!authUser.displayName" class="nav-item">
						<router-link class="nav-link" to="/signup">Signup</router-link>
					</li>

					<li class="nav-item dropdown" v-if="authUser.displayName">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Hey {{ authUser.displayName }}
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a @click="logout()" class="dropdown-item" href="#">Logout</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>

</template>


<script>

import firebase from 'firebase';

export default {
	computed: {
		authUser() {
			return this.$root.auth;
		}
	},
	methods: {
		logout() {
		firebase.auth().signOut()
			.then(() => {
				localStorage.setItem('auth', '{}')

				this.logoutCallback()
			}).catch(error => {
				alert('Something went wrong while trying to sign out user!')
				console.log(error)
			});
		},
		logoutCallback() {
			if (this.$router.currentRoute.path.trim() !== '/') {
				// Redirect user to home
				this.$router.push('/')
			}
		}
	}
}

</script>
