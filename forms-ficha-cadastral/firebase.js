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
  await setDoc(doc(db, "jovens", "4"), {
    id:"4",
    nome: "Pedro",
    data_nasc:"18/09/2008",
    idade:"10",
    sexo:"masculino",
    telefone_cel:"13981685938",
    tipo_sanguineo:"a+",
    associado:false,
    possui_plano: true,
    usa_medicamentos:true,
    necessidades_especiais: false,
    responsavel: {
     nome: "Afonso",
     cpf:"123.456.789-01",
     grau_parentesco:"pai",
    },
    observacoes: {
      obs_geral:"Criança levada e sapeca",
      obs_plano_saude:"Bradesco",
      obs_medicamentos:"dipirona",
      obs_necess_espec:"TDH"
    }
  });
}

getYoung(db);  
insertDoc(db);
