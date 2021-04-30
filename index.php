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
    <h1>A Simple Chat Application</h1>
    <br />
  </div>

  <div id="userInput">
    <form id="chatForm">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" class="userpass" placeholder="Please enter your username." onblur="chatBox1Update()">
      <br />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" class="userpass" placeholder="Please enter your password." onblur="releaseChatBox1();chatBox1Update()">
      <br />
      <label for="chatBox1">Chatbox</label>
      <span id="log"></span> <span> </span><span id="error"></span>
      <br />

    <textarea disabled id="chatBox1" name="chatBox1" placeholder="Type something here send a message to this user." class="chatbox" rows="6" cols="100" onKeyUp="updateDB();userBox2NameChecker()"></textarea>

  </div>
    <h2>Incoming Text:</h2>
  <div id="incomingText">
    <label for="username2">Username</label>
    <input type="text" id="username2" name="username2" class="userpass" placeholder="Please enter the username you wish to communicate with." onblur="userBox2NameChecker()">

    <br />
    <label for="chatBox2">Chatbox</label>
    <br />
    <textarea disabled id="chatBox2" name="chatBox2" class="chatbox" rows="6" cols="100"></textarea>



  </div>
  </form>


<div  id="currentUsers">


  <?php

  require_once('connect.php');

  $query = "SELECT name
             FROM chat_table";

  // Use response variable to fetch dbc call and query
  $response = @mysqli_query($dbc, $query);

  if($response){

    echo '<table align="left">
            <tr><td align="left"><b><h2>Current Users:</h2></b></td></tr>';

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
