import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function Toolbar() {


    return (
        <div className="toolbar">
            <div className="logo"><Link to="/">Sistema de Entregas</Link></div>
            <div className="toolbar-item"><Link to="/lista">entregas</Link></div>
            <div className="toolbar-item"><Link to="/">registrar</Link></div>
        </div>
    );
}