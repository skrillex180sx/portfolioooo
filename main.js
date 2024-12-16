document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
        video.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }
});