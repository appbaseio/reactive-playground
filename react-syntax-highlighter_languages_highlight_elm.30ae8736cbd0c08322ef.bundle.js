(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{2064:function(module,exports){module.exports=function(hljs){var COMMENT={variants:[hljs.COMMENT("--","$"),hljs.COMMENT("{-","-}",{contains:["self"]})]},CONSTRUCTOR={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},LIST={begin:"\\(",end:"\\)",illegal:'"',contains:[{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},COMMENT]};return{keywords:"let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",contains:[{beginKeywords:"port effect module",end:"exposing",keywords:"port effect module where command subscription exposing",contains:[LIST,COMMENT],illegal:"\\W\\.|;"},{begin:"import",end:"$",keywords:"import as exposing",contains:[LIST,COMMENT],illegal:"\\W\\.|;"},{begin:"type",end:"$",keywords:"type alias",contains:[CONSTRUCTOR,LIST,{begin:"{",end:"}",contains:LIST.contains},COMMENT]},{beginKeywords:"infix infixl infixr",end:"$",contains:[hljs.C_NUMBER_MODE,COMMENT]},{begin:"port",end:"$",keywords:"port",contains:[COMMENT]},{className:"string",begin:"'\\\\?.",end:"'",illegal:"."},hljs.QUOTE_STRING_MODE,hljs.C_NUMBER_MODE,CONSTRUCTOR,hljs.inherit(hljs.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),COMMENT,{begin:"->|<-"}],illegal:/;/}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_elm.30ae8736cbd0c08322ef.bundle.js.map