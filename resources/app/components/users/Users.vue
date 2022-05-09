<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Users Management</div>
				<div class="box-description">List of users & user management</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-primary" tag="button" :to="{ name: 'create-user-form' }">
						<i class="pe-7s-plus"></i> Create New User
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;getUsers();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="name">Name</option>
						<option value="email">Email</option>
						<option value="group_name">Group Name</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Search" type="text">
					<button class="btn btn-primary" @click="filter.page = 1;getUsers();"><i class="pe-7s-search"></i> Search</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">No</th>
							<th>Full Name</th>
							<th>Email</th>
							<th>Group Name</th>
							<th class="text-center action">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(user, key) in users">
							<td class="text-center">{{ (key + 1) }}</td>
							<td>{{ user.name }}</td>
							<td>{{ user.email }}</td>
							<td>{{ user.group_name }}</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'update-user-form', params: { id: user.id } }"><i class="pe-7s-note"></i></router-link>
								<a @click="deleteUser(user.id)" href="javascript:;"><i class="pe-7s-trash"></i></a>
							</td>
						</tr>
						<tr v-if="!users.length">
							<td class="text-center" colspan="5">No records found</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="users" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import user from '../../api/user'
	//import Pagination from '../layout/Pagination'

	export default {
		data() {
			return {
				filter: {
					page: 1,
					limit: 5,
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'nombre',
						value: ''
					}
				},
				users: [],
				total: 0
			}
		},
		methods: {
			getUsers() {
				var self = this
				user.getUsers(self.filter, data => {
					self.users = data.rows
					self.total = data.total
				}, err => {
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.getUsers()
			},
			changePage(page) {
				this.filter.page = page
				this.getUsers()
            },
            deleteUser(userId) {
            	var self = this
				user.deleteUser({
					id: userId
				}, data => {
					this.getUsers()
				}, err => {
					console.log(err)
				})
            }
		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.getUsers()
		}
    }
</script>

<style lang="scss" scoped>
    .search-field {
    	min-width: 120px;
    }
    .table {
	    a {
		    color: #2675dc;
	    }
	    .table-number {
    	    width: 60px;
        }
        .action {
    	    width: 100px;
        }
    }
</style>