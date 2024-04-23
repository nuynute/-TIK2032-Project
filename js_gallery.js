document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            toggleZoom(image);
        });
    });

    function toggleZoom(image) {
        if (image.classList.contains('zoomed')) {
            image.classList.remove('zoomed');
        } else {
            resetZoom();
            image.classList.add('zoomed');
        }
    }

    function resetZoom() {
        images.forEach(image => {
            image.classList.remove('zoomed');
        });
    }
});
