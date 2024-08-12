import data from '../store/data.js'

const useSortableData = () => {

    // изменение конфига сортировки, где конфиг это объект с полями название столбца и тип сортировки (по убыванию, по возрастанию)
    function changeConfigSort(key) {
        let type = 'ascending'
        
        if (data.sortConfig.key === key && data.sortConfig.type === 'ascending') {
            type = 'descending'
        }
        if (data.sortConfig.key === key && data.sortConfig.type === 'descending') {
            key = null
            type = null
        }

        data.setSortConfig(key, type )
    }

    return { changeConfigSort }
}

export default useSortableData