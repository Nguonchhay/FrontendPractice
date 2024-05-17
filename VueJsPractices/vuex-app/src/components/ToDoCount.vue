<template>
	<div>
		Total ToDO items {{ count }}
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: mapState({
			count: state => state.todos.todos.length
		})
	}
</script>
