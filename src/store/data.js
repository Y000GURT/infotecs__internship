import { makeAutoObservable, runInAction } from "mobx"

class Data {
    users = []
    isLoading = false
    sortConfig = {
        key: null, // название столбца
        type: null, // тип сортировки (по убыванию/возрастанию и без сортировки)
    }

    constructor() {
        makeAutoObservable(this)
    }

    async fetchUsers() {
        try {
            this.isLoading = true

            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            
            runInAction(() => {
                this.users = data.users;
                this.isLoading = false
            })
        } catch (error) {
            alert("Error fetching data:", error);
        }
    }

    async fetchFilterUsers(searched) {
        try {
            this.isLoading = true

            const response = await fetch(`https://dummyjson.com/users/search?q=${searched}`);
            const data = await response.json();

            runInAction(() => {
                this.users = data.users;
                this.isLoading = false
            })
        } catch (error) {
            alert("Error fetching data:", error);
        }
    }

    setSortConfig(key, type) {
        this.sortConfig = { key, type };
    }

    get sortedUsers() {
        const sortItems = [...this.users]

        sortItems.sort((item1, item2) => {

            if (this.sortConfig.key === 'fullname') {    // если сортировка по фио
                const name1 = `${item1.firstName}${item1.lastName}${item1.maidenName}`;
                const name2 = `${item2.firstName}${item2.lastName}${item2.maidenName}`;
                if (name1 < name2) {
                    return this.sortConfig.type === 'ascending' ? -1 : 1;
                }
                if (name1 > name2) {
                    return this.sortConfig.type === 'ascending' ? 1 : -1;
                }
                return 0;
            }
            else if (this.sortConfig.key === 'address') {
                const address1 = `${item1.address.city}${item1.address.address}`;
                const address2 = `${item2.address.city}${item2.address.address}`;
                if (address1 < address2) {
                    return this.sortConfig.type === 'ascending' ? -1 : 1;
                }
                if (address1 > address2) {
                    return this.sortConfig.type === 'ascending' ? 1 : -1;
                }
                return 0;
            } else {
                if (item1[this.sortConfig.key] < item2[this.sortConfig.key]) {
                    return this.sortConfig.type === 'ascending' ? -1 : 1;
                }
                if (item1[this.sortConfig.key] > item2[this.sortConfig.key]) {
                    return this.sortConfig.type === 'ascending' ? 1 : -1;
                }
                return 0;
            }
        })
        
        return sortItems
    }

}
const data = new Data()
export default data