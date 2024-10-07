import{j as s,r as i,c as h,u as p,m as j,L as m}from"./index-xCoXAoX4.js";import{B as n}from"./BoxSection-BoChCdPK.js";const f=({primaryStats:l,primaryMods:e,characterProfile:a})=>s.jsxs("header",{className:"grid h-full w-full grid-cols-2 items-center justify-between rounded-lg border-2 border-slate-900 bg-base-300 px-5 text-neutral",children:[s.jsx("div",{className:"flex gap-2",children:s.jsxs("div",{className:"text-start",children:[s.jsxs("p",{children:[a.name,", ",a.level]}),s.jsx("hr",{}),s.jsxs("p",{children:[a.class," ",a.subclass,", ",a.race," ",a.subrace]})]})}),s.jsxs("div",{className:"text-2xl",children:[s.jsxs("div",{className:"grid grid-cols-6",children:[s.jsx("p",{children:"STR"}),s.jsx("p",{children:"DEX"}),s.jsx("p",{children:"CON"}),s.jsx("p",{children:"INT"}),s.jsx("p",{children:"WIS"}),s.jsx("p",{children:"CHA"})]}),s.jsx("hr",{}),s.jsxs("div",{className:"grid grid-cols-6",children:[s.jsxs("p",{children:[l.str,s.jsxs("span",{className:"text-sm",children:["+",e.str]})]}),s.jsxs("p",{children:[l.dex,s.jsxs("span",{className:"text-sm",children:["+",e.dex]})]}),s.jsxs("p",{children:[l.con,s.jsxs("span",{className:"text-sm",children:["+",e.con]})]}),s.jsxs("p",{children:[l.int,s.jsxs("span",{className:"text-sm",children:["+",e.int]})]}),s.jsxs("p",{children:[l.wis,s.jsxs("span",{className:"text-sm",children:["+",e.wis]})]}),s.jsxs("p",{children:[l.cha,s.jsxs("span",{className:"text-sm",children:["+",e.cha]})]})]})]})]}),N=({maxHP:l})=>{const[e,a]=i.useState(1),[r,t]=i.useState(l),x=c=>{a(parseInt(c.target.value)/100*(100/l)),t(parseInt(c.target.value))},d=()=>{r!==0&&(a((r-1)/100*(100/l)),t(r-1))},o=()=>{r<l&&(a((r+1)/100*(100/l)),t(r+1))};return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsxs("div",{className:"relative h-[120px] w-[120px] overflow-hidden rounded-[100vh] border-4 border-neutral",children:[s.jsx("div",{className:"h-full w-full origin-bottom bg-red-900",style:{transform:`scaleY(${e})`}}),s.jsx("p",{className:"user-select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:r}),s.jsx("input",{type:"range",className:"absolute left-1/2 top-0 h-[120px] w-full -translate-x-1/2 -rotate-90 touch-none opacity-0",min:0,max:l,step:1,onChange:c=>x(c)})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("button",{className:"btn btn-primary",onClick:o,children:"+"}),s.jsx("button",{className:"btn btn-primary",onClick:d,children:"-"})]})]})},b=({saveThrows:l,skills:e})=>s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex w-full flex-col items-center gap-1",children:[s.jsx("h3",{className:"text-[1.875rem] underline",children:"Saving throws"}),s.jsxs("ul",{className:"flex gap-2 text-[1.25rem]",children:[s.jsxs("li",{className:"flex flex-col",children:["STR",s.jsxs("span",{children:["+",l.str]})]}),s.jsxs("li",{className:"flex flex-col",children:["DEX",s.jsxs("span",{children:["+",l.dex]})]}),s.jsxs("li",{className:"flex flex-col",children:["CON",s.jsxs("span",{children:["+",l.con]})]}),s.jsxs("li",{className:"flex flex-col",children:["INT",s.jsxs("span",{children:["+",l.int]})]}),s.jsxs("li",{className:"flex flex-col",children:["WIS",s.jsxs("span",{children:["+",l.wis]})]}),s.jsxs("li",{className:"flex flex-col",children:["CHA",s.jsxs("span",{children:["+",l.cha]})]})]})]}),s.jsxs("div",{className:"flex w-full flex-col items-center gap-1",children:[s.jsx("h3",{className:"text-[1.875rem] underline",children:"Skills"}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsxs("ul",{className:"flex flex-col text-[0.75rem]",children:[s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.acrobatics]}),"Acrobatics (Dex)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.animalHandling]}),"Animal Handling (Wis)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.arcana]}),"Arcana (Int)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.athletics]}),"Athletics (Str)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.deception]}),"Deception (Cha)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.history]}),"History (Int)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.insight]}),"Insight (Wis)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.intimidation]}),"Intimidation (Cha)"]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.investigation]}),"Investigation (Int)"]})]}),s.jsxs("ul",{className:"flex flex-col text-[0.75rem]",children:[s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.medicine]}),"Medicine (Wis)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.nature]}),"Nature (Int)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.perception]}),"Perception (Wis)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.performance]}),"Performance (Cha)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.persuasion]}),"Persuasion (Cha)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.religion]}),"Religion (Int)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.sleightOfHand]}),"Sleight of Hand (Dex)"]}),s.jsxs("li",{className:"flex gap-2 border-b-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.survival]}),"Survival (Wis)"]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsxs("span",{className:"border-r-2 pr-2",children:["+",e.stealth]}),"Stealth (Dex)"]})]})]})]})]}),w=h("/")({component:g});function g(){const[l,e]=i.useState(!0),{character:a}=p();return i.useEffect(()=>{setTimeout(()=>{e(!1)},1e3)},[]),a?s.jsxs(j.main,{className:"grid h-full w-full grid-rows-[.2fr_1fr] gap-5",initial:{opacity:0},animate:{opacity:1},children:[s.jsx(f,{primaryStats:a.stats.primaryStats,primaryMods:a.stats.primaryMods,characterProfile:a.characterProfile}),s.jsxs("section",{className:"flex gap-5",children:[s.jsx(n,{styles:"w-[40%] flex flex-col gap-5 p-5",children:s.jsx(b,{saveThrows:a.stats.saveThrows,skills:a.stats.skills})}),s.jsxs("div",{className:"flex h-full w-[50%] flex-col gap-5",children:[s.jsxs(n,{styles:"w-full flex justify-around items-center p-5",children:[s.jsx("div",{children:s.jsx("h2",{className:"text-3xl",children:"HP Bar"})}),s.jsx(N,{maxHP:a.stats.maxHP})]}),s.jsx(n,{styles:"w-full p-5",children:"a"})]}),s.jsx(n,{styles:"w-[10%] flex flex-col py-5",children:s.jsx("nav",{className:"flex flex-col gap-5 p-3",children:s.jsx(m,{to:"/traits/racial-traits",className:"btn btn-primary",children:"Traits"})})})]})]}):s.jsx("div",{children:l?"":"Loading..."})}export{w as Route};
