import { Client, IMessage } from "@stomp/stompjs";
import { Message, messageSchema } from "../store/types";
import { Store } from "../store/Store";

type ComServiceParams = {
    url: string;
    queueName: string;
    store: Store;
}

export class ComService {

    url: string;
    queueName: string;
    store: Store;
    client: Client;

    constructor(params: ComServiceParams) {
        this.url = params.url;
        this.queueName = params.queueName;
        this.store = params.store;
        this.client = this.setStompClient();
    }

    setStompClient() {
        const client = new Client({
            brokerURL: this.url,
            reconnectDelay: 5000,
            onConnect: () => {
                console.log('Connexion à RabbitMQ établie');

                // Abonnement à la file d'attente
                client.subscribe(this.queueName, (message) => this.handleMessage(message));
            },
            onStompError: (frame) => {
                // Gestion des erreurs
                console.error('Erreur stomp : ', frame);
            },
        });

        client.activate();

        return client;
    }

    handleMessage(message: IMessage) {

        console.log('Message reçu : ', message.body);
        
        let parsedMessage: unknown;

        try {
            parsedMessage = JSON.parse(message.body);
        } catch (error) {
            console.error('Erreur lors de la lecture du message, JSON invalid', error);
        }

        const parsingResult = messageSchema.safeParse(parsedMessage);
        if (parsingResult.success === false) {
            console.error('Erreur lors de la validation du message', parsingResult.error);
            return;
        }

        this.store.addMessage(parsingResult.data);
    }

    public sendMessage(message: Message) {
        this.client.publish({
            destination: this.queueName,
            body: JSON.stringify(message),
            skipContentLengthHeader: true,
        });
    }

}