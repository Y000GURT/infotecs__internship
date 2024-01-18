import React from 'react'
import { useState } from "react";
import data from '../store/data.js'

const MyTableHead = () => {

    const sorting = [sortOff, sortByDescending, sortByAscending]  // массив с функциями сортировок

    // показатели текущей сортировки (по убыванию/возрастанию) для каждого столбца (фио, возраст, пол, адрес)
    const [currentSortName, setCurrentSortName] = useState(1)     
    const [currentSortAge, setCurrentSortAge] = useState(1)
    const [currentSortGender, setCurrentSortGender] = useState(1)
    const [currentSortAddress, setCurrentSortAddress] = useState(1)

    function sortedUsers(sortValue) {
        switch (sortValue) {
            case 'name':
                if (currentSortName > 2) {              // без сортировки
                    sorting[0]()
                    resetStates()
                } 
                else {                            // вызов сортировок
                    sorting[currentSortName](sortValue)
                    resetStates(sortValue)
                }
            break
            case 'age':
                if (currentSortAge > 2) {
                    sorting[0]()
                    resetStates()
                } 
                else {
                    sorting[currentSortAge](sortValue)
                    resetStates(sortValue)
                }
            break
            case 'gender':
                if (currentSortGender > 2) {
                    sorting[0]()
                    resetStates()
                } 
                else {
                    sorting[currentSortGender](sortValue)
                    resetStates(sortValue)
                }
            break
            default:
                if (currentSortAddress > 2) {
                    sorting[0]()
                    resetStates()
                } 
                else {
                    sorting[currentSortAddress](sortValue)
                    resetStates(sortValue)
                }
        }


    }

    // сброс состояний сортировок, то есть при переходе на другой столбец, сортировка текущего сбрасывается
    function resetStates(sortValue) {  
        switch (sortValue) {
            case 'name':
                setCurrentSortName(currentSortName + 1)
                setCurrentSortAge(1)
                setCurrentSortGender(1)
                setCurrentSortAddress(1)
                break
            case 'age':
                setCurrentSortAge(currentSortAge + 1)
                setCurrentSortName(1)
                setCurrentSortGender(1)
                setCurrentSortAddress(1)
                break
            case 'gender':
                setCurrentSortGender(currentSortGender + 1)
                setCurrentSortName(1)
                setCurrentSortAge(1)
                setCurrentSortAddress(1)
                break
            case 'address':
                setCurrentSortAddress(currentSortAddress + 1)
                setCurrentSortName(1)
                setCurrentSortAge(1)
                setCurrentSortGender(1)
                break
            default:
                setCurrentSortAddress(1)
                setCurrentSortName(1)
                setCurrentSortAge(1)
                setCurrentSortGender(1)
        }
    }

    // вызываем методы со стора
    function sortByAscending(sortValue) {
        data.sortByAscending(sortValue)
    }
    function sortByDescending(sortValue) {
        data.sortByDescending(sortValue)
    }
    function sortOff() {
        data.sortOff()
    }
    return (  
        <thead>
            <tr>
                <th onClick={() => sortedUsers('name')} className='thead__header'> ФИО <img className='thead__img' src={data.imgUrlName} alt=""/> </th>
                <th onClick={() => sortedUsers('age')} className='thead__header'> Возраст <img className='thead__img' src={data.imgUrlAge} alt=""/></th>
                <th onClick={() => sortedUsers('gender')} className='thead__header'> Пол <img className='thead__img' src={data.imgUrlGender} alt=""/></th>
                <th className='thead__header'> Номер телефона </th>
                <th onClick={() => sortedUsers('address')} className='thead__header'> Адрес <img className='thead__img' src={data.imgUrlAddress} alt=""/></th>
            </tr>
        </thead>
     );
}
 
export default MyTableHead;