import './login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button';
import React from 'react';
const props = {
            "title": "GREAT TO HAVE YOU BACK!",
            "sub-title": "Enter your details below.",
            "field": [
                {
                    "label": "Name",
                    "type": "text",
                    "id": "input-name",
                    "placeholder": "Enter your Name"
                },
                {
                    "label": "Email",
                    "type": "email",
                    "id": "input-email",
                    "placeholder": "Enter your Email"
                },
                {
                    "label": "Password",
                    "type": "password",
                    "id": "input-password",
                    "placeholder": "Enter your Password"
                },
                {
                    "label": "Confirm Password",
                    "type": "password",
                    "id": "input-con-password",
                    "placeholder": "Enter your Confirm Password"
                },
            ],
            "action": "Register"
        }
function closeModal(modal){
    if(modal) {
        const target = modal.current;
        target.classList.remove("show");
    }
}
const ModalRegister = React.forwardRef((p, modal) => {
    return (<div ref={modal} className="modal modal-register">
    <div className="modal__dialog">
        <div className="modal__content">
            <div onClick={()=>closeModal(modal)} className="close">
                <FontAwesomeIcon className='close-icon' icon="fa-solid fa-xmark" />
            </div>
            <div className="modal__body">
                <div className="modal__logo">
                    <h1 className='modal__logo'>METAVERSE</h1>
                </div>
                <div className="modal__header">
                    <h4 className='modal__title'>
                        {props.title}
                    </h4>
                    <p className='modal__sub-title'>
                        {props['sub-title']}
                    </p>
                </div>
                <div className="modal__form">
                    <form>
                        {props.field.map((item) => {
                            return (
                                <div className="form-group">
                                    <label htmlFor={item.id}>{item.label}</label>
                                    <input type={item.type} className="input-field" id={item.id} placeholder={item.placeholder} />
                                </div>
                            )
                        })}
                    </form>
                </div>
                <Button btnClassName='btn-active'>
                    {props.action}
                </Button>
            </div>
        </div>
    </div>
</div>)
}
    
);
export default ModalRegister;