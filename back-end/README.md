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

---

## 🏁 Usage

```bash
$ git clone https://github.com/LucasPerroni/ngcash-project.git

$ cd ngcash-project/back-end/

$ npm install

$ npm run dev
```

---

## 🚀 API:

```yml
POST /sign-up
    - Route to sign up a new user
    - headers: {}
    - body: {
        "username": "Lorem ipsum", (min 3 characters)
        "password": "Loremipsum123" (min 8 characters, 1 upper, 1 lower and 1 number)
    }
```

```yml
POST /sign-in
    - Route to sign in
    - headers: {}
    - body: {
        "username": "Lorem ipsum", (min 3 characters)
        "password": "Loremipsum123" (min 8 characters, 1 upper, 1 lower and 1 number)
    }
```

```yml
GET /cash (authenticated)
    - Route to get user balance
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /cash/transaction (authenticated)
    - Route to create a transaction
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "username": "Lorem ipsum", (min 3 characters)
        "amount": 10000 (in cents)
    }
```

```yml
GET /cash/transaction (authenticated)
    - Route to list all user transactions
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
