import React, { useEffect, useState } from 'react';
import './styles.scss';
import Item from '../../Components/Item';
import Entrega from '../../Types/Entrega';
import { requestList } from '../../Actions/ServerActions';
import { Link } from 'react-router-dom';

export default function Lista() {
    const [entregas, setEntregas] = useState<Entrega[]>([]);

    function didInit() {
        requestList()
            .then((result) => {
                setEntregas([...result]);
            })
            .catch((error) => {
                
            })
    }

    function didFinish() {

    }

    useEffect(() => {
        didInit();
        return didFinish();
    }, [])

    return (
        <div className="lista">
            {entregas.map((entrega, index) => {
                return <Link key={index} to={"detalhe/"+entrega._id}><Item entrega={entrega} /></Link>
            })}
        </div>
    );
}