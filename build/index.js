(()=>{"use strict";var e,t={183:()=>{const e=window.wp.blocks,t=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),a=window.wp.components,o=()=>(0,t.createElement)("div",{id:"il-toc-panel",className:"il-formatted","aria-labelledby":"il-toc-heading",tabIndex:"-1",role:"dialog","aria-hidden":"true",style:"display:none;"},(0,t.createElement)("div",{className:"il-toc-panel-content"},(0,t.createElement)("div",{className:"il-toc-panel-header"},(0,t.createElement)("h2",{id:"il-toc-heading"},"Table of Contents"),(0,t.createElement)("button",{type:"button",className:"il-toc-close-btn",title:"Close modal","aria-label":"Close modal"},(0,t.createElement)("span",{className:"il-icon"},"cancel"))),(0,t.createElement)("div",{className:"il-toc-panel-body"},(0,t.createElement)("nav",{id:"toc"})),(0,t.createElement)("div",{className:"il-toc-panel-footer"},(0,t.createElement)("button",{type:"button",className:"il-toc-close-btn il-button"},"Close")))),n=JSON.parse('{"u2":"create-block/il-table-of-contents"}'),i=[{save:()=>(0,t.createElement)("div",{...l.useBlockProps.save()},(0,t.createElement)("button",{type:"button",id:"toc-btn",class:"il-button il-blue","data-toggle":"modal","data-target":"#toc-modal"},"Table of Contents"),(0,t.createElement)(o,null))},{save({attributes:e}){const{justification:a,sticky:n}=e;return(0,t.createElement)("div",{...l.useBlockProps.save()},(0,t.createElement)("div",{id:"toc-btn-wrapper",className:`items-justified-${a} ${n?"toc-btn-sticky":""}`},(0,t.createElement)("button",{type:"button",id:"toc-btn",className:"il-button il-blue","data-toggle":"modal","data-target":"#toc-modal"},"Table of Contents")),(0,t.createElement)(o,null))}}];(0,e.registerBlockType)(n.u2,{edit:function({attributes:e,setAttributes:o}){const{justification:n,sticky:i}=e;return(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:"Button Position"},(0,t.createElement)(a.ToggleControl,{label:"Sticky",help:i?"Sticks to top of page on scroll":"Does not stick to top of page",checked:i,onChange:()=>{o({sticky:!i})}}))),(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(l.JustifyContentControl,{value:n,onChange:e=>{o({justification:e})}})),(0,t.createElement)("div",{id:"il-toc-btn-wrapper",className:`items-justified-${n}`},(0,t.createElement)("button",{type:"button",id:"il-toc-btn",className:"il-button il-blue",tabIndex:"0","data-toggle":"modal","data-target":"#toc-modal"},"Table of Contents")))},save:function({attributes:e}){const{justification:a,sticky:n}=e;return(0,t.createElement)("div",{...l.useBlockProps.save()},(0,t.createElement)("div",{id:"il-toc-btn-wrapper",className:`items-justified-${a} ${n?"toc-btn-sticky":""}`},(0,t.createElement)("button",{type:"button",id:"il-toc-btn",className:"il-button il-blue","data-toggle":"modal","data-target":"#toc-modal"},"Table of Contents")),(0,t.createElement)(o,null))},deprecated:i})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,o,n)=>{if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],n=e[d][2];for(var c=!0,s=0;s<l.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(c=!1,n<i&&(i=n));if(c){e.splice(d--,1);var r=o();void 0!==r&&(t=r)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,o,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,i=l[0],c=l[1],s=l[2],r=0;if(i.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var d=s(a)}for(t&&t(l);r<i.length;r++)n=i[r],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},l=self.webpackChunkil_table_of_contents=self.webpackChunkil_table_of_contents||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[431],(()=>a(183)));o=a.O(o)})();