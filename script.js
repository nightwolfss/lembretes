var url = window.location.href;

// document.querySelector(".drawer-control-x-button.blackbox-button-holder").addEventListener("click", function(){
//     document.querySelector(".blackbox-overlay").style.display = 'none';
// });

//document.querySelector(".drawer-control-x-button.blackbox-button-holder").addEventListener("load", function(){
	// setTimeout(function(){
	// 	document.querySelector(".blackbox-overlay").style.display = 'none';
	// },3000);
//});


// Função para carregar o jQuery dinamicamente
function loadJQuery() {
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.onload = function() {
	// O código aqui será executado após o carregamento do jQuery
	console.log("jQuery carregado com sucesso!");
	// Aqui você pode fazer uso da biblioteca jQuery
	};
	document.head.appendChild(script);
}
// Chamada da função para carregar o jQuery
loadJQuery();

setTimeout(function(){
	$(".blackbox-overlay").fadeOut();
},1000);

if(url.includes("trello.com/b/")){
    trello();
}else if(url.includes("youtube.com")){
    youtube();
}else if(url.includes("oq=brasileirao") || url.includes("oq=brasileirão") || url.includes("google.com/search?q=campeonato+brasileiro")){
    brasileirao();
}else if(url.includes("https://apps.correios.com.br/portalimportador/pages/pesquisarRemessaImportador/pesquisarRemessaImportador.jsf")){
    importacoesCorreios();
}

function importacoesCorreios(){
var produtos = [{'item':'NL641321607BR','resp':'Depilall'},
		{'item':'LB573677391HK','resp':'Cubot P80'},
		{'item':'NL712183954BR','resp':'RX580 8G'}, 
		{'item':'NL701089096BR','resp':'HY300 Projetor'}, 
		{'item':'NL679592564BR','resp':'x79 (x2)'},
		{'item':'NL654390186BR','resp':'Anti_Barulho'}];
	
document.querySelectorAll("#tableEncomendas tbody tr td").forEach(ele=>{
    produtos.forEach(e=>{
        if(e.item == ele.innerText){
            ele.innerText += " | " + e.resp;           
        }
    });
   
    setInterval(function(){
       try {
        if(ele.querySelector('img').className == 's_pend'){
                ele.parentElement.style.background = '#e89d79';
        }
    } catch (error) {
    }

    try {
        if(ele.querySelector('img').className == 's_ativ'){
                ele.parentElement.style.background = 'lightgreen';
        }
    } catch (error) {
    } 
    }, 2000);
    
})

}

function brasileirao(){
	var p = setInterval(function(){
	if(document.querySelector("#liveresults-sports-immersive__league-fullpage > div > div:nth-child(1) > div:nth-child(1) > div > div.ellipsisize.IvuoRc.ivmzN.imso-ani").innerText.includes("Brasileirão Série A")){
	    document.querySelectorAll("tr[jscontroller='cvgK0e']").forEach(ele=>{

	    var src = ele.querySelector(".mzZLbb img:nth-child(1)").getAttribute("src");
	    var srcTamanho = src.substring(src.length - 4, src.length);

	    if(srcTamanho == "Cg=="){
		ele.closest("tr").style.backgroundColor = "#F0FFF0";
	    }else if(srcTamanho == "Pgo="){
		ele.closest("tr").style.backgroundColor = "#FFF5EE";
	    }else{
		ele.closest("tr").style.backgroundColor = "#F5FFFA";
	    }

	    ele.querySelector("td:nth-child(6)").style.color = "#6959CD";
	    ele.querySelector("td:nth-child(6)").style.textShadow = "1px 1px 1px #32CD32"
	    ele.querySelector("td:nth-child(7)").style.color = "#9ACD32";
	    ele.querySelector("td:nth-child(7)").style.textShadow = "1px 1px 1px #9ACD32";
	    ele.querySelector("td:nth-child(8)").style.color = "#FA8072";
	    ele.querySelector("td:nth-child(8)").style.textShadow = "1px 1px 1px #FA8072";

	    var time = ele.querySelector("td:nth-child(3)").innerText.split(" - [")[0];
	    var pontos = parseInt(ele.querySelector("td:nth-child(4)").innerText, 10);
	    var jogos = parseInt(ele.querySelector("td:nth-child(5)").innerText, 10);

	    var percentual = " - [" + parseFloat((pontos * 100) / (jogos * 3)).toFixed(2) + "%]";
	    const criarPercentual = document.createElement("span");
	    criarPercentual.innerHTML = percentual;
	    criarPercentual.style.opacity = 0.5;

	    ele.querySelector("td:nth-child(3) span").innerText = "";
	    ele.querySelector("td:nth-child(3) span").innerText = time;
	    ele.querySelector("td:nth-child(3) span").appendChild(criarPercentual);
	    ele.querySelector("td:nth-child(3)").style.width = "300px";
	});
		//clearInterval(p);
	}
	},1000);
}

