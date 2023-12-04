$(document).ready(function() {
    $('.toggle-form').click(function(e) {
        e.preventDefault();
        $('.form form').toggle(); // Alternar la visibilidad de los formularios
    });
});

function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ejemplo de validaciones simples
    if (username.length < 5) {
        console.log('El nombre de usuario debe tener al menos 5 caracteres.');
        // Puedes mostrar una ventana auxiliar también con alert
        // alert('El nombre de usuario debe tener al menos 5 caracteres.');
        return;
    }

    if (password.length < 8) {
        console.log('La contraseña debe tener al menos 8 caracteres.');
        // Puedes mostrar una ventana auxiliar también con alert
        // alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    // Si todas las validaciones pasan, muestras los datos en la consola
    console.log('Datos del formulario:');
    console.log('Username:', username);
    console.log('Password:', password);

    // También puedes hacer otras acciones aquí, como enviar los datos a un servidor, etc.
}
