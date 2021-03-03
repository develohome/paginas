var dados = [
        {
            nome: 'alex dos santos silva',
            funcao:'desenvolvedor front-end',
            graduacao:'graduação', 
            desenvolvido:[
                    'HTML 5',
                    'CSS3',
                    'JavaScript'
                ],
            iconsDev:[
                'fa-html5',
                'fa-css3',
                'fa-js-square'
            ], 
            texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime molestiae magnam veniam, amet itaque commodi architecto aut corrupti ipsa, vitae sunt esse rerum vero, soluta quaerat in natus sit!'
        }
    ];


let class_content = document.querySelector('.item--1 .bxContainer .content');
let cria_h1 = document.createElement('h1');
    cria_h1.innerHTML = dados[0].nome;

let cria_p = document.createElement('p');
    cria_p.innerHTML = dados[0].funcao

    class_content.appendChild(cria_h1);
    class_content.appendChild(cria_p);

var class_Item2_bxContainer = document.querySelector('.item--2 .bxContainer');
    for(let i = 0 ; i < dados[0].desenvolvido.length ; i++){
        let cria_bxItens = document.createElement('div');
            cria_bxItens.classList.add('bxItens')
            class_Item2_bxContainer.appendChild(cria_bxItens);
        let class_bxContainer = document.querySelectorAll('.bxItens');
        let cria_i = document.createElement('i');
            cria_i.classList.add('fab');
            cria_i.classList.add(dados[0].iconsDev[i]);
            class_bxContainer[i].appendChild(cria_i);

        let cria_content = document.createElement('div');
            cria_content.classList.add('content')
            class_bxContainer[i].appendChild(cria_content);
        let class_content = document.querySelectorAll('.item--2 .content');
        let cria_h2 = document.createElement('h2')
            cria_h2.innerHTML = dados[0].desenvolvido[i];
            class_content[i].appendChild(cria_h2);
        let cria_p = document.createElement('p')
            cria_p.innerHTML = dados[0].texto;
            class_content[i].appendChild(cria_p);
    }



    function escrever(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 175 * i)
        });
    }
    const titulo = document.querySelector('.item--1 .bxContainer .content p');
    
    setTimeout(escrever(titulo), 2000);