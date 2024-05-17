<template>
	<div>
		<input type="text" v-model="title" @keyup.enter="saveToDo" placeholder="ToDo item" />
	</div>
</template>

<script>
	export default {
		data: () => ({
			title: ''
		}),
		methods: {
			saveToDo() {
				this.$store.dispatch('todos/addToDoAction', this.title)
				this.title = ''
			}
		}
	}
</script>

<style>
	input {
		font-size: 22px;
		border: 2px solid #000;
		padding: 15px;
	}
</style>
