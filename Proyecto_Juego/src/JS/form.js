$(document).ready(function() {
    $('.toggle-form').click(function(e) {
        e.preventDefault();
        $('.form form').toggle(); // Alternar la visibilidad de los formularios
    });
});