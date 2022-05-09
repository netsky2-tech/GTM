<template>
	<div class="main">
		<div class="row">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Update User</div>
						<div class="box-description">This is a form to update user</a></div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Name</label>
							<input class="form-control" placeholder="Enter Name" v-model="form.name" >
							<ul class="error-messages">
								<li v-for="message in errorMessages.name">{{ message }}</li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Email</label>
							<input class="form-control" readonly  v-model="form.email">
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
						<router-link tag="button" :to="{ name: 'users' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="updateUser" :disabled="btnAction != 'Save' ? true : false">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import group from '../../api/rol'
	import user from '../../api/user'

	export default {
		data() {
			return {
				groups: [],
				form: {
					name: '',
					email: '',
					password: '',
					password_confirmation: '',
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
			getSingleUser() {
				var self = this
				user.getSingleUser({
					id: this.$route.params.id
				}, data => {
					self.form = data
				}, err => {
					console.log(err)
				})
			},
			updateUser() {
				var self = this
				self.btnAction = 'Saving, please wait...'

				user.updateUser(self.form, data => {
					this.$router.push({
						name: 'users'
					})
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Save'
				})
			}
		},
		mounted() {
			this.getAllGroups()
			this.getSingleUser()
		}
    }
</script>