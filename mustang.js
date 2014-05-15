// sizzle.js
(function(av){var D,ay,t,M,P,n,ab,ax,aC,N,ac,ae,H,u,an,ai,aw,k,K,ap="sizzle"+-(new Date()),O=av.document,az=0,aj=0,d=F(),ao=F(),L=F(),J=function(i,e){if(i===e){ac=true}return 0},au=typeof undefined,V=1<<31,T=({}).hasOwnProperty,ar=[],at=ar.pop,R=ar.push,b=ar.push,s=ar.slice,j=ar.indexOf||function(aE){var aD=0,e=this.length;for(;aD<e;aD++){if(this[aD]===aE){return aD}}return -1},c="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",v="[\\x20\\t\\r\\n\\f]",a="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Q=a.replace("w","w#"),al="\\["+v+"*("+a+")"+v+"*(?:([*^$|!~]?=)"+v+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+Q+")|)|)"+v+"*\\]",q=":("+a+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+al.replace(3,8)+")*)|.*)\\)|)",x=new RegExp("^"+v+"+|((?:^|[^\\\\])(?:\\\\.)*)"+v+"+$","g"),A=new RegExp("^"+v+"*,"+v+"*"),G=new RegExp("^"+v+"*([>+~]|"+v+")"+v+"*"),z=new RegExp("="+v+"*([^\\]'\"]*?)"+v+"*\\]","g"),X=new RegExp(q),Z=new RegExp("^"+Q+"$"),ah={ID:new RegExp("^#("+a+")"),CLASS:new RegExp("^\\.("+a+")"),TAG:new RegExp("^("+a.replace("w","w*")+")"),ATTR:new RegExp("^"+al),PSEUDO:new RegExp("^"+q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+v+"*(even|odd|(([+-]|)(\\d*)n|)"+v+"*(?:([+-]|)"+v+"*(\\d+)|))"+v+"*\\)|)","i"),bool:new RegExp("^(?:"+c+")$","i"),needsContext:new RegExp("^"+v+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+v+"*((?:-\\d)?\\d*)"+v+"*\\)|)(?=[^-]|$)","i")},h=/^(?:input|select|textarea|button)$/i,r=/^h\d$/i,U=/^[^{]+\{\s*\[native \w/,W=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ag=/[+~]/,S=/'|\\/g,y=new RegExp("\\\\([\\da-f]{1,6}"+v+"?|("+v+")|.)","ig"),ak=function(e,aE,i){var aD="0x"+aE-65536;return aD!==aD||i?aE:aD<0?String.fromCharCode(aD+65536):String.fromCharCode(aD>>10|55296,aD&1023|56320)};try{b.apply((ar=s.call(O.childNodes)),O.childNodes);ar[O.childNodes.length].nodeType}catch(I){b={apply:ar.length?function(i,e){R.apply(i,s.call(e))}:function(aF,aE){var e=aF.length,aD=0;while((aF[e++]=aE[aD++])){}aF.length=e-1}}}function B(aK,aD,aO,aQ){var aP,aH,aI,aM,aN,aG,aF,e,aE,aL;if((aD?aD.ownerDocument||aD:O)!==H){ae(aD)}aD=aD||H;aO=aO||[];if(!aK||typeof aK!=="string"){return aO}if((aM=aD.nodeType)!==1&&aM!==9){return[]}if(an&&!aQ){if((aP=W.exec(aK))){if((aI=aP[1])){if(aM===9){aH=aD.getElementById(aI);if(aH&&aH.parentNode){if(aH.id===aI){aO.push(aH);return aO}}else{return aO}}else{if(aD.ownerDocument&&(aH=aD.ownerDocument.getElementById(aI))&&K(aD,aH)&&aH.id===aI){aO.push(aH);return aO}}}else{if(aP[2]){b.apply(aO,aD.getElementsByTagName(aK));return aO}else{if((aI=aP[3])&&ay.getElementsByClassName&&aD.getElementsByClassName){b.apply(aO,aD.getElementsByClassName(aI));return aO}}}}if(ay.qsa&&(!ai||!ai.test(aK))){e=aF=ap;aE=aD;aL=aM===9&&aK;if(aM===1&&aD.nodeName.toLowerCase()!=="object"){aG=n(aK);if((aF=aD.getAttribute("id"))){e=aF.replace(S,"\\$&")}else{aD.setAttribute("id",e)}e="[id='"+e+"'] ";aN=aG.length;while(aN--){aG[aN]=e+o(aG[aN])}aE=ag.test(aK)&&Y(aD.parentNode)||aD;aL=aG.join(",")}if(aL){try{b.apply(aO,aE.querySelectorAll(aL));return aO}catch(aJ){}finally{if(!aF){aD.removeAttribute("id")}}}}}return ax(aK.replace(x,"$1"),aD,aO,aQ)}function F(){var i=[];function e(aD,aE){if(i.push(aD+" ")>t.cacheLength){delete e[i.shift()]}return(e[aD+" "]=aE)}return e}function p(e){e[ap]=true;return e}function l(i){var aE=H.createElement("div");try{return !!i(aE)}catch(aD){return false}finally{if(aE.parentNode){aE.parentNode.removeChild(aE)}aE=null}}function aA(aD,aF){var e=aD.split("|"),aE=aD.length;while(aE--){t.attrHandle[e[aE]]=aF}}function f(i,e){var aE=e&&i,aD=aE&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||V)-(~i.sourceIndex||V);if(aD){return aD}if(aE){while((aE=aE.nextSibling)){if(aE===e){return -1}}}return i?1:-1}function C(e){return function(aD){var i=aD.nodeName.toLowerCase();return i==="input"&&aD.type===e}}function g(e){return function(aD){var i=aD.nodeName.toLowerCase();return(i==="input"||i==="button")&&aD.type===e}}function am(e){return p(function(i){i=+i;return p(function(aD,aH){var aF,aE=e([],aD.length,i),aG=aE.length;while(aG--){if(aD[(aF=aE[aG])]){aD[aF]=!(aH[aF]=aD[aF])}}})})}function Y(e){return e&&typeof e.getElementsByTagName!==au&&e}ay=B.support={};P=B.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;return i?i.nodeName!=="HTML":false};ae=B.setDocument=function(aD){var e,aE=aD?aD.ownerDocument||aD:O,i=aE.defaultView;if(aE===H||aE.nodeType!==9||!aE.documentElement){return H}H=aE;u=aE.documentElement;an=!P(aE);if(i&&i!==i.top){if(i.addEventListener){i.addEventListener("unload",function(){ae()},false)}else{if(i.attachEvent){i.attachEvent("onunload",function(){ae()})}}}ay.attributes=l(function(aF){aF.className="i";return !aF.getAttribute("className")});ay.getElementsByTagName=l(function(aF){aF.appendChild(aE.createComment(""));return !aF.getElementsByTagName("*").length});ay.getElementsByClassName=U.test(aE.getElementsByClassName)&&l(function(aF){aF.innerHTML="<div class='a'></div><div class='a i'></div>";aF.firstChild.className="i";return aF.getElementsByClassName("i").length===2});ay.getById=l(function(aF){u.appendChild(aF).id=ap;return !aE.getElementsByName||!aE.getElementsByName(ap).length});if(ay.getById){t.find.ID=function(aH,aG){if(typeof aG.getElementById!==au&&an){var aF=aG.getElementById(aH);return aF&&aF.parentNode?[aF]:[]}};t.filter.ID=function(aG){var aF=aG.replace(y,ak);return function(aH){return aH.getAttribute("id")===aF}}}else{delete t.find.ID;t.filter.ID=function(aG){var aF=aG.replace(y,ak);return function(aI){var aH=typeof aI.getAttributeNode!==au&&aI.getAttributeNode("id");return aH&&aH.value===aF}}}t.find.TAG=ay.getElementsByTagName?function(aF,aG){if(typeof aG.getElementsByTagName!==au){return aG.getElementsByTagName(aF)}}:function(aF,aJ){var aK,aI=[],aH=0,aG=aJ.getElementsByTagName(aF);if(aF==="*"){while((aK=aG[aH++])){if(aK.nodeType===1){aI.push(aK)}}return aI}return aG};t.find.CLASS=ay.getElementsByClassName&&function(aG,aF){if(typeof aF.getElementsByClassName!==au&&an){return aF.getElementsByClassName(aG)}};aw=[];ai=[];if((ay.qsa=U.test(aE.querySelectorAll))){l(function(aF){aF.innerHTML="<select class=''><option selected=''></option></select>";if(aF.querySelectorAll("[class^='']").length){ai.push("[*^$]="+v+"*(?:''|\"\")")}if(!aF.querySelectorAll("[selected]").length){ai.push("\\["+v+"*(?:value|"+c+")")}if(!aF.querySelectorAll(":checked").length){ai.push(":checked")}});l(function(aG){var aF=aE.createElement("input");aF.setAttribute("type","hidden");aG.appendChild(aF).setAttribute("name","D");if(aG.querySelectorAll("[name=d]").length){ai.push("name"+v+"*[*^$|!~]?=")}if(!aG.querySelectorAll(":enabled").length){ai.push(":enabled",":disabled")}aG.querySelectorAll("*,:x");ai.push(",.*:")})}if((ay.matchesSelector=U.test((k=u.matches||u.webkitMatchesSelector||u.mozMatchesSelector||u.oMatchesSelector||u.msMatchesSelector)))){l(function(aF){ay.disconnectedMatch=k.call(aF,"div");k.call(aF,"[s!='']:x");aw.push("!=",q)})}ai=ai.length&&new RegExp(ai.join("|"));aw=aw.length&&new RegExp(aw.join("|"));e=U.test(u.compareDocumentPosition);K=e||U.test(u.contains)?function(aG,aF){var aI=aG.nodeType===9?aG.documentElement:aG,aH=aF&&aF.parentNode;return aG===aH||!!(aH&&aH.nodeType===1&&(aI.contains?aI.contains(aH):aG.compareDocumentPosition&&aG.compareDocumentPosition(aH)&16))}:function(aG,aF){if(aF){while((aF=aF.parentNode)){if(aF===aG){return true}}}return false};J=e?function(aG,aF){if(aG===aF){ac=true;return 0}var aH=!aG.compareDocumentPosition-!aF.compareDocumentPosition;if(aH){return aH}aH=(aG.ownerDocument||aG)===(aF.ownerDocument||aF)?aG.compareDocumentPosition(aF):1;if(aH&1||(!ay.sortDetached&&aF.compareDocumentPosition(aG)===aH)){if(aG===aE||aG.ownerDocument===O&&K(O,aG)){return -1}if(aF===aE||aF.ownerDocument===O&&K(O,aF)){return 1}return N?(j.call(N,aG)-j.call(N,aF)):0}return aH&4?-1:1}:function(aG,aF){if(aG===aF){ac=true;return 0}var aM,aJ=0,aL=aG.parentNode,aI=aF.parentNode,aH=[aG],aK=[aF];if(!aL||!aI){return aG===aE?-1:aF===aE?1:aL?-1:aI?1:N?(j.call(N,aG)-j.call(N,aF)):0}else{if(aL===aI){return f(aG,aF)}}aM=aG;while((aM=aM.parentNode)){aH.unshift(aM)}aM=aF;while((aM=aM.parentNode)){aK.unshift(aM)}while(aH[aJ]===aK[aJ]){aJ++}return aJ?f(aH[aJ],aK[aJ]):aH[aJ]===O?-1:aK[aJ]===O?1:0};return aE};B.matches=function(i,e){return B(i,null,null,e)};B.matchesSelector=function(aD,aF){if((aD.ownerDocument||aD)!==H){ae(aD)}aF=aF.replace(z,"='$1']");if(ay.matchesSelector&&an&&(!aw||!aw.test(aF))&&(!ai||!ai.test(aF))){try{var i=k.call(aD,aF);if(i||ay.disconnectedMatch||aD.document&&aD.document.nodeType!==11){return i}}catch(aE){}}return B(aF,H,null,[aD]).length>0};B.contains=function(e,i){if((e.ownerDocument||e)!==H){ae(e)}return K(e,i)};B.attr=function(aD,e){if((aD.ownerDocument||aD)!==H){ae(aD)}var i=t.attrHandle[e.toLowerCase()],aE=i&&T.call(t.attrHandle,e.toLowerCase())?i(aD,e,!an):undefined;return aE!==undefined?aE:ay.attributes||!an?aD.getAttribute(e):(aE=aD.getAttributeNode(e))&&aE.specified?aE.value:null};B.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};B.uniqueSort=function(aE){var aF,aG=[],e=0,aD=0;ac=!ay.detectDuplicates;N=!ay.sortStable&&aE.slice(0);aE.sort(J);if(ac){while((aF=aE[aD++])){if(aF===aE[aD]){e=aG.push(aD)}}while(e--){aE.splice(aG[e],1)}}N=null;return aE};M=B.getText=function(aG){var aF,aD="",aE=0,e=aG.nodeType;if(!e){while((aF=aG[aE++])){aD+=M(aF)}}else{if(e===1||e===9||e===11){if(typeof aG.textContent==="string"){return aG.textContent}else{for(aG=aG.firstChild;aG;aG=aG.nextSibling){aD+=M(aG)}}}else{if(e===3||e===4){return aG.nodeValue}}}return aD};t=B.selectors={cacheLength:50,createPseudo:p,match:ah,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(y,ak);e[3]=(e[4]||e[5]||"").replace(y,ak);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){B.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+((e[7]+e[8])||e[3]==="odd")}else{if(e[3]){B.error(e[0])}}return e},PSEUDO:function(i){var e,aD=!i[5]&&i[2];if(ah.CHILD.test(i[0])){return null}if(i[3]&&i[4]!==undefined){i[2]=i[4]}else{if(aD&&X.test(aD)&&(e=n(aD,true))&&(e=aD.indexOf(")",aD.length-e)-aD.length)){i[0]=i[0].slice(0,e);i[2]=aD.slice(0,e)}}return i.slice(0,3)}},filter:{TAG:function(i){var e=i.replace(y,ak).toLowerCase();return i==="*"?function(){return true}:function(aD){return aD.nodeName&&aD.nodeName.toLowerCase()===e}},CLASS:function(e){var i=d[e+" "];return i||(i=new RegExp("(^|"+v+")"+e+"("+v+"|$)"))&&d(e,function(aD){return i.test(typeof aD.className==="string"&&aD.className||typeof aD.getAttribute!==au&&aD.getAttribute("class")||"")})},ATTR:function(aD,i,e){return function(aF){var aE=B.attr(aF,aD);if(aE==null){return i==="!="}if(!i){return true}aE+="";return i==="="?aE===e:i==="!="?aE!==e:i==="^="?e&&aE.indexOf(e)===0:i==="*="?e&&aE.indexOf(e)>-1:i==="$="?e&&aE.slice(-e.length)===e:i==="~="?(" "+aE+" ").indexOf(e)>-1:i==="|="?aE===e||aE.slice(0,e.length+1)===e+"-":false}},CHILD:function(i,aF,aE,aG,aD){var aI=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",aH=aF==="of-type";return aG===1&&aD===0?function(aJ){return !!aJ.parentNode}:function(aP,aN,aS){var aJ,aV,aQ,aU,aR,aM,aO=aI!==e?"nextSibling":"previousSibling",aT=aP.parentNode,aL=aH&&aP.nodeName.toLowerCase(),aK=!aS&&!aH;if(aT){if(aI){while(aO){aQ=aP;while((aQ=aQ[aO])){if(aH?aQ.nodeName.toLowerCase()===aL:aQ.nodeType===1){return false}}aM=aO=i==="only"&&!aM&&"nextSibling"}return true}aM=[e?aT.firstChild:aT.lastChild];if(e&&aK){aV=aT[ap]||(aT[ap]={});aJ=aV[i]||[];aR=aJ[0]===az&&aJ[1];aU=aJ[0]===az&&aJ[2];aQ=aR&&aT.childNodes[aR];while((aQ=++aR&&aQ&&aQ[aO]||(aU=aR=0)||aM.pop())){if(aQ.nodeType===1&&++aU&&aQ===aP){aV[i]=[az,aR,aU];break}}}else{if(aK&&(aJ=(aP[ap]||(aP[ap]={}))[i])&&aJ[0]===az){aU=aJ[1]}else{while((aQ=++aR&&aQ&&aQ[aO]||(aU=aR=0)||aM.pop())){if((aH?aQ.nodeName.toLowerCase()===aL:aQ.nodeType===1)&&++aU){if(aK){(aQ[ap]||(aQ[ap]={}))[i]=[az,aU]}if(aQ===aP){break}}}}}aU-=aD;return aU===aG||(aU%aG===0&&aU/aG>=0)}}},PSEUDO:function(aE,aD){var e,i=t.pseudos[aE]||t.setFilters[aE.toLowerCase()]||B.error("unsupported pseudo: "+aE);if(i[ap]){return i(aD)}if(i.length>1){e=[aE,aE,"",aD];return t.setFilters.hasOwnProperty(aE.toLowerCase())?p(function(aH,aJ){var aG,aF=i(aH,aD),aI=aF.length;while(aI--){aG=j.call(aH,aF[aI]);aH[aG]=!(aJ[aG]=aF[aI])}}):function(aF){return i(aF,0,e)}}return i}},pseudos:{not:p(function(e){var i=[],aD=[],aE=ab(e.replace(x,"$1"));return aE[ap]?p(function(aG,aL,aJ,aH){var aK,aF=aE(aG,null,aH,[]),aI=aG.length;while(aI--){if((aK=aF[aI])){aG[aI]=!(aL[aI]=aK)}}}):function(aH,aG,aF){i[0]=aH;aE(i,null,aF,aD);return !aD.pop()}}),has:p(function(e){return function(i){return B(e,i).length>0}}),contains:p(function(e){return function(i){return(i.textContent||i.innerText||M(i)).indexOf(e)>-1}}),lang:p(function(e){if(!Z.test(e||"")){B.error("unsupported lang: "+e)}e=e.replace(y,ak).toLowerCase();return function(aD){var i;do{if((i=an?aD.lang:aD.getAttribute("xml:lang")||aD.getAttribute("lang"))){i=i.toLowerCase();return i===e||i.indexOf(e+"-")===0}}while((aD=aD.parentNode)&&aD.nodeType===1);return false}}),target:function(e){var i=av.location&&av.location.hash;return i&&i.slice(1)===e.id},root:function(e){return e===u},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var i=e.nodeName.toLowerCase();return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return !t.pseudos.empty(e)},header:function(e){return r.test(e.nodeName)},input:function(e){return h.test(e.nodeName)},button:function(i){var e=i.nodeName.toLowerCase();return e==="input"&&i.type==="button"||e==="button"},text:function(i){var e;return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()==="text")},first:am(function(){return[0]}),last:am(function(e,i){return[i-1]}),eq:am(function(e,aD,i){return[i<0?i+aD:i]}),even:am(function(e,aE){var aD=0;for(;aD<aE;aD+=2){e.push(aD)}return e}),odd:am(function(e,aE){var aD=1;for(;aD<aE;aD+=2){e.push(aD)}return e}),lt:am(function(e,aF,aE){var aD=aE<0?aE+aF:aE;for(;--aD>=0;){e.push(aD)}return e}),gt:am(function(e,aF,aE){var aD=aE<0?aE+aF:aE;for(;++aD<aF;){e.push(aD)}return e})}};t.pseudos.nth=t.pseudos.eq;for(D in {radio:true,checkbox:true,file:true,password:true,image:true}){t.pseudos[D]=C(D)}for(D in {submit:true,reset:true}){t.pseudos[D]=g(D)}function aa(){}aa.prototype=t.filters=t.pseudos;t.setFilters=new aa();n=B.tokenize=function(aF,aK){var i,aG,aI,aJ,aH,aD,e,aE=ao[aF+" "];if(aE){return aK?0:aE.slice(0)}aH=aF;aD=[];e=t.preFilter;while(aH){if(!i||(aG=A.exec(aH))){if(aG){aH=aH.slice(aG[0].length)||aH}aD.push((aI=[]))}i=false;if((aG=G.exec(aH))){i=aG.shift();aI.push({value:i,type:aG[0].replace(x," ")});aH=aH.slice(i.length)}for(aJ in t.filter){if((aG=ah[aJ].exec(aH))&&(!e[aJ]||(aG=e[aJ](aG)))){i=aG.shift();aI.push({value:i,type:aJ,matches:aG});aH=aH.slice(i.length)}}if(!i){break}}return aK?aH.length:aH?B.error(aF):ao(aF,aD).slice(0)};function o(aF){var aE=0,aD=aF.length,e="";for(;aE<aD;aE++){e+=aF[aE].value}return e}function w(aF,aD,aE){var e=aD.dir,aG=aE&&e==="parentNode",i=aj++;return aD.first?function(aJ,aI,aH){while((aJ=aJ[e])){if(aJ.nodeType===1||aG){return aF(aJ,aI,aH)}}}:function(aL,aJ,aI){var aM,aK,aH=[az,i];if(aI){while((aL=aL[e])){if(aL.nodeType===1||aG){if(aF(aL,aJ,aI)){return true}}}}else{while((aL=aL[e])){if(aL.nodeType===1||aG){aK=aL[ap]||(aL[ap]={});if((aM=aK[e])&&aM[0]===az&&aM[1]===i){return(aH[2]=aM[2])}else{aK[e]=aH;if((aH[2]=aF(aL,aJ,aI))){return true}}}}}}}function aB(e){return e.length>1?function(aG,aF,aD){var aE=e.length;while(aE--){if(!e[aE](aG,aF,aD)){return false}}return true}:e[0]}function E(aD,aG,aF){var aE=0,e=aG.length;for(;aE<e;aE++){B(aD,aG[aE],aF)}return aF}function af(e,aD,aE,aF,aI){var aG,aL=[],aH=0,aJ=e.length,aK=aD!=null;for(;aH<aJ;aH++){if((aG=e[aH])){if(!aE||aE(aG,aF,aI)){aL.push(aG);if(aK){aD.push(aH)}}}}return aL}function m(aD,i,aF,aE,aG,e){if(aE&&!aE[ap]){aE=m(aE)}if(aG&&!aG[ap]){aG=m(aG,e)}return p(function(aR,aO,aJ,aQ){var aT,aP,aL,aK=[],aS=[],aI=aO.length,aH=aR||E(i||"*",aJ.nodeType?[aJ]:aJ,[]),aM=aD&&(aR||!i)?af(aH,aK,aD,aJ,aQ):aH,aN=aF?aG||(aR?aD:aI||aE)?[]:aO:aM;if(aF){aF(aM,aN,aJ,aQ)}if(aE){aT=af(aN,aS);aE(aT,[],aJ,aQ);aP=aT.length;while(aP--){if((aL=aT[aP])){aN[aS[aP]]=!(aM[aS[aP]]=aL)}}}if(aR){if(aG||aD){if(aG){aT=[];aP=aN.length;while(aP--){if((aL=aN[aP])){aT.push((aM[aP]=aL))}}aG(null,(aN=[]),aT,aQ)}aP=aN.length;while(aP--){if((aL=aN[aP])&&(aT=aG?j.call(aR,aL):aK[aP])>-1){aR[aT]=!(aO[aT]=aL)}}}}else{aN=af(aN===aO?aN.splice(aI,aN.length):aN);if(aG){aG(null,aO,aN,aQ)}else{b.apply(aO,aN)}}})}function aq(aI){var aD,aG,aE,aH=aI.length,aL=t.relative[aI[0].type],aM=aL||t.relative[" "],aF=aL?1:0,aJ=w(function(i){return i===aD},aM,true),aK=w(function(i){return j.call(aD,i)>-1},aM,true),e=[function(aO,aN,i){return(!aL&&(i||aN!==aC))||((aD=aN).nodeType?aJ(aO,aN,i):aK(aO,aN,i))}];for(;aF<aH;aF++){if((aG=t.relative[aI[aF].type])){e=[w(aB(e),aG)]}else{aG=t.filter[aI[aF].type].apply(null,aI[aF].matches);if(aG[ap]){aE=++aF;for(;aE<aH;aE++){if(t.relative[aI[aE].type]){break}}return m(aF>1&&aB(e),aF>1&&o(aI.slice(0,aF-1).concat({value:aI[aF-2].type===" "?"*":""})).replace(x,"$1"),aG,aF<aE&&aq(aI.slice(aF,aE)),aE<aH&&aq((aI=aI.slice(aE))),aE<aH&&o(aI))}e.push(aG)}}return aB(e)}function ad(aE,aD){var e=aD.length>0,aF=aE.length>0,i=function(aP,aJ,aO,aN,aS){var aK,aL,aQ,aU=0,aM="0",aG=aP&&[],aV=[],aT=aC,aI=aP||aF&&t.find.TAG("*",aS),aH=(az+=aT==null?1:Math.random()||0.1),aR=aI.length;if(aS){aC=aJ!==H&&aJ}for(;aM!==aR&&(aK=aI[aM])!=null;aM++){if(aF&&aK){aL=0;while((aQ=aE[aL++])){if(aQ(aK,aJ,aO)){aN.push(aK);break}}if(aS){az=aH}}if(e){if((aK=!aQ&&aK)){aU--}if(aP){aG.push(aK)}}}aU+=aM;if(e&&aM!==aU){aL=0;while((aQ=aD[aL++])){aQ(aG,aV,aJ,aO)}if(aP){if(aU>0){while(aM--){if(!(aG[aM]||aV[aM])){aV[aM]=at.call(aN)}}}aV=af(aV)}b.apply(aN,aV);if(aS&&!aP&&aV.length>0&&(aU+aD.length)>1){B.uniqueSort(aN)}}if(aS){az=aH;aC=aT}return aG};return e?p(i):i}ab=B.compile=function(e,aE){var aF,aD=[],aH=[],aG=L[e+" "];if(!aG){if(!aE){aE=n(e)}aF=aE.length;while(aF--){aG=aq(aE[aF]);if(aG[ap]){aD.push(aG)}else{aH.push(aG)}}aG=L(e,ad(aH,aD));aG.selector=e}return aG};ax=B.select=function(aE,e,aF,aI){var aG,aL,aD,aM,aJ,aK=typeof aE==="function"&&aE,aH=!aI&&n((aE=aK.selector||aE));aF=aF||[];if(aH.length===1){aL=aH[0]=aH[0].slice(0);if(aL.length>2&&(aD=aL[0]).type==="ID"&&ay.getById&&e.nodeType===9&&an&&t.relative[aL[1].type]){e=(t.find.ID(aD.matches[0].replace(y,ak),e)||[])[0];if(!e){return aF}else{if(aK){e=e.parentNode}}aE=aE.slice(aL.shift().value.length)}aG=ah.needsContext.test(aE)?0:aL.length;while(aG--){aD=aL[aG];if(t.relative[(aM=aD.type)]){break}if((aJ=t.find[aM])){if((aI=aJ(aD.matches[0].replace(y,ak),ag.test(aL[0].type)&&Y(e.parentNode)||e))){aL.splice(aG,1);aE=aI.length&&o(aL);if(!aE){b.apply(aF,aI);return aF}break}}}}(aK||ab(aE,aH))(aI,e,!an,aF,ag.test(aE)&&Y(e.parentNode)||e);return aF};ay.sortStable=ap.split("").sort(J).join("")===ap;ay.detectDuplicates=!!ac;ae();ay.sortDetached=l(function(e){return e.compareDocumentPosition(H.createElement("div"))&1});if(!l(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild.getAttribute("href")==="#"})){aA("type|href|height|width",function(i,e,aD){if(!aD){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)}})}if(!ay.attributes||!l(function(e){e.innerHTML="<input/>";e.firstChild.setAttribute("value","");return e.firstChild.getAttribute("value")===""})){aA("value",function(i,e,aD){if(!aD&&i.nodeName.toLowerCase()==="input"){return i.defaultValue}})}if(!l(function(e){return e.getAttribute("disabled")==null})){aA(c,function(i,e,aE){var aD;if(!aE){return i[e]===true?e.toLowerCase():(aD=i.getAttributeNode(e))&&aD.specified?aD.value:null}})}if(typeof define==="function"&&define.amd){define(function(){return B})}else{if(typeof module!=="undefined"&&module.exports){module.exports=B}else{av.Sizzle=B}}})(window);


//watch.js
"use strict";(function(a){if(typeof exports==="object"){module.exports=a()}else{if(typeof define==="function"&&define.amd){define(a)}else{window.WatchJS=a();window.watch=window.WatchJS.watch;window.unwatch=window.WatchJS.unwatch;window.callWatchers=window.WatchJS.callWatchers}}}(function(){var p={noMore:false},k=[];var b=function(z){var A={};return z&&A.toString.call(z)=="[object Function]"};var g=function(z){return z%1===0};var n=function(z){return Object.prototype.toString.call(z)==="[object Array]"};var e=function(A,z){var E=[],D=[];if(!(typeof A=="string")&&!(typeof z=="string")){if(n(A)){for(var C=0;C<A.length;C++){if(z[C]===undefined){E.push(C)}}}else{for(var C in A){if(A.hasOwnProperty(C)){if(z[C]===undefined){E.push(C)}}}}if(n(z)){for(var B=0;B<z.length;B++){if(A[B]===undefined){D.push(B)}}}else{for(var B in z){if(z.hasOwnProperty(B)){if(A[B]===undefined){D.push(B)}}}}}return{added:E,removed:D}};var u=function(A){if(null==A||"object"!=typeof A){return A}var B=A.constructor();for(var z in A){B[z]=A[z]}return B};var r=function(E,B,z,F){try{Object.observe(E[B],function(G){F(G)})}catch(D){try{Object.defineProperty(E,B,{get:z,set:F,enumerable:true,configurable:true})}catch(C){try{Object.prototype.__defineGetter__.call(E,B,z);Object.prototype.__defineSetter__.call(E,B,F)}catch(A){throw new Error("watchJS error: browser not supported :/")}}}};var i=function(C,B,A){try{Object.defineProperty(C,B,{enumerable:false,configurable:true,writable:false,value:A})}catch(z){C[B]=A}};var q=function(){if(b(arguments[1])){l.apply(this,arguments)}else{if(n(arguments[1])){m.apply(this,arguments)}else{y.apply(this,arguments)}}};var l=function(D,z,F,C){if((typeof D=="string")||(!(D instanceof Object)&&!n(D))){return}var B=[];if(n(D)){for(var E=0;E<D.length;E++){B.push(E)}}else{for(var A in D){if(D.hasOwnProperty(A)){B.push(A)}}}m(D,B,z,F,C);if(C){x(D,"$$watchlengthsubjectroot",z,F)}};var m=function(C,B,z,E,A){if((typeof C=="string")||(!(C instanceof Object)&&!n(C))){return}for(var D in B){if(B.hasOwnProperty(D)){y(C,B[D],z,E,A)}}};var y=function(B,D,z,C,A){if((typeof B=="string")||(!(B instanceof Object)&&!n(B))){return}if(b(B[D])){return}if(B[D]!=null&&(C===undefined||C>0)){l(B[D],z,C!==undefined?C-1:C)}s(B,D,z,C);if(A&&(C===undefined||C>0)){x(B,D,z,C)}};var o=function(){if(b(arguments[1])){f.apply(this,arguments)}else{if(n(arguments[1])){j.apply(this,arguments)}else{t.apply(this,arguments)}}};var f=function(C,z){if(C instanceof String||(!(C instanceof Object)&&!n(C))){return}var B=[];if(n(C)){for(var D=0;D<C.length;D++){B.push(D)}}else{for(var A in C){if(C.hasOwnProperty(A)){B.push(A)}}}j(C,B,z)};var j=function(C,B,z){for(var A in B){if(B.hasOwnProperty(A)){t(C,B[A],z)}}};var s=function(C,G,A,F){var D=C[G];d(C,G);if(!C.watchers){i(C,"watchers",{})}if(!C.watchers[G]){C.watchers[G]=[]}for(var B=0;B<C.watchers[G].length;B++){if(C.watchers[G][B]===A){return}}C.watchers[G].push(A);var z=function(){return D};var E=function(I){var H=D;D=I;if(F!==0&&C[G]){l(C[G],A,(F===undefined)?F:F-1)}d(C,G);if(!p.noMore){if(H!==I){c(C,G,"set",I,H);p.noMore=false}}};r(C,G,z,E)};var c=function(D,E,C,B,A){if(E){for(var z=0;z<D.watchers[E].length;z++){D.watchers[E][z].call(D,E,C,B,A)}}else{for(var E in D){if(D.hasOwnProperty(E)){c(D,E,C,B,A)}}}};var h=["pop","push","reverse","shift","sort","slice","unshift"];var a=function(B,C,A,z){i(B[C],z,function(){var D=A.apply(B[C],arguments);y(B,B[C]);if(z!=="slice"){c(B,C,z,arguments)}return D})};var d=function(B,C){if((!B[C])||(B[C] instanceof String)||(!n(B[C]))){return}for(var A=h.length,z;A--;){z=h[A];a(B,C,B[C][z],z)}};var t=function(C,D,A){for(var B=0;B<C.watchers[D].length;B++){var z=C.watchers[D][B];if(z==A){C.watchers[D].splice(B,1)}}w(C,D,A)};var v=function(){for(var B=0;B<k.length;B++){var z=k[B];if(z.prop==="$$watchlengthsubjectroot"){var C=e(z.obj,z.actual);if(C.added.length||C.removed.length){if(C.added.length){m(z.obj,C.added,z.watcher,z.level-1,true)}z.watcher.call(z.obj,"root","differentattr",C,z.actual)}z.actual=u(z.obj)}else{var C=e(z.obj[z.prop],z.actual);if(C.added.length||C.removed.length){if(C.added.length){for(var A=0;A<z.obj.watchers[z.prop].length;A++){m(z.obj[z.prop],C.added,z.obj.watchers[z.prop][A],z.level-1,true)}}c(z.obj,z.prop,"differentattr",C,z.actual)}z.actual=u(z.obj[z.prop])}}};var x=function(A,D,z,C){var B;if(D==="$$watchlengthsubjectroot"){B=u(A)}else{B=u(A[D])}k.push({obj:A,prop:D,actual:B,watcher:z,level:C})};var w=function(C,D,A){for(var B=0;B<k.length;B++){var z=k[B];if(z.obj==C&&z.prop==D&&z.watcher==A){k.splice(B,1)}}};setInterval(v,50);p.watch=q;p.unwatch=o;p.callWatchers=c;return p}));

	



	/*--------------------------------------------------------
	|  class Relationship
	*---------------------------------------------------------
	|
	|
	|  Constructor : function(elem, val)
	|
	|	@var
	|		elem - Mustang object
	|		val  - Initial value for element
	|
	|	Binds a specific Mustang element/object to a variable within a returned interface
	|
	|
	*/


	// Relationship class
	var Relationship = function(elem, val)
	{
		this.elem = elem;
		if(val == null)
		{
			if(this.elem.getType() == "form")
			{
				this.model = this.elem.getValue();
			}
			else if(this.elem.getType() == "block")
			{
				this.model = this.elem.getContent();
			}
		}
		else
		{
			this.model   = val;
		}

		// on change of model property, update dom
		this.watch(this, 'model', function(){
			this.update();
		});


		if(this.elem.getType() == "form")
		{
			this.update = function()
			{
				//update a form elem's value
				this.elem.setValue(this.model);
			};
		} 
		else
		{
			this.update = function()
			{
				//updating a block elem's content
				this.elem.setContent(this.model);
			};
		}

		this.elem.elem.addEventListener("change", this, false);
		this.elem.elem.addEventListener("keyup", this, false);

		this.update();

		
	}

	Relationship.prototype.handleEvent = function(event)
	{
		event.stopPropagation();
		event.preventDefault();
		if(event.type == "change" || event.type == "keyup")
		{
			// updates model
			this.model = this.elem.getValue();
		}
	};


	Relationship.prototype.setModel = function(val)
	{
		this.model = val;
	};

	Relationship.prototype.set = function(val)
	{
		this.model = val;
	};

	Relationship.prototype.update = function()
	{
		// empty function
	};

	Relationship.prototype.toJson = function()
	{
		var obj = {};
		obj.value = this.model;
		return obj;
	};


	/*--------------------------------------------------------
	|  class CollectionRelationship
	*---------------------------------------------------------
	|
	|
	|  Constructor : function( arr {mustangCollection}, arr vals)
	|
	|	@var
	|		mustangCollection - a MustangCollection object with more than 1 element
	|		vals - array of vals to initiate the collection to
	|
	|	Binds a MustangCollection of elements to one large interface used for modifying or getting the data.
	|
	|
	*/

	var CollectionRelationship = function(coll, vals)
	{
		this.elems = coll;
		this.rel = [];

		if(vals == null)
		{
			// no vals
			for(var i = 0; i < coll.length; i++)
			{
				this.rel.push(new Relationship(this.elems[i]));
			}
		}
		else if(coll.length !== vals.length)
		{
			console.log("MustangCollection being binded does not have same number of elements as initial values passed as argument ~ Unexpected behavior may occur.");
			for(var i = 0; i < coll.length; i++)
			{
				this.rel.push(new Relationship(this.elems[i], vals[i]));
			}
		}
		else
		{
			for(var i = 0; i < coll.length; i++)
			{
				this.rel.push(new Relationship(this.elems[i], vals[i]));
			}
		}
	};

	CollectionRelationship.prototype.atIndex = function(i)
	{
		return this.rel[i];
	};


	CollectionRelationship.prototype.toJson = function()
	{
		var tmp = [];
		for(var i = 0; i < this.rel.length; i++)
		{
			tmp.push({"value" : this.rel[i].model});						
		}
		return tmp;
	};

	/*--------------------------------------------------------
	|  class FormRelationship
	*---------------------------------------------------------
	|
	|
	|  Constructor : function( arr {mustangCollection}, arr vals)
	|
	|	@var
	|		mustangCollection - a MustangCollection object with more than 1 element
	|		vals - array of vals to initiate the collection to
	|
	|	Binds a MustangCollection of elements to one large interface used for modifying or getting the data.
	|
	|
	*/

	var FormRelationship = function(data)
	{
		this.elems = data;
	};

	FormRelationship.prototype.toJson = function()
	{
		var obj = {};
		for(var i = 0; i < this.elems.length; i++)
		{
			obj[this.elems[i].elem.elem.name] = this.elems[i].model;
		}
		return obj;
	};


	/*--------------------------------------------------------
	|  class MustangCollection
	*---------------------------------------------------------
	|
	|
	|  Constructor : function(elems)
	|
	|	@var
	|		elems - Mustang objects
	|		
	|
	|	Creates a collection of Mustang objects
	|
	|
	*/



	var MustangCollection = function(elems)
	{
		this.elems = [];
		for(var i =0; i < elems.length; i++)
		{
			this.elems.push(new Mustang(elems[i]));
		}
	};

	/*
		array getContent

		 * @var 
		 *
		 * @return array of contents, in order of elements in elem array
	*/

	// sets getContent for entire array, returns array of content of each element in array
	MustangCollection.prototype.getContent = function()
	{
		var content = [];

		for(var i = 0; i < this.elems.length; i++)
		{
			content.push(this.elems[i].getContent());
		}
		
		return content;
	};

	/*
		array setContent

		 * @var mixed content
		 *
		 * @return bool
	*/


	// sets setContent for entire array, returns bool
	MustangCollection.prototype.setContent = function(content)
	{
		if(Array.isArray(content))
		{

			for(var i = 0; i < this.elems.length; i++)
			{
				this.elems[i].setContent(content[i]);
			}
			return this;
		}

		for(var i = 0; i < this.elems.length; i++)
		{
			this.elems[i].setContent(content);
		}
		
		return this;
	};

	/*
		array first

		 * @var 
		 *
		 * @return first element of matched elements
	*/

	MustangCollection.prototype.first = function()
	{
		return this.elems[0];
	};

	/*
		array last

		 * @var 
		 *
		 * @return last element of matched elements
	*/
	
	MustangCollection.prototype.last = function()
	{
		var len = this.elems.length;
		return this.elems[len-1];
		
	};

	/*
		array find

		 * @var int
		 *
		 * @return element at position in array at int parameter
	*/
	
	MustangCollection.prototype.find = function(i)
	{
		if(this.elems[i] === undefined)
		{
			console.log("There is no element at position " + i + " in array of elements.");
			return this;
		}
		else
		{
			return this.elems[i];
		}
	};

	/*
		array even

		 * @var 
		 *
		 * @return array of all even elements
	*/
	
	MustangCollection.prototype.find = function(i)
	{
		if(this.elems[i] === undefined)
		{
			console.log("There is no element at position " + i + " in array of elements.");
			return this;
		}
		else
		{
			return this.elems[i];
		}
	};

	/*
		array getType

		 * @var 
		 *
		 * @return string represnting either any form (input) element or block element
	*/

	MustangCollection.prototype.getType = function(i)
	{
		
		var types = [];


		for(var i = 0; i < this.elems.length; i++)
		{
			switch(this.elems[0].elem.tagName.toLowerCase())
			{
				case "input":
				case "textarea":
				case "select":
					types.push("form"); // push into array
					break;
				default:
					types.push("block"); // push into array
					break;
			}
		}

		return types;
		
	};

	/*
		bool toJson

		 * @var 
		 *
		 * @return array of json object
	*/

	MustangCollection.prototype.toJson = function()
	{
		var arr = [];

		for(var i = 0; i < this.elems.length; i++)
		{
			var temp = {};

			if(this.find(i).getType() == "form")
			{
				temp.value = this.find(i).getValue();
			}
			else
			{
				temp.value = this.find(i).getContent();
			}
			arr.push(temp);
		}


		return JSON.stringify(arr);
	};

	
	MustangCollection.prototype.bindAll = function(vals)
	{
		
		if(typeof vals == "undefined")
		{
			vals = null;
		}
		
		var obj = new CollectionRelationship(this.elems, vals);

		return obj;
	};


	MustangCollection.prototype.bindForm = function(val)
	{
		var arr = [];
		if(typeof val == "undefined")
		{
			// not passing json object for initial value
			val = null;
			for(var i = 0; i < this.elems.length; i++) 
			{
				if(this.elems[i].getType() != "form" || this.elems[i].elem.type == "submit")
				{
					continue;
				}
				arr.push(new Relationship(this.elems[i], val));
			}
		}
		else
		{
			for(var i = 0; i < this.elems.length; i++) 
			{
				if(this.elems[i].getType() != "form" || this.elems[i].elem.type == "submit")
				{
					continue;
				}
				arr.push(new Relationship(this.elems[i], val[this.elems[i].elem.name]));
			}
		}
		return new FormRelationship(arr);
	};

	
	MustangCollection.prototype.click = function(func)
	{
		this.clickHandler = func;
		for(var i = 0; i < this.elems.length; i++)
		{
			this.elems[i].elem.addEventListener("click", this, false);
		}
	};

	MustangCollection.prototype.type = function(func) 
	{
		for(var i =0; i < this.elems.length; i++)
		{
			if(this.elems[i].getType() !== "form")
			{
				console.log("Can't register a function on the type of a MustangCollection that contains non-input elements.");
				return;
			}
		}
		

		this.mustangTypeHandler = func;
		

		for(var i = 0; i < this.elems.length; i++)
		{
			this.elems[i].elem.addEventListener("mustangType", this, false);


			this.elems[i].elem.addEventListener("keyup", function(){
				var ev = new Event("mustangType");
				this.dispatchEvent(ev);
			}, false);
			
		}
		
		
		return this;
	};

	MustangCollection.prototype.handleEvent = function(e)
	{
		e.stopPropagation();
		e.preventDefault();

		if(e.type == "click")
		{
			this.clickHandler.call(e.target);
		}

		if(e.type == "mustangType")
		{
			this.mustangTypeHandler.call(e.target);
		}
	};

	MustangCollection.prototype.getOdds = function()
	{
		var arr = [];
		for(var i = 0; i < this.elems.length; i += 2)
		{
			arr.push(this.elems[i]);
		}
		return new MustangCollection(arr);
	};

	MustangCollection.prototype.getEvens = function()
	{
		var arr = [];
		for(var i = 1; i < this.elems.length; i += 2)
		{
			arr.push(this.elems[i]);
		}
		return new MustangCollection(arr);
	};

	MustangCollection.prototype.foreach = function(func)
	{
		this.foreachHandler = func;
		for(var i = 0; i < this.elems.length; i++)
		{
			this.foreachHandler.call(this,i);
		}
	};

	MustangCollection.prototype.log = function()
	{
		console.log(this);
	};

		

	/*--------------------------------------------------------
	|  class Mustang
	*---------------------------------------------------------
	|
	|
	|  Constructor : function(string)
	|
	|	@var
	|		string - CSS selector
	|		
	|
	|	Creates a Mustang object
	|
	|
	*/

	var Mustang = function(selector)
	{

		if(typeof selector === "string")
		{
			this.elem = Sizzle(selector);
		} 
		else
		{
			this.elem = selector;
		}

		// if only one element found, disregard array, and return only that element
		if(this.elem.length === 1)
		{
			if(this.elem[0].nodeName.toLowerCase() == "option")
			{
				this.elem = this.elem[0].parentNode;
			} 
			else
			{
				this.elem = this.elem[0];
			}
		}
		
		if(this.elem.length > 1)
		{
			if(this.elem[0].nodeName.toLowerCase() == "option")
			{
				this.elem = this.elem[0].parentNode;
				return;
			} 

			var collection = new MustangCollection(this.elem);

			return collection;
		}	
	
	};

	/*
		mixed getContent

		 * @var 
		 *
		 * @return array of contents, in order of elements in elem array
	*/

	// sets getContent for entire array, returns array of content of each element in array
	Mustang.prototype.getContent = function()
	{
		return this.elem.innerHTML;
	};

	
	/*
		object setContent

		 * @var mixed content
		 *
		 * @return this
	*/


	// sets setContent for entire array, returns bool
	Mustang.prototype.setContent = function(content)
	{
		
		this.elem.innerHTML = content;
		
		return this;
	};

	/*
		object setValue

		 * @var mixed content
		 *
		 * @return this
	*/


	// sets setContent for entire array, returns bool
	Mustang.prototype.setValue = function(content)
	{
		
		this.elem.value = content;
		
		return this;
	};

	/*
		object getValue

		 * @var 
		 *
		 * @return mixed
	*/


	// sets setContent for entire array, returns bool
	Mustang.prototype.getValue = function()
	{	
		return this.elem.value;
	};

	
	/*
		array getType

		 * @var 
		 *
		 * @return string represnting either any form (input) element or block element
	*/

	Mustang.prototype.getType = function(i)
	{

		switch(this.elem.tagName.toLowerCase())
		{
			case "input":
			case "textarea":
			case "select":
			case "form":
			case "radio":
				return "form"; 
				break;
			default:
				return "block"; 
				break;
		}

		return "block";
	};


	/*
		bool bindToVariable

		 * @var int value
		 *
		 * @return object, interface to element and var binding relationship
	*/

	Mustang.prototype.bindToVariable = function(val)
	{
		if(typeof val == "undefined")
		{
			val = null;
		}

		var obj = new Relationship(this, val);

		return obj;
	};

	/*
		bool toJson

		 * @var 
		 *
		 * @return json object
	*/

	Mustang.prototype.toJson = function()
	{
		var obj = {};

		obj.value;

		if(this.getType() == "form")
		{
			obj.value = this.getValue();
		}
		else
		{
			obj.value = this.getContent();
		}

		return JSON.stringify(obj);
	};

	

	Mustang.prototype.click = function(func)
	{
		this.clickHandler = func;
		this.elem.addEventListener("click", this, false);
	};

	Mustang.prototype.textCountdown = function(span, max)
	{
		
		this.elem.addEventListener("countdownKeyup", this, false);

		this.elem.addEventListener("keyup", function(){
			var ev = new Event("countdownKeyup");
			this.dispatchEvent(ev);
		}, false);
		
		if(typeof max == 'undefined')
		{
			this.countdownMax = this.elem.maxLength;
		}
		else
		{
			this.countdownMax = max;
		}

		this.textCountdownRemainder = new Mustang(span);
		
		return this;
	};

	Mustang.prototype.type = function(func)
	{
		if(this.getType() !== "form")
		{
			console.log("Can't register a function on the type of an element that is not an input.");
			return;
		}

		this.mustangTypeHandler = func;

		this.elem.addEventListener("mustangType", this, false);

		this.elem.addEventListener("keyup", function(){
			var ev = new Event("mustangType");
			this.dispatchEvent(ev);
		}, false);
		
		return this;
	};

	Mustang.prototype.handleEvent = function(e)
	{
		e.stopPropagation();
		e.preventDefault();

		if(e.type == "countdownKeyup")
		{
			var rem = this.elem.value.length + "/" + this.countdownMax;
			
			this.textCountdownRemainder.setContent(rem);
			
			return;
		}

		if(e.type == "click")
		{
			this.clickHandler.call(e.target);
		}

		if(e.type == "mustangType")
		{
			this.mustangTypeHandler.call(e.target);
		}

	};


	Mustang.prototype.addClass = function(str)
	{
		var classes = this.elem.className.split(" ");

		for(var i = 0; i < classes.length; i++)
		{
			if(classes[i] == str)
			{
				console.log(str + " is already a class on this element.");
				return this;
			}
		}

		this.elem.className += (" " + str);

		return this;
	}

	Mustang.prototype.removeClass = function(str)
	{
		var classes = this.elem.className.split(" ");

		var newStr = "";

		for(var i = 0; i < classes.length; i++)
		{
			if(classes[i] == str)
			{
				console.log(str + " needs be deleted.");
				continue;
			}
			if(i === 0)
			{
				newStr += classes[i];
				continue;
			}

			newStr += (" " + classes[i]);
		}

		this.elem.className = newStr;

		return this;
	}

	Mustang.prototype.log = function()
	{
		console.log(this);
	};


	
	CollectionRelationship.prototype.watch = window.watch;
	Relationship.prototype.watch = window.watch;
	Mustang.prototype.watch = window.watch;
	MustangCollection.prototype.watch = window.watch;




