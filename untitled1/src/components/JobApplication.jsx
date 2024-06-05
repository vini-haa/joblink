import React from 'react';

const JobApplication = () => {
    return (
        <div>
            <h2>Candidatura a Vagas</h2>
            <form>
                <input type="text" placeholder="Posição" required />
                <textarea placeholder="Carta de Apresentação"></textarea>
                <button type="submit">Candidatar-se</button>
            </form>
        </div>
    );
};

export default JobApplication;
