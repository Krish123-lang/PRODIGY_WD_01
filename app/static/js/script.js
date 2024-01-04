window.onscroll = function () {
    var navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#1149e6";
    } else {
        navbar.style.backgroundColor = "#2aee24";
    }
};
