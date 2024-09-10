import { makeAutoObservable } from 'mobx';

class UserStore {
    pseudo: string = '';
    profilePicture: string | null = null;
    isModaleOpen: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    setPseudo(pseudo: string) {
        this.pseudo = pseudo;
    }

    setProfilePicture(picture: string | null) {
        this.profilePicture = picture;
    }

    clearProfile() {
        this.pseudo = '';
        this.profilePicture = null;
    }

    setModaleOpen(open: boolean) {
        this.isModaleOpen = open;
    }
}

const userStore = new UserStore();
export default userStore;
