import React from 'react';

const CandidateProfile = () => {
    return (
        <div>
            <h2>Perfil do Candidato</h2>
            <form>
                <input type="text" placeholder="Nome Completo" required />
                <input type="text" placeholder="Portfólio" required />
                <textarea placeholder="Biografia"></textarea>
                <button type="submit">Salvar Perfil</button>
            </form>
        </div>
    );
};

export default CandidateProfile;
