

import coracaoDeFrango from '../../../imagens/aves/coração-de-frango.png';
import meioDaAsa from '../../../imagens/aves/meio-da-asa.png';
import sassami from '../../../imagens/aves/sassami.png';
import fileDeFrango from '../../../imagens/aves/Filé-de-Frango.png';
import fileDeCoxa from '../../../imagens/aves/file-de-coxa.png';
import asaDeFrango from '../../../imagens/aves/asa-de-frango.jpg';
import peitoDeFrango from '../../../imagens/aves/peito-de-frango.jpg';
import coxinhaDaAsa from '../../../imagens/aves/coxinha-da-asa.png';
import coxaSobrecoxa from '../../../imagens/aves/coxa-e-sobrecoxa.png';
import carcacaoDeFrango from '../../../imagens/aves/carcaça-de-frango.png';
import frangoResfriado from '../../../imagens/aves/frango-inteiro.png';
import moela from '../../../imagens/aves/moela.png';
import galinha from '../../../imagens/aves/galinha-e-galo.png';

import picanha from '../../../imagens/bovinos/picanha.png'
import fileMignon from '../../../imagens/bovinos/file-mignon.png'
import patinho from '../../../imagens/bovinos/patinho.png'
import alcatra from '../../../imagens/bovinos/alcatra-com-maminha.jpg'
import coxaoDuro from '../../../imagens/bovinos/coxão-duro.png'
import coxaoMole from '../../../imagens/bovinos/coxão-mole.png'
import capaFile from '../../../imagens/bovinos/capa-de-filé.png'
import peitoBovino from '../../../imagens/bovinos/peito-bovino.png'
import acem from '../../../imagens/bovinos/acem.png'
import costelaBovina from '../../../imagens/bovinos/costela-bovina.png'
import carneMoida from '../../../imagens/bovinos/carne-moida.png'

import barriga from '../../../imagens/suinos/barriga.png'
import costelinha from '../../../imagens/suinos/costelinha.png'
import carre from '../../../imagens/suinos/carré.png'
import bisteca from '../../../imagens/suinos/bisteca.png'
import pernil from '../../../imagens/suinos/Pernil.png'
import tripa from '../../../imagens/suinos/tripa suina.png'
import papada from '../../../imagens/suinos/papada.png'
import paleta from '../../../imagens/suinos/Sobre Paleta.png'
import toucinhoPele from '../../../imagens/suinos/toucinho com pele.png'
import toucinhoCortado from '../../../imagens/suinos/toucinho cortado.png'

import batataBemBrasil from '../../../imagens/congelados/batata bem brasil.png'
import batataCarinha from '../../../imagens/congelados/batata carinhas.png'
import batataChic from '../../../imagens/congelados/batata chic.png'
import batataCrinkle from '../../../imagens/congelados/batata crinckle.png'
import batataFast from '../../../imagens/congelados/batata fast food.png'
import batataRustica from '../../../imagens/congelados/batata rústica.png'
import batataSteack from '../../../imagens/congelados/batata steak house.png'
import batataLamb from '../../../imagens/congelados/batata lamb weston.png'
import batataMaisBatata from '../../../imagens/congelados/batata mais batata.png'
import Stickqueijo from '../../../imagens/congelados/stick de queijo.png'
import anelCebola from '../../../imagens/congelados/anel de cebola.png'
import mandioca from '../../../imagens/congelados/mandioca.png'
import brocolis from '../../../imagens/congelados/brócolis.png'
import couve from '../../../imagens/congelados/Couve flor.png'
import seleta from '../../../imagens/congelados/Jardineira Seleta.png'
import polenta from '../../../imagens/congelados/Polenta.png'
import vagem from '../../../imagens/congelados/Design sem nome.png'

import bacalhau from '../../../imagens/peixes/bacalhau.png'
import merluzao from '../../../imagens/peixes/merluzão.png'
import merluzaArgentina from '../../../imagens/peixes/merluza argentina.png'
import fileTilapia from '../../../imagens/peixes/filé de tilápia.png'
import filePangassius from '../../../imagens/peixes/filé de pangassius.png'
import filePescadaBranca from '../../../imagens/peixes/filé de pescada branca.png'
import cacao from '../../../imagens/peixes/cação.png'
import porquinhoLimpo from '../../../imagens/peixes/porquinho limpo.png'
import sardinhaEspalmada from '../../../imagens/peixes/sardinha espalmada.png'
import sardinhaSemCabeca from '../../../imagens/peixes/sardinha sem cabeça.png'
import camarao7Barbas from '../../../imagens/peixes/camarão 7 barbas.png'


const data = {
    cardData: [
        { id: 1, img: batataBemBrasil , title: 'Batata Bem Brasil (Pct 1,05kg)', category: 'congelados' },
        { id: 2, img: batataBemBrasil , title: 'Batata Bem Brasil (Pct 2,5kg)', category: 'congelados' },
        { id: 3, img: batataCarinha , title: 'Batata Bem Brasil Carinhas', category: 'congelados' },
        { id: 4, img:  batataChic, title: 'Batata Bem Brasil Chic', category: 'congelados' },
        { id: 5, img: batataCrinkle , title: 'Batata Bem Brasil Crinkle (Pct 2kg)', category: 'congelados' },
        { id: 6, img: batataFast , title: 'Batata Bem Brasil Fast Food 7mm (Pct 2kg)', category: 'congelados' },
        { id: 7, img: batataRustica , title: 'Batata Bem Brasil Rústica (Pct 2,5kg)', category: 'congelados' },
        { id: 8, img: batataSteack , title: 'Batata Bem Brasil Steakhouse 9x18 (Pct 2,5kg)', category: 'congelados' },
        { id: 9, img: batataLamb , title: 'Batata Lamb Weston Stealth Fries (Pct 2kg)', category: 'congelados' },
        { id: 10, img: batataMaisBatata , title: 'Batata Mais Batata (Pct 1,5kg)', category: 'congelados' },
        { id: 11, img: batataMaisBatata , title: 'Batata Mais Batata (Pct 2kg)', category: 'congelados' },
        { id: 12, img: batataMaisBatata , title: 'Batata Mais Batata (Pct 2,5kg)', category: 'congelados' },
        { id: 13, img: Stickqueijo , title: 'Stick de Queijo Bem Brasil (Pct 1,2kg) -', category: 'congelados' },
        { id: 14, img: anelCebola , title: 'Anel de Cebola Bem Brasil (Pct 1,05kg)', category: 'congelados' },
        { id: 15, img: anelCebola , title: 'Anel de Cebola Bem Brasil (Pct 400gr)', category: 'congelados' },
        { id: 16, img: mandioca , title: 'Mandioca Pedaços Canção', category: 'congelados' },
        { id: 17, img: brocolis , title: 'Brócolis', category: 'congelados' },
        { id: 18, img: couve , title: 'Couve Flor', category: 'congelados' },
        { id: 19, img: seleta , title: 'Jardineira Seleta', category: 'congelados' },
        { id: 20, img:  polenta, title: 'Polenta Bem Brasil', category: 'congelados' },
        { id: 21, img: vagem , title: 'Vagem Inteira Francesa', category: 'congelados' },
        // { id: 31, img:  , title: 'Batata Mc Cain (Pct 2,5kg)', category: 'congelados' },
        // { id: 43, img:  , title: 'Hamburguer Brasa 30x120gr', category: 'congelados' },
        // { id: 43, img:  , title: 'Hamburguer Brasa 30x120gr *Picanha*', category: 'congelados' },
        // { id: 43, img:  , title: 'Hamburguer Brasa 36x90gr', category: 'congelados' },
        // { id: 43, img:  , title: 'Hamburguer Brasa 36x56gr', category: 'congelados' },
        

        { id: 31, img: coracaoDeFrango , title: 'Coração de Frango', category: 'aves' },
        { id: 32, img: meioDaAsa , title: 'Meio da asa', category: 'aves' },
        { id: 33, img: sassami , title: 'Sassami', category: 'aves' },
        { id: 34, img: fileDeFrango , title: 'Filé de Frango (peito s/ osso)', category: 'aves' },
        { id: 35, img: fileDeCoxa , title: 'Filé de Coxa', category: 'aves' },
        { id: 36, img: asaDeFrango , title: 'Asa de Frango', category: 'aves' },
        { id: 37, img: peitoDeFrango , title: 'Peito de Frango c/ osso', category: 'aves' },
        { id: 38, img: coxinhaDaAsa , title: 'Coxinha da Asa', category: 'aves' },
        { id: 39, img: coxaSobrecoxa , title: 'Coxa e Sobrecoxa', category: 'aves' },
        { id: 40, img: carcacaoDeFrango , title: 'Carcaça de Frango 1.9Kg', category: 'aves' },
        { id: 42, img: frangoResfriado , title: 'Frango Resfriado', category: 'aves' },
        { id: 42, img: moela , title: 'Moela', category: 'aves' },
        { id: 43, img: galinha , title: 'Galinha Pesada', category: 'aves' },


        { id: 44, img: picanha , title: 'Picanha Uruguaia Steakhouse', category: 'bovinos' },
        { id: 45, img: fileMignon , title: 'Filé Mignon s/ Cordão', category: 'bovinos' },
        { id: 46, img: patinho , title: 'Patinho', category: 'bovinos' },
        { id: 47, img: alcatra , title: 'Alcatra c/ Maminha', category: 'bovinos' },
        { id: 48, img: coxaoMole , title: 'Coxão Mole', category: 'bovinos' },
        { id: 49, img: coxaoDuro , title: 'Coxão Duro', category: 'bovinos' },
        { id: 50, img: capaFile , title: 'Capa de Filé', category: 'bovinos' },
        { id: 51, img: peitoBovino , title: 'Peito Bovino', category: 'bovinos' },
        { id: 52, img: acem , title: 'Acém', category: 'bovinos' },
        { id: 53, img: costelaBovina , title: 'Costela Bovina', category: 'bovinos' },
        { id: 54, img: carneMoida , title: 'Carne Moída (Pct 2kg)', category: 'bovinos' },
        { id: 55, img: '' , title: 'Diafragma', category: 'bovinos' },
        { id: 56, img: '' , title: 'Sangria', category: 'bovinos' },
        { id: 57, img: '' , title: 'Carne Indústrial', category: 'bovinos' },


        { id: 58, img: barriga , title: 'Barriga', category: 'suinos' },
        { id: 59, img: costelinha , title: 'Costelinha', category: 'suinos' },
        { id: 60, img: carre , title: 'Carré', category: 'suinos' },
        { id: 61, img: bisteca , title: 'Bisteca', category: 'suinos' },
        { id: 62, img: pernil , title: 'Pernil c/ osso c/ pele', category: 'suinos' },
        { id: 63, img: tripa , title: 'Tripa Suina (Culatra)', category: 'suinos' },
        { id: 64, img: papada , title: 'Papada c/ Pele', category: 'suinos' },
        { id: 65, img: paleta , title: 'Sobre Paleta c/ Osso', category: 'suinos' },
        { id: 66, img: toucinhoCortado , title: 'Toucinho Cortado p/ Torresmo', category: 'suinos' },
        { id: 67, img: toucinhoPele , title: 'Toucinho c/ Pele', category: 'suinos'},

        { id: 68, img: bacalhau , title: 'Bacalhau Desfiado', category: 'peixe'},
        { id: 69, img: merluzao , title: 'Merluzão', category: 'peixe'},
        { id: 70, img: merluzaArgentina , title: 'Merluza Argentina', category: 'peixe'},
        { id: 71, img: fileTilapia , title: 'Filé de Tilapia', category: 'peixe'},
        { id: 72, img: filePangassius , title: 'Filé de Pangassius', category: 'peixe'},
        { id: 73, img: filePescadaBranca , title: 'Filé de Pescada Branca', category: 'peixe'},
        { id: 74, img: cacao , title: 'Cação', category: 'peixe'},
        { id: 75, img: porquinhoLimpo , title: 'Porquinho Limpo (s/ cabeça)', category: 'peixe'},
        { id: 76, img: sardinhaEspalmada , title: 'Sardinha Espalmada', category: 'peixe'},
        { id: 77, img: sardinhaSemCabeca , title: 'Sardinha (s/ cabeça)', category: 'peixe'},
        { id: 78, img: camarao7Barbas , title: 'Camarão 7 Barbas (Pct 5kg)', category: 'peixe'},


        { id: 79, img: '' , title: 'Champignon Fatiado', category: 'conservas-secos'},
        { id: 80, img: '' , title: 'Ovo de Codorna', category: 'conservas-secos'},
        { id: 81, img: '' , title: 'Palmito Picado', category: 'conservas-secos'},
        { id: 82, img: '' , title: 'Palmito Rodela', category: 'conservas-secos'},
        { id: 83, img: '' , title: 'Tomate Seco', category: 'conservas-secos'},
        { id: 84, img: '' , title: 'Pimenta Biquinho Vermelha', category: 'conservas-secos'},
        { id: 85, img: '' , title: 'Atum Ralado Tours', category: 'conservas-secos'},
        { id: 86, img: '' , title: 'Chicharro', category: 'conservas-secos'},
        { id: 87, img: '' , title: 'Azeitona Verde s/ Caroço', category: 'conservas-secos'},
        { id: 88, img: '' , title: 'Azeitona Verde Fatiada', category: 'conservas-secos'},
        { id: 89, img: '' , title: 'Azeitona Verde c/ Caroço Pequena', category: 'conservas-secos'},
        { id: 90, img: '' , title: 'Azeitona Verde c/ Caroço Grande', category: 'conservas-secos'},
        { id: 91, img: '' , title: 'Azeitona Preta s/ Caroço', category: 'conservas-secos'},
        { id: 92, img: '' , title: 'Azeitona Preta Pequena', category: 'conservas-secos'},
        { id: 93, img: '' , title: 'Azeitona Preta Fatiada', category: 'conservas-secos'},
        { id: 94, img: '' , title: 'Azeitona Chilena Grande', category: 'conservas-secos'},
        { id: 95, img: '' , title: 'Azeitona Verde 28x32', category: 'conservas-secos'},
        { id: 96, img: '' , title: 'Azeitona Verde 16x20', category: 'conservas-secos'},
        { id: 97, img: '' , title: 'Amaciante de Carne', category: 'conservas-secos'},
        { id: 98, img: '' , title: 'Caldo de Carnes', category: 'conservas-secos'},
        { id: 99, img: '' , title: 'Caldo de galinha', category: 'conservas-secos'},
        { id: 100, img: '' , title: 'Chimichurr', category: 'conservas-secos'},
        { id: 101, img: '' , title: 'Colorifico', category: 'conservas-secos'},
        { id: 102, img: '' , title: 'Cominho', category: 'conservas-secos'},
        { id: 103, img: '' , title: 'Condimento Pimenta', category: 'conservas-secos'},
        { id: 104, img: '' , title: 'Creme de cebola', category: 'conservas-secos'},
        { id: 105, img: '' , title: 'Oregano flocos', category: 'conservas-secos'},
        { id: 106, img: '' , title: 'Tempero Baiano', category: 'conservas-secos'},
        { id: 107, img: '' , title: 'Feijão Carioca 30x1', category: 'conservas-secos'},
        { id: 108, img: '' , title: 'Feijão Preto 10x1', category: 'conservas-secos'},

        { id: 109, img: '' , title: 'Costela Salgada', category: 'feijoada'},
        { id: 110, img: '' , title: 'Rabo Salgado', category: 'feijoada'},
        { id: 111, img: '' , title: 'Ponta de Costela', category: 'feijoada'},
        { id: 112, img: '' , title: 'Pé Salgado', category: 'feijoada'},
        { id: 113, img: '' , title: 'Orelha Salgada', category: 'feijoada'},
        { id: 114, img: '' , title: 'Língua Salgada', category: 'feijoada'},
        { id: 115, img: '' , title: 'Costela Salgada', category: 'feijoada'},
        { id: 116, img: '' , title: 'Lombo Salgado', category: 'feijoada'},
        { id: 117, img: '' , title: 'Coxão Duro (Pct 30kg) - 41,99kg', category: 'feijoada'},
        { id: 118, img: '' , title: 'Traseiro (Pct 5kg) - 36,80kg', category: 'feijoada'},
        { id: 119, img: '' , title: 'Dianteiro (Pct 5kg)', category: 'feijoada'},
        { id: 129, img: '' , title: 'Dianteiro Vilheto Pct 400gr', category: 'feijoada'}

        // Colocar frios e lacticíos
        ]
};

export default data;
