<?php
	//List of products
	$products = [
		['id'=>1,'name'=>"Item 1", 'price'=> 10.99, 'description'=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'image'=> "https://via.placeholder.com/700x400"],
		['id'=>2,'name'=>"Item 2", 'price'=> 11.99, 'description'=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'image'=> "https://via.placeholder.com/700x400"],
		['id'=>3,'name'=>"Item 3", 'price'=> 12.99, 'description'=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'image'=> "https://via.placeholder.com/700x400"],
		['id'=>4,'name'=>"Item 4", 'price'=> 13.99, 'description'=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'image'=> "https://via.placeholder.com/700x400"],
		['id'=>5,'name'=>"Item 5", 'price'=> 14.99, 'description'=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'image'=> "https://via.placeholder.com/700x400"],
		['id'=>6,'name'=>"Item 6", 'price'=> 15.99, 'description'=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'image'=> "https://via.placeholder.com/700x400"]
	];

	require 'template/header.php';
	
	if(isset($_POST['p']) && is_array($_POST['p'])){
		require 'template/checkout.php';
	} else{
		require 'template/store.php';
		require 'template/about.php';
	}
	require 'template/footer.php';
?>