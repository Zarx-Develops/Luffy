// Módulos necessários
const fs = require('fs');
const axios = require('axios');
const moment = require('moment-timezone');
const cheerio = require('cheerio');
const jimp = require('jimp');
const util = require('util');
const crypto = require('crypto');
const request = require('request');
const ms = require('ms');
const exec = require('child_process').exec;

// Boom para tratamento de erros
const { Boom } = require('@hapi/boom');

// Configurações básicas
const setting = {
  NomeDoBot: "BLACK BOT",
  NickDono: "Dono",
  prefix: ".",
  numerodono: "5511999999999"
};

// Configurações obrigatórias
const obrigadoEXT = {
  visualizarmsg: false,
  verificado: false,
  menu_audio: false,
  antipv2: false,
  consoleoff: false,
  botoff: false, // ESTA É A CONFIGURAÇÃO IMPORTANTE!
  listanegraG: [],
  antipv: false,
  anticall: false,
  stopcmdlist: false
};

// Funções básicas
const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  magenta: (text) => `\x1b[35m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`,
  white: (text) => `\x1b[37m${text}\x1b[0m`,
  brightRed: (text) => `\x1b[91m${text}\x1b[0m`,
  brightYellow: (text) => `\x1b[93m${text}\x1b[0m`,
  brightMagenta: (text) => `\x1b[95m${text}\x1b[0m`,
  gray: (text) => `\x1b[90m${text}\x1b[0m`,
  grey: (text) => `\x1b[90m${text}\x1b[0m`
};

const banner2 = { string: "Bot Iniciado!" };
const banner3 = { string: "Conexão Estabelecida!" };

// Funções auxiliares básicas
const getGroupAdmins = (participants) => {
  return participants.filter(p => p.admin !== null).map(p => p.id);
};

const addNumberMais = (number) => {
  return number.replace('@s.whatsapp.net', '');
};

const identArroba = (number) => {
  return number.includes('@') ? number : number + '@s.whatsapp.net';
};

const getname = (userId) => {
  return userId.split('@')[0];
};

const sendHours = (format) => {
  return moment.tz('America/Sao_Paulo').format(format);
};

// Funções vazias para evitar erros
const NodeCache = class {
  constructor() {}
};

// Função P para logging do pino
const P = (options) => {
  return {
    debug: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
    trace: () => {},
    child: () => P(options),
    level: 'silent'
  };
};

const sendButton = () => {};
const sendListB = () => {};
const sendRoulette = () => {};
const sendPayment = () => {};
const RSM_FUNC = () => {};
const saveJSON = () => {};
const isJsonIncludes = () => false;
const alerandom = (length) => Math.floor(Math.random() * length);
const letras = [];
const randomLetra = () => 'a';
const iniMai = () => {};
const contar = () => {};
const gerarkey = () => 'key123';
const rmLetras = (text) => text;
const replaceAll = (text, find, replace) => text.split(find).join(replace);
const contarMin = () => 0;
const contarDias = () => 0;
const converterDias = () => 0;
const converterMin = () => 0;
const allvaluerent = () => {};
const sendFutureTime = () => {};
const isIDacc = () => false;
const GenerateQRpix = () => {};
const sendRouletteButton = () => {};
const nicks = [];

// Arrays e objetos necessários
const links = {
  fundo1: "https://example.com/image1.jpg",
  fundo2: "https://example.com/image2.jpg",
  fundo3: "https://example.com/image3.jpg",
  fundo4: "https://example.com/image4.jpg"
};

const logoslink = {};
const countMessage = [];
const limitefll = [];
const addVote = () => {};
const delVote = () => {};
const anotar = () => {};
const getRandom = (ext) => Math.random().toString() + '.' + ext;

// Funções de sticker (básicas)
const sendVideoAsSticker = () => {};
const sendImageAsSticker = () => {};
const sendVideoAsSticker2 = () => {};
const sendImageAsSticker2 = () => {};

// Outras funções necessárias
const getBuffer = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(response.data);
  } catch (error) {
    return Buffer.from('');
  }
};

const fetchJson = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return {};
  }
};

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

// Função para criar diretórios se não existem
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Criar diretórios necessários
createDirIfNotExists('./base de dados');
createDirIfNotExists('./base de dados/grupos');

// Exportações
module.exports = {
  fs,
  Boom,
  axios,
  cheerio,
  jimp,
  util,
  crypto,
  request,
  ms,
  exec,
  moment,
  setting,
  obrigadoEXT,
  colors,
  banner2,
  banner3,
  getGroupAdmins,
  addNumberMais,
  identArroba,
  getname,
  sendHours,
  NodeCache,
  P,
  sendButton,
  sendListB,
  sendRoulette,
  sendPayment,
  RSM_FUNC,
  saveJSON,
  isJsonIncludes,
  alerandom,
  letras,
  randomLetra,
  iniMai,
  contar,
  gerarkey,
  rmLetras,
  replaceAll,
  contarMin,
  contarDias,
  converterDias,
  converterMin,
  allvaluerent,
  sendFutureTime,
  isIDacc,
  GenerateQRpix,
  sendRouletteButton,
  nicks,
  links,
  logoslink,
  countMessage,
  limitefll,
  addVote,
  delVote,
  anotar,
  getRandom,
  sendVideoAsSticker,
  sendImageAsSticker,
  sendVideoAsSticker2,
  sendImageAsSticker2,
  getBuffer,
  fetchJson,
  time,
  hora,
  date
};