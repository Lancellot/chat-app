type ContextType = keyof typeof contextResponses;

export const contextResponses = {
  ola: [
    "👋 Olá! Sou o assistente virtual. Como posso ajudar você hoje?",
    "Oi! 😊 Que bom ter você por aqui. Em que posso ajudar?",
    "Olá! ✨ Estou à disposição para auxiliar no que precisar.",
    "Hey! Bem-vindo(a)! 🌟 Como posso tornar seu dia melhor?"
  ],
  bom_dia: [
    "🌅 Bom dia! Como posso tornar seu dia melhor?",
    "Bom dia! ☀️ Espero que esteja tendo um ótimo dia!",
    "🌞 Bom dia! Que seu dia seja incrível! Em que posso ajudar?",
    "Bom dia! 🌄 Pronto para mais um dia produtivo?"
  ],
  boa_tarde: [
    "🌤️ Boa tarde! Em que posso ajudar?",
    "Boa tarde! ☀️ Como está seu dia até agora?",
    "Boa tarde! 🌺 Espero que esteja tendo um dia produtivo!",
    "🌅 Boa tarde! Conte comigo para o que precisar!"
  ],
  boa_noite: [
    "🌙 Boa noite! Ainda por aqui? Como posso ajudar?",
    "Boa noite! 🌟 Em que posso ser útil?",
    "✨ Boa noite! Espero que seu dia tenha sido ótimo. Precisa de ajuda?",
    "Boa noite! 🌜 Vamos resolver o que você precisar!"
  ],
  humor: [
    "😊 Estou muito bem, obrigado por perguntar! E você, como está?",
    "🚀 Funcionando perfeitamente! Como você está?",
    "⚡ Sempre bem e pronto para ajudar! E com você?",
    "✨ Estou ótimo! Que tal você?"
  ],
  despedida: [
    "👋 Até logo! Foi um prazer ajudar!",
    "✨ Tchau! Se precisar, estarei por aqui!",
    "🌟 Até a próxima! Tenha um ótimo dia!",
    "👋 Até mais! Volte sempre que precisar!"
  ],
  reclamacao: [
    "😔 Sinto muito que você esteja insatisfeito. Como posso ajudar a resolver isso?",
    "🙏 Peço desculpas pelo inconveniente. Pode me explicar melhor o que houve?",
    "💫 Sua satisfação é importante para nós. Vamos tentar resolver isso juntos?"
  ],
  elogio: [
    "😊 Muito obrigado! Fico feliz em poder ajudar!",
    "🌟 Que bom que você está satisfeito! É um prazer auxiliar!",
    "✨ Agradeço o elogio! Continuarei me esforçando para ajudar sempre!"
  ],
  problema: [
    "🤝 Entendo sua preocupação. Pode me dar mais detalhes sobre o problema?",
    "💪 Vou fazer o possível para ajudar com seu problema. Pode me explicar melhor?",
    "🔍 Que tipo de problema você está enfrentando? Vamos resolver juntos."
  ],
  agradecimento: [
    "🙏 Por nada! Estou sempre à disposição.",
    "😊 Fico feliz em poder ajudar!",
    "✨ Disponha! Se precisar de mais alguma coisa, é só chamar.",
    "🌟 O prazer é meu em poder ajudar!"
  ],
  duvida: [
    "🤔 Hmm, entendo sua dúvida. Vamos resolver isso juntos?",
    "📝 Pode me dar mais detalhes sobre sua dúvida?",
    "💡 Interessante! Vou fazer o possível para esclarecer isso.",
    "🔍 Me conte mais sobre isso para eu poder ajudar melhor!"
  ],
  confirmacao: [
    "✅ Perfeito! Entendi o que você precisa.",
    "👍 Certo! Vou providenciar isso para você.",
    "💫 Ok! Já sei como posso ajudar.",
    "🎯 Entendi perfeitamente! Vamos resolver isso."
  ],
  nao_entendi: [
    "😅 Desculpe, não entendi muito bem. Pode explicar de outra forma?",
    "🤔 Hmm, não captei. Pode reformular sua pergunta?",
    "😊 Perdão, mas não compreendi. Pode ser mais específico?",
    "💭 Não entendi completamente. Pode me dar mais detalhes?"
  ],
  clima: [
    "🌦️ Desculpe, não tenho acesso a informações meteorológicas em tempo real. Que tal consultar um app de previsão do tempo?",
    "☔ Não posso prever o tempo com certeza, mas recomendo verificar em sites especializados como INMET ou Climatempo!",
    "🌡️ Infelizmente não sou meteorologista! 😅 Para saber sobre o clima, sugiro consultar um serviço de previsão do tempo.",
    "🌤️ Essa é uma boa pergunta! Mas sou apenas um assistente virtual e não tenho acesso a dados meteorológicos."
  ],
  futebol: [
    "⚽ Desculpe, não acompanho resultados de futebol em tempo real. Que tal consultar um site especializado como o GE?",
    "🏆 Não tenho acesso a informações atualizadas sobre futebol. Recomendo verificar em sites esportivos!",
    "⚽ Futebol? Legal! Mas infelizmente não posso te dar informações sobre jogos ou resultados. Tente o Sofascore ou GE para isso!",
    "🎯 Para informações precisas sobre futebol, placar de jogos e campeonatos, sugiro consultar sites especializados como ESPN ou GE."
  ],
  default: [
    "🤔 Hmm, interessante. Pode me contar mais sobre isso?",
    "📝 Entendo. Como posso ajudar com essa situação?",
    "💡 Estou aqui para ajudar. Pode elaborar um pouco mais?",
    "🎯 Me conte mais para eu poder te ajudar da melhor forma!"
  ]
};

export const detectContext = (message: string): ContextType => {
  const lowerMessage = message.toLowerCase().trim();
  
  if (lowerMessage.match(/\b(ola|olá|oi|hey|ei|e ai|eai)\b/)) return 'ola';
  if (lowerMessage.match(/\b(bom dia|bomdia)\b/)) return 'bom_dia';
  if (lowerMessage.match(/\b(boa tarde|boatarde)\b/)) return 'boa_tarde';
  if (lowerMessage.match(/\b(boa noite|boanoite)\b/)) return 'boa_noite';
  
  if (lowerMessage.match(/\b(como vai|tudo bem|como está|como esta|como voce esta|como você está)\b/)) return 'humor';
  
  if (lowerMessage.match(/\b(tchau|adeus|até|ate|flw|falou|fui)\b/)) return 'despedida';
  
  if (lowerMessage.match(/\b(obrigado|obrigada|obg|vlw|valeu|thanks|thx|agradeço|agradecido|gratidão|grato|grata)\b/)) {
    return 'agradecimento';
  }
  
  if (lowerMessage.match(/\b(ok|beleza|certo|entendi|compreendi|blz|tranquilo)\b/)) return 'confirmacao';
  
  if (lowerMessage.match(/\b(ruim|péssimo|pessimo|horrível|horrivel|insatisfeito|mal|inadequado)\b/)) return 'reclamacao';
  
  if (lowerMessage.match(/\b(parabéns|parabens|excelente|ótimo|otimo|bom|muito bom|legal|top|massa)\b/)) return 'elogio';
  
  if (lowerMessage.match(/\b(problema|ajuda|socorro|help|dificuldade|erro)\b/)) return 'problema';
  
  if (lowerMessage.match(/\b(vai chover|tempo hoje|previsão|previsao|clima|temperatura|chuva|sol|nublado)\b/)) return 'clima';
  
  if (lowerMessage.match(/\b(futebol|jogo|gol|campeonato|time|placar|resultado|partida)\b/)) return 'futebol';
  
  if (lowerMessage.includes('?')) return 'duvida';
  
  if (lowerMessage.match(/\b(não entendi|nao entendi|confuso|confused|what)\b/)) return 'nao_entendi';
  
  return 'default';
};

export const getResponseDelay = (message: string): number => {
  const baseDelay = 1000;
  const charDelay = message.length * 20;
  const randomVariation = Math.random() * 500;
  
  return baseDelay + charDelay + randomVariation;
};

export const getBotResponse = (userMessage: string) => {
  const context = detectContext(userMessage);
  const responses = contextResponses[context];
  return responses[Math.floor(Math.random() * responses.length)];
}; 