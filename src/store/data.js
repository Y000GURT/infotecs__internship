import { makeAutoObservable, runInAction } from "mobx"
import imgOff from '../img/sortOff.png'
import imgAsc from '../img/sortAsc.png'
import imgDesc from '../img/sortDesc.png'

class Data {
    users = []
    originalUsers = []
    isLoading = false
    // изображения вида сортировки
    imgUrlName = imgOff
    imgUrlAge = imgOff
    imgUrlGender = imgOff
    imgUrlAddress = imgOff

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
                this.originalUsers = [...this.users]
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
                this.originalUsers = [...this.users]
                this.isLoading = false
            })
        } catch (error) {
            alert("Error fetching data:", error);
        }
    }

    sortByDescending(sortValue) { // сортировка по убыванию
        switch(sortValue) {
            case 'name':
                this.imgUrlName = imgDesc
                this.imgUrlAge = imgOff
                this.imgUrlGender = imgOff
                this.imgUrlAddress = imgOff
                this.users.sort( (user1, user2) => `${user1.firstName}${user1.lastName}${user1.maidenName}`.localeCompare(`${user2.firstName}${user2.lastName}${user2.maidenName}`))
                break
            case 'gender':
                this.imgUrlGender = imgDesc
                this.imgUrlName = imgOff
                this.imgUrlAge = imgOff
                this.imgUrlAddress = imgOff
                this.users.sort( (user1, user2) => user1.gender.localeCompare(user2.gender))
                break
            case 'address':
                this.imgUrlAddress = imgDesc
                this.imgUrlName = imgOff
                this.imgUrlAge = imgOff
                this.imgUrlGender = imgOff
                this.users.sort( (user1, user2) => `${user1.address.city}${user1.address}`.localeCompare(`${user2.address.city}${user2.address}`))
                break
            default:
                this.imgUrlAge = imgDesc
                this.imgUrlName = imgOff
                this.imgUrlGender = imgOff
                this.imgUrlAddress = imgOff
                this.users.sort( (user1, user2) => user2.age - user1.age)
        }
        
    }
    sortByAscending(sortValue) { // сортировка по возрастанию
        switch(sortValue) {
            case 'name':
                this.imgUrlName = imgAsc
                this.imgUrlAge = imgOff
                this.imgUrlGender = imgOff
                this.imgUrlAddress = imgOff
                this.users.sort( (user1, user2) => `${user2.firstName}${user2.lastName}${user2.maidenName}`.localeCompare(`${user1.firstName}${user1.lastName}${user1.maidenName}`))
                break
            case 'gender':
                this.imgUrlGender = imgAsc
                this.imgUrlName = imgOff
                this.imgUrlAge = imgOff
                this.imgUrlAddress = imgOff
                this.users.sort( (user1, user2) => user2.gender.localeCompare(user1.gender))
                break
            case 'address':
                this.imgUrlAddress = imgAsc
                this.imgUrlName = imgOff
                this.imgUrlAge = imgOff
                this.imgUrlGender = imgOff
                this.users.sort( (user1, user2) => `${user2.address.city}${user2.address}`.localeCompare(`${user1.address.city}${user1.address}`))
                break
            default:
                this.imgUrlAge = imgAsc
                this.imgUrlName = imgOff
                this.imgUrlGender = imgOff
                this.imgUrlAddress = imgOff
                this.users.sort( (user1, user2) => user1.age - user2.age)
        }
    }
    sortOff() { // без сортировки
        this.imgUrlName = imgOff
        this.imgUrlAge = imgOff
        this.imgUrlGender = imgOff
        this.imgUrlAddress = imgOff
        this.users = [...this.originalUsers]
    }
}
const data = new Data()
export default data