import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoBicicletaCriptoAro29Boa: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "A bicicleta Cripto Aro 29 vem montada?",
      answer: [
        "Geralmente ela é enviada pré-montada na caixa.",
        "É obrigatório levar a um mecânico para aperto de raios, regulagem de freios e indexação das marchas para não perder a garantia e garantir segurança."
      ]
    },
    {
      question: "Posso fazer trilhas pesadas com essa bicicleta?",
      answer: [
        "Não recomendamos.",
        "A Cripto Aro 29 é equipada com peças de entrada, feitas para o asfalto e passeios leves, como parques e estradões simples de terra."
      ]
    },
    {
      question: "Os freios a disco da Cripto Aro 29 são bons?",
      answer: [
        "Sim.",
        "Apesar de serem mecânicos (a cabo), entregam uma ótima frenagem para uso urbano e não perdem a eficiência quando as rodas molham na chuva."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" width="1200" height="800" src="/images/blog/1/bicicleta-cripto-aro-29-e-boa.webp" 
            alt="Bicicleta Cripto Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta Cripto Aro 29 é Boa? <br/>
            <span className="text-cyan-400">Análise de Freios e Marchas</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <a href="/author/rafael-martins/" className="hover:opacity-80 transition-opacity">
                <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-8 h-8 rounded-full border border-cyan-500" />
              </a>
              <a href="/author/rafael-martins/" className="hover:text-cyan-400 transition-colors">Por Rafael Martins</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Encontrar o equilíbrio entre não esvaziar a carteira e ter uma bicicleta que aguente o tranco diário é o maior desafio de quem procura uma aro 29.</p>
          <p>Olhando de fora, a Bicicleta Cripto Aro 29 parece robusta, mas analisei cada detalhe mecânico dela e achei um padrão de montagem que você precisa saber antes de comprar.</p>
          <p>Vamos colocar as cartas na mesa e descobrir se ela vai te salvar no trânsito ou te deixar a pé no primeiro mês.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual o seu nível de experiência no ciclismo?
          </h2>
          <p className="text-zinc-300 mb-4">Escolha a opção que melhor te descreve:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('iniciante')} />
              <span className="text-zinc-200">Iniciante / Apenas Lazer e Mobilidade</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('intermediario')} />
              <span className="text-zinc-200">Intermediário / Quero encarar trilhas com desníveis e lama</span>
            </label>
          </div>
          {simulacao === 'iniciante' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Perfeito para você!</strong> A Cripto Aro 29 foi desenhada exatamente para mobilidade urbana, parques e passeios de final de semana, sem custar uma fortuna.
            </div>
          )}
          {simulacao === 'intermediario' && (
            <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400 text-sm">
              <strong className="block mb-1">Atenção!</strong> Peças de entrada como o Grip Shift de plástico e a suspensão simples não aguentam trilhas severas. Considere modelos com marchas Shimano Altus ou Acera e freios hidráulicos.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-12">
          <h3>Bicicleta Aro 29 Cripto 24 Marchas Freio Disco E Suspensão</h3>
          <img src="/images/blog/1/Bicicleta Aro 29 Cripto 24 Marchas Freio Disco E Suspensão.webp" alt="Bicicleta Aro 29 Cripto 24 Marchas Freio Disco E Suspensão" title="Bicicleta Aro 29 Cripto 24 Marchas Freio Disco E Suspensão" width="800" height="533" loading="lazy" className="rounded-lg shadow-xl mb-8" />
        </div>

        <div className="mb-12">
          <AffiliateCard product={products.find(p => p.id === 'bicicleta-aro-29-cripto-24-marchas')!} />
          
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mt-6">
            <h4 className="text-lg font-bold text-white mb-4">Prós e Contras</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-emerald-400 flex items-center gap-2 mb-3">
                  <Check className="w-5 h-5" /> Vantagens
                </h5>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Excelente preço inicial para quem quer economizar.</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Freios a disco garantem parada segura na chuva.</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Selim bem acolchoado traz conforto nos passeios.</li>
                </ul>
              </div>
              <div>
                <h5 className="text-red-400 flex items-center gap-2 mb-3">
                  <X className="w-5 h-5" /> Desvantagens
                </h5>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> Trocadores Grip Shift podem ficar duros com o tempo.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span> Suspensão muito simples, não absorve buracos grandes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Design e tamanho do quadro</h2>
          <p>A estrutura da Cripto Aro 29 foi desenhada para quem busca uma geometria amigável para a cidade.</p>
          <p>Ao analisar os ângulos dos tubos desse quadro, fica claro que a distribuição de peso prioriza deixar o ciclista em uma posição mais ereta e relaxada.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Significa que você vai desviar dos buracos da rua e encarar seus trajetos urbanos sem chegar em casa com aquela dor nas costas terrível.</p>
          <p>É um design focado estritamente na mobilidade urbana e na facilidade de condução, não em aerodinâmica de alta velocidade.</p>

          <BunnerDoMeio />

          <h2>Componentes e equipamento</h2>
          <p>A verdadeira alma de uma bicicleta não está nos adesivos, mas na harmonia mecânica das peças que fazem as rodas girarem.</p>
          <p>É fundamental compreender como a transmissão, os freios e os pontos de contato atuam em conjunto na rua.</p>
          <p>Passei peça por peça dessa configuração para te mostrar o que funciona muito bem e o que, fatalmente, vai pedir uma substituição no futuro se você aumentar o ritmo.</p>

          <h3>Grupo de transmissão</h3>
          <p>O sistema de 21 marchas da Cripto Aro 29 deixa clara a sua vocação: atender iniciantes e ciclistas de asfalto.</p>
          <p>A marca optou por instalar câmbios da marca Paco.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Em retas asfaltadas e ciclovias, você vai trocar de marcha de forma funcional e barata.</p>
          <p>Porém, essas são peças de entrada.</p>
          <p>Se você forçar demais numa subida pesada de terra, pode ter aquele susto do câmbio desregulado estalando a corrente bem na hora que você mais faz força.</p>
          <p>É um conjunto honesto para passeios, mas que possui durabilidade limitada sob exigência extrema.</p>
          <p>Se o plano for terra e lama constantes, considere esse grupo apenas como um quebra-galho inicial.</p>

          <h3>Trocadores de marcha</h3>
          <img src="/images/blog/1/trocadores-grip-shift-cripto-aro-29.webp" alt="Trocadores de marcha rotativos Grip Shift da Bicicleta Cripto Aro 29" title="Trocadores de marcha rotativos Grip Shift da Bicicleta Cripto Aro 29" width="800" height="533" loading="lazy" className="rounded-lg shadow-xl mb-8" />
          <p>É exatamente nos trocadores que a Cripto mostra de onde cortou custos para manter o preço baixo.</p>
          <p>Em vez das amadas alavancas de gatilho, ela utiliza o sistema "Grip Shift" (onde você gira a própria manopla de plástico para trocar a marcha).</p>
          <p>O grande gargalo construtivo aqui é que esse plástico cria folga com o uso contínuo.</p>
          <p>O que isso muda na prática?</p>
          <p>Quando você precisar reduzir a marcha rapidamente no susto de uma ladeira, vai precisar fazer bastante força com as mãos, o que compromete a sua agilidade.</p>
          <p>Manter o cabo sempre limpo ajuda muito, mas deixo a dica de ouro: esse será o primeiro componente que você vai querer dar um upgrade.</p>

          <h3>Freios e suspensão</h3>
          <img src="/images/blog/1/freio-disco-suspensao-cripto-aro-29.webp" alt="Sistema de freio a disco mecânico e suspensão dianteira da Bicicleta Cripto Aro 29" title="Sistema de freio a disco mecânico e suspensão dianteira da Bicicleta Cripto Aro 29" width="800" height="533" loading="lazy" className="rounded-lg shadow-xl mb-8" />
          <p>Os freios a disco mecânicos nas duas rodas são o ponto alto da segurança dessa bike.</p>
          <p>Diferente do antigo V-brake que escorrega e não freia em aros molhados, o disco acionado a cabo garante que você pare a bicicleta imediatamente.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Confiança total no meio do trânsito chuvoso, com a grande vantagem de ter uma manutenção incrivelmente simples que você mesmo pode ajustar em casa.</p>

          <p>Já a suspensão dianteira conta com um sistema de mola bem básico.</p>
          <p>A missão dela é única: filtrar a trepidação dos paralelepípedos e remendos de asfalto para poupar os seus punhos.</p>
          <p>Não crie falsas expectativas: ela cumpre seu papel maravilhosamente bem na cidade, mas não oferece qualquer suporte técnico se você inventar de descer ribanceiras ou encarar trilhas com pedras soltas.</p>

          <h3>Outros componentes e acessórios</h3>
          <p>A sua experiência diária é moldada por pequenos detalhes.</p>
          <p>A Cripto traz pedais de plástico que funcionam no começo, mas substitui-los por modelos de alumínio vai evitar escorregões perigosos da sola do tênis molhado.</p>
          <p>A mesa (suporte do guidão), que também é da marca Paco, segura a onda e mantém a frente firme.</p>

          <p>O grande destaque surpresa fica por conta do selim da marca GTA: ele possui um acolchoamento bastante generoso.</p>
          <p>Isso te salva das dores incômodas em trajetos urbanos mais longos.</p>
          <p>Fique atento a dois detalhes de logística: ela não vem com suporte de caramanhola (garrafinha de água), então já compre um.</p>
          <p>Em compensação, o descanso lateral (pezinho) já vem instalado, protegendo a pintura de quedas desnecessárias quando você for estacionar na padaria.</p>

          <BunnerDoMeio />

          <h2>Para quem vale a pena?</h2>
          <p>Descobrir se essa configuração atende ao seu perfil evita frustrações logo nas primeiras semanas de uso.</p>
          <p>Analisando a fundo a estrutura da Cripto Aro 29, ela tem direcionamentos muito claros de uso:</p>

          <p>⭐ Melhor Custo-Benefício para Iniciantes e Uso Urbano.</p>
          <p>Se o seu objetivo é ir para o trabalho, aposentar o transporte público, passear no parque com a família ou rodar em ciclovias e asfalto, ela entrega exatamente o que você precisa pelo valor investido.</p>

          <p>⛰️ Para quem quer encarar Trilhas Pesadas.</p>
          <p>Fuja.</p>
          <p>Tentar colocar os trocadores Grip Shift de plástico e a suspensão de mola simples em uma trilha técnica cheia de solavancos é certeza de voltar para casa empurrando a bicicleta.</p>

          <h2>Avaliação geral e recomendações</h2>
          <p>Chegamos ao veredito.</p>
          <p>A Cripto Aro 29 é uma bicicleta de entrada honesta, desde que você saiba exatamente o que está comprando.</p>
          <p>O segredo para o sucesso com essa bike é alinhar as expectativas: ela é uma guerreira urbana.</p>
          <p>O custo-benefício dos freios a disco mecânicos e o conforto do selim GTA pesam a favor, enquanto o sistema rotativo de marchas vai te exigir um pouco de paciência até um futuro upgrade.</p>

          <h3>Dica Prática</h3>
          <p>A regra sagrada no balcão de qualquer oficina é: tirou a bicicleta da caixa?</p>
          <p>Não saia pedalando.</p>
          <p>Leve direto para um mecânico profissional dar aquele aperto geral em todos os parafusos, alinhar os freios e lubrificar os cabos de marcha.</p>
          <p>Esses pequenos ajustes de estreia dobram a vida útil das peças originais da Cripto e garantem a segurança do seu pedal diário.</p>

        </div>


        {/* FAQ Section */}
        <div className="mt-16 border-t border-zinc-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-900/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-zinc-100">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-zinc-400 space-y-2">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </article>
    </>
  );
};
