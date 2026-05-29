const ListaProdutos = {
  itens: {
    titulo: "Nossos Veículos Premium",
    lista: [
      {
        id: 1,
        nome: "BMW M3 2024",
        ano: 2024,
        descricao: "O BMW M3 é um sedã esportivo de alto desempenho que combina luxo e potência. Motor inline-6 biturbo de 3.0 litros com 503cv e 650Nm de torque. Aceleração de 0 a 100km/h em apenas 3.5 segundos com câmbio automático de 8 velocidades.",
        opcionais: ["Tração integral xDrive", "Teto solar panorâmico", "Bancos em couro Merino", "Head-up display", "Sistema de som Harman Kardon", "Rodas de 19 polegadas"],
        imagens: [
          require('../../assets/BMW-M3/bmw1.jpeg'),
          require('../../assets/BMW-M3/bmw2.jpeg'),
          require('../../assets/BMW-M3/bmw3.jpeg')
        ]
      },
      {
        id: 2,
        nome: "Tesla Model 3 2024",
        ano: 2024,
        descricao: "O Tesla Model 3 redefine o conceito de carro elétrico. Com autonomia de até 602km por carga, piloto automático avançado e atualizações over-the-air. Interior minimalista com tela central de 15 polegadas e aceleração impressionante.",
        opcionais: ["Piloto automático total", "Rodas de 20 polegadas", "Interior premium branco", "Teto de vidro", "Carregamento rápido Supercharger", "Sistema de som premium 14 alto-falantes"],
        imagens: [
          require('../../assets/TESLA/tesla1.jpeg'),
          require('../../assets/TESLA/tesla2.jpeg'),
          require('../../assets/TESLA/tesla3.jpeg')
        ]
      },
      {
        id: 3,
        nome: "Porsche 911 Carrera 2023",
        ano: 2023,
        descricao: "O ícone dos esportivos. Motor boxer de 6 cilindros traseiro com 385cv e câmbio PDK de 8 marchas. Design atemporal com tecnologia de ponta, frenagem esportiva e dinâmica de direção incomparável.",
        opcionais: ["Pacote Sport Chrono", "Suspensão PASM ativa", "Bancos esportivos adaptativos", "Sistema de escapamento esportivo", "Faróis LED Matrix", "Câmera de ré com surround view"],
        imagens: [
          require('../../assets/PORSCHE/porsche1.jpeg'),
          require('../../assets/PORSCHE/porsche2.jpeg'),
          require('../../assets/PORSCHE/porsche3.jpeg')
        ]
      },
      {
        id: 4,
        nome: "Mercedes GLE 2023",
        ano: 2023,
        descricao: "O Mercedes GLE combina elegância e versatilidade em um SUV de luxo completo. Motor V6 de 367cv com suspensão a ar E-ACTIVE BODY CONTROL. Interior espaçoso com sistema MBUX e tela dupla de 12 polegadas.",
        opcionais: ["Suspensão pneumática E-ABC", "Teto panorâmico de correr", "Pacote AMG Line", "Sistema de som Burmester 3D", "Assistente de estacionamento automático", "Rebatimento elétrico dos bancos traseiros"],
        imagens: [
          require('../../assets/MERCEDES/mercedes1.jpeg'),
          require('../../assets/MERCEDES/mercedes2.jpeg'),
          require('../../assets/MERCEDES/mercedes3.jpeg')
        ]
      },
      {
        id: 5,
        nome: "Audi RS6 2023",
        ano: 2023,
        descricao: "A Audi RS6 Avant é a perfeita combinação entre família e performance. Motor V8 biturbo de 4.0 litros com 600cv e tração quattro integral. De 0 a 100km/h em 3.6 segundos com espaço para levar a família.",
        opcionais: ["Tração integral quattro", "Suspensão RS com rebaixamento", "Freios cerâmicos carbono", "Rodas de 22 polegadas", "Matrix LED com laser", "Sistema de som Bang & Olufsen 3D"],
        imagens: [
          require('../../assets/AUDI/audi1.jpeg'),
          require('../../assets/AUDI/audi2.jpeg'),
          require('../../assets/AUDI/audi3.jpeg')
        ]
      },
      {
        id: 6,
        nome: "Ferrari F8 2021",
        ano: 2021,
        descricao: "A Ferrari F8 Tributo é a homenagem ao melhor motor V8 da história da Ferrari. 710cv e 770Nm de torque. De 0 a 100km/h em 2.9 segundos e velocidade máxima de 340km/h. Uma experiência de condução inesquecível.",
        opcionais: ["Sistema Side Slip Control 6.1", "Freios carbo-cerâmicos CCM3", "Rodas de fibra de carbono", "Escapamento Inconel titanium", "Suspensão magnetorreológica", "Painel digital full LED"],
        imagens: [
          require('../../assets/FERRARI/ferrari1.jpeg'),
          require('../../assets/FERRARI/ferrari2.jpeg'),
          require('../../assets/FERRARI/ferrari3.jpeg')
        ]
      }
    ]
  }
};

export default ListaProdutos;