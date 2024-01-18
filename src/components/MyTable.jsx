import React from 'react'
import data from '../store/data.js'
import MyLoader from '../components/MyLoader.jsx';
import MyTableHead from '../components/MyTableHead.jsx';
import MyModal from '../components/MyModal';
import { observer } from 'mobx-react-lite';
import { useEffect } from "react";
import { useState } from "react";

const MyTable = observer( ({searched}) => {

    const [modal, setModal] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {     // берем данные с сервера 
        data.fetchUsers()
    }, [])

    useEffect( () => {                   // если текст в инпуте меняется, то ищем новые данные 
        data.fetchFilterUsers(searched)
    }, [searched])

    function openModal(user) {
        setModal(true)
        setCurrentUser(user)
    }
    return ( 
        <>
        <MyModal visible={modal} setModal={setModal} user={currentUser}></MyModal>
        {
            data.isLoading ? 
            <MyLoader></MyLoader> 
            
            :

            <table border={1}>

                <MyTableHead></MyTableHead>

                <tbody>
                    {
                        data.users.map(user => (
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