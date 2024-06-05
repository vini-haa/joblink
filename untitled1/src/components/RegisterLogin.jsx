import React from 'react';

const RegisterLogin = () => {
    return (
        <div>
            <h2>Registro e Login</h2>
            <form>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit">Registrar</button>
                <button type="button">Login</button>
            </form>
        </div>
    );
};

export default RegisterLogin;
