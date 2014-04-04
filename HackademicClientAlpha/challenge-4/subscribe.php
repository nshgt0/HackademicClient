<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" >
		<title>Gaming News</title>
		<meta name="descritpion" content="Video game news, reviews, previews and trailers.">
		<link rel="stylesheet"  href="css/c4Style.css">
	</head>	
	<body>		
		<div id="container">
			<header>
				<h1>2D Gaming Portal</h1>
				<p><!--#include file="greetings.txt" --></p>					
			</header>					
			<aside class="asideCol">
				<nav>
					<ul>
						<h3>Menu</h3>
						<li><a href="#">Home</a></li>
						<li><a href="#">News</a></li>
						<li><a href="#">Reviews</a></li>				
						<li><a href="#">Contact</a></li>
					</ul>
				</nav>		
			</aside>		
			<section id="mainContent">
				<p>
				<?php				
					if(isset($_POST["email"])){											
						echo 'Thanks for subscribing: ';
						echo $_POST["email"];					
					}else {
						echo 'Not a valid input.';	
					}
				?>	
				</p>					
				<a href="/challenge-4">Go back</a>
			</div>		
	</body>	
</html>
