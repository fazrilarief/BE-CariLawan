# CariLawan
CariLawan is a website designed to help you find opponents for Futsal matches or another games.

> Live API Link
```bash
https://carilawan-api.vercel.app/
```

# Disclaimer
In this project, we separate the Backend Repository and the Frontend Repository to make it easier to access and more focused on their respective tasks. The repository you are currently accessing is the backend repository. If you're curious about the frontend, you can access it at this link: .

# Tech Stack
**Frontend** : *React, Tailwind CSS, DaisyUI*
**Backend** : *ExpressJS, Prisma, Mysql*
**Deploy** : *Vercel*

# How to Run
1. Clone the project :
```bash
https://github.com/Lyraeth/BE-CariLawan.git
```

2. Install depencities :
```bash
npm i
# or
npm install
```

3. Generate Database :
```bash
npx prisma generate
# then
npx prisma migrate dev
```

4. Then, run the server with :
```bash
npm run start:dev
```
Open http://localhost:3000 with your browser to see the result.
