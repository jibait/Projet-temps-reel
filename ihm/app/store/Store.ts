import { makeAutoObservable } from 'mobx';
import { Message } from './types';

export class Store {
    messages: Message[] = [];
    pseudo: string = '';
    profilePicture: string | undefined = undefined;
    isModaleOpen: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    addMessage(message: Message) {
        this.messages.push(message);
    }

    setProfile(pseudo: string, profilePicture: string) {
        this.pseudo = pseudo;
        this.profilePicture = profilePicture;
    }

    setPseudo(pseudo: string) {
        this.pseudo = pseudo;
    }

    setProfilePicture(picture: string | undefined) {
        this.profilePicture = picture;
    }

    clearProfile() {
        this.pseudo = '';
        this.profilePicture = undefined;
    }

    setModaleOpen(open: boolean) {
        this.isModaleOpen = open;
    }
}

export const store = new Store();
