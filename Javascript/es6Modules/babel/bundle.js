"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// O BABEL É UM COMPILAR E "TRADUTOR" do nosso código, ele serve para daptar nosso código a diferentes tipos de navegadores

// Em navegadores mais antigos, existem algumas funcionalidades que ainda não estão adaptadas para usar o javascript moderno, então neste caso, precisamos de alguma
//ferramenta para poder traduzir nosso código moderno para um código antigo

//TESTES e COMPILAÇÃO - para compilar e traduzir nosso código, utilize o comando: npx babel main.js -o bundle.js --presets=@babel/env

// PARA MONITORAR AS MUDANÇAS DO BABEL AO VIVO, ADICIONE ESTA LINHA NO PACKAGE.JSON: "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
//e depois "NPM RUN BUILD"

var nome = "Luiz";
var obj = {
  nome: nome
};
var novoObj = _objectSpread({}, obj);
console.log(novoObj);
var novoTeste = "Olaaaa";
