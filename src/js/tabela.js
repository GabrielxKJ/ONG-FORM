import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

async function renderizarTabela() {
  try {
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
  } catch (error) {
    console.error('Erro ao renderizar tabela:', error);
  }
}

// Chamar a função para renderizar a tabela após o DOM ser carregado
document.addEventListener('DOMContentLoaded', renderizarTabela);