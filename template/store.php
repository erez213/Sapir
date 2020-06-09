	<section class="container" id="home">
		<h2>Our Cool Products</h2>
		<div class="row pb-2" id="productsContainer">
			<?php foreach($products as $k=>$p){ ?>
				<div class="col-lg-4 col-sm-12 col-md-6" id="product_<?=htmlspecialchars($p['id']) ?>" data-name="<?=htmlspecialchars($p['name']) ?>" data-price="<?=htmlspecialchars($p['price']) ?>">
					<div class="card">
					  <img src="<?=htmlspecialchars($p['image']) ?>" class="card-img-top" alt="<?=htmlspecialchars($p['name']) ?>">
					  <div class="card-body">
						<h5 class="card-title"><?=htmlspecialchars($p['name']) ?></h5>
						<h6 class="card-subtitle mb-2 text-muted">$<?=htmlspecialchars($p['price']) ?></h6>
						<p class="card-text">$<?=htmlspecialchars($p['description']) ?></p>
						
					  </div>
					  <div class="card-footer text-muted">
							<a href="#" class="btn btn-primary" data-add="<?=htmlspecialchars($p['id']) ?>">Add to cart</a>
						</div>
					</div>
				</div>
			<?php } ?>
		</div>
	</section>