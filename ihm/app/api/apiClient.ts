import { Api, Message } from './generated/api';
import { makeAutoObservable } from 'mobx';
import config from '../config'; // Assurez-vous que ce chemin est correct

class ApiClient {
    api: Api<unknown>;
    messages: Message[] = [];
    pseudo: string = '';
    profilePicture: string = '';

    constructor() {
        this.api = new Api<unknown>({ baseUrl: config.apiBaseUrl });
        makeAutoObservable(this);
    }

    async fetchMessages() {
        try {
            const response = await this.api.messages.messagesList();
            this.messages = response.data;
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
    }

    async createMessage(message: Message) {
        try {
            const response = await this.api.messages.messagesCreate(message);
            this.messages.push(response.data);
        } catch (error) {
            console.error('Failed to create message:', error);
        }
    }

    setProfile(pseudo: string, profilePicture: string) {
        this.pseudo = pseudo;
        this.profilePicture = profilePicture;
    }
}

export const apiClient = new ApiClient();
