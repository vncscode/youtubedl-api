#!/bin/bash

# Atualiza e instala dependências do sistema
echo -e "Atualizando pacotes do sistema..."

# Define cores para saída no terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # Sem cor

# Exibe arte ASCII estilizada
clear
echo -e "${BLUE}=========================================${NC}"
echo -e "${GREEN}_____.___.              __       ___.              .__.__                          .__ ${NC}"
echo -e "${GREEN}\\__  |   | ____  __ ___/  |_ __ _\\_ |__   ____   __| _|  |           _____  ______ |__|${NC}"
echo -e "${GREEN} /   |   |/  _ \\|  |  \\   __|  |  | __ \\_/ __ \\ / __ ||  |    ______ \\__  \\ \\____ \\|  |${NC}"
echo -e "${GREEN} \\____   (  <_> |  |  /|  | |  |  | \\_\\ \\  ___// /_/ ||  |__ /_____/  / __ \\|  |_> |  |${NC}"
echo -e "${GREEN} / ______|\\____/|____/ |__| |____/|___  /\\___  \\____ ||____/         (____  |   __/|__|${NC}"
echo -e "${GREEN} \\/                                   \\/     \\/     \\/                    \\/|__|        ${NC}"
echo -e "${BLUE}=========================================${NC}"

# Instala dependências do Node.js
echo -e "${RED}Instalando dependências do Node.js...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao instalar dependências do Node.js!${NC}"
    exit 1
fi

# Limpa os logs
echo -e "${RED}Limpando logs...${NC}"
rm -rf logs/*
if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao limpar os logs!${NC}"
    exit 1
fi

# Exibe mensagem antes de iniciar o servidor
echo -e "${GREEN}Iniciando servidor...${NC}"

# Inicia o servidor
node app.js
if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao iniciar o servidor!${NC}"
    exit 1
fi
