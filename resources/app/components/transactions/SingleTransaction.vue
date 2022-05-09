<template>
	<div class="main">
		<div v-if="result.company_info" class="invoice-wrapper">
			<div class="invoice-info">
				<div class="company-info">
					<img alt="Platinum - Laravel & Vuejs SPA Admin Starter" src="/app/images/logo-blue.png">
					<div class="company-name">{{ result.company_info[0].meta_value }}</div>
					<div class="company-address">{{ result.company_info[1].meta_value }}</div>
					<div class="company-phone">Telephone: {{ result.company_info[2].meta_value }}</div>
				</div>
				<div class="client-info">
					<div class="client-name">{{ result.transaction.client_name }}</div>
					<div class="client-address">{{ result.transaction.client_address }}</div>
					<div class="client-phone">Telephone: {{ result.transaction.client_phone }}</div>
				</div>
			</div>
			<div class="invoice-date">
				<div class="invoice-date-title">Invoice</div>
				<div class="invoice-date-text">{{ formatDate(result.transaction.created_at) }}</div>
			</div>
			<div class="invoice-body">
				<div class="invoice-code">
					<span class="invoice-code-title">Invoice Code #</span>
					<span class="invoice-code-text">{{ result.transaction.invoice }}</span>
				</div>
				<table class="table invoice-table">
					<thead>
						<tr>
							<th>Product Name</th>
							<th class="text-right">Quantity</th>
							<th class="text-right">Subtotal Price</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="transaction in result.transaction.transaction_details">
							<td>{{ transaction.product.product_name }}</td>
							<td class="text-right">{{ transaction.qty }}</td>
							<td class="text-right">${{ transaction.subtotal_price }}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Total</td>
							<td class="text-right" colspan="2">${{ result.transaction.total_price }}</td>
						</tr>
					</tfoot>
				</table>
				<div class="invoice-terms">
					<div class="invoice-terms-title">
						Terms and Conditions
					</div>
					<div class="invoice-terms-content">
						Should be paid as soon as received, otherwise a 20% penalty fee is applied
					</div>
				</div>
			</div>
			<div class="invoice-footer">
				<div class="row">
					<div class="col-md-6">
						<img alt="Platinum - Laravel & Vuejs SPA Admin Starter" src="/app/images/logo-blue.png">
						<span class="company-name">{{ result.company_info[0].meta_value }}</span>
					</div>
					<div class="col-md-6 text-right">
						<span class="company-email-phone">{{ result.company_info[3].meta_value }} / {{ result.company_info[2].meta_value }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import transaction from '../../api/transaction'

	export default {
		data() {
			return {
				result: []
			}
		},
		methods: {
			formatDate(date) {
				return moment(date).format('MMM DD YYYY')
			},
			getSingleTransaction() {
				var self = this
				transaction.getSingleTransaction({
					invoice: this.$route.params.invoice
				}, data => {
					self.result = data
				}, err => {
					console.log(err)
				})
			}
		},
		mounted() {
			this.getSingleTransaction()
		}
    }
</script>