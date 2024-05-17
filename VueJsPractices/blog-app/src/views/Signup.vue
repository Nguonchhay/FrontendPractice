<template>
	<div class="row my-5">
		<div class="col-md-4 offset-md-4">
			<div class="card">
				<div class="card-body">
					<h2 class="text-center my-2">Signup</h2>
					<div class="form-group">
						<input v-model="name" type="text" placeholder="Full Name" class="form-control">
						<div class="errors" v-if="errors.name">
							<span class="text-danger" :key="error" v-for="error in errors.name">{{ error }}</span>
						</div>
					</div>

					<div class="form-group">
						<input v-model="email" type="text" placeholder="Email" class="form-control">
						<div class="errors" v-if="errors.email">
							<span class="text-danger" :key="error" v-for="error in errors.email">{{ error }}</span>
						</div>
					</div>

					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" class="form-control">
						<div class="errors" v-if="errors.password">
							<span class="text-danger" :key="error" v-for="error in errors.password">{{ error }}</span>
						</div>
					</div>

					<div class="form-group text-center">
						<button :disabled="loading" @click="registerUser()" class="btn btn-success form-control">
							<i v-if="loading" class="fas fa-spin fa-spinner"></i>
							{{ loading ? '' : 'Signup'}}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import firebase from "firebase"

	export default {
		beforeRouteEnter(to, from, next) {
			const authUser = JSON.parse(localStorage.getItem('auth'))
			if (authUser.displayName) {
				return next({ path: '/' })
			}
			next()
		},
		data() {
			return {
				name: '',
				email: '',
				password: '',
				errors: {},
				submitted: false,
				loading: false
			}
		},

		methods: {
			registerUser() {
				this.loading = true
				this.submitted = true
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.email, this.password)
					.then(data => {
						data.user
							.updateProfile({
								displayName: this.name
							})
							.then(() => {
								this.loading = false
								this.submitted = false
								const userData = data.user
								localStorage.setItem('auth', JSON.stringify(userData))
								this.$root.auth = userData

								// Redirect user to home
								this.$router.push('/')
							});
					})
					.catch(err => {
						this.submitted = false
						this.loading = false
						this.errors = err
					});
			}
		}
	}
</script>
