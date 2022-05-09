<template>
	<div class="main">
		<div class="row">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Settings</div>
						<div class="box-description">This is a form to update settings</a></div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Company Name</label>
							<input type="text" class="form-control" v-model="form.company_name" placeholder="Enter Company Name">
							<ul class="error-messages">
								<li v-for="message in errorMessages.company_name">{{ message }}</li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Company Address</label>
							<input type="text" class="form-control" v-model="form.company_address" placeholder="Enter Company Address">
							<ul class="error-messages">
								<li v-for="message in errorMessages.company_address">{{ message }}</li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Company Phone Number</label>
							<input type="text" class="form-control" v-model="form.company_phone_number" placeholder="Enter Phone Number">
							<ul class="error-messages">
								<li v-for="message in errorMessages.company_phone_number">{{ message }}</li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Company Email</label>
							<input type="text" class="form-control" v-model="form.company_email" placeholder="Enter Company Email">
							<ul class="error-messages">
								<li v-for="message in errorMessages.company_email">{{ message }}</li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<button type="button" class="btn btn-primary" @click="saveSettings" :disabled="btnAction != 'Save' ? true : false">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import setting from '../../api/setting'

	export default {
		data() {
			return {
				form: {
					company_name: '',
					company_address: '',
					company_phone_number: '',
					company_email: ''
				},
				btnAction: 'Save',
				errorMessages: []
			}
		},
		methods: {
			getSettings() {
				var self = this
				setting.getSettings(data => {
					this.form.company_name = data[0].meta_value
					this.form.company_address = data[1].meta_value
					this.form.company_phone_number = data[2].meta_value
					this.form.company_email = data[3].meta_value
				}, err => {
					console.log(err)
				})
			},
			saveSettings() {
				var self = this
				self.btnAction = 'Saving, please wait...'

				setting.saveSettings(self.form, data => {
					self.btnAction = 'Save'
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Save'
				})
			}
		},
		mounted() {
			this.getSettings()
		}
    }
</script>