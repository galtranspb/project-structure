(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,,,,,,function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return d}));var n=s(11);function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class i{onThumbPointerDown(t){const e=t.target;t.preventDefault();const{left:s,right:n}=e.getBoundingClientRect();e===this.subElements.thumbLeft?this.shiftX=n-t.clientX:this.shiftX=s-t.clientX,this.dragging=e,this.element.classList.add("range-slider_dragging"),document.addEventListener("pointermove",this.onThumbPointerMove),document.addEventListener("pointerup",this.onThumbPointerUp)}constructor({min:t=100,max:e=200,formatValue:s=(t=>"$"+t),selected:n={from:t,to:e}}={}){a(this,"element",void 0),a(this,"subElements",{}),a(this,"onThumbPointerMove",t=>{t.preventDefault();const{left:e,right:s,width:n}=this.subElements.inner.getBoundingClientRect();if(this.dragging===this.subElements.thumbLeft){let s=(t.clientX-e+this.shiftX)/n;s<0&&(s=0),s*=100;const a=parseFloat(this.subElements.thumbRight.style.right);s+a>100&&(s=100-a),this.dragging.style.left=this.subElements.progress.style.left=s+"%",this.subElements.from.innerHTML=this.formatValue(this.getValue().from)}if(this.dragging===this.subElements.thumbRight){let e=(s-t.clientX-this.shiftX)/n;e<0&&(e=0),e*=100;const a=parseFloat(this.subElements.thumbLeft.style.left);a+e>100&&(e=100-a),this.dragging.style.right=this.subElements.progress.style.right=e+"%",this.subElements.to.innerHTML=this.formatValue(this.getValue().to)}}),a(this,"onThumbPointerUp",()=>{this.element.classList.remove("range-slider_dragging"),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp),this.element.dispatchEvent(new CustomEvent("range-select",{detail:this.getValue(),bubbles:!0}))}),this.min=t,this.max=e,this.formatValue=s,this.selected=n,this.render()}get template(){const{from:t,to:e}=this.selected;return`<div class="range-slider">\n      <span data-element="from">${this.formatValue(t)}</span>\n      <div data-element="inner" class="range-slider__inner">\n        <span data-element="progress" class="range-slider__progress"></span>\n        <span data-element="thumbLeft" class="range-slider__thumb-left"></span>\n        <span data-element="thumbRight" class="range-slider__thumb-right"></span>\n      </div>\n      <span data-element="to">${this.formatValue(e)}</span>\n    </div>`}render(){const t=document.createElement("div");t.innerHTML=this.template,this.element=t.firstElementChild,this.element.ondragstart=()=>!1,this.subElements=this.getSubElements(t),this.initEventListeners(),this.update()}getSubElements(t){return[...t.querySelectorAll("[data-element]")].reduce((t,e)=>(t[e.dataset.element]=e,t),{})}getValue(){const t=this.max-this.min,{left:e}=this.subElements.thumbLeft.style,{right:s}=this.subElements.thumbRight.style;return{from:Math.round(this.min+.01*parseFloat(e)*t),to:Math.round(this.max-.01*parseFloat(s)*t)}}update(){const t=this.max-this.min,e=Math.floor((this.selected.from-this.min)/t*100)+"%",s=Math.floor((this.max-this.selected.to)/t*100)+"%";this.subElements.progress.style.left=e,this.subElements.progress.style.right=s,this.subElements.thumbLeft.style.left=e,this.subElements.thumbRight.style.right=s}reset(){this.selected.from=this.min,this.selected.to=this.max,this.update(),this.subElements.from.innerHTML=this.formatValue(this.getValue().from),this.subElements.to.innerHTML=this.formatValue(this.getValue().to)}initEventListeners(){const{thumbLeft:t,thumbRight:e}=this.subElements;t.addEventListener("pointerdown",t=>this.onThumbPointerDown(t)),e.addEventListener("pointerdown",t=>this.onThumbPointerDown(t))}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp)}}var r=s(10);var l=[{id:"images",title:"Image",sortable:!1,template:t=>`\n          <div class="sortable-table__cell">\n            <img class="sortable-table-image" alt="Image" src="${t[0].url}">\n          </div>\n        `},{id:"title",title:"Name",sortable:!0,sortType:"string"},{id:"subcategory",title:"Category",sortable:!1,template:t=>`<div class="sortable-table__cell">${t.title}</div>`},{id:"quantity",title:"Quantity",sortable:!0,sortType:"number"},{id:"price",title:"Price",sortable:!0,sortType:"number",template:t=>`<div class="sortable-table__cell">$${Object(r.a)(t,",")}</div>`},{id:"status",title:"Status",sortable:!0,sortType:"number",template:t=>`<div class="sortable-table__cell">\n          ${t>0?"Active":"Inactive"}\n        </div>`}];s(9);function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class d{constructor(){o(this,"element",void 0),o(this,"subElements",{}),o(this,"components",{}),o(this,"onResetPointerdown",()=>{this.subElements.filterName.value="",this.subElements.filterStatus.value="",this.components.doubleSlider.reset(),this.updateComponents()}),o(this,"updateComponents",async()=>{const t=this.components.sortableTable,e=await t.loadData(this.params);t.update(e)})}get template(){return'\n\t\t\t<div class="products-list">\n\t\t\t\t<div class="content__top-panel">\n\t\t\t\t\t<h1 class="page-title">Products</h1>\n\t\t\t\t\t<a href="/products/add" class="button-primary">Add product</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="content-box content-box_small">\n\t\t\t\t\t<form class="form-inline">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t  <label class="form-label">Sort by:</label>\n            \t<input type="text" data-element="filterName" class="form-control" placeholder="Product name">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div data-element="doubleSlider" class="form-group">\n              <label class="form-label">Price:</label>\n            </div>\n\n\t\t\t\t\t\t<div class="form-group">\n            \t<label class="form-label">Status:</label>\n            \t<select class="form-control" data-element="filterStatus">\n              \t<option value="" selected="">Any</option>\n              \t<option value="1">Active</option>\n              \t<option value="0">Inactive</option>\n            \t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\t\t\t\t<div data-element="sortableTable" class="products-list__container"></div>\n\t\t\t</div>\n\t\t'}render(){const t=document.createElement("div");return t.innerHTML=this.template,this.element=t.firstElementChild,this.subElements=this.getSubElements(this.element),this.initComponents(),this.renderComponents(),this.initEventListeners(),this.element}getSubElements(t){return[...t.querySelectorAll("[data-element]")].reduce((t,e)=>(t[e.dataset.element]=e,t),{})}initComponents(){const t=new n.a(l,{url:"api/rest/products?_embed=subcategory.category"}),e=new i({min:0,max:4e3});this.components={sortableTable:t,doubleSlider:e}}renderComponents(){for(const[t,e]of Object.entries(this.components)){this.subElements[t].append(e.element)}}initEventListeners(){this.components.sortableTable.subElements.reset.addEventListener("pointerdown",this.onResetPointerdown),this.subElements.doubleSlider.addEventListener("range-select",this.updateComponents),this.subElements.filterName.addEventListener("input",this.updateComponents),this.subElements.filterStatus.addEventListener("input",this.updateComponents)}get params(){const t=this.subElements.filterName.value,e=this.subElements.filterStatus.value,s={price_gte:this.components.doubleSlider.getValue().from,price_lte:this.components.doubleSlider.getValue().to};return t&&(s.title_like=t),e.length&&(s.status=e),s}remove(){this.element.remove()}destroy(){for(const t of Object.values(this.components))t.destroy();this.remove()}}},,,function(t,e,s){"use strict";e.a=async function(t,e){let s,a;try{s=await fetch(t.toString(),e)}catch(t){throw new n(s,"Network error has occurred.")}if(!s.ok){let t=s.statusText;try{a=await s.json(),t=a.error&&a.error.message||a.data&&a.data.error&&a.data.error.message||t}catch(t){}let e=`Error ${s.status}: ${t}`;throw new n(s,a,e)}try{return await s.json()}catch(t){throw new n(s,null,t.message)}};class n extends Error{constructor(t,e,s){var n,a,i;super(s),i="FetchError",(a="name")in(n=this)?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,this.response=t,this.body=e}}window.addEventListener("unhandledrejection",t=>{t.reason instanceof n&&alert(t.reason.message)})},function(t,e,s){"use strict";e.a=function(t,e){const s=String(t).split("");return s.length>3&&s.length<=6?s.splice(-3,0,e):s.length>6&&(s.splice(-3,0,e),s.splice(-7,0,e)),""+s.join("")}},function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s(9);function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class i{constructor(t=[],{url:e="",step:s=30,start:n=0,isSortLocally:i=!1}={}){a(this,"element",void 0),a(this,"subElements",{}),a(this,"data",[]),a(this,"sortParams",{}),a(this,"filterParams",{}),a(this,"isSortLocally",!1),a(this,"isRequestSend",!1),a(this,"onHeaderPointerdown",async t=>{const e=t.target.closest(".sortable-table__cell"),{id:s,order:n,sortable:a}=e.dataset;if("false"===a)return;const i={asc:"desc",desc:"asc"};e.dataset.order=i[n],e.append(this.subElements.arrow),this.sortParams._sort=s,this.sortParams._order=i[n],this.isSortLocally?this.sort(this.sortParams._sort,this.sortParams._order):this.sortOnServer()}),a(this,"onDocumentScroll",async()=>{if(this.isRequestSend||this.isSortLocally)return;const{bottom:t}=document.documentElement.getBoundingClientRect();if(t<document.documentElement.clientHeight+200){this.isRequestSend=!0,this.sortParams._start+=this.step,this.sortParams._end+=this.step;const t=await this.loadData();this.addRows(t),this.isRequestSend=!1}}),this.header=t,this.url=new URL(e,"https://course-js.javascript.ru/"),this.step=s,this.sortParams._sort=t.find(t=>t.sortable).id,this.sortParams._order="asc",this.sortParams._start=n,this.sortParams._end=n+s,this.isSortLocally=i,this.render(),this.addListeners()}get template(){return`\n      <div class="sortable-table">\n\n        <div data-element="header" class="sortable-table__header sortable-table__row">\n          ${this.getHeaderTemplate()}\n        </div>\n\n        <div data-element="body" class="sortable-table__body">\n          ${this.getBodyTemplate(this.data)}\n        </div>\n\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          <div>\n            <p>No products found matching the selected criteria</p>\n            <button data-element="reset" type="button" class="button-primary-outline">Clear filters</button>\n          </div>\n        </div>\n\n      </div>\n    `}getHeaderTemplate(){return this.header.map(t=>this.getHeaderRowTemplate(t)).join("")}getHeaderRowTemplate({id:t,title:e,sortable:s}){return`\n      <div class="sortable-table__cell" data-id="${t}" data-sortable="${s}" ${s?'data-order="asc"':""}>\n        <span>${e}</span>\n        ${this.getHeaderArrowTemplate(t)}\n      </div>\n    `}getHeaderArrowTemplate(t){return t===this.sortParams._sort?'\n      <span data-element="arrow" class="sortable-table__sort-arrow">\n        <span class="sort-arrow"></span>\n      </span>\n    ':""}getBodyTemplate(t){return t.map(t=>`\n          <a href="/products/${t.id}" class="sortable-table__row">\n            ${this.getCellTemplate(t)}\n          </a>\n        `).join("")}getCellTemplate(t){return this.header.map(({id:e,template:s})=>"images"!==e||t[e].length?s?s(t[e]):`<div class="sortable-table__cell">${t[e]}</div>`:'\n            <div class="sortable-table__cell">\n              <img class="sortable-table-image" alt="no-image" src="#">\n            </div>\n          ').join("")}async render(){const t=document.createElement("div");t.innerHTML=this.template,this.element=t.firstElementChild,this.subElements=this.getSubElements(this.element);const e=await this.loadData();this.update(e)}getSubElements(t){return[...t.querySelectorAll("[data-element]")].reduce((t,e)=>(t[e.dataset.element]=e,t),{})}async loadData(t){this.element.classList.add("sortable-table_loading"),t&&(this.filterParams=t);const e=new URL(this.url),s=Object.assign({},this.filterParams,this.sortParams);for(const t of Object.keys(s))e.searchParams.set(t,s[t]);const a=await Object(n.a)(e);return this.element.classList.remove("sortable-table_loading"),a}update(t){t.length?(this.subElements.body.innerHTML=this.getBodyTemplate(t),this.data=t,this.element.classList.remove("sortable-table_empty")):this.element.classList.add("sortable-table_empty")}makeSort(t,e){const s=[...this.data],{sortType:n}=this.header.find(e=>e.id===t),a="asc"===e?1:-1;return s.sort((e,s)=>{switch(n){case"string":return a*e[t].localeCompare(s[t],["ru","en"],{caseFirst:"upper"});case"number":default:return a*(e[t]-s[t])}})}sort(t,e){const s=this.makeSort(t,e);this.subElements.body.innerHTML=this.getBodyTemplate(s)}async sortOnServer(){const t=await this.loadData();this.update(t)}addListeners(){this.subElements.header.addEventListener("click",this.onHeaderPointerdown),document.addEventListener("scroll",this.onDocumentScroll)}addRows(t){this.subElements.body.insertAdjacentHTML("beforeend",this.getBodyTemplate(t))}remove(){this.element.remove()}destroy(){this.remove(),this.subElements={},document.removeEventListener("scroll",this.onDocumentScroll)}}}]]);
//# sourceMappingURL=products-list-index-js.js.map