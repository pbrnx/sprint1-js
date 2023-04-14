
//chamando os títulos
const h1Element = document.getElementById('titulo');
const h2Element = document.getElementById('titulo2');
const h3Element = document.getElementById('titulo3');
const h4Element = document.getElementById('titulo4');
const button1 = document.getElementById('botao1');


//chamando os parágrafos
const p1Element = document.getElementById('p1');
const p2Element = document.getElementById('p2');
const p3Element = document.getElementById('p3');
const p4Element = document.getElementById('p4');

const image = document.getElementById('lampada');
const image2 = document.getElementById('placa');


//item1

h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.transition = 'font-size 0.5s ease';
    h1Element.style.fontSize = "40px"
    p1Element.style.transition = 'opacity 1s ease';
    p1Element.style.opacity = "1";
    p1Element.textContent = "Atualmente, o Brasil enfrenta uma crise energética decorrente da falta de chuvas, que tem afetado a capacidade de geração de energia hidrelétrica, principal fonte de energia do país. A escassez de água nos reservatórios das usinas hidrelétricas tem levado ao acionamento das usinas termelétricas, que são mais caras e poluentes, para garantir o fornecimento de energia elétrica. Além disso, a crise também é agravada pela demanda crescente de energia, especialmente durante o período de seca, quando o consumo de eletricidade aumenta devido ao uso de aparelhos de ar condicionado e ventiladores. Para lidar com a crise, o governo tem adotado medidas como o incentivo ao uso de energia renovável, o aumento das tarifas de energia elétrica e a possibilidade de acionamento das usinas térmicas em caráter emergencial. No entanto, a crise ainda persiste e a situação é preocupante, já que a falta de energia pode impactar a economia e a vida da população como um todo.";

});

h1Element.addEventListener("mouseleave", ()=>{
    h1Element.style.fontSize = "32px";
    p1Element.style.transition = 'opacity 1s ease';
    p1Element.style.opacity = "0";
    p1Element.textContent = "";
});

h1Element.addEventListener("click", ()=>{
    location.href = "./pages/crise.html"
});



//item 2

h2Element.addEventListener("mouseover", ()=>{
    h2Element.style.transition = 'font-size 0.5s ease'
    h2Element.style.fontSize = "35px";
    p2Element.style.transition = 'opacity 1s ease';
    p2Element.style.opacity = "1";
    p2Element.textContent = "Uma solução para a crise energética é a adoção de fontes de energia renovável, como a solar e a eólica. Essas fontes são limpas, abundantes e podem ser instaladas em diversas regiões do país";
});

h2Element.addEventListener("mouseleave", ()=>{
    h2Element.style.fontSize = "24px";
    p2Element.style.transition = 'opacity 0.5s ease';
    p2Element.style.opacity = "0";
    p2Element.textContent = "";
});

h2Element.addEventListener("click", ()=>{
    location.href = "./pages/energias.html"
});

//item 3

h3Element.addEventListener("mouseover", ()=>{
    h3Element.style.transition = 'font-size 0.5s ease'
    h3Element.style.fontSize = "35px";
    p3Element.style.transition = 'opacity 1s ease';
    p3Element.style.opacity = "1";
    p3Element.textContent = "Outra solução inovadora para a crise energética é a implementação de uma rede inteligente de energia (smart grid), que permite uma gestão mais eficiente e integrada da matriz elétrica, incluindo a integração de fontes de energia renovável.";
});

h3Element.addEventListener("mouseleave", ()=>{
    h3Element.style.fontSize = "24px";
    p3Element.style.transition = 'opacity 1s ease';
    p3Element.style.opacity = "0";
    p3Element.textContent = "";
});

h3Element.addEventListener("click", ()=>{
    location.href = "./pages/smartgrid.html"
});

//imagens
image.addEventListener('mouseover', () => {
  image.style.transition = 'width 0.6s ease';
  image.style.width = '700px';
});

image.addEventListener('mouseout', () => {
  image.style.width = '600px';
});


image2.addEventListener('mouseover', () => {
  image2.style.transition = 'width 0.6s ease';
  image2.style.width = '700px';
});

image2.addEventListener('mouseout', () => {
  image2.style.width = '600px';
});

