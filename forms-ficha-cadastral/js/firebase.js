import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc,  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGgzJjL2apVPmSDwN33CHP_dAQ-AZdQaQ",
    authDomain: "ong-form-database.firebaseapp.com",
    projectId: "ong-form-database",
    storageBucket: "ong-form-database.appspot.com",
    messagingSenderId: "371352906449",
    appId: "1:371352906449:web:00bf7c5cf75b8194d8b3f0"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// exemplo de como utilizar uma requisição no database;
// consulta no banco de dados;
async function getYoung(db) {
  try {
      const jovensCol = collection(db, 'jovens');
      const consultaInst = await getDocs(jovensCol);
      const jovemList = consultaInst.docs.map(doc => doc.data());
      console.log(jovemList);
    } catch (error) {
      console.error('Erro ao obter jovens:', error);
    }
  }


async function insertDoc(db) {
  await setDoc(doc(db, ''))
}
  
getYoung(db);
