
//chamando os títulos
const h1Element = document.getElementById('titulo');
const h2Element = document.getElementById('titulo2');
const h3Element = document.getElementById('titulo3');
const h4Element = document.getElementById('titulo4');


const position = 0;

//chamando os parágrafos
const p1Element = document.getElementById('p1');
const p2Element = document.getElementById('p2');
const p3Element = document.getElementById('p3');
const p4Element = document.getElementById('p4');

//item1



h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.fontSize = "35px";
    p1Element.textContent = "A crise energética é um problema que vem afetando diversos países ao redor do mundo, inclusive o Brasil. Com a crescente demanda por energia elétrica e as limitações das fontes de energia tradicionais, como a hidrelétrica, o país tem enfrentado dificuldades no fornecimento de energia.";

});

h1Element.addEventListener("mouseleave", ()=>{
    h1Element.style.fontSize = "32px";
    p1Element.textContent = "";
});

h1Element.addEventListener("click", ()=>{
    location.href = "./pages/crise.html"
});



//item 2
h2Element.addEventListener("mouseover", ()=>{
    h2Element.style.fontSize = "35px";
    p2Element.textContent = "Uma solução para a crise energética é a adoção de fontes de energia renovável, como a solar e a eólica. Essas fontes são limpas, abundantes e podem ser instaladas em diversas regiões do país";
});

h2Element.addEventListener("mouseleave", ()=>{
    h2Element.style.fontSize = "24px";
    p2Element.textContent = "";
});

h2Element.addEventListener("click", ()=>{
    location.href = "./pages/energias.html"
});

//item 3

h3Element.addEventListener("mouseover", ()=>{
    h3Element.style.fontSize = "35px";
    p3Element.textContent = "Outra solução inovadora para a crise energética é a implementação de uma rede inteligente de energia (smart grid), que permite uma gestão mais eficiente e integrada da matriz elétrica, incluindo a integração de fontes de energia renovável.";
});

h3Element.addEventListener("mouseleave", ()=>{
    h3Element.style.fontSize = "24px";
    p3Element.textContent = "";
});

h3Element.addEventListener("click", ()=>{
    location.href = "./pages/smartgrid.html"
});

//item 4

h4Element.addEventListener("mouseover", ()=>{
    h4Element.style.fontSize = "35px";
    p4Element.textContent = "Além das soluções mencionadas acima, a economia de energia também é uma forma importante de prevenir a crise energética. Isso pode ser feito por meio de medidas simples, como desligar aparelhos eletrônicos quando não estiverem em uso, usar lâmpadas de baixo consumo e adotar práticas de eficiência energética em residências e empresas.";
});

h4Element.addEventListener("mouseleave", ()=>{
    h4Element.style.fontSize = "24px";
    p4Element.textContent = "";
});

h4Element.addEventListener("click", ()=>{
    location.href = "./pages/economia.html"
});

alert("clique nos itens para mais informações");




