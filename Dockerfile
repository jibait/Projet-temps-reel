FROM rabbitmq:3.13-management

# Activer les plugins RabbitMQ en une seule couche
RUN rabbitmq-plugins enable --offline rabbitmq_web_stomp \
    && rabbitmq-plugins enable rabbitmq_management \
    && rabbitmq-plugins enable rabbitmq_tracing

# Exposer les ports nécessaires
EXPOSE 5672 15672