	<section class="container" id="home">
		<h2>Checkout</h2>
		<div class="row pb-2">
			<table class="table">
				<thead><tr><th>Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr></thead>
				<tbody>
					<?php 
						$totalPrice = 0;
						foreach($_POST['p'] as $productID=>$quantity){
							$product = $products[array_search($productID, array_column($products, 'id'))]; 
							$totalPrice += $quantity*$product['price'];
					?>
						<tr>
							<td><?=htmlspecialchars($product['name']) ?></td>
							<td><?=htmlspecialchars($quantity) ?></td>
							<td>$<?=htmlspecialchars($product['price']) ?></td>
							<td>$<?=htmlspecialchars($quantity*$product['price']) ?></td>
						</tr>
					<?php } ?>
				</tbody>
				<tfoot>
					<thead><tr><th>Total:</th><th><?=array_sum($_POST['p']) ?></th><th></th><th>$<?=$totalPrice ?></th></tr></thead>
				</tfoot>
			</table>
		</div>
	</section>