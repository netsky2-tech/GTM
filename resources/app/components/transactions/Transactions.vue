<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Transaction Reports</div>
				<div class="box-description">List of transaction reports</div>
			</div>
			<div class="row">
				<div @keyup.enter="getTransactions" class="col-md-12 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="invoice">Invoice</option>
						<option value="client_name">Client</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Search" type="text">
					<button class="btn btn-primary" @click="getTransactions"><i class="pe-7s-search"></i> Search</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">No</th>
							<th></th>
							<th>Invoice</th>
							<th>Client</th>
							<th class="text-right">Total Price</th>
							<th class="text-center action">Actions</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(transaction, key) in transactions">
							<tr>
								<td class="text-center">{{ (key + 1) }}</td>
								<td class="detail-link">
									<div @click="showTransactionDetails(key)" class="link"></div>
								</td>
								<td>{{ transaction.invoice }}</td>
								<td>{{ transaction.client_name }}</td>
								<td class="text-right">
									<span class="badge badge-yellow">${{ transaction.total_price }}</span>
								</td>
								<td class="text-center">
									<router-link tag="a" :to="{ name: 'single-transaction', params: { invoice: transaction.invoice } }"><i class="pe-7s-note"></i> View Invoice</router-link>
								</td>
							</tr>
							<tr v-if="transaction.show">
								<td></td>
								<td colspan="5">
									<table class="table table-striped table-bordered">
										<thead>
											<tr>
												<th class="text-center table-number">No</th>
												<th>Product Name</th>
												<th>Price</th>
												<th class="text-right">Quantity</th>
												<th class="text-center action">Subtotal Price</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(transactionDetail, keyDetail) in transaction.transaction_details">
												<td>{{ (keyDetail + 1) }}</td>
												<td>{{ transactionDetail.product.product_name }}</td>
												<td>{{ transactionDetail.price }}</td>
												<td>{{ transactionDetail.qty }}</td>
												<td>{{ transactionDetail.subtotal_price }}</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</template>
						<tr v-if="!transactions.length">
							<td class="text-center" colspan="5">No records found</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="transactions" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import transaction from '../../api/transaction'
	//import Pagination from '../layout/Pagination'

	export default {
		data() {
			return {
				filter: {
					page: 1,
					limit: 5,
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'invoice',
						value: ''
					}
				},
				transactions: [],
				total: 0
			}
		},
		methods: {
			showTransactionDetails(key) {
				if (this.transactions[key].show) {
					this.transactions[key].show = 0
				} else {
					this.transactions[key].show = 1
				}
			},
			getTransactions() {
				var self = this
				transaction.getTransactions(self.filter, data => {
					data.rows.forEach((transaction, key) => {
						data.rows[key].show = 0
					})
					self.transactions = data.rows
					self.total = data.total
				}, err => {
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.getTransactions()
			},
			changePage(page) {
				this.filter.page = page
				this.getTransactions()
            }
		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.getTransactions()
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
    	    width: 180px;
        }
        .detail-link {
        	width: 60px;
        	position: relative;
        	.link {
        		width: 10px;
        		height: 4px;
        		margin-left: auto;
        		margin-right: auto;
        		cursor: pointer;
        		margin-top: 8px;
        		background-color: #595959;
        		border: 1px solid #595959;
        		&:before {
        			content: "";
        				width: 4px;
        				height: 10px;
        				left: 0px;
        				right: 0px;
        				cursor: pointer;
        				margin: 0px auto;
        				margin-top: -4px;
        				position: absolute;
        				background-color: #595959;
        				border: 1px solid #595959;
        			}
        		}
        }
    }
</style>