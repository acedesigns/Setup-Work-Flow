<?php

if($_POST['name']!="" or $_POST['surname']!=""  or $_POST['phone']!="" or $_POST['location']!="" ) {
  
  $name     = strip_tags($_POST['name']);
  $surname  = strip_tags($_POST['surname']);
  $phone    = strip_tags($_POST['phone']);
  $location = strip_tags($_POST['location']);

  require_once getcwd().'/php/classes/database.php';
  $database->insertUser($name, $surname, $phone, $location);
    
} else {
   header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/lib/bootstrap.min.css">
  <link rel="stylesheet" href="css/nav.css">

<script src="js/lib/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script src="https://raw.githubusercontent.com/hpneo/gmaps/master/gmaps.js"></script>

<style type="text/css">
    #google-map {
      width: 100%;
      height: 400px;
    }
  </style>
</head>
<body>

<div class="container">
  
  <div class="masthead">
        <h3 class="text-muted">Project name</h3>
        <nav>
          <ul class="nav nav-justified">
            <li class=""><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
  </div>

  
  <div class="jumbotron">
        <h3>Thank You <?php echo $name; ?></h3>
        <p>Your information was saved successfully</p>
        <p class="lead"><span class="label label-success">Success</span></p>

        <p>Your location of <?php echo $location; ?></p>
        <input id="location" type="hidden" value="<?php echo $_POST['location']; ?>" />

        <div id="google-map"></div>

        <script type="text/javascript">
          $(document).ready(function(){
            map = new GMaps({
              el: '#google-map',
              lat: -30.559482,
              lng: 22.937506,
              zoom : 12
            });


            ///////////////////////////////////////
                GMaps.geocode({
                  address: $('#location').val().trim(),
                    callback: function(results, status){
                      if(status=='OK'){
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                          lat: latlng.lat(),
                          zoom: 15,
                          lng: latlng.lng()
                        });
                      }
                  }
            });
            ///////////////////////////////////////

          });
        </script>
        
  </div>
</div>


	<script src="js/lib/bootstrap.min.js"></script>
</body>
</html>