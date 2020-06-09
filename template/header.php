<!-- Erez Aton - 311530539 -->
<!-- Rephael Khanokayev - 312064041 -->

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>My Online Store</title>
  </head>
  <body>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		  <a class="navbar-brand" href="index.php">My Online Store</a>
		  <?=!isset($_POST['p']) ? '<a href="#" data-toggle="modal" data-target="#cartModal"><i class="fas fa-shopping-cart"></i></a>' : '' ?>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<?php if(isset($_POST['p'])){ ?>
				  <li class="nav-item active">
					<a class="nav-link" href="index.php">Back to Store</a>
				  </li>
				<?php } else{ ?>
				  <li class="nav-item active">
					<a class="nav-link" href="#home">Home</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#aboutUs">About</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#contactUs">Contact</a>
				  </li>
				<?php } ?>
			</ul>
		  </div>
		</nav>
	</header>