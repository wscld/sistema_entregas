import React, { useEffect, useState } from 'react';
import './styles.scss';
import Item from '../../Components/Item';
import Entrega from '../../Models/Entrega';
import ModalError from '../../Components/ModalError'
import { requestList } from '../../Actions/ServerActions';
import { Link } from 'react-router-dom';

export default function Lista() {
    const [entregas, setEntregas] = useState<Entrega[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    function didInit() {
        requestList()
            .then((result) => {
                setLoading(false);
                setEntregas([...result]);
            })
            .catch((error) => {
                setLoading(false);
                setError("Falha ao carregar entregas, tente novamente.");
            })
    }

    function didFinish() {

    }

    useEffect(() => {
        didInit();
        return didFinish();
    }, [])

    return (
        <div className="container">
            <ModalError error={error} onDismiss={() => setError("")} visible={error != "" ? true : false}></ModalError>
            {loading?<div className="lista-loading">Carregando...</div>:null}
            <div className="lista">
                {entregas.map((entrega, index) => {
                    return <Link key={index} to={"detalhe/" + entrega._id}><Item entrega={entrega} /></Link>
                })}
            </div>
        </div>
    );
}