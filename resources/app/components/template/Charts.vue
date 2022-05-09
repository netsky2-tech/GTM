<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Basic Form</div>
						<div class="box-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. <a href="">Anim pariatur cliche reprehenderit</a></div>
					</div>
					<div class="bar-chart-wrapper">
						<canvas width="300" height="145" id="line-chart"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-9">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Basic Form</div>
						<div class="box-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. <a href="">Anim pariatur cliche reprehenderit</a></div>
					</div>
					<div class="line-chart-wrapper">
						<canvas id="bar-chart"></canvas>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="content-box">
					<div class="donut-chart-wrapper">
						<canvas width="120" height="120" id="donut-chart"></canvas>
						<div class="donut-chart-label">
							<div class="donut-chart-value">330</div>
							<div class="donut-chart-title">Total Visitor</div>
						</div>
					</div>
					<div class="donut-chart-legend">
						<div class="legend-list">
							<div class="legend-bullet green"></div>
							<div class="legend-title">Australia</div>
						</div>
						<div class="legend-list">
							<div class="legend-bullet red"></div>
							<div class="legend-title">Nigeria</div>
						</div>
						<div class="legend-list">
							<div class="legend-bullet yellow"></div>
							<div class="legend-title">United States</div>
						</div>
						<div class="legend-list">
							<div class="legend-bullet blue"></div>
							<div class="legend-title">Japan</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
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
			},
			initDonutChart() {
				var donutChart = $("#donut-chart");
				var data = {
					labels: ["Red", "Yellow", "Green", "Blue"],
					datasets: [{
						data: [80, 120, 80, 50],
						backgroundColor: ["#ff4141", "#FBC02D", "#71c21a", "#5797fc"],
						hoverBackgroundColor: ["#ff5c5c", "#fdcd54", "#89da32", "#6ca4fb"],
						borderWidth: 0
					}]
				};

				new Chart(donutChart, {
					type: 'doughnut',
					data: data,
					options: {
						legend: {
							display: false
						},
						animation: {
							animateScale: true
						},
						cutoutPercentage: 80
					}
				});
			},
			initBarChart() {
				var barChart1 = $("#bar-chart");
				var barData1 = {
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
						pointBackgroundColor: "#fbd500",
						data: [5, 32, 5, 42, 50, 59, 5, 32, 5, 40, 5]
					}]
				};

				new Chart(barChart1, {
					type: 'bar',
					data: barData1,
					options: {
						scales: {
							xAxes: [{
								display: false,
								ticks: {
									fontSize: '11',
									fontColor: '#969da5'
								},
								gridLines: {
									color: 'rgba(0,0,0,0.05)',
									zeroLineColor: 'rgba(0,0,0,0.05)'
								}
							}],
							yAxes: [{
								ticks: {
									beginAtZero: true
								},
								gridLines: {
									color: 'rgba(0,0,0,0.05)',
									zeroLineColor: '#6896f9'
								}
							}]
						},
						legend: {
							display: false
						},
						animation: {
							animateScale: true
						}
					}
				});
			}
		},
		mounted() {
			this.initLineChart()
			this.initBarChart()
			this.initDonutChart()
		}
    }
</script>