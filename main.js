function playVideo() {
  // Display the video container
  var videoContainer = document.getElementById("video-container");
  var video = document.getElementById("myVideo");

  videoContainer.style.display = "block"; // Show the video
  video.play(); // Automatically play the video
}

function closeVideo() {
  // Hide the video container and pause the video
  var videoContainer = document.getElementById("video-container");
  var video = document.getElementById("myVideo");

  video.pause(); // Pause the video
  videoContainer.style.display = "none"; // Hide the video container
}
function footer() {
  var footer = document.getElementById("footer");
  var currentDate = new Date(); // Get the current date
  var formattedDate = currentDate.toLocaleDateString(); // Format the date
  footer.innerHTML = "Today's date is: " + formattedDate;
}
