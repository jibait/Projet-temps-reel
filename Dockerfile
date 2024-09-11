FROM rabbitmq:3.13-management

RUN rabbitmq-plugins enable --offline rabbitmq_web_stomp

RUN rabbitmq-plugins enable rabbitmq_management

RUN rabbitmq-plugins enable rabbitmq_tracing

EXPOSE 15672