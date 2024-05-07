import{j as I}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const l=({value:n="",onChange:t,disabled:i=!1,type:_="default",label:x})=>{const q=j=>{t==null||t(j.target.value)},V=["input",`input--${_}`,i?"disabled":void 0].join(" ");return I.jsx("input",{title:x,className:V,disabled:i,type:"text",value:n,onChange:q})};try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const N={component:l},e={args:{label:"Click me",type:"default",disabled:!1}},a={args:{...e.args,disabled:!0}},r={args:{...e.args,type:"primary"}},s={args:{...e.args,type:"primary",disabled:!0}};var u,d,o;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    type: 'default',
    disabled: false
  }
}`,...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,y,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'primary'
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,v,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'primary',
    disabled: true
  }
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const h=["Default","DefaultDisabled","Primary","PrimaryDisabled"];export{e as Default,a as DefaultDisabled,r as Primary,s as PrimaryDisabled,h as __namedExportsOrder,N as default};
