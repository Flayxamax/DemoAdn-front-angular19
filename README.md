# 💻 DemoAdn-front

Front para demo tecnica 

## Tech Stack

![ANGULAR](https://img.shields.io/badge/angular-%23E34F26.svg?style=for-the-badge&logo=angular&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### 1. Frontend Setup
- Instalar dependencias:
```
npm install
```
- Desplegar front desde el CLI desde la ruta del proyecto clonado

```
ng serve
```

### 2. Probar API
Documentación para probar los endpoints de la API

- POST verificar mutación de un ADN

```
/POST http://54.176.142.162/api/mutation
```
Usar body JSON

```
{
    "adn": [
        "AAGTCC",
        "CAAGTC",
        "TCAAGT",
        "GTCAAG",
        "TGTCAA",
        "CTGTCA"
    ]
}
```
- GET Obtener ultimos diez registros

```
/GET http://54.176.142.162/api/list
```
- GET Obtener estadisticas de los ADN registrados

```
/GET http://54.176.142.162/api/stats
```

LIMITE DE API A 10 SOLICITUDES POR MINUTO
