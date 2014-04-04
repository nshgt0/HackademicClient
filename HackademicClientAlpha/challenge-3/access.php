<?php
	$access = false;
	if(isset($_POST["username"]) && isset($_POST["password"])){
		$usr = $_POST["username"];
		$passwd = $_POST["password"];	
		if($usr == "admin" && $passwd=="letme1n"){
			$access= true;
		}
	}	
 ?>
<!DOCTYPE  html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Log In</title>
		<link rel="stylesheet" href="css/c3Style.css">		 
	</head>	
	<body>		
		<header>
			<h1>Restricted Area</h1>		
		<?php
		
			if($access==true){
				echo '<p>Access granted</p>';
				echo '<p>Redirecting...</p>';				
				header("Location: accessGranted.php");
				die();
			}else{
				echo '<p>Invalid Credentials </p>';
				echo '<p><a href="/challenge-3">Go back</a></p>';
			}			
		?>							
		</header>
	</body>
</html>
