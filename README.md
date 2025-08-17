# Projeto AutomacaoCypressParaBank
Repositório dedicado para Automações de cenários de testes em Cypress no site do ParaBank

# Utilização de Integração Contínua com GitHub Actions
Este projeto utiliza GitHub Actions para garantir qualidade contínua e automação dos testes.
A cada push ou pull request realizado, uma pipeline de integração contínua é acionada automaticamente, realizando as seguintes etapas:
- Verifica se o projeto está com build válido;
- Executa os testes automatizados com Cypress;
- Gera logs e evidências de execução;
- Garante que novas alterações não quebrem funcionalidades existentes.
  
Essa abordagem torna o projeto mais robusto, confiável e profissional, permitindo que qualquer alteração no código seja validada de forma automática e transparente.

# Comando para rodar os testes em sua máquina localmente no VSCode
- Baixe meu projeto em sua máquina e o importe no VSCode;
- Utilize no terminal o comando --> npx cypress open;
- Será aberta a "Central" de comando do Cypress, basta escolher qual navegador você utilizará para rodar os testes e assim, clique no Spec Users-actions
- O teste será executado em vídeo no Dashboard.
