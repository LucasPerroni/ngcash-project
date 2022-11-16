<p align="center">
  <h1 align="center">
    NG.CASH Project 
  </h1>
</p>

## 💻 Technologies and Tools

- REST APIs
- Node.js
- TypeScript
- PostgreSQL
- ReactJS
- Docker

---

## 🏁 Usage

```bash
$ git clone https://github.com/LucasPerroni/ngcash-project.git

$ cd ngcash-project/

$ docker-compose up --build
```

 - Access localhost:80 in your browser after the server is running
 
 ## 🏁 Other method
 
  - Modify DATABASE_URL in back-end .env to your postsgres url
 
 ```bash
$ git clone https://github.com/LucasPerroni/ngcash-project.git

$ cd ngcash-project/back-end/

$ npm i

$ npm run prisma:all

$ npm run dev
```

 - Modify REACT_APP_API_BASE_URL in front-end .env to http://localhost:5000
 - Access front-end/ folder in another terminal, without stopping the back-end server
 
  ```bash
$ npm i

$ npm start
```
 
  - Access localhost:3000 in your browser
 
