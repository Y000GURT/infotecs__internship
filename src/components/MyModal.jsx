import React from 'react'

const MyModal = ({visible, setModal, user}) => {

    const modalClass = ['modal']


    if (visible) {
        modalClass.push('modal-active')
    }
    return ( 
        <div className={modalClass.join(' ')} onClick={() => setModal(false)}>
            <button className='modal__close' onClick={() => setModal(false)}>&#10006;</button>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <div className="modal__param">
                    <p>ФИО:</p>
                    <p>Возраст:</p>
                    <p>Адрес:</p>
                    <p>Рост:</p>
                    <p>Вес:</p>
                    <p>Телефон:</p>
                    <p>Почта:</p>
                </div>
                <div className="modal__value">
                    <p>{ user?.firstName + ' ' + user?.lastName + ' ' + user?.maidenName }</p>
                    <p>{ user?.age } </p>
                    <p>{ user?.address?.city + ', ' + user?.address?.address }</p>
                    <p>{ user?.height }</p>
                    <p>{ user?.weight }</p>
                    <p>{ user?.phone }</p>
                    <p>{ user?.email }</p>
                </div>
            </div>
        </div>
     );
}
 
export default MyModal;