<template>
	<div id="app">
		<Navbar></Navbar>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue'

	export default {
		name: 'App',
		components: {
			Navbar
		}
	}
</script>

<style>
	* {
		font-family: 'Poppins', sans-serif;
		border-radius: 0 !important;
	}

	body {
		background-color: #f5f3ef;
	}
</style>
