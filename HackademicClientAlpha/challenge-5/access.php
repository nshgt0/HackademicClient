<?php
	$access = false;
	if(isset($_POST["username"]) && isset($_POST["password"])){
		$usr = $_POST["username"];
		$passwd = $_POST["password"];
	
		if(preg_match("/^\w*'\s+or\s*(?P<digits>\d+)\s*=\s*(?P=digits)\s*--\w*/i", $usr)){
			$access= true;
		}
	}	
 ?>
<!DOCTYPE  html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Log In</title>
		<link rel="stylesheet" href="css/c5Style.css">		 
	</head>	
	<body>		
		<header>
			<h1>Restricted Area</h1>		
		<?php		
			if($access==true)
			{
				echo '<p>Access granted</p>';
				echo '<p>Redirecting...</p>';				
				header("Location: accessGrant3d.php");
				die();
			}else{
				echo '<p>Invalid Credentials </p>';
				echo '<p><a href="/challenge-5">Go back</a></p>';
			}			
		?>							
		</header>
	</body>	
</html>
