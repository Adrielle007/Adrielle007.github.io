window.onload =() => {

    alert("Bem-vindo(a) ao Segredinhos da Adri!);
        
        contarObras();

        mostrarHora();
};

function mostrarHora(){

    const hora = new Date();
    
    cost p = document.createElement("p");

    p.innerHTML =
    "Última visita: " + hora.toLocaleString();

    p.sytle.textAling = "center";
    
    p.style.marginBottom = "30 px";
     
    document.querySelector("header").appendChild(p);
}

function contarObras(){

    const total = document.querySelectorAll("td").length;

    const contador = document.createElement("h3");

    contador.innerHTML =
    "Total de Obras Cadastradas: " + total;

    contador.style.margin = "30px 0";
    document.querySelector("main").prepend(contador);
}

const pesquisa = document.createElement("input");

pesquisa.placeholder = "Pesquisar uma obra...";

pesquisa.style.margin = "30px 0";

document.querySelector("main").prepend(pesquisa);

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    const linhas = document.querySelectorAll("tr");

    linhas.forEach(linha=>{

        if(linha.innerText.toLowerCase().includes(texto)){

            linha.style.display="";

        }

        else{

            linha.style.display="none";

        }

    });

});



// ===========================
// Escolha Aleatória
// ===========================

const botao = document.createElement("button");

botao.innerHTML = "🎲 Escolher algo para mim";

botao.style.marginBottom = "30px";

document.querySelector("main").prepend(botao);

botao.addEventListener("click",()=>{

    const obras = document.querySelectorAll("td");

    const sorteio = obras[Math.floor(Math.random()*obras.length)];

    alert("Hoje você deveria assistir/ler:\n\n" + sorteio.innerText);

});



// ===========================
// Envio do formulário
// ===========================

const formulario = document.querySelector("form");

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    const obra = document.getElementById("titulo-obra").value;

    const onde = document.getElementById("onde-encontrar").value;

    const motivo = document.getElementById("motivo").value;

    const recomendacao={

        obra,

        onde,

        motivo

    };

    let lista = JSON.parse(localStorage.getItem("indicacoes")) || [];

    lista.push(recomendacao);

    localStorage.setItem("indicacoes",JSON.stringify(lista));

    alert("❤️ Obrigado pela indicação!");

    formulario.reset();

});



// ===========================
// Voltar ao topo
// ===========================

const topo = document.createElement("button");

topo.innerHTML="⬆";

topo.style.position="fixed";

topo.style.bottom="25px";

topo.style.right="25px";

topo.style.width="50px";

topo.style.height="50px";

topo.style.borderRadius="50%";

topo.style.display="none";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topo.style.display="block";

    }

    else{

        topo.style.display="none";

    }

});

topo.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

    


