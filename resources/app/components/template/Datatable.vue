<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Basic Form</div>
				<div class="box-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. <a href="">Anim pariatur cliche reprehenderit</a></div>
			</div>
			<div class="table-responsive">
				<table class="table table-striped table-bordered datatable">
					<thead>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<th>Product Name</th>
							<th class="text-center">Images</th>
							<th class="text-center">Status</th>
							<th class="text-right">Order Total</th>
							<th class="text-center">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<td class="nowrap">Iphone 6</td>
							<td class="text-center">
								<span class="badge badge-yellow">Fullstack Administrator</span>
							</td>
							<td class="text-center">
								<div class="status-pill green"></div>
							</td>
							<td class="text-right">$22</td>
							<td class="text-center"><i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
						</tr>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<td class="nowrap">Iphone 6</td>
							<td class="text-center">
								<span class="badge badge-red">Frontend Developer</span>
							</td>
							<td class="text-center">
								<div class="status-pill green"></div>
							</td>
							<td class="text-right">$22</td>
							<td class="text-center"><i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
						</tr>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<td class="nowrap">Iphone 6</td>
							<td class="text-center">
								<span class="badge badge-grey">QA</span>
							</td>
							<td class="text-center">
								<div class="status-pill green"></div>
							</td>
							<td class="text-right">$22</td>
							<td class="text-center"><i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
						</tr>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<td class="nowrap">Iphone 6</td>
							<td class="text-center">
								<span class="badge badge-red">Project Manager</span>
							</td>
							<td class="text-center">
								<div class="status-pill green"></div>
							</td>
							<td class="text-right">$22</td>
							<td class="text-center"><i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
						</tr>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<td class="nowrap">Iphone 6</td>
							<td class="text-center">
								<span class="badge badge-yellow">Graphic Designer</span>
							</td>
							<td class="text-center">
								<div class="status-pill green"></div>
							</td>
							<td class="text-right">$22</td>
							<td class="text-center"><i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
						</tr>
						<tr>
							<th class="text-center"><input type="checkbox"></th>
							<td class="nowrap">Iphone 6</td>
							<td class="text-center">
								<span class="badge badge-grey">Fullstack Developer</span>
							</td>
							<td class="text-center">
								<div class="status-pill green"></div>
							</td>
							<td class="text-right">$22</td>
							<td class="text-center"><i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		methods: {
			initDatatable() {
				$('.datatable').DataTable()
			}
		},
		mounted() {
			this.initDatatable()
		}
    }
</script>