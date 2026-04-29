# securecheck-api
API REST para verificación de correos comprometidos

Este proyecto corresponde a la implementación de un servicio REST basado en arquitectura orientada a servicios (SOA).

## Funcionalidad

Permite verificar si un correo electrónico ha sido comprometido en filtraciones de datos mediante una API externa.

## Endpoints

### POST /api/validar-email
Valida el formato del correo electrónico.

### GET /api/brechas
Consulta si el correo ha sido comprometido.

## Tecnologías

- Node.js
- Express
- Axios

## Ejecución

npm install
npm start
