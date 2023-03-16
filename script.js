let conteudo = [
    {
        Carro:'Jetta',
        Conteudo: 'A chegada do novo Jetta ao mercado brasileiro ocorreu em setembro de 2018, importado do México. Como a Volkswagen também queria manter o Virtus como um produto interessante, ela jogou os preços do sedã médio lá pro alto, abrindo espaço para os dois conviverem em paz.Na época, o modelo da sétima geração chegou na versão de entrada Comfortline (R$ 109.990) e na intermediária R-Line (R$ 119.990), sendo que a topo de linha GLI viria em seguida. Ambos tinham o mesmo motor 1.4 TSI de 150 cv e 25,5 kgfm de torque, além de apresentar a nova nomenclatura 250 TSI, em referência ao toque (250 Nm'    
    },
    {
        Carro:'Golf',
        Conteudo:' O Golf já estava há 8 anos sem uma atualização mais profunda no visual, até que a VWB decidiu fazer uma por conta própria, pois nosso modelo já estava se encaminhando para dez anos e praticamente o mesmo do lançamento na década anterior.Assim, a empresa decidiu por integrar no Golf Sportline parte do visual do Golf GTI, mas com mecânica básica, centrada no 1.6.'
    },
    {
        Carro:'Tiguan',
        Conteudo: 'Depois de alguma demora no lançamento da linha 2021, o Tiguan foi anunciado pela marca com a mesma mudança vista no sedã Jetta. A Volkswagen optou por descontinuar todas as versões com o motor 1.4 TSI, que rende 150 cv e 25,5 kgfm de torque.Com isso, o Tiguan 2022 não tem mais as versões 250 TSI e Comfortline 250 TSI, restando apenas a mais cara R-Line 350 TSI, que tem motor 2.0 turbo de 220 cv e 35,7 kgfm de torque. O câmbio é o DSG de sete marchas.A justificativa da marca, ainda que não tenha falado sobre isso de forma oficial, é que o novo Taos tem apenas o motor 1.4 TSI, então não faria sentido provocar uma briga interna mantendo as versões mais baratas do irmão maior.'
    }
];

const wrapper = document.getElementById('home');

for (let i=0;i<conteudo.length;i++) {
    let dados = conteudo[i];

    const home = document.createElement('article');
    home.classList.add('article');

    const carro = document.createElement('h1');
    carro.classList.add('article-title');

    const tituloConteudo = document.createTextNode(dados.Carro);
    carro.appendChild(tituloConteudo);
    home.appendChild(carro);

    const resumo = document.createElement('p');
    const conteudoTexto = document.createTextNode(dados.Conteudo);
    resumo.appendChild(conteudoTexto);
    home.appendChild(resumo);

    wrapper.appendChild(home);
}