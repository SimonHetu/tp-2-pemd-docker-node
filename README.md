# TP2 PEMD — Docker Node
https://github.com/H26-PEMD/cours/blob/main/assignements/TP2.md

## Description
Petite application Node.js réalisée dans le cadre du TP2.  
Elle affiche une page web simple accessible via Express.

## Technologies
- Node.js
- Express
- Docker

## Port utilisé
L’application utilise le port **3000**.

## Construire l'image

```bash
docker build -t tp2-node-docker .
```

## Lancer le conteneur

```bash
docker run -p 3000:3000 tp2-node-docker
```

## Accéder à l'application
- http://localhost:3000


## Liens de remise

- GitHub : https://github.com/SimonHetu/tp-2-pemd-docker-node
- Docker Hub : https://hub.docker.com/r/simonhetu/tp2-node-docker