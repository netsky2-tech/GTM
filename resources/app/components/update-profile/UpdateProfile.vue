<template>
	<div class="main">
		<div class="row">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Update Profile</div>
						<div class="box-description">This is a form to update profile</a></div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Full Name</label>
							<input type="text" class="form-control" v-model="form.name" placeholder="Enter Full Name">
							<ul class="error-messages">
								<li v-for="message in errorMessages.name">{{ message }}</li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Email Address</label>
							<input type="email" class="form-control" v-model="form.email" readonly>
						</div>
						<div class="form-group">
							<label for=""> Group</label>
							<select class="form-control" v-model="form.group_id">
								<option :value="group.id" v-for="group in groups">{{ group.group_name }}</option>
							</select>
							<ul class="error-messages">
								<li v-for="message in errorMessages.group_id">{{ message }}</li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<button type="button" class="btn btn-primary" @click="saveProfile" :disabled="btnAction != 'Save' ? true : false">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import group from '../../api/rol'
	import profile from '../../api/profile'

	export default {
		data() {
			return {
				groups: [],
				form: {
					name: '',
					email: '',
					group_id: ''
				},
				btnAction: 'Save',
				errorMessages: []
			}
		},
		methods: {
			getAllGroups() {
				var self = this
				group.getAllGroups(data => {
					self.groups = data
				}, err => {
					console.log(err)
				})
			},
			getProfile() {
				var self = this
				profile.getProfile(data => {
					this.form.name = data.name
					this.form.email = data.email
					this.form.group_id = data.group_id
				}, err => {
					console.log(err)
				})
			},
			saveProfile() {
				var self = this
				self.btnAction = 'Saving, please wait...'

				profile.saveProfile(self.form, data => {
					self.btnAction = 'Save'
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Save'
				})
			}
		},
		mounted() {
			this.getProfile()
			this.getAllGroups()
		}
    }
</script>