var sections = document.querySelectorAll('section');
var navItems = document.querySelectorAll('nav ul li');

var menu = document.getElementById('nav');
var menuItems = menu.querySelectorAll('li');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.style.display = 'none';
    });
});

document.getElementById('active-menu').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'none';
});



