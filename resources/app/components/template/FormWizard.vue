<template>
	<div class="main">
		<div class="content-box">
			<div class="form-wizard-nav">
				<div class="step" data-form="#form-1">Step 1</div>
				<div class="step" data-form="#form-2">Step 2</div>
				<div class="step" data-form="#form-3">Step 3</div>
				<div class="step" data-form="#form-4">Step 4</div>
				<div class="step" data-form="#form-5">Step 5</div>
			</div>
			<div id="form-1">
				<form>
					<div class="form-group row">
						<label class="col-sm-2 control-label">Full Name</label>
						<div class="col-sm-10">
							<input class="form-control" placeholder="Enter full name" type="text">
						</div>
					</div>
				</form>
				<div class="content-box-footer">
					<button class="btn btn-primary next-action">Next</button>
				</div>
			</div>
			<div id="form-2">
				<form>
					<div class="form-group row">
						<label class="col-sm-2 control-label">Email</label>
						<div class="col-sm-10">
							<input class="form-control" placeholder="Enter email" type="email">
						</div>
					</div>
				</form>
				<div class="content-box-footer">
					<button class="btn btn-primary prev-action">Prev</button>
					<button class="btn btn-primary next-action">Next</button>
				</div>
			</div>
			<div id="form-3">
				<form>
					<div class="form-group row">
						<label class="col-sm-2 control-label">Password</label>
						<div class="col-sm-10">
							<input class="form-control" placeholder="Enter password" type="password">
						</div>
					</div>
					<div class="form-group row">
						<label class="col-sm-2 control-label">Confirm Password</label>
						<div class="col-sm-10">
							<input class="form-control" placeholder="Enter confirm password" type="password">
						</div>
					</div>
				</form>
				<div class="content-box-footer">
					<button class="btn btn-primary prev-action">Prev</button>
					<button class="btn btn-primary next-action">Next</button>
				</div>
			</div>
			<div id="form-4">
				<form>
					<div class="form-group row">
						<label class="col-sm-2 control-label">Phone Number</label>
						<div class="col-sm-10">
							<input class="form-control" placeholder="Enter phone number" type="text">
						</div>
					</div>
				</form>
				<div class="content-box-footer">
					<button class="btn btn-primary prev-action">Prev</button>
					<button class="btn btn-primary next-action">Next</button>
				</div>
			</div>
			<div id="form-5">
				<form>
					<div class="form-group row">
						<label class="col-sm-2 control-label">Address</label>
						<div class="col-sm-10">
							<input class="form-control" placeholder="Enter address" type="text">
						</div>
					</div>
				</form>
				<div class="content-box-footer">
					<button class="btn btn-primary prev-action">Prev</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		methods: {
			initFormWizard() {
				var self = this
				$('.form-wizard-nav').find('.step').each(function() {
					var nextStep = $(this).next()
					var prevStep = $(this).prev()
					var content = $(this).attr('data-form')
					$(content).hide()

					$(content).find('.prev-action').on('click', function() {
						self.go(prevStep)
					})

					$(content).find('.next-action').on('click', function() {
						self.go(nextStep)
					})
				})

				var content = $('.form-wizard-nav').find('.step').first()
				$($(content).attr('data-form')).show()
				$(content).addClass('active').addClass('complete')

				$('.form-wizard-nav').find('.step').each(function() {
					$(this).on('click', function() {
						self.go(this)
					})
				})
			},
			go(el) {
				// next
				if ($(el).prev().hasClass('complete') && !$(el).hasClass('complete')) {
					$(el).prev().removeClass('active')
					$(el).addClass('complete').addClass('active')

					var prevContent = $(el).prev().attr('data-form')
					$(prevContent).hide()

					var nextContent = $(el).attr('data-form')
					$(nextContent).show()						
				}

				// prev
				if ($(el).hasClass('complete') && $(el).next().hasClass('active')) {
					$(el).addClass('complete').addClass('active')
					$(el).next().removeClass('complete').removeClass('active')

					var prevContent = $(el).next().attr('data-form')
					$(prevContent).hide()

					var nextContent = $(el).attr('data-form')
					$(nextContent).show()
				}
			}
		},
		mounted() {
			this.initFormWizard()
		}
    }
</script>