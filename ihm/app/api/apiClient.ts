import { Api, Message } from './generated/api'; // Chemin vers le fichier généré
import { makeAutoObservable } from 'mobx';

class ApiClient {
    api: Api<unknown>; // Utilisez `unknown` si vous n'avez pas de type spécifique pour la sécurité
    messages: Message[] = [];

    constructor() {
        this.api = new Api<unknown>(); // Passez `unknown` comme argument de type
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
}

export const apiClient = new ApiClient();
