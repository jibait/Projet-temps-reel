import { useEffect, useState } from 'react';

// Définir le type du tableau de messages
type Message = string;

export const useRabbitMQ = (wsUrl: string): Message[] => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    
    // Crée une nouvelle connexion WebSocket à l'URL spécifiée
    const ws: WebSocket = new WebSocket(wsUrl);

    // événement déclenché lorsque la connexion WebSocket est établie
    ws.onopen = () => {
      console.log('Connecté à la websocket RabbitMQ');
    };

    // événement déclenché lorsque des messages sont reçus via la WebSocket
    ws.onmessage = (event: MessageEvent<string>) => {
      // Ajoute le nouveau message reçu au tableau des messages existants
      setMessages((prev) => [...prev, event.data]);
    };

    ws.onclose = () => {
      console.log('Fermerture de la connexion à la websocket RabbitMQ');
    };

    // Gestion des erreurs
    ws.onerror = (error) => {
      console.error('Erreur websocket : ', error);
    };

    return () => {
      ws.close();
    };
  }, [wsUrl]);

  return messages;
};