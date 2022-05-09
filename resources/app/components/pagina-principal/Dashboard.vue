<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Dashboard</div>
			<div class="info">Bienvenido {{ $auth.user().usuario }}, <i class="fa fa-map-marker"></i>{{ $auth.user().rol.descripcion }}</div>
		</div>
		<div class="simple-chart-3">
			<div class="filter">
				<div class="left-filter">
					<select>
						<option>2017</option>
						<option>2016</option>
						<option>2015</option>
						<option>2014</option>
					</select>
				</div>
				<div class="right-filter">
					<div class="text active">Daily</div>
					<div class="text">Weekly</div>
					<div class="text">Monthly</div>
				</div>
			</div>
			<div class="chart-box">
				<div class="chart">
					<div class="title">
						<div class="text">Sales Report</div>
						<div class="info">
							<span><i class="fa fa-circle"></i> Sales</span>
							<span><i class="fa fa-circle"></i> Earning ($)</span>
						</div>
					</div>
					<div class="count">
						<div class="text">Total revenue</div>
						<div class="value">$1,521</div>
					</div>
					<canvas id="line-chart" height="149px"></canvas>
				</div>
				<div class="info-list">
					<div class="head-info">
						<div class="text">$1.423.000</div>
						<div class="value">Total Income</div>
					</div>
					<div class="info">
						<div class="text">$14.000</div>
						<div class="value">Earnings</div>
					</div>
					<div class="info">
						<div class="text">180</div>
						<div class="value">Server Hit</div>
					</div>
					<div class="info">
						<div class="text">12.100</div>
						<div class="value">Location</div>
					</div>
					<div class="info">
						<div class="text">1.500 TB</div>
						<div class="value">Server Storage</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<div class="weather-card">
					<div class="detail">
						<div class="country">New York</div>
						<div class="capital-city">New York</div>
						<div class="temperature">
							<div class="temperature-value">23°</div>
							<i class="fa fa-long-arrow-right"></i>
							<i class="fa fa-umbrella"></i>
							<div class="rain-possibility">2%</div>
						</div>
					</div>
					<div class="infographic">
						<i class="weather fa fa-cloud"></i>
						<div class="time">10:25 PM</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="facebook-card">
					<div class="last-post">Genius is one percent inspiration and ninety-nine percent perspiration.</div>
					<div class="date">1 Jan 2018, via desktop</div>
					<i class="fa fa-facebook"></i>
					<div class="detail">
						<div class="comment">
							<i class="fa fa-comments"></i> 21
						</div>
						<div class="like">
							<i class="fa fa-star"></i> 31
						</div>
					</div>
				</div>	
			</div>
			<div class="col-md-4">
				<div class="twitter-card">
					<div class="last-post">Our greatest weakness lies in giving up. The most certain way.</div>
					<div class="date">3 Jan 2018, via mobile</div>
					<i class="fa fa-twitter"></i>
					<div class="detail">
						<div class="comment">
							<i class="fa fa-comments"></i> 21
						</div>
						<div class="like">
							<i class="fa fa-star"></i> 31
						</div>
					</div>
				</div>	
			</div>
		</div>
		<div class="row">
			<div class="col-md-7">
				<div class="pending-products">
					<div class="title">
						<div class="text">Pending Product <div class="badge">27</div></div>
						<div class="action">
							<select>
								<option>Newest</option>
								<option>Today</option>
								<option>7 Days</option>
								<option>14 Days</option>
								<option>Last Month</option>
							</select>
						</div>
					</div>
					<div class="products">
						<div class="product">
							<div class="product-content">
								<div class="product-image">
									<img src="/public/app/images/portfolio1.jpg">
								</div>
								<div class="product-detail">
									<div class="title">Samsung Galaxy J7 Pro</div>
									<div class="info">Food & Drink</div>
								</div>
								<div class="time">Posted Today at 4:23 AM</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
						<div class="product">
							<div class="product-content">
								<div class="product-image">
									<img src="/public/app/images/portfolio2.jpg">
								</div>
								<div class="product-detail">
									<div class="title">Samsung Galaxy J7 Pro</div>
									<div class="info">Food & Drink</div>
								</div>
								<div class="time">Posted Today at 4:23 AM</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
						<div class="product">
							<div class="product-content">
								<div class="product-image">
									<img src="/public/app/images/portfolio3.jpg">
								</div>
								<div class="product-detail">
									<div class="title">Samsung Galaxy J7 Pro</div>
									<div class="info">Food & Drink</div>
								</div>
								<div class="time">Posted Today at 4:23 AM</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
						<div class="product">
							<div class="product-content">
								<div class="product-image">
									<img src="/public/app/images/portfolio4.jpg">
								</div>
								<div class="product-detail">
									<div class="title">Samsung Galaxy J7 Pro</div>
									<div class="info">Food & Drink</div>
								</div>
								<div class="time">Posted Today at 4:23 AM</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<div class="top-users">
					<div class="title">
						<div class="text">Top 5 Owners <div class="badge">27</div></div>
						<div class="action">
							<select>
								<option>Newest</option>
								<option>Today</option>
								<option>7 Days</option>
								<option>14 Days</option>
								<option>Last Month</option>
							</select>
						</div>
					</div>
					<div class="users">
						<div class="user">
							<div class="user-content">
								<div class="user-image">
									<img src="/public/app/images/portfolio1.jpg">
								</div>
								<div class="user-detail">
									<div class="name">Samsung Galaxy J7 Pro</div>
									<div class="sales">191 Sales</div>
								</div>
								<div class="income">$1000</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
						<div class="user">
							<div class="user-content">
								<div class="user-image">
									<img src="/public/app/images/portfolio2.jpg">
								</div>
								<div class="user-detail">
									<div class="name">Samsung Galaxy J7 Pro</div>
									<div class="sales">191 Sales</div>
								</div>
								<div class="income">$120</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
						<div class="user">
							<div class="user-content">
								<div class="user-image">
									<img src="/public/app/images/portfolio3.jpg">
								</div>
								<div class="user-detail">
									<div class="name">Samsung Galaxy J7 Pro</div>
									<div class="sales">191 Sales</div>
								</div>
								<div class="income">$230</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
						<div class="user">
							<div class="user-content">
								<div class="user-image">
									<img src="/public/app/images/portfolio4.jpg">
								</div>
								<div class="user-detail">
									<div class="name">Samsung Galaxy J7 Pro</div>
									<div class="sales">191 Sales</div>
								</div>
								<div class="income">$210</div>
							</div>
							<div class="action">
								<div class="action-list">
									<a href=""><i class="fa fa-search"></i> Accept</a>
									<a href=""><i class="fa fa-shopping-cart"></i> Reject</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
            ...mapGetters({
                usuarioActivo: 'global/usuarioActivo'
            })
        },
		methods: {
			initLineChart() {
				var lineChart = $("#line-chart");
				var lineData = {
					labels: ["02.00", "02.30", "03.00", "03.30", "04.00", "04.30", "02.00", "02.30", "03.00", "02.00", "02.30"],
					datasets: [{
						label: "Visitors Graph",
						borderColor: "#535a6f",
						pointRadius: 4,
						borderWidth: 1,
						backgroundColor: "#263238",
						pointBackgroundColor: "#cccccc",
						data: [1, 5, 10, 4, 20, 5, 10, 2, 12, 5, 1]
					},
					{
						label: "Visitors Graph",
						borderColor: "#535a6f",
						pointRadius: 4,
						borderWidth: 1,
						backgroundColor: "#48527270",
						pointBackgroundColor: "#333",
						data: [5, 32, 5, 42, 50, 59, 5, 32, 5, 40, 5]
					}]
				};

				var myLineChart = new Chart(lineChart, {
					type: 'line',
					data: lineData,
					options: {
						legend: {
							display: false
						},
						scales: {
							xAxes: [{
								ticks: {
									fontSize: '11',
									fontColor: '#969da5'
								},
								gridLines: {
									color: '#f2f4f8',
									zeroLineColor: '#f2f4f8'
								}
							}],
							yAxes: [{
								gridLines: {
									color: '#f2f4f8',
									zeroLineColor: '#f2f4f8'
								},
								ticks: {
									fontSize: '11',
									fontColor: '#969da5'
								}
							}]
						}
					}
				});
			}
		},
		mounted() {
			this.initLineChart();
			//console.log(this.$auth.user().usuario);
		}
    }
</script>

