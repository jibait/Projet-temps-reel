FROM rabbitmq:3.13-management

RUN rabbitmq-plugins enable --offline rabbitmq_web_stomp

RUN rabbitmq-plugins enable --offline rabbitmq_management

RUN rabbitmq-plugins enable --offline rabbitmq_tracing

EXPOSE 5672
EXPOSE 15672
EXPOSE 15674