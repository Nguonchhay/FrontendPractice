<template>
	<div class="row my-5">
		<div class="col-md-4 offset-md-4">
			<div class="card">
				<div class="card-body">
					<h2 class="text-center my-2">Login</h2>

					<div class="errors errors text-center m-2" v-if="errors.message">
						<small class="text-danger">{{ errors.message}}</small>
					</div>

					<div class="form-group">
						<input v-model="email" type="text" placeholder="Email" class="form-control">

						<div class="errors" v-if="errors.email">
							<small class="text-danger" :key="error" v-for="error in errors.email">{{ error}}</small>
						</div>
					</div>

					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" class="form-control">
						<div class="errors" v-if="errors.password">
							<small class="text-danger" :key="error" v-for="error in errors.password">{{ error}}</small>
						</div>
					</div>

					<div class="form-group text-center">
						<button @click="loginUser()" class="btn btn-success form-control">
							<i v-if="loading" class="fas fa-spin fa-spinner"></i>
							{{ loading ? '' : 'Login'}}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		beforeRouteEnter(to, from, next) {
			const authUser = JSON.parse(localStorage.getItem('auth'))
			if (authUser.email) {
				return next({ path: '/' })
			}
			next()
		},
		data() {
			return {
				email: '',
				password: '',
				errors: {},
				loading: false
			}
		},

		methods: {
			loginUser() {
				this.loading = true
				firebase.auth().signInWithEmailAndPassword(this.email, this.password)
					.then(data => {
						this.loading = false
						const userData = data.user
						localStorage.setItem('auth', JSON.stringify(userData))
						this.loginCallback(userData)
					})
					.catch(err => {
						this.loading = false
						this.errors = err;
					});
			},
			loginCallback(user) {
				this.$root.auth = user

				// Redirect user to home
				this.$router.push('/')
			}
		}
	}
</script>
