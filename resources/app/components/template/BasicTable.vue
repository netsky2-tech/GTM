<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Basic Form</div>
				<div class="box-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. <a href="">Anim pariatur cliche reprehenderit</a></div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<button class="btn btn-primary"><i class="fa fa-pencil"></i> Add New Staff</button>
					<button class="btn btn-primary"><i class="fa fa-print"></i> Print</button>
				</div>
				<div class="col-md-6 sm-text-center form-inline justify-content-end">
					<select class="form-control mb-1 mr-sm-1 mb-sm-0">
						<option>Staff Name</option>
						<option>Position</option>
						<option>Status</option>
						<option>Working Hour</option>
					</select>
					<input class="form-control" placeholder="Search" type="text">
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
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
			<div class="content-box-footer">
				<div class="row">
					<div class="col-md-3 form-inline sm-text-center">
						<select class="form-control">
							<option>5</option>
							<option>10</option>
							<option>20</option>
							<option>25</option>
							<option>50</option>
							<option>100</option>
						</select>
					</div>
					<div class="col-md-3 form-inline mt-2 sm-text-center">Showing 10 of 100 list</div>
					<div class="col-md-6">
						<ul class="pagination pull-right mt-2">
							<li><a href="">First</a></li>
							<li><a href="">Prev</a></li>
							<li><a href="">1</a></li>
							<li class="active"><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">Next</a></li>
							<li><a href="">Last</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>