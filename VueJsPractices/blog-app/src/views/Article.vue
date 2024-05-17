<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-10 offset-md-2">
				<div class="card">
					<img height="420px" :src="article.image" alt="article.title" class="card-img-top">
				</div>

				<div class="card-body">
					<h1 class="card-title text-center my-3">{{ article.title}}</h1>
					<div class="article-content" v-html="article.content.substring(0, 200)"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'
	import config from '@/config'

	export default {
		data() {
			return {
				article: {}
			}
		},
		mounted() {
			this.getArticle()
		},
		methods: {
			getArticle() {
				const articleId = this.$route.params.id
				Axios.get(`${config.apiUrl}/articles/${articleId}`)
				.then(res => {
					this.article = res.data
				})
				.catch(err => {
				console.log(err)
				})
			}
		}
	}
</script>
