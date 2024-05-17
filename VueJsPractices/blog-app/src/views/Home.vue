<template>
	<div>
		<h1 class="text-center my-5">
			Welcome to Homepage
		</h1>

		<div class="col-md-8 offset-md-2" v-for="article in articles" :key="article.id">
			<Article :article="article"/>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'
	import config from '@/config'
	import Article from '@/components/Article.vue'

	export default {
		data() {
			return {
				articles: {}
			}
		},
		components: {
			Article
		},
		mounted() {
			this.getArticles()
		},
		methods: {
			getArticles() {
				Axios.get(`${config.apiUrl}/articles`)
					.then(res => {
						this.articles = res.data
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>
