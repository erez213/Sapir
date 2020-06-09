// Erez Aton - 311530539
// Rephael Khanokayev - 312064041
//Semi Reactive Programming



//Empty array for cart products
var cart = [];

//Render the cart
function renderCart(){
	$("#cartModal .modal-body").html("");
	
	var sum = cart.reduce(function(a, b) { return a + b; }, 0);
	if(sum == 0){
		$("#cartModal .modal-body").append("<p class='text-center'>The cart is empty.</p>");
		$("#orderBtn").attr("disabled", true);
	} else{
		var price = 0;
		var count = 0;
		var html = `<table class="table">
			<thead><tr><th>Name</th><th>Price</th><th>Actions</th></tr></thead>
			<tbody>`;
		for (index in cart) {
			var productName = $("#product_"+index).attr('data-name');
			var productPrice = $("#product_"+index).attr('data-price');
			price += productPrice*cart[index];
			
			count += cart[index];
			
			html += `<tr>
				<td>${productName} (x${cart[index]})</td>
				<td>$${productPrice*cart[index]}</td>
				<td>
					<a href="#" class="btn btn-primary" data-add="${index}">Add</a>
					<a href="#" class="btn btn-danger" data-delete="${index}">Remove</a>
				</td>
			</tr>`;
		}
		html += `<tr>
			<th>Total ${count} products</th>
			<th>$${price}</th>
			<th></th>
		</tr></tbody>
		</table>`
		
		//Add hidden inputs for submiting the cart
		for (index in cart) {
			html += `<input type="hidden" name="p[${index}]" value="${cart[index]}" />`;
		}
		
		$("#cartModal .modal-body").append(html);
		$("#orderBtn").attr("disabled", false);
	}
}

$( document ).ready(function() {
	//Render the cart
    renderCart();
	
	//Onclicking the data-add links -> add new product to the cart array and re-render the cart
	$('#productsContainer,#cartModal').on('click', '[data-add]', function() {
		var index = parseInt($(this).attr('data-add'));
		if(!cart[index])cart[index] = 0;
		cart[index]++;
		
		renderCart();
		$("#cartModal").modal();
	});
	
	//On clicking the data-delete link -> remove product from cart and re-render cart
	$('#cartModal').on('click', '[data-delete]', function() {
		var index = parseInt($(this).attr('data-delete'));
		if(cart[index] > 1){
			cart[index]--;
		} else{
			cart.splice(index,1);
		}
		
		renderCart();
	});
	
	//Change cell background color on hover, and restore on out
	var originalBackgroundColor;
	$("table td,table th").mouseover(function() {
		originalBackgroundColor = $(this).css("background-color");
		$(this).css("background-color","blue");
	}).mouseout(function() {
		$(this).css("background-color",originalBackgroundColor);
	});
	
	
	//Show message when user leave page, and then unregister the event
	$(document).mouseleave(function () {
		alert("Goodbye! Hope to see you come back.");
		$(document).off('mouseleave');
	});
});