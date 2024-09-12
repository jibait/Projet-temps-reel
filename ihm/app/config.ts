interface Config {
    stompWebSocketUrl: string;
    messagingQueueName: string;
}

const config: Config = {
    stompWebSocketUrl: 'ws://localhost:15674/ws',
    messagingQueueName: '/topic/messages',
};

export default config;
