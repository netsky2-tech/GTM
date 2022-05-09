<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">File Upload</div>
				<div class="box-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. <a href="">Anim pariatur cliche reprehenderit</a></div>
			</div>
			<form action="/" class="dropzone" id="dropzone">
				<div class="dz-message">
					<div>
						<h4>Drop files here or click to upload.</h4>
						<div class="text-muted">(This is just a demo dropzone. Selected files are not actually uploaded)</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		methods: {
			initDropzone() {
				$("#dropzone").dropzone({ url: "/file/post" });
			}
		},
		mounted() {
			this.initDropzone()
		}
    }
</script>