export default class UserInfo{
    constructor(userSelector){
        this._name = document.querySelector(userSelector.name);
        this._job = document.querySelector(userSelector.job);
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }
    }
    setUserInfo(userData){
        this._name.textContent = userData.name;
        this._job.textContent = userData.about;
    }
}