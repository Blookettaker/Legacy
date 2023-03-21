if (location.pathname === '/stats/') {
  document.getElementById("role").innerText = "Role: Rich";
  document.getElementById("tokens").innerText = "Tokens: 7381468394419652671015037282551615518";
  document.getElementById("userBlook").src = "https://legacy.blacket.org/blooks/Space/Tim%20The%20Alien.gif";
} else if (location.pathname === '/leaderboard/') {
  $.get(`/worker/user/getusername.php`, function(data) {
    if (document.getElementById("preloadLeaderboard").innerHTML.split('<br>2. ')[1].includes(data)) {
        let x = document.getElementById("preloadLeaderboard").innerHTML.split('<br>2. ')[1].replace(data, "asdfghjkl");
        document.getElementById("preloadLeaderboard").innerHTML = `1. ${data} - 7381468394419652671015037282551615518Tokens<br>2. ` + x;
    } else {
        let x = document.getElementById("preloadLeaderboard").innerHTML.split('<br>2. ')[1];
        document.getElementById("preloadLeaderboard").innerHTML = `1. ${data} - 7381468394419652671015037282551615518Tokens<br>2. ` + x;
    };
  });
} else if (location.pathname === '/market/') {
  document.getElementById("tokensText").innerHTML = '7381468394419652671015037282551615518';
} else if (location.pathname === '/blooks') {
  setInterval(() => {
    document.getElementById("blookQuantity").innerHTML = 'Quantity: Infinite';
  }, 10);
};class="
