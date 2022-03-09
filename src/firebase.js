import { initializeApp } from "firebase";

const config = {
  apiKey: "AIzaSyBmV75yNWmhttDb6fwFh5-efeFV1YFNVNM",
  authDomain: "todo-83fc4.firebaseapp.com",
  projectId: "todo-83fc4",
  storageBucket: "todo-83fc4.appspot.com",
  messagingSenderId: "1046518830479",
  appId: "1:1046518830479:web:13c80fdabfe0ef926fe7fa",
  measurementId: "G-4BE8BRKTC1",
};

const app = initializeApp(config);

const db = app.firestore();

export default db;
