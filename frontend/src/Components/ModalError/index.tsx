import React from 'react';
import './styles.scss';

export default function ModalError(props: any) {
    return (<>
        {props.visible ?
            <>
                <div className="modal-error">
                    <p>{(props.error)}</p>
                    <div onClick={props.onDismiss} className="dismiss">fechar</div>
                </div>
            </>
            :
            null
        }
    </>)
}