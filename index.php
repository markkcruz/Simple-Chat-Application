<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">

  <meta name="theme-color" content="#fafafa">
</head>

<body>

  <!-- Add your site or application content here -->

  <div>
    <h1>Chat Application</h1>
    <br />
  </div>

  <div id="userInput">
    <form id="chatForm">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" class="userpass">
      <br />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" class="userpass">
      <br />
      <label for="chatBox1">Chatbox</label>
      <span id="log"></span>
      <br />

    <textarea id="chatBox1" name="chatBox1" placeholder="Type something here send a message to this user." class="chatbox" rows="4" cols="50"></textarea>

  </div>
    <h2>Incoming Text:</h2>
  <div id="incomingText">
    <label for="username2">Username</label>
    <input type="text" id="username2" name="username2" class="userpass">

    <br />
    <label for="chatBox2">Chatbox</label>
    <br />
    <textarea id="chatBox2" name="chatBox2" class="chatbox" rows="4" cols="50"></textarea>



  </div>
  </form>


<div  id="currentUsers">

  <h2>Current Users:</h2>
  <?php

  require_once('connect.php');

  $query = "SELECT name
             FROM chat_table";

  // Use response variable to fetch dbc call and query
  $response = @mysqli_query($dbc, $query);

  if($response){

    echo '<table align="left">
            <tr><td align="left"><b>Photographer First Name</b></td></tr>';

    // Fetch till no more data
    while($row = mysqli_fetch_array($response)){
      echo '<tr>' . '<td align="left">' . $row['name'];
      echo '</tr>';
    }
    echo '</table>';
  }

  ?>

</div>




  <script src="js/main.js"></script>

</body>

</html>
