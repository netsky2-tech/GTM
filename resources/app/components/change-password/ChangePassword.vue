<template>
	<div class="main">
		<div class="row">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Change Password</div>
						<div class="box-description">This is a form to change password</a></div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Old Password</label>
							<input type="password" class="form-control" v-model="form.old_password" placeholder="Enter Old Password">
							<ul class="error-messages">
								<li v-for="message in errorMessages.old_password">{{ message }}</li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> New Password</label>
							<input type="password" class="form-control" v-model="form.new_password" placeholder="Enter New Password">
							<ul class="error-messages">
								<li v-for="message in errorMessages.new_password">{{ message }}</li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<button type="button" class="btn btn-primary" @click="savePassword" :disabled="btnAction != 'Save' ? true : false">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import changePassword from '../../api/change-password'

	export default {
		data() {
			return {
				form: {
					old_password: '',
					new_password: ''
				},
				btnAction: 'Save',
				errorMessages: []
			}
		},
		methods: {
			savePassword() {
				var self = this
				self.btnAction = 'Saving, please wait...'

				changePassword.savePassword(self.form, data => {
					self.form.old_password = ''
					self.form.new_password = ''
					self.btnAction = 'Save'
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Save'
				})
			}
		}
    }
</script>