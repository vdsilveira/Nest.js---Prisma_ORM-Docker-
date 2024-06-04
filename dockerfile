# Use a imagem Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie os arquivos de dependência
COPY package*.json ./

# Instale as dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Copie o restante do código da aplicação
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Execute as migrações do Prisma
RUN npx prisma migrate deploy

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
