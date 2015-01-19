<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/lib/bootstrap.min.css">
  <link rel="stylesheet" href="css/nav.css">
</head>
<body>

<div class="container">
  
  <div class="masthead">
        <h3 class="text-muted">Project name</h3>
        <nav>
          <ul class="nav nav-justified">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
  </div>

  
  <div class="jumbotron">
        <h1>Marketing stuff!</h1>
        <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
        

<form name="loginForm" role="form" method="POST" action="location.php">
   <div class="form-group">
      <label for="name">Name</label>
      <input name="name" type="text" class="form-control" id="name" 
         placeholder="Enter Name">
   </div>

   <div class="form-group">
      <label for="surname">Surname</label>
      <input name="surname" type="text" class="form-control" id="surname" 
         placeholder="Enter Surname">
   </div>

   <div class="form-group">
      <label for="phone">Phone</label>
      <input name="phone" type="phone" class="form-control" id="phone" 
         placeholder="Enter phone number">
   </div>

    <div class="form-group">
      <label for="location">Your Location</label>
      <input name="location" type="text" class="form-control" id="location" 
         placeholder="Enter Location">
   </div>

   
   <input type="submit" class="btn btn-default" value="Submit">
</form>

  </div>
</div>

	<script src="js/lib/jquery-1.9.1.min.js"></script>
	<script src="js/lib/bootstrap.min.js"></script>
</body>
</html>