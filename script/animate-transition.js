document.querySelectorAll('.animateTransition').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var div = document.getElementById('animation');
        if (div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});



