# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1) installed tailwind css.
2) created firebase accound , after creating web app in firebase. 
3) used the command "npm install firebase"
4) creatae a new folder in src as config inside it create firebase.js file . Code that will be used to populate the file  was from  firebase app creation .
5) Then using "firestore database " inside build section on left created datbase.
6) Click on create database button and follow the instructions .
7) once the empty database is created it will ask for some dummy dat ato be added give random values as we will update the data from the frontened.
8) Once done we will have to import firestore from firebase 
9) one imported we will create const db variable  = getfirestore(app)
10) work with UI