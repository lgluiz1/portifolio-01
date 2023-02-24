
const sobre_min = document.querySelector(".sobre-min h1")
const sobre_mi = document.querySelector(".sobre-min p")

function html(){    
sobre_min.innerHTML='A Linguagem HTML'
sobre_mi.innerHTML='HTML é uma linguagem de marcação de hipertexto utilizada para criar páginas web. <br> Com o HTML, é possível estruturar o conteúdo de uma página, como texto, imagens, <br> vídeos e links, por meio de tags. Ele é fundamental para o desenvolvimento web, pois <br> é a base para a construção de toda a estrutura da página.'
}
function css(){
sobre_min.innerHTML='A Linguagem CSS'
sobre_mi.innerHTML='CSS é uma linguagem utilizada em conjunto com o HTML para definir o estilo e a aparência de uma página web. <br> Ele permite que os desenvolvedores criem regras para o layout, cores, fontes, espaçamento e outras propriedades <br> visuais da página. O CSS separa a apresentação da estrutura do conteúdo HTML e permite a reutilização de estilos <br> em várias páginas, facilitando a manutenção e atualização do site. É uma linguagem importante para o design e a <br> aparência de uma página web, garantindo que ela seja atraente e responsiva em diferentes dispositivos.'
}
function  jquery(){
sobre_min.innerHTML='Sobre o jQuery'
sobre_mi.innerHTML='jQuery é uma biblioteca JavaScript que simplifica a manipulação do DOM e ajuda a criar <br> páginas web interativas, oferecendo suporte a animações, eventos, AJAX, <br> entre outras funcionalidades. Embora ainda seja amplamente utilizado, seu <br>uso tem diminuído com o surgimento de novas tecnologias.'
}
function react(){
    sobre_min.innerHTML='Sobre o React'
    sobre_mi.innerHTML='React é uma biblioteca JavaScript para construção de interfaces de usuário, <br> que utiliza um modelo de programação declarativo e uma abordagem de "virtual DOM". <br> É amplamente utilizado na indústria de desenvolvimento web para a construção de aplicativos  <br> SPA e móveis, possuindo uma grande comunidade de desenvolvedores que facilita <br> o aprendizado e a resolução de problemas.'
    }
    function js(){
        sobre_min.innerHTML='Sobre o JavaScript'
        sobre_mi.innerHTML='JavaScript é uma linguagem de programação amplamente utilizada para o desenvolvimento web, <br> tanto no front-end quanto no back-end. Ela permite criar interatividade <br> e dinamismo nas páginas web, além de ser relativamente fácil de aprender. É uma <br> linguagem versátil que permite a comunicação com APIs externas e integração com outras <br> bibliotecas e frameworks.'
        }
        function typescript(){
            sobre_min.innerHTML='Sobre o TypeScript'
            sobre_mi.innerHTML='TypeScript é uma linguagem de programação de código aberto que estende a linguagem JavaScript,<br> adicionando recursos como tipos de dados estáticos, interfaces e classes. É projetado para tornar<br> o processo de desenvolvimento mais fácil, ajudando a prevenir erros comuns e permitindo a criação<br> de aplicativos orientados a objetos de forma mais fácil. É frequentemente usado com o framework Angular<br> e é uma opção popular para o desenvolvimento de aplicativos em grande escala.'
            }

            const buttons = document.querySelectorAll('.onbutton');
            console.log(buttons)
            // Cria um objeto Audio com o arquivo de som
            const soundBtn = new Audio('/mp3/008.mp3')
            
            for(let i=0;i<buttons.length;i++){
                 // Adiciona um ouvinte de eventos para o evento mouseover
            buttons[i].addEventListener('click', () => {
                // Toca o som
                soundBtn.play();
              });
            }
            
