// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
            displayLoveMessage(); // Display "I love you Tobin❤️"
            playMusic(); // Play the song starting from the specified time
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to play the music from the specified start time
function playMusic() {
    var audio = document.getElementById('background-music');
    var startTime = 17; // Time in seconds (e.g., 2:00 = 120 seconds)
    
    audio.currentTime = startTime; // Set the starting point of the song
    audio.play(); // Play the song
}

// Flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

// Display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'bow.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Display the love message
function displayLoveMessage() {
    var messageContainer = document.getElementById('love-message-container');
    var loveMessage = document.createElement('div');
    loveMessage.id = 'love-message';
    loveMessage.innerHTML = 'I love you Tobin❤️';
    loveMessage.classList.add('love-text');
    messageContainer.appendChild(loveMessage);
}

// Display the cat.gif initially
displayCat();
