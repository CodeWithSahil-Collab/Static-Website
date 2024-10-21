const showVideoButton = document.getElementById('showVideoButton');
const videoContainer = document.getElementById('videoContainer');
const closeButton = document.getElementById('closeButton');
showVideoButton.addEventListener('click', function() {
    videoContainer.classList.remove('hidden');
});
closeButton.addEventListener('click', function() {
    videoContainer.classList.add('hidden');
});
const TrailerOneVideoButton = document.getElementById('TrailerOneshowVideoButton');
const TrailerOnevideoContainer = document.getElementById('TrailerOnevideoContainer');
const TrailerOnecloseButton = document.getElementById('TrailerOnecloseButton');
showVideoButton.addEventListener('click', function() {
    TrailerOnevideoContainer.classList.remove('hidden');
});
closeButton.addEventListener('click', function() {
    TrailerOnevideoContainer.classList.add('hidden');
});
