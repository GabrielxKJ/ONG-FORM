import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, } from 'firebase/firestore'

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
    const jovensCol = collection(db, 'evento_mulheres_candidatura');
    const consultaInst = await getDocs(jovensCol);
    const jovemList = consultaInst.docs.map(doc => doc.data());
    return jovemList;
  } catch (error) {
    console.error('Erro ao obter jovens:', error);
  }
}

async function insertDoc(db) {
  await setDoc(doc(db, "evento_mulheres_candidatura", "mulher_54"), {
    id: "mulher_54",
    NOME: "Daniela/Leile",
    TELEFONE: "13997054566",
    ENDERECO: "",
    BAIRRO: "Joquei Clube",
    CEP: "",
  });
}

export function renderizaTabela() {
  let tabela = document.createElement('table');
  let linhaCabecalho = cabecalho.insertRow();
  let coluna1 = linhaCabecalho.insertCell(0);
  let coluna2 = linhaCabecalho.insertCell(1);
  let coluna3 = linhaCabecalho.insertCell(2);
  coluna1.innerHTML = '<b>Coluna 1</b>';
  coluna2.innerHTML = '<b>Coluna 2</b>';
  coluna3.innerHTML = '<b>Coluna 3</b>';

  for (var i = 0; i < 3; i++) {
    var linha = tabela.insertRow();
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    celula1.innerHTML = 'Dado ' + (i + 1);
    celula2.innerHTML = 'Dado ' + (i + 4);
    celula3.innerHTML = 'Dado ' + (i + 7);
  }

  document.body.appendChild(tabela);
}

insertDoc(db);
getYoung(db);

// async function insertDoc(db) {
//   await setDoc(doc(db, "evento_mulheres_candidatura", ""), {
//     id:"4",
//     nome: "Pedro",
//     data_nasc:"18/09/2008",
//     idade:"10",
//     sexo:"masculino",
//     telefone_cel:"13981685938",
//     tipo_sanguineo:"a+",
//     associado:false,
//     possui_plano: true,
//     usa_medicamentos:true,
//     necessidades_especiais: false,
//     responsavel: {
//      nome: "Afonso",
//      cpf:"123.456.789-01",
//      grau_parentesco:"pai",
//     },
//     observacoes: {
//       obs_geral:"Criança levada e sapeca",
//       obs_plano_saude:"Bradesco",
//       obs_medicamentos:"dipirona",
//       obs_necess_espec:"TDH"
//     }
//   });
// }


