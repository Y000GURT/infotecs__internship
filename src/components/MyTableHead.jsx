import React from 'react'
import data from '../store/data.js'
import useSortableData from '../hooks/useSortableData.js'

const MyTableHead = () => {

    const { changeConfigSort } = useSortableData()

    const getClassName = (name) => {
        if (data.sortConfig.key === name) {
            if (data.sortConfig.type === 'ascending') {
                return 'thead__header-ascending'
            }
            else if (data.sortConfig.type === 'descending') {
                return 'thead__header-descending'
            }
        }
        return 'thead__header-off'
    }
    
    return (  
        <thead>
            <tr>
                <th onClick={() => changeConfigSort('fullname')}><span className={`thead__header ${getClassName('fullname')}`}>ФИО</span></th>
                <th onClick={() => changeConfigSort('age')}><span className={`thead__header ${getClassName('age')}`}>Возраст</span></th>
                <th onClick={() => changeConfigSort('gender')}><span className={`thead__header ${getClassName('gender')}`}>Пол</span></th>
                <th> <span className='thead__header'>Номер телефона</span></th>
                <th onClick={() => changeConfigSort('address')}><span className={`thead__header ${getClassName('address')}`}>Адрес</span></th>
            </tr>
        </thead>
     );
}
 
export default MyTableHead;