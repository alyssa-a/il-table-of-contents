(()=>{"use strict";var e,t={513:()=>{const e=window.wp.blocks,t=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),a=()=>(0,t.createElement)("div",{class:"modal fade",id:"toc-modal",tabindex:"-1",role:"dialog","aria-labelledby":"toc-modal-label","aria-hidden":"true"},(0,t.createElement)("div",{class:"modal-dialog modal-dialog-slideout",role:"document"},(0,t.createElement)("div",{class:"modal-content"},(0,t.createElement)("div",{class:"modal-header"},(0,t.createElement)("h2",{class:"modal-title",id:"toc-modal-label"},"Table of Contents"),(0,t.createElement)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},(0,t.createElement)("span",{"aria-hidden":"true"},"×"))),(0,t.createElement)("div",{class:"modal-body"},(0,t.createElement)("nav",{id:"toc"})),(0,t.createElement)("div",{class:"modal-footer"},(0,t.createElement)("button",{type:"button",class:"il-button il-blue","data-dismiss":"modal"},"Close"))))),o=JSON.parse('{"u2":"create-block/il-table-of-contents"}');(0,e.registerBlockType)(o.u2,{edit:function(){return(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)("button",{type:"button",id:"toc-btn",class:"il-button il-blue","data-toggle":"modal","data-target":"#toc-modal"},"Table of Contents"),(0,t.createElement)(a,null))},save:function(){return(0,t.createElement)("div",{...l.useBlockProps.save()},(0,t.createElement)("button",{type:"button",id:"toc-btn",class:"il-button il-blue","data-toggle":"modal","data-target":"#toc-modal"},"Table of Contents"),(0,t.createElement)(a,null))}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,o,n)=>{if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],o=e[c][1],n=e[c][2];for(var d=!0,i=0;i<l.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](l[i])))?l.splice(i--,1):(d=!1,n<r&&(r=n));if(d){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,o,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,r=l[0],d=l[1],i=l[2],s=0;if(r.some((t=>0!==e[t]))){for(o in d)a.o(d,o)&&(a.m[o]=d[o]);if(i)var c=i(a)}for(t&&t(l);s<r.length;s++)n=r[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},l=self.webpackChunkil_table_of_contents=self.webpackChunkil_table_of_contents||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[431],(()=>a(513)));o=a.O(o)})();