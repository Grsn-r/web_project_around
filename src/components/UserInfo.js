export default class UserInfo{
    constructor(userSelector){
const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
        this._name = profileInfo.querySelector(userSelector.name);
        this._job = profileInfo.querySelector(userSelector.job);
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }
    }
    setUserInfo(newName,newJob){
        this._name.textContent = newName;
        this._job.textContent = newJob;
    }
}