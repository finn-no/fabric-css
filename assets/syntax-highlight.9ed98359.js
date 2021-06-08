var e=Object.defineProperty,o=(o,s,t)=>("symbol"!=typeof s&&(s+=""),s in o?e(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t);import{L as s,c as t,h as r,a as n,u as i}from"./vendor.88f48572.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(s){const t=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((s,n)=>{const i=new URL(e,t);if(self[o].moduleMap[i])return s(self[o].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${o}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){n(new Error(`Failed to import: ${e}`)),r(l)},onload(){s(self[o].moduleMap[i]),r(l)}});document.head.appendChild(l)})),self[o].moduleMap={}}}("/fabric-css/assets/");class a extends s{static get properties(){return{source:{attribute:!1}}}firstUpdated(){let e=this.shadowRoot.querySelector("slot").assignedElements().map((e=>e.outerHTML)).join("");e=r(e);const o=window.Prism.highlight(e,window.Prism.languages.markup,"html");this.source=o}render(){return n`
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
                integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                crossorigin="anonymous"
            />
            <div class="output">
                <slot></slot>
            </div>
            <pre><code>${i(this.source)}</code></pre>
        `}}o(a,"styles",t`
        :host {
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .output {
            padding: 16px;
            border: 3px solid #f6f8fa;
        }

        pre {
            background-color: rgb(246, 248, 250);
            font-family: Monaco, Ubuntu Mono, Consolas, monospace;
            font-size: 14px;
            margin: 0;
            padding: 16px;
        }
    `),customElements.define("code-example",a);class l extends s{static get properties(){return{source:{attribute:!1}}}firstUpdated(){let e=this.shadowRoot.querySelector("slot").assignedNodes().map((e=>e.nodeType===Node.TEXT_NODE?e.textContent:e.outerHTML)).join("").trim();e=r(e);const o=window.Prism.highlight(e,window.Prism.languages.markup,"html");this.source=o}render(){return n`
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
                integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                crossorigin="anonymous"
            />
            <slot></slot>
            <pre><code>${i(this.source)}</code></pre>
        `}}o(l,"styles",t`
        :host {
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        pre {
            background-color: var(--f-bluegray-50);
            font-family: Monaco, Ubuntu Mono, Consolas, monospace;
            font-size: 14px;
            margin: 0;
            padding: 16px;
        }

        slot {
            display: none;
        }
    `),customElements.define("syntax-highlight",l);
