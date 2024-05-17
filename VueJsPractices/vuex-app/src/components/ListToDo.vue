<template>
	<table class="table table-bordered">
		<tr v-for="item in todos" :key="item.id">
			<td>{{ item.title }}</td>
			<td>
				<button>Edit</button>
				<button @click="deleteToDo(item.id)">Delete</button>
			</td>
		</tr>
	</table>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		mounted() {
			this.$store.dispatch('todos/listToDoAction')
		},
		computed: mapState({
			todos: state => state.todos.todos
		}),
		methods: {
			deleteToDo(id) {
				if (confirm('Are you sure?')) {
					this.$store.dispatch('todos/deleteToDoAction', id)
				}
			}
		}
	}
</script>
