var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    if (window.scrollY <= 50) { 
        nav.style.backgroundColor = 'transparent'; 
    } else {
        nav.style.backgroundColor = '#2a2424e6';
    }
});
 