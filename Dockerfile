FROM ubuntu:trusty

RUN mkdir -p /apps/giantquanta
ADD app/ /apps/giantquanta/
VOLUME /apps/giantquanta

CMD ["echo", "Attach to nginx with --volumes-from"]
