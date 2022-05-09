<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Wysiwyg Editor</div>
				<div class="box-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. <a href="">Anim pariatur cliche reprehenderit</a></div>
			</div>
			<textarea cols="80" id="ckeditor" name="ckeditor" rows="10"></textarea>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		methods: {
			initCkeditor() {
				CKEDITOR.replace('ckeditor')
			}
		},
		mounted() {
			this.initCkeditor()
		}
    }
</script>