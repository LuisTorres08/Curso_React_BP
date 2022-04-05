import React, { useState } from 'react';

const Eventos = () => {

    const [texto, setTexto] = useState('Texto inicial');
    const eventoClick = () => {
        console.log('Me diste click');
        setTexto('Cambiand el texto...')
    }
}