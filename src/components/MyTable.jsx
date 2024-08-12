import React from 'react'
import data from '../store/data.js'
import MyLoader from '../components/MyLoader.jsx';
import MyTableHead from '../components/MyTableHead.jsx';
import MyModal from '../components/MyModal';
import useModal from '../hooks/useModal.js';
import { observer } from 'mobx-react-lite';
import { useState, useEffect } from "react";

const MyTable = observer( ({ searched }) => {

    const [isShowing, toggleShow] = useModal()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {     // берем данные с сервера 
        data.fetchUsers()
    }, [])

    useEffect( () => {                   // если текст в инпуте меняется, то ищем новые данные 
        data.fetchFilterUsers(searched)
    }, [searched])

    function openModal(user) {
        setCurrentUser(user)
        toggleShow()
    }
    return ( 
        <>
        <MyModal visible={isShowing} setClose={toggleShow}>
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
                <p>{ currentUser?.firstName + ' ' + currentUser?.lastName + ' ' + currentUser?.maidenName }</p>
                <p>{ currentUser?.age } </p>
                <p>{ currentUser?.address?.city + ', ' + currentUser?.address?.address }</p>
                <p>{ currentUser?.height }</p>
                <p>{ currentUser?.weight }</p>
                <p>{ currentUser?.phone }</p>
                <p>{ currentUser?.email }</p>
            </div>
        </MyModal>
        {
            data.isLoading 
            ? 
            <MyLoader></MyLoader> 
            :
            <table border={1}>

                <MyTableHead></MyTableHead>

                <tbody>
                    {
                        data.sortedUsers.map(user => (
                            <tr key={user.id} onClick={() => openModal(user)}>
                                <td>{ user.firstName + ' ' + user.lastName + ' ' + user.maidenName }</td>
                                <td>{ user.age }</td>
                                <td>{ user.gender }</td>
                                <td>{ user.phone }</td>
                                <td>{ user.address.city + ', ' + user.address.address }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        }
        </>
     );
})

export default MyTable;