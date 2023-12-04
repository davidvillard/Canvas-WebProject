function validateRegistration(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Validaciones simples
    if (name.length === 0) {
        console.log('Por favor, ingresa tu nombre.');
        return;
    }

    if (password.length < 8) {
        console.log('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    if (!validateEmail(email)) {
        console.log('Por favor, ingresa un email válido.');
        return;
    }

    // Si todas las validaciones pasan, puedes procesar los datos, por ejemplo, mostrándolos en la consola
    console.log('Datos del registro:');
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Email:', email);

    // Puedes realizar otras acciones aquí, como enviar los datos a un servidor, etc.
}

function validateEmail(email) {
    // Validación de email simple (puede necesitar una validación más robusta según tus requisitos)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
