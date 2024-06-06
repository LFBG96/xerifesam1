// Cria um elemento de carregamento
let loadingScreen = document.createElement('div');
loadingScreen.style.position = 'absolute';
loadingScreen.style.top = '50%';
loadingScreen.style.left = '50%';
loadingScreen.style.transform = 'translate(-50%, -50%)';
loadingScreen.id = "loadingScreen";

// Cria uma mensagem na tela de carregamento
let loadingMsg = document.createElement('h3')
loadingMsg.innerText = "A tabela está carregando, aguarde."
loadingScreen.appendChild(loadingMsg)

// Cria um elemento de imagem para o GIF
let loadingGif = document.createElement('img');
loadingGif.src = "https://media.tenor.com/fqDzKdvLIhYAAAAi/dinosaur-dancing-dino.gif"; // Substitua pelo URL do seu GIF
loadingScreen.appendChild(loadingGif);

document.body.appendChild(loadingScreen);

// Função para esconder a tela de carregamento
function hideLoadingScreen() {
    let loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';
}



function pesquisar() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("pesquisa");
    filter = input.value.trim().toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td0 = tr[i].getElementsByTagName("td")[1];
      td1 = tr[i].getElementsByTagName("td")[2];
      td2 = tr[i].getElementsByTagName("td")[3];
      if (td0 || td1 ||td2) {
        txtValue0 = td0.textContent || td0.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        if (txtValue0.trim().toUpperCase().indexOf(filter) > -1 || txtValue1.trim().toUpperCase().indexOf(filter) > -1 || txtValue2.trim().toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  
  let url = "https://apenas.pythonanywhere.com/";
  
  fetch(url)
      .then(response => response.json())
      .then(data => {
          // Criação da tabela
          let table = document.getElementById('table');
  
          // Criação do cabeçalho da tabela
          let header = table.createTHead();
          
          let row = header.insertRow(0);
          let headers = ['Nº','NomeAntigo', 'Data', 'NomeNovo', 'Cla'];
          headers.forEach((header, i) => {
              let cell = row.insertCell(i);
              cell.innerHTML = header;
          });
  
          // Preenchimento da tabela com dados
          let tbody = table.createTBody();
          
          data.forEach(item => {
              let row = tbody.insertRow();
              headers.forEach((header, i) => {
                  let cell = row.insertCell(i);
                  if (item[header] ){
                      cell.innerHTML = item[header];
                      console.log(item[header])
                  }
              });
          });
  
          // Adicionando a tabela ao corpo do documento
          document.body.appendChild(table);
          hideLoadingScreen();
      })
      .catch(error => {console.error('Erro:', error)
      hideLoadingScreen();
      });
      
   
