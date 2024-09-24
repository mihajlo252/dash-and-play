import{j as e,r as d,c as j,m as p}from"./index-Dia6vTWy.js";const t=({width:s,children:a})=>e.jsx("div",{className:`${s} flex h-full rounded-lg border-2 border-slate-900 bg-base-300 p-5 text-neutral`,children:a}),m=()=>e.jsxs("header",{className:"grid h-full w-full grid-cols-2 items-center justify-between rounded-lg border-2 border-slate-900 bg-base-300 px-5 text-neutral",children:[e.jsx("div",{className:"flex gap-2",children:e.jsxs("div",{className:"text-start",children:[e.jsx("p",{children:"Vvyhs"}),e.jsx("hr",{}),e.jsx("p",{children:"Level 6, Revenant Rogue, The Revived"})]})}),e.jsxs("div",{className:"text-2xl",children:[e.jsxs("div",{className:"grid grid-cols-6",children:[e.jsx("p",{children:"STR"}),e.jsx("p",{children:"DEX"}),e.jsx("p",{children:"CON"}),e.jsx("p",{children:"INT"}),e.jsx("p",{children:"WIS"}),e.jsx("p",{children:"CHA"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"grid grid-cols-6",children:[e.jsxs("p",{children:["10",e.jsx("span",{className:"text-sm",children:"+0"})]}),e.jsxs("p",{children:["16",e.jsx("span",{className:"text-sm",children:"+3"})]}),e.jsxs("p",{children:["14",e.jsx("span",{className:"text-sm",children:"+2"})]}),e.jsxs("p",{children:["10",e.jsx("span",{className:"text-sm",children:"+0"})]}),e.jsxs("p",{children:["15",e.jsx("span",{className:"text-sm",children:"+2"})]}),e.jsxs("p",{children:["14",e.jsx("span",{className:"text-sm",children:"+2"})]})]})]})]}),u=({maxHP:s})=>{const[a,n]=d.useState(1),[l,c]=d.useState(s),x=r=>{n(parseInt(r.target.value)/100*(100/s)),c(parseInt(r.target.value))},o=()=>{l!==0&&(n((l-1)/100*(100/s)),c(l-1))},h=()=>{l<s&&(n((l+1)/100*(100/s)),c(l+1))};return e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("div",{className:"relative h-[120px] w-[120px] overflow-hidden rounded-[100vh] border-4 border-neutral",children:[e.jsx("div",{className:"h-full w-full origin-bottom bg-red-900",style:{transform:`scaleY(${a})`}}),e.jsx("p",{className:"user-select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:l}),e.jsx("input",{type:"range",className:"absolute left-1/2 top-0 h-[120px] w-full -translate-x-1/2 -rotate-90 opacity-0",min:0,max:s,step:1,onChange:r=>x(r)})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("button",{className:"btn btn-primary",onClick:h,children:"+"}),e.jsx("button",{className:"btn btn-primary",onClick:o,children:"-"})]})]})},g=j("/")({component:f}),i="gap-5";function f(){return e.jsxs(p.main,{className:`grid h-full w-full grid-rows-[.2fr_1fr] ${i}`,initial:{opacity:0},animate:{opacity:1},children:[e.jsx(m,{}),e.jsxs("section",{className:`flex ${i}`,children:[e.jsx(t,{width:"w-[40%]",children:"a"}),e.jsxs("div",{className:`flex h-full w-[50%] flex-col ${i}`,children:[e.jsxs(t,{width:"w-full flex justify-around items-center",children:[e.jsx("div",{children:e.jsx("h2",{className:"text-3xl",children:"HP Bar"})}),e.jsx(u,{maxHP:55})]}),e.jsx(t,{width:"w-full",children:"a"})]}),e.jsx(t,{width:"w-[10%]",children:"a"})]})]})}export{g as Route};
