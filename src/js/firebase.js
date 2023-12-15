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
    // womenList.forEach((woman) => {
    // })
    console.log(womenList);
    // console.log(womenList.filter((women) => women.NOME.startsWith(letter)))
    } catch (error) {
      console.error('Erro ao obter jovens:', error);
    }
  }

getDbList(db)

  async function insertDoc(db) {
    await setDoc(doc(db, "evento_mulheres_candidatura", "mulher_51"), {
      id:"mulher_51",
      NOME:"Luzinete",
      TELEFONE:"13981719565",
      ENDERECO:"",
      BAIRRO:"Parque de São Vicente",
      CEP:"",
    });
  }

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
  async function renderizarTabela() {
    // Criar a tabela
    var tabela = document.createElement("table");
    tabela.id = "tabelaMulheres";

    // Adicionar cabeçalho (header)
    var cabecalho = tabela.createTHead();
    var linhaCabecalho = cabecalho.insertRow();
    var colunaNome = linhaCabecalho.insertCell(0);
    var colunaTelefone = linhaCabecalho.insertCell(1);
    var colunaBairro = linhaCabecalho.insertCell(2);
    
    colunaNome.innerHTML = "<b>Nome</b>";
    colunaTelefone.innerHTML = "<b>Telefone</b>";
    colunaBairro.innerHTML = "<b>Bairro</b>";

    // Consulta no banco de dados
    const mulheresCol = collection(db, 'evento_mulheres_candidatura');
    const consultaInst = await getDocs(mulheresCol);
    const mulheresList = consultaInst.docs.map(doc => doc.data());

    // Adicionar linhas e células de dados
    mulheresList.forEach(mulher => {
        var linha = tabela.insertRow();
        var celulaNome = linha.insertCell(0);
        var celulaTelefone = linha.insertCell(1);
        var celulaBairro = linha.insertCell(2);

        celulaNome.innerHTML = mulher.NOME;
        celulaTelefone.innerHTML = mulher.TELEFONE;
        celulaBairro.innerHTML = mulher.BAIRRO;
    });

    // Adicionar a tabela ao corpo do documento
    document.body.appendChild(tabela);
}

// Chamar a função para renderizar a tabela
document.addEventListener('DOMContentLoaded', function () {
  renderizarTabela();
})



  // insertDoc(db);
  // getDbList(db);  
