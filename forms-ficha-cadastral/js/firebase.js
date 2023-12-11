import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, query, where } from 'firebase/firestore'
// import { formInfo } from "./domForm.js";

// console.log(formInfo);

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

async function getDbList(db) {
  try {
    const jovensCol = collection(db, 'evento_mulheres_candidatura');
    // exemplo de query no firebase
    // const q = query(jovensCol, where("NOME", "==", "Alba Lima"));
    const consultaInst = await getDocs(jovensCol);
    const womenList = consultaInst.docs.map(doc => doc.data());
    const letter = "a"
    console.log(womenList.filter((women) => women.NOME.startsWith(letter)))
    } catch (error) {
      console.error('Erro ao obter jovens:', error);
    }
  }

  // async function insertDoc(db) {
  //   await setDoc((db, "evento_mulheres_candidatura", "mulher_29"), {
  //     id:"mulher_29",
  //     NOME:"",
  //     TELEFONE:"",
  //     ENDERECO:"",
  //     BAIRRO:"",
  //     CEP:"",
  //   });
  // }


// async function searchBy(value){
// }


// const citiesRef = collection(db, "evento_mulheres_candidatura");

// Create a query against the collection.
  // async function insertDoc(db) {
  //   await setDoc(doc(db, "jovens", "5"), {
  //     id:"4",
  //     nome: formInfo[0][0],
  //     data_nasc:formInfo[0][1],
  //     idade:formInfo[0][2],
  //     sexo:formInfo[0][3],
  //     telefone_cel:formInfo[0][4],
  //     tipo_sanguineo:formInfo[0][5],
  //     associado:formInfo[0][9],
  //     possui_plano:formInfo[0][10],
  //     usa_medicamentos:formInfo[0][11],
  //     necessidades_especiais: formInfo[0][12],
  //     responsavel: {
  //       nome: formInfo[0][6],
  //       cpf: formInfo[0][7],
  //       grau_parentesco:formInfo[0][8],
  //     },
  //     observacoes: {
  //       obs_geral:"",
  //       obs_plano_saude:"",
  //       obs_medicamentos:"",
  //       obs_necess_espec:""
  //     }
  //   });
  // }

  // insertDoc(db);
  getDbList(db);  
