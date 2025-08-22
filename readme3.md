fuction i need it fo naviagatioin in the app



navigation to about page

 =>
 <button onclick="goToAbout()">Go to About Page</button>

    <script>
      function goToAbout() {
        window.electronAPI.navigate('about.html');
      }
    </script>
    navigation to home page

 =>
  <button onclick="goBack()">Go Back to Home</button>

    <script>
      function goBack() {
        window.electronAPI.navigate('index.html');
      }
    </script>