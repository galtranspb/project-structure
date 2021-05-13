(window.webpackJsonp=window.webpackJsonp||[]).push([[6],[,,,,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var n=s(14),r=s(11);class a extends r.a{getBodyTemplate(e){return e.map(e=>`\n          <div class="sortable-table__row">\n            ${this.getCellTemplate(e)}\n          </div>\n        `).join("")}}var i=s(10);var o=[{id:"id",title:"ID",sortable:!0,sortType:"number"},{id:"user",title:"Name",sortable:!0,sortType:"string"},{id:"createdAt",title:"Date",sortable:!0,sortType:"date",template:e=>{const t=new Date(e);return`\n        <div class="sortable-table__cell">\n          ${["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]}\n          ${t.getDate()}\n          , ${t.getFullYear()}\n        </div>\n      `}},{id:"totalCost",title:"Price",sortable:!0,sortType:"number",template:e=>`<div class="sortable-table__cell">$${Object(i.a)(e,",")}</div>`},{id:"delivery",title:"Status",sortable:!0,sortType:"number"}],l=s(9);function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class d{constructor(){c(this,"element",void 0),c(this,"subElements",void 0),c(this,"components",void 0)}get template(){return'\n\t\t\t<div class="sales full-height flex-column">\n\t\t\t\t<div class="content__top-panel">\n\t\t\t\t\t<h1 class="page-title">Sales</h1>\n\t\t\t\t\t<div data-element="rangePicker" class="rangepicker"></div>\n\t\t\t\t</div>\n\t\t\t\t<div data-element="sortableTable" class="full-height flex-column"></div>\n\t\t\t</div>\n\t\t'}render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element),this.initComponents(),this.renderComponents(),this.initEventListeners(),this.element}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}initComponents(){const e={from:new Date((new Date).setMonth((new Date).getMonth()-1)),to:new Date},t=new n.a(e),s=new a(o,{url:`api/rest/orders?createdAt_gte=${encodeURIComponent(e.from)}&createdAt_lte${encodeURIComponent(e.to)}`});this.components={rangePicker:t,sortableTable:s}}renderComponents(){for(const[e,t]of Object.entries(this.components)){this.subElements[e].append(t.element)}}initEventListeners(){this.subElements.rangePicker.addEventListener("date-select",e=>{const{from:t,to:s}=e.detail;this.updateComponents(t,s)})}async updateComponents(e,t){const s=this.components.sortableTable.url;s.searchParams.set("createdAt_gte",e),s.searchParams.set("createdAt_lte",t);const n=await Object(l.a)(s);this.components.sortableTable.update(n)}remove(){this.element.remove()}destroy(){this.remove();for(const e of Object.values(this.components))e.destroy()}}},,function(e,t,s){"use strict";t.a=async function(e,t){let s,r;try{s=await fetch(e.toString(),t)}catch(e){throw new n(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{r=await s.json(),e=r.error&&r.error.message||r.data&&r.data.error&&r.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new n(s,r,t)}try{return await s.json()}catch(e){throw new n(s,null,e.message)}};class n extends Error{constructor(e,t,s){var n,r,a;super(s),a="FetchError",(r="name")in(n=this)?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof n&&alert(e.reason.message)})},function(e,t,s){"use strict";t.a=function(e,t){const s=String(e).split("");return s.length>3&&s.length<=6?s.splice(-3,0,t):s.length>6&&(s.splice(-3,0,t),s.splice(-7,0,t)),""+s.join("")}},function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(9);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class a{constructor(e=[],{url:t="",step:s=30,start:n=0,isSortLocally:a=!1}={}){r(this,"element",void 0),r(this,"subElements",{}),r(this,"data",[]),r(this,"sortParams",{}),r(this,"filterParams",{}),r(this,"isSortLocally",!1),r(this,"isRequestSend",!1),r(this,"onHeaderPointerdown",async e=>{const t=e.target.closest(".sortable-table__cell"),{id:s,order:n,sortable:r}=t.dataset;if("false"===r)return;const a={asc:"desc",desc:"asc"};t.dataset.order=a[n],t.append(this.subElements.arrow),this.sortParams._sort=s,this.sortParams._order=a[n],this.isSortLocally?this.sort(this.sortParams._sort,this.sortParams._order):this.sortOnServer()}),r(this,"onDocumentScroll",async()=>{if(this.isRequestSend||this.isSortLocally)return;const{bottom:e}=document.documentElement.getBoundingClientRect();if(e<document.documentElement.clientHeight+200){this.isRequestSend=!0,this.sortParams._start+=this.step,this.sortParams._end+=this.step;const e=await this.loadData();this.addRows(e),this.isRequestSend=!1}}),this.header=e,this.url=new URL(t,"https://course-js.javascript.ru/"),this.step=s,this.sortParams._sort=e.find(e=>e.sortable).id,this.sortParams._order="asc",this.sortParams._start=n,this.sortParams._end=n+s,this.isSortLocally=a,this.render(),this.addListeners()}get template(){return`\n      <div class="sortable-table">\n\n        <div data-element="header" class="sortable-table__header sortable-table__row">\n          ${this.getHeaderTemplate()}\n        </div>\n\n        <div data-element="body" class="sortable-table__body">\n          ${this.getBodyTemplate(this.data)}\n        </div>\n\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          <div>\n            <p>No products found matching the selected criteria</p>\n            <button data-element="reset" type="button" class="button-primary-outline">Clear filters</button>\n          </div>\n        </div>\n\n      </div>\n    `}getHeaderTemplate(){return this.header.map(e=>this.getHeaderRowTemplate(e)).join("")}getHeaderRowTemplate({id:e,title:t,sortable:s}){return`\n      <div class="sortable-table__cell" data-id="${e}" data-sortable="${s}" ${s?'data-order="asc"':""}>\n        <span>${t}</span>\n        ${this.getHeaderArrowTemplate(e)}\n      </div>\n    `}getHeaderArrowTemplate(e){return e===this.sortParams._sort?'\n      <span data-element="arrow" class="sortable-table__sort-arrow">\n        <span class="sort-arrow"></span>\n      </span>\n    ':""}getBodyTemplate(e){return e.map(e=>`\n          <a href="/products/${e.id}" class="sortable-table__row">\n            ${this.getCellTemplate(e)}\n          </a>\n        `).join("")}getCellTemplate(e){return this.header.map(({id:t,template:s})=>"images"!==t||e[t].length?s?s(e[t]):`<div class="sortable-table__cell">${e[t]}</div>`:'\n            <div class="sortable-table__cell">\n              <img class="sortable-table-image" alt="no-image" src="#">\n            </div>\n          ').join("")}async render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element);const t=await this.loadData();this.update(t)}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}async loadData(e){this.element.classList.add("sortable-table_loading"),e&&(this.filterParams=e);const t=new URL(this.url),s=Object.assign({},this.filterParams,this.sortParams);for(const e of Object.keys(s))t.searchParams.set(e,s[e]);const r=await Object(n.a)(t);return this.element.classList.remove("sortable-table_loading"),r}update(e){e.length?(this.subElements.body.innerHTML=this.getBodyTemplate(e),this.data=e,this.element.classList.remove("sortable-table_empty")):this.element.classList.add("sortable-table_empty")}makeSort(e,t){const s=[...this.data],{sortType:n}=this.header.find(t=>t.id===e),r="asc"===t?1:-1;return s.sort((t,s)=>{switch(n){case"string":return r*t[e].localeCompare(s[e],["ru","en"],{caseFirst:"upper"});case"number":default:return r*(t[e]-s[e])}})}sort(e,t){const s=this.makeSort(e,t);this.subElements.body.innerHTML=this.getBodyTemplate(s)}async sortOnServer(){const e=await this.loadData();this.update(e)}addListeners(){this.subElements.header.addEventListener("click",this.onHeaderPointerdown),document.addEventListener("scroll",this.onDocumentScroll)}addRows(e){this.subElements.body.insertAdjacentHTML("beforeend",this.getBodyTemplate(e))}remove(){this.element.remove()}destroy(){this.remove(),this.subElements={},document.removeEventListener("scroll",this.onDocumentScroll)}}},,,function(e,t,s){"use strict";function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return r}));class r{static formatDate(e){return e.toLocaleString("ru",{dateStyle:"short"})}constructor({from:e=new Date,to:t=new Date}={}){n(this,"element",null),n(this,"subElements",{}),n(this,"selectingFrom",!0),n(this,"selected",{from:new Date,to:new Date}),n(this,"onDocumentClick",e=>{const t=this.element.classList.contains("rangepicker_open"),s=this.element.contains(e.target);t&&!s&&this.close()}),this.showDateFrom=new Date(e),this.selected={from:e,to:t},this.render()}get template(){return`<div class="rangepicker">\n      <div class="rangepicker__input" data-element="input">\n        <span data-element="from">${r.formatDate(this.selected.from)}</span> -\n        <span data-element="to">${r.formatDate(this.selected.to)}</span>\n      </div>\n      <div class="rangepicker__selector" data-element="selector"></div>\n    </div>`}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(e),this.initEventListeners()}getSubElements(e){const t={};for(const s of e.querySelectorAll("[data-element]"))t[s.dataset.element]=s;return t}initEventListeners(){const{input:e,selector:t}=this.subElements;document.addEventListener("click",this.onDocumentClick,!0),e.addEventListener("click",()=>this.toggle()),t.addEventListener("click",e=>this.onSelectorClick(e))}toggle(){this.element.classList.toggle("rangepicker_open"),this.renderDateRangePicker()}onSelectorClick({target:e}){e.classList.contains("rangepicker__cell")&&this.onRangePickerCellClick(e)}close(){this.element.classList.remove("rangepicker_open")}renderDateRangePicker(){const e=new Date(this.showDateFrom),t=new Date(this.showDateFrom),{selector:s}=this.subElements;t.setMonth(t.getMonth()+1),s.innerHTML=`\n      <div class="rangepicker__selector-arrow"></div>\n      <div class="rangepicker__selector-control-left"></div>\n      <div class="rangepicker__selector-control-right"></div>\n      ${this.renderCalendar(e)}\n      ${this.renderCalendar(t)}\n    `;const n=s.querySelector(".rangepicker__selector-control-left"),r=s.querySelector(".rangepicker__selector-control-right");n.addEventListener("click",()=>this.prev()),r.addEventListener("click",()=>this.next()),this.renderHighlight()}prev(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()-1),this.renderDateRangePicker()}next(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()+1),this.renderDateRangePicker()}renderHighlight(){const{from:e,to:t}=this.selected;for(const s of this.element.querySelectorAll(".rangepicker__cell")){const{value:n}=s.dataset,r=new Date(n);s.classList.remove("rangepicker__selected-from"),s.classList.remove("rangepicker__selected-between"),s.classList.remove("rangepicker__selected-to"),e&&n===e.toISOString()?s.classList.add("rangepicker__selected-from"):t&&n===t.toISOString()?s.classList.add("rangepicker__selected-to"):e&&t&&r>=e&&r<=t&&s.classList.add("rangepicker__selected-between")}if(e){const t=this.element.querySelector(`[data-value="${e.toISOString()}"]`);t&&t.closest(".rangepicker__cell").classList.add("rangepicker__selected-from")}if(t){const e=this.element.querySelector(`[data-value="${t.toISOString()}"]`);e&&e.closest(".rangepicker__cell").classList.add("rangepicker__selected-to")}}renderCalendar(e){const t=new Date(e);t.setDate(1);const s=t.toLocaleString("ru",{month:"long"});let n=`<div class="rangepicker__calendar">\n      <div class="rangepicker__month-indicator">\n        <time datetime=${s}>${s}</time>\n      </div>\n      <div class="rangepicker__day-of-week">\n        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>\n      </div>\n      <div class="rangepicker__date-grid">\n    `;var r;for(n+=`\n      <button type="button"\n        class="rangepicker__cell"\n        data-value="${t.toISOString()}"\n        style="--start-from: ${r=t.getDay(),1+(0===r?6:r-1)}">\n          ${t.getDate()}\n      </button>`,t.setDate(2);t.getMonth()===e.getMonth();)n+=`\n        <button type="button"\n          class="rangepicker__cell"\n          data-value="${t.toISOString()}">\n            ${t.getDate()}\n        </button>`,t.setDate(t.getDate()+1);return n+="</div></div>",n}onRangePickerCellClick(e){const{value:t}=e.dataset;if(t){const e=new Date(t);this.selectingFrom?(this.selected={from:e,to:null},this.selectingFrom=!1,this.renderHighlight()):(e>this.selected.from?this.selected.to=e:(this.selected.to=this.selected.from,this.selected.from=e),this.selectingFrom=!0,this.renderHighlight()),this.selected.from&&this.selected.to&&(this.dispatchEvent(),this.close(),this.subElements.from.innerHTML=r.formatDate(this.selected.from),this.subElements.to.innerHTML=r.formatDate(this.selected.to))}}dispatchEvent(){this.element.dispatchEvent(new CustomEvent("date-select",{bubbles:!0,detail:this.selected}))}remove(){this.element.remove(),document.removeEventListener("click",this.onDocumentClick,!0)}destroy(){return this.remove(),this.element=null,this.subElements={},this.selectingFrom=!0,this.selected={from:new Date,to:new Date},this}}}]]);
//# sourceMappingURL=sales-index-js.js.map