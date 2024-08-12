import React from 'react'
import { createPortal } from 'react-dom';

const MyModal = ({visible, setClose, children}) => {

    if (!visible) {
        return null
    }

    return createPortal( 

        <div className='modal__wrapper' onClick={() => setClose(false)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <button className='modal__close' onClick={() => setClose(false)}>&#10006;</button>
                { children }
            </div>
        </div>
        ,
        document.body
     );
}
 
export default MyModal;