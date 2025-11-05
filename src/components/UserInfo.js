export default class UserInfo{
    constructor(name, job){
const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
        this._name = profileInfo.querySelector(name);
        this._job = profileInfo.querySelector(job);
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