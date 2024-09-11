import { useEffect, useState } from 'react';
import { Client, Message } from '@stomp/stompjs';

type RabbitMQMessage = string;

/**
 * Fonction personnalisée pour se connecter à RabbitMQ et recevoir des messages
 * 
 * @param wsUrl L'URL du serveur RabbitMQ
 * @param queueName Le nom de la file d'attente à laquelle on s'abonne
 * @returns Les messages reçus via RabbitMQ pour la file d'attente spécifiée
 */
export const useRabbitMQ = (wsUrl: string, queueName: string): RabbitMQMessage[] => {
  const [messages, setMessages] = useState<RabbitMQMessage[]>([]);

  useEffect(() => {
    const client = new Client({
      brokerURL: wsUrl,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connexion à RabbitMQ établie');

        // Abonnement à la file d'attente
        client.subscribe(queueName, (message: Message) => {
          if (message.body) {
            setMessages((prev) => [...prev, message.body]);
          }
        });
      },
      onStompError: (frame) => {
        // Gestion des erreurs
        console.error('erreurs : ' + frame.headers['message']);
        console.error('détails: ' + frame.body);
      },
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [wsUrl, queueName]);

  return messages;
};