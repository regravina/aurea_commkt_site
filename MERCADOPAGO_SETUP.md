# Guia de Configuração - MercadoPago

## 📋 Pré-requisitos

Você precisa ter:
- Uma conta PJ digital
- E-mail: aureacommkt@gmail.com
- Telefone: (48) 98827-4343

## 🚀 Passo 1: Criar Conta no MercadoPago

1. Acesse: https://www.mercadopago.com.br
2. Clique em **"Criar Conta"**
3. Selecione **"Sou Vendedor"**
4. Preencha os dados da empresa:
   - **Nome da Empresa:** AUREA COMUNICAÇÃO E MARKETING
   - **E-mail:** aureacommkt@gmail.com
   - **Telefone:** (48) 98827-4343
   - **CPF/CNPJ:** Seu CNPJ da PJ
5. Conclua a verificação de identidade

## 🔑 Passo 2: Obter as Credenciais

1. Acesse o **Painel de Desenvolvedor**: https://www.mercadopago.com.br/developers/panel
2. Vá para **"Credenciais"**
3. Copie:
   - **Public Key** (começa com `APP_USR-`)
   - **Access Token** (começa com `APP_USR-`)

## ⚙️ Passo 3: Configurar as Variáveis de Ambiente

1. No arquivo `.env` do projeto, adicione:

```
VITE_MERCADOPAGO_PUBLIC_KEY=seu_public_key_aqui
MERCADOPAGO_ACCESS_TOKEN=seu_access_token_aqui
```

2. Reinicie o servidor de desenvolvimento

## 💳 Passo 4: Configurar Métodos de Pagamento

No painel do MercadoPago:

1. Vá para **"Configurações"** → **"Métodos de Pagamento"**
2. Ative:
   - ✅ **PIX** (instantâneo)
   - ✅ **Boleto** (até 2 dias úteis)
   - ✅ **Cartão de Crédito** (opcional)

## 📊 Passo 5: Configurar Produtos/Cursos

1. Vá para **"Catálogo"** → **"Produtos"**
2. Crie um produto para cada curso/e-book:
   - **Nome:** Oratória e Apresentações
   - **Descrição:** Domine a arte de falar em público...
   - **Preço:** Defina o preço desejado
   - **SKU:** oratoria-apresentacoes

3. Repita para todos os cursos e e-books

## 🧪 Passo 6: Testar a Integração

1. Acesse seu site em desenvolvimento
2. Clique em "Comprar Agora" em um curso/e-book
3. Você será redirecionado para o checkout do MercadoPago
4. **Use as credenciais de teste** fornecidas pelo MercadoPago para testar

### Cartões de Teste:
- **Visa:** 4111 1111 1111 1111
- **Mastercard:** 5555 5555 5555 4444
- **Data de Expiração:** 12/25
- **CVV:** 123

## 💰 Passo 7: Receber Pagamentos

1. Os pagamentos entrarão em sua conta PJ
2. Você pode transferir para sua conta bancária a qualquer momento
3. Consulte o extrato em **"Atividade"** → **"Transações"**

## 📱 Passo 8: Configurar Notificações

1. Vá para **"Configurações"** → **"Notificações"**
2. Ative notificações por:
   - ✅ E-mail
   - ✅ SMS (opcional)
3. Você receberá alertas de cada venda

## ❓ Dúvidas Frequentes

### P: Quanto custa usar o MercadoPago?
**R:** As taxas variam:
- PIX: ~1,99%
- Boleto: ~2,49%
- Cartão: ~3,99%

### P: Quanto tempo leva para receber o dinheiro?
**R:** 
- PIX: Instantâneo
- Boleto: 2-3 dias úteis após o pagamento
- Cartão: 1-2 dias úteis

### P: Como acompanhar as vendas?
**R:** Acesse o painel do MercadoPago → "Atividade" → "Transações"

### P: Posso mudar os preços depois?
**R:** Sim! Você pode atualizar os preços dos produtos a qualquer momento no painel.

## 🆘 Suporte

Se tiver dúvidas:
- **MercadoPago:** https://www.mercadopago.com.br/ajuda
- **E-mail:** aureacommkt@gmail.com
- **WhatsApp:** (48) 98827-4343