//Componente que altera o backgroundcolor dos cards do trello.
function trello(){
    var mudarACor = setInterval(function(){
    document.querySelectorAll("a div.list-card-details.js-card-details").forEach(ele=>{
        ele.querySelectorAll("button[aria-label*='Cor: ']").forEach(cor=>{
            switch(cor.getAttribute("data-color")){
                case 'red' : ele.style.backgroundColor = "#FF6F6A6D"; break;
                case 'blue' : ele.style.backgroundColor = "#BFEFFF6D"; break;
                case 'yellow' : ele.style.backgroundColor = "#FFFFE06D"; break;
                case 'green' : ele.style.backgroundColor = "#90EE906D"; break;
                case 'orange' : ele.style.backgroundColor = "#F5DEB36D"; break;
                case 'purple' : ele.style.backgroundColor = "#DDA0DD6D"; break;
		case 'black_dark' : ele.style.backgroundColor = "#0101013D"; break;
                    
            }
        });
    });
    }, 1000);
}

function youtube(){
var youtube = setTimeout(function(){
var barraControle = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls");
var botaoMais = document.createElement("button");
var botaoMenos = document.createElement("button");
var divBotoes = document.createElement("div");
divBotoes.setAttribute("id", "botoesAceleracao");
divBotoes.setAttribute("align", "right");
divBotoes.setAttribute("style", "width: 100%");

botaoMais.setAttribute("style", "position fixed; color: green; text-align: center;");
botaoMais.setAttribute("id", "botaoMais");
botaoMais.innerHTML = " + ";

botaoMenos.setAttribute("style", "position fixed; margin-left: 5px;  margin-right: 15px; color: red; text-align: center;");
botaoMenos.innertext = "-";
botaoMenos.setAttribute("id","botaoMenos");
botaoMenos.innerHTML = " - ";

divBotoes.appendChild(botaoMais);
divBotoes.appendChild(botaoMenos);
barraControle.appendChild(divBotoes);


//Função para exibir mensagens no canto da tela;
function mensagem(msg) {
    var novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "novoElemento");
    novoElemento.style.backgroundColor = "#8B0000";
    novoElemento.style.color = "white";
    document.querySelector("body").appendChild(novoElemento);
    document.querySelector("#novoElemento").style.transition = "All 0.5s";
    document.querySelector("#novoElemento").style.opacity = "0";
    document.querySelector("#novoElemento").style.opacity = "1";
    novoElemento.style.width = "100%";
    novoElemento.style.height = "50px";
    document.querySelector("#novoElemento").style.position = "fixed";
    document.querySelector("#novoElemento").style.zIndex = "100";
    document.querySelector("#novoElemento").style.right = "5%";
    document.querySelector("#novoElemento").style.bottom = "5%";
    document.querySelector("#novoElemento").textContent = "Vamos!!";
    document.querySelector("#novoElemento").style.margin = "auto";
    document.querySelector("#novoElemento").style.textAlign = "center"
    document.querySelector("#novoElemento").textContent = msg;
    document.querySelector("#novoElemento").style.fontSize = "30px";

        setTimeout(() => {
            document.querySelector("#novoElemento").style.opacity = "0";
        }, 1000);
        setTimeout(() => {
        document.querySelector("#novoElemento").remove();
        }, 2000);
}


//-------
//Teclas '+' e '-' para alterar as velocidades

function speed() {
    var velocidade = 0;
    var aux = 4;

        switch (aux) {
            case 1:
                velocidade = 0.25;
                break;
            case 2:
                velocidade = 0.50;
                break;
            case 3:
                velocidade = 0.75;
                break;
            case 4:
                velocidade = 1;
                break;
            case 5:
                velocidade = 1.25;
                break;
            case 6:
                velocidade = 1.50;
                break;
            case 7:
                velocidade = 1.75;
                break;
            case 8:
                velocidade = 2;
                break;
        }

        document.querySelector("#botaoMais").addEventListener("click",function(){
            if (((aux + 1) > 0) && ((aux + 1) < 9)) {
                document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();
                setTimeout(() => {
                    let aTags = document.getElementsByTagName("div");
                    let searchText = "Velocidade da reprodução";
                    let found;
    
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].textContent == searchText) {
                            found = aTags[i].click();
                            break;
                        }
                    }
                }, 1000);
    
                setTimeout(() => {
                    if(document.querySelector("#ytp-id-17 > div > div.ytp-panel-menu > div:nth-child(" + (aux) + ")")){
                        document.querySelector("#ytp-id-17 > div > div.ytp-panel-menu > div:nth-child(" + (aux) + ")").click();
                    }
                    
                }, 2000);
    
                console.log(aux + 1);
                aux += 1;
                velocidade += 0.25;
                document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();
            }
            mensagem("velocidade: " + velocidade);
        });
        
        document.querySelector("#botaoMenos").addEventListener("click", function(){
            if (((aux - 1) > 0) && ((aux - 1) < 9)) {
                document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();
                setTimeout(() => {
                    let aTags = document.getElementsByTagName("div");
                    let searchText = "Velocidade da reprodução";
                    let found;
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].textContent == searchText) {
                            found = aTags[i].click();
                            break;
                        }
                    }
                }, 1000);
                setTimeout(() => {
                    if(document.querySelector("#ytp-id-17 > div > div.ytp-panel-menu > div:nth-child(" + (aux) + ")")){
                        document.querySelector("#ytp-id-17 > div > div.ytp-panel-menu > div:nth-child(" + (aux) + ")").click();
                    }
                }, 2000);
                console.log(aux - 1);
                aux -= 1;
                velocidade -= 0.25;
                document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();
            }
            mensagem("velocidade: " + velocidade);
        });
        
        mensagem("velocidade: " + velocidade);
}
speed();

//-------
//Pular comercial
const pularprop = setInterval(() => {
    var pular = document.querySelector(".ytp-ad-skip-button");
    var pular2 = document.querySelector(".ytp-ad-overlay-close-button");
    if (pular || pular2) {
        if (pular) {
            pular.click();
            mensagem("Propaganda fechada!!");
        }
        if (pular2) {
            pular2.click();
            mensagem("Banner fechado!!");
        }
    }
}, 1000);

//Pular comercial e bloquear canais
var listaBloqueados = ["Lana Borges","fabricia secrets","uol", "porta dos fundos","kid bengala", "Elisa Sanches","PAGODE DA OFENSA", "Prosa Guiada", "felipe neto","lucas neto","Emme White","(EMME WHITE)","Sétimo Amor","POCAH","Anitta","LUDMILLA", "Cortes Barraco"];

var meusCanais = [{"nome":"Pedro Loos","cor":"LightSteelBlue"},{"nome":"Léo Lins","cor":"LightGreen"},{"nome":"Resident Evil","cor":"LightSteelBlue"},{"nome":"Meghan Yeah","cor":"LightGreen"},{"nome":"Código Fonte TV","cor":"LightGreen"},{"nome":"Via Infinda","cor":"LightGreen"},{"nome":"Funky Black Cat","cor":"LightGreen"},{"nome":"salve salve família","cor":"LightGreen"},{"nome":"Gustavo Lazaro","cor":"LightGreen"},{"nome":"cortes do inteligência","cor":"LightGreen"},{"nome":"inteligência ltda","cor":"LightGreen"},{"nome":"flow podcast","cor":"LightGreen"},{"nome":"ciência sem fim","cor":"LightSteelBlue"},{"nome":"ciência todo dia","cor":"LightSteelBlue"},{"nome":"Comopode","cor":"LightSteelBlue"},{"nome":"Diego Rox Oficial","cor":"LightGreen"},{"nome":"Ressaca F1","cor":"LightSteelBlue"},{"nome":"Venus Podcast","cor":"LightGreen"},{"nome":"Daniel Alvarenga","cor":"LightSteelBlue"},{"nome":"Velocidade Alta","cor":"LightSteelBlue"},{"nome":"MaxMRM","cor":"LightGreen"},{"nome":"Dois Dedos de Teologia","cor":"LightGreen"}];

function pular(){

    var listaBloquear = [document.querySelector(".ytp-ad-skip-button"),
                        document.querySelector(".ytp-ad-overlay-close-button"),
                        document.querySelectorAll("ytd-merch-shelf-renderer")[0],
                        document.querySelector("ytd-video-masthead-ad-v3-renderer.style-scope.ytd-rich-grid-renderer.grid"),
                        document.querySelector("ytd-promoted-sparkles-web-renderer.style-scope.ytd-item-section-renderer.sparkles-light-cta"),
                        document.querySelector("#player-ads")];

    listaBloquear.forEach(function(ele){
        if(ele){
            ele.remove();
            mensagem("Removido");
        }
    });
	
  document.querySelectorAll("ytd-rich-grid-row ytd-rich-item-renderer #meta").forEach((ele)=>{
    ele.style.backgroundColor = '';
    listaBloqueados.forEach(function(block){

          if(ele.querySelector("h3").innerText.toLowerCase().includes(block.toLowerCase())){
              ele.closest("ytd-rich-item-renderer").remove();
              mensagem(block + " removido. (Titulo)");
          }
          if(ele.querySelector("#channel-name").innerText.toLowerCase().includes(block.toLowerCase())){
              ele.closest("ytd-rich-item-renderer").remove();
              mensagem(block + " removido. (Canal)");
          }
        
        
      });
	});
///////////////////
    document.querySelectorAll("ytd-rich-grid-row ytd-rich-item-renderer #meta").forEach((ele)=>{
      ele.closest("ytd-rich-item-renderer").style.backgroundColor = '';
      meusCanais.forEach(function(brilhar){
          if(ele.querySelector("#channel-name").innerText.toLowerCase().includes(brilhar.nome.toLowerCase())){
              ele.closest("ytd-rich-item-renderer").style.backgroundColor = brilhar.cor;
          }
          if(ele.querySelector("h3").innerText.toLowerCase().includes(brilhar.nome.toLowerCase())){
              ele.closest("ytd-rich-item-renderer").style.backgroundColor = brilhar.cor;
          }
      });
	});
  ///////////////////////
  
  document.querySelectorAll("#secondary ytd-compact-video-renderer").forEach(function(ele){
      listaBloqueados.forEach(function(block){
		if((ele.innerText.toLowerCase().includes(block.toLowerCase())||ele.innerText.toLowerCase().includes(block.toUpperCase())) && !ele.innerText.toLowerCase().includes(block.toLowerCase()=="funk black cat")){ 
          mensagem(block + " removido da barra lateral.");
          ele.remove();
      	}	
      });
	});
  
  document.querySelectorAll("#secondary ytd-compact-video-renderer").forEach(function(ele){
	ele.style.backgroundColor = "#FFF";
	meusCanais.forEach(function(brilhar){
		if((ele.innerText.toLowerCase().includes(brilhar.nome.toLowerCase())||ele.innerText.toLowerCase().includes(brilhar.nome.toUpperCase()))){ 
	  ele.style.backgroundColor = brilhar.cor;
	}
      });
	});
}

function speedTecla() {
    let velocidade = 0;
    let aux = 4;

    window.addEventListener("keydown", (e)=>{

        switch (aux) {

        case 1:
            velocidade = 0.25;
            break;

        case 2:
            velocidade = 0.50;
            break;

        case 3:
            velocidade = 0.75;
            break;

        case 4:
            velocidade = 1;
            break;

        case 5:
            velocidade = 1.25;
            break;

        case 6:
            velocidade = 1.50;
            break;

        case 7:
            velocidade = 1.75;
            break;

        case 8:
            velocidade = 2;
            break;
        }

        if ((e.key === "+") && ((aux + 1) > 0) && ((aux + 1) < 9)) {

            document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();

            setTimeout(()=>{
                let aTags = document.getElementsByTagName("div");
                let searchText = "Velocidade da reprodução";
                let found;

                for (var i = 0; i < aTags.length; i++) {
                    if (aTags[i].textContent == searchText) {
                        found = aTags[i].click();
                        break;
                    }
                }
            }
            , 1000);

            setTimeout(()=>{
                //document.querySelector("#ytp-id-19 > div > div.ytp-panel-menu > div:nth-child(" + (aux) + ")").click();
				document.querySelector(".ytp-panel-menu div:nth-child(" + (aux) + ")").click();
            }
            , 2000);

            console.log(aux + 1);
            aux += 1;
            velocidade += 0.25;
            document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();
            
            mensagem("velocidade: " + velocidade);
        }

        if ((e.key === "-") && ((aux - 1) > 0) && ((aux - 1) < 9)) {

            document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();

            setTimeout(()=>{
                let aTags = document.getElementsByTagName("div");
                let searchText = "Velocidade da reprodução";
                let found;
                for (var i = 0; i < aTags.length; i++) {
                    if (aTags[i].textContent == searchText) {
                        found = aTags[i].click();
                        break;
                    }
                }
            }
            , 1000);

            setTimeout(()=>{

                //document.querySelector("#ytp-id-19 > div > div.ytp-panel-menu > div:nth-child(" + (aux) + ")").click();
				document.querySelector(".ytp-panel-menu div:nth-child(" + (aux) + ")").click();
            }
            , 2000);

            console.log(aux - 1);
            aux -= 1;
            velocidade -= 0.25;
            document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click();
            
            mensagem("velocidade: " + velocidade);
        }
    }
    );
}
speedTecla();

window.addEventListener("scroll", function(){
    pular();
    console.log("** DIVs VERIFICADAS **")
});

},3000);    
}
