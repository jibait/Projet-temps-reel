import WebSocket, { WebSocketServer } from 'ws';
import amqp, { Channel, Connection } from 'amqplib';

const wss: WebSocketServer = new WebSocketServer({ port: 8080 });

const connectRabbitMQ = async (): Promise<void> => {
  try {
    const connection: Connection = await amqp.connect('amqp://localhost');
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue('message'); // A changer selon ce que vous voulez mettre

    // Gestion des connexions WebSocket entrantes
    wss.on('connection', (ws: WebSocket) => {
      ws.send('Connection à la websocket RabbitMQ réussie');

      // Consomme les messages de RabbitMQ depuis la file d'attente spécifiée
      channel.consume('message', (msg) => { // A changer selon ce que vous voulez mettre
        if (msg !== null) {
          // Envoie le message consommé à tous les clients WebSocket connectés
          ws.send(msg.content.toString());
          // Accuse réception du message pour le retirer de la file d'attente
          channel.ack(msg);
        }
      });
    });

  } catch (error) {
    // Gestion des erreurs
    console.error('Connexion échouée : ', error);
  }
};

connectRabbitMQ();
