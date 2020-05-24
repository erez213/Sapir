// Erez Aton - 311530539
// Rephael Khanokayev - 312064041
//Semi Reactive Programming

//List of products to easily produce our HTML code
var products = [
	{name:"Item 1", price: 10.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/700x400"},
	{name:"Item 2", price: 11.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/700x400"},
	{name:"Item 3", price: 12.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/700x400"},
	{name:"Item 4", price: 13.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/700x400"},
	{name:"Item 5", price: 14.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/700x400"},
	{name:"Item 6", price: 15.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/700x400"},
];

//Empty array for cart products
var cart = [];

//Render the list of products in the HTML
function renderProducts(){
	$("#productsContainer").html("");
	for(var i=0;i<products.length;i++){
		var html = `<div class="col-lg-4 col-sm-12 col-md-6">
				<div class="card">
				  <img src="${products[i].image}" class="card-img-top" alt="Product Image">
				  <div class="card-body">
					<h5 class="card-title">${products[i].name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">$${products[i].price}</h6>
					<p class="card-text">${products[i].description}</p>
					
				  </div>
				  <div class="card-footer text-muted">
						<a href="#" class="btn btn-primary" data-add="${i}">Add to cart</a>
					</div>
				</div>
			</div>`;
		$("#productsContainer").append(html);
	}
}

//Render the cart
function renderCart(){
	$("#cartModal .modal-body").html("");
	
	if(cart.length == 0){
		$("#cartModal .modal-body").append("<p class='text-center'>The cart is empty.</p>");
		$("#orderBtn").attr("disabled", true);
	} else{
		var price = 0;
		var html = `<table class="table">
			<thead><tr><th>Name</th><th>Price</th><th>Actions</th></tr></thead>
			<tbody>`;
		for(var i=0;i<cart.length;i++){
			price += cart[i].price;
			
			html += `<tr>
				<td>${cart[i].name}</td>
				<td>$${cart[i].price}</td>
				<td><a href="#" class="btn btn-primary" data-delete="${i}">Remove</a></td>
			</tr>`;
		}
		html += `<tr>
			<th>Total ${cart.length} products</th>
			<th>$${price}</th>
			<th></th>
		</tr></tbody>
		</table>`
		
		$("#cartModal .modal-body").append(html);
		$("#orderBtn").attr("disabled", false);
	}
}

$( document ).ready(function() {
	//Onload first render the products
    renderProducts();
	
	//Then render the cart
    renderCart();
	
	//Onclicking the data-add links -> add new product to the cart array and re-render the cart
	$('#productsContainer').on('click', '[data-add]', function() {
		var index = parseInt($(this).attr('data-add'));
		cart.push(products[index]);
		
		renderCart();
		$("#cartModal").modal();
	});
	
	//On clicking the data-delete link -> remove product from cart and re-render cart
	$('#cartModal').on('click', '[data-delete]', function() {
		var index = parseInt($(this).attr('data-delete'));
		cart.splice(index,1);
		
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