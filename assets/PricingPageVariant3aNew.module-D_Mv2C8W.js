import{r as v,j as n}from"./iframe-BstWJIhp.js";import{I as N}from"./Icon-466Om5Jr.js";const J="_editorFab_k9un8_1",z="_editorBackdrop_k9un8_31",K="_editorBackdropOpen_k9un8_41",Z="_editorPanel_k9un8_46",U="_editorPanelOpen_k9un8_64",G="_editorHeader_k9un8_68",Q="_editorTitle_k9un8_77",X="_editorSubtitle_k9un8_84",Y="_editorModeBadge_k9un8_91",ee="_editorCloseButton_k9un8_108",re="_editorTabs_k9un8_131",ne="_editorTab_k9un8_131",te="_editorTabActive_k9un8_156",ae="_editorBody_k9un8_171",ie="_editorSection_k9un8_177",oe="_editorSectionTitle_k9un8_186",le="_editorField_k9un8_195",se="_editorLabel_k9un8_206",de="_editorToggleRow_k9un8_212",ue="_editorToggleInput_k9un8_220",ce="_editorToggleSwitch_k9un8_232",ge="_editorInput_k9un8_271",pe="_editorTextarea_k9un8_291",me="_editorColorRow_k9un8_296",he="_editorColor_k9un8_296",ve="_editorColorHex_k9un8_321",fe="_editorRange_k9un8_327",ye="_editorFooter_k9un8_333",be="_editorFooterActions_k9un8_343",_e="_editorButton_k9un8_349",we="_editorButtonPrimary_k9un8_370",ke="_editorButtonSecondary_k9un8_379",Ce="_editorButtonGhost_k9un8_389",t={editorFab:J,editorBackdrop:z,editorBackdropOpen:K,editorPanel:Z,editorPanelOpen:U,editorHeader:G,editorTitle:Q,editorSubtitle:X,editorModeBadge:Y,editorCloseButton:ee,editorTabs:re,editorTab:ne,editorTabActive:te,editorBody:ae,editorSection:ie,editorSectionTitle:oe,editorField:le,editorLabel:se,editorToggleRow:de,editorToggleInput:ue,editorToggleSwitch:ce,editorInput:ge,editorTextarea:pe,editorColorRow:me,editorColor:he,editorColorHex:ve,editorRange:fe,editorFooter:ye,editorFooterActions:be,editorButton:_e,editorButtonPrimary:we,editorButtonSecondary:ke,editorButtonGhost:Ce},qe=":saved",xe=":draft";function j(r){return`${r}${qe}`}function A(r){return`${r}${xe}`}function I(r){if(!r||typeof r!="object")return{individual:{},team:{}};const e=r;return"individual"in e||"team"in e?{individual:e.individual??{},team:e.team??{}}:{individual:e,team:{}}}function Te(r,e){return{overrides:I(r.overrides),visual:r.visual??e.visual,pageText:{...e.pageText??{},...r.pageText??{}},pageFlags:{...e.pageFlags??{},...r.pageFlags??{}}}}function Se(r,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(j(r));if(!a)return e;const i=JSON.parse(a);return{overrides:i.overrides===void 0?e.overrides:I(i.overrides),visual:{...e.visual,...i.visual??{}},pageText:{...e.pageText??{},...i.pageText??{}},pageFlags:{...e.pageFlags??{},...i.pageFlags??{}}}}catch{return e}}function Pe(r,e){if(!(typeof window>"u"))try{window.localStorage.setItem(j(r),JSON.stringify(e))}catch{}}function Be(r){if(!(typeof window>"u"))try{window.localStorage.removeItem(j(r))}catch{}}function Fe(r,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(A(r));if(!a)return e;const i=JSON.parse(a);return{overrides:i.overrides===void 0?e.overrides:I(i.overrides),visual:{...e.visual,...i.visual??{}},pageText:{...e.pageText??{},...i.pageText??{}},pageFlags:{...e.pageFlags??{},...i.pageFlags??{}}}}catch{return e}}function Re(r,e){if(!(typeof window>"u"))try{window.localStorage.setItem(A(r),JSON.stringify(e))}catch{}}function F(r){if(!(typeof window>"u"))try{window.localStorage.removeItem(A(r))}catch{}}function je(r,e){return r.badgeText===e.badgeText&&r.badgeBgColor===e.badgeBgColor&&r.borderColor===e.borderColor&&r.borderWidth===e.borderWidth&&(r.showCtaArrow??!0)===(e.showCtaArrow??!0)&&(r.badgeFontSize??null)===(e.badgeFontSize??null)&&(r.badgeFullWidth??null)===(e.badgeFullWidth??null)}function Ae(r,e){return JSON.stringify(r)===JSON.stringify(e)}function Ie(r,e){return JSON.stringify(r??{})===JSON.stringify(e??{})}function Le(r,e){return JSON.stringify(r??{})===JSON.stringify(e??{})}function R(r,e){return je(r.visual,e.visual)&&Ae(r.overrides,e.overrides)&&Ie(r.pageText,e.pageText)&&Le(r.pageFlags,e.pageFlags)}const Oe={badgeText:"MOST POPULAR",badgeBgColor:"#C026D3",borderColor:"#C026D3",borderWidth:2},Me={core:"Core",plus:"Plus",ultimate:"Ultimate",enterprise:"Enterprise"};function Ft(r){const e=r.variantId,a=v.useMemo(()=>({overrides:{individual:{},team:{}},visual:r.visualDefaults??Oe,pageText:r.pageTextDefaults??{},pageFlags:r.pageToggleDefaults??{}}),[r.visualDefaults,r.pageTextDefaults,r.pageToggleDefaults]),i=v.useMemo(()=>Te(r.savedStateJson,a),[r.savedStateJson,a]),[o,u]=v.useState(i),[d,s]=v.useState(i),[_,b]=v.useState(!1),[w,k]=v.useState(r.cards[0]??"core"),[p,C]=v.useState("individual");v.useEffect(()=>{const q=Se(e,i);u(q);const B=Fe(e,q);s(B)},[e,i]),v.useEffect(()=>{typeof window>"u"||(R(d,o)?F(e):Re(e,d))},[d,o,e]);const x=_?d:o,T=!R(d,o),S=!R(o,i);return{config:r,defaultDraft:a,baseline:i,active:x,draft:d,isDirty:T,hasSaved:S,open:_,selectedTab:w,mode:p,setMode:C,setOpen:b,setSelectedTab:k,setDraft:s,save:()=>{u(d),Pe(e,d),F(e),b(!1)},cancel:()=>{s(o)},reset:()=>{typeof window<"u"&&!window.confirm("Reset this prototype to its original defaults?")||(u(i),s(i),Be(e),F(e),b(!1))}}}function L(r,e){return e==="team"?r.cardDefaultsTeam??r.cardDefaults:r.cardDefaults}function m(r,e,a,i){const o=r.draft.overrides[e]?.[a]?.[i];return o??L(r.config,e)[a]?.[i]??""}function W(r,e,a){const i=r.draft.overrides[e]?.[a]?.features,o=L(r.config,e)[a]?.features??[];return i?o.map((u,d)=>i[d]??u):o}function V(r,e,a,i){const o=r.overrides[e]??{};return{...r,overrides:{...r.overrides,[e]:{...o,[a]:i}}}}function h(r,e,a,i,o){const d={...(r.overrides[e]??{})[a]??{},[i]:o};return V(r,e,a,d)}function Ne(r,e,a,i,o,u){const s=W(r,a,i).map((w,k)=>k===o?u:w),b={...(e.overrides[a]??{})[i]??{},features:s};return V(e,a,i,b)}function y(r,e){return{...r,visual:{...r.visual,...e}}}function D(r,e){const a=r.draft.pageText?.[e];return a??r.config.pageTextDefaults?.[e]??""}function E(r,e,a){return{...r,pageText:{...r.pageText??{},[e]:a}}}function De(r,e){const a=r.draft.pageFlags?.[e];return a??r.config.pageToggleDefaults?.[e]??!1}function Ee(r,e,a){return{...r,pageFlags:{...r.pageFlags??{},[e]:a}}}function We({editor:r}){const{config:e,draft:a,selectedTab:i,isDirty:o,hasSaved:u,open:d,mode:s}=r,_=e.pageTextFields??[],b=_.length>0,w=e.pageToggleFields??[],k=w.length>0,[p,C]=v.useState(!1),x=L(e,s)[i],T=e.visualTab??"core",S=!!e.showVisualControls&&i===T,O=e.visualSectionTitle??"Core highlight",P=W(r,s,i),M={...Me,...e.cardLabels??{}},q=s==="team"?"Teams":"Individual",B=`${t.editorPanel} ${d?t.editorPanelOpen:""}`,H=`${t.editorBackdrop} ${d?t.editorBackdropOpen:""}`,g=r.setDraft;return n.jsxs(n.Fragment,{children:[n.jsx("button",{"aria-expanded":d,"aria-label":"Open prototype editor",className:t.editorFab,onClick:()=>r.setOpen(!0),type:"button",children:n.jsx(N,{color:"inherit",height:28,name:"palette",width:28})}),n.jsx("div",{"aria-hidden":!d,className:H,onClick:()=>r.setOpen(!1)}),n.jsxs("aside",{"aria-hidden":!d,"aria-label":e.title??"Prototype editor",className:B,role:"dialog",children:[n.jsxs("header",{className:t.editorHeader,children:[n.jsxs("div",{children:[n.jsx("h2",{className:t.editorTitle,children:e.title??"Edit prototype"}),n.jsx("p",{className:t.editorSubtitle,children:e.subtitle??"Live changes preview instantly. Save to persist."}),n.jsxs("p",{className:t.editorModeBadge,children:["Editing ",n.jsx("strong",{children:q})," mode"]})]}),n.jsx("button",{"aria-label":"Close editor",className:t.editorCloseButton,onClick:()=>r.setOpen(!1),type:"button",children:n.jsx(N,{color:"inherit",height:20,name:"clear",width:20})})]}),n.jsxs("div",{className:t.editorTabs,role:"tablist",children:[e.cards.map(l=>n.jsx("button",{"aria-selected":!p&&i===l,className:`${t.editorTab} ${!p&&i===l?t.editorTabActive:""}`,onClick:()=>{C(!1),r.setSelectedTab(l)},role:"tab",type:"button",children:M[l]},l)),b&&n.jsx("button",{"aria-selected":p,className:`${t.editorTab} ${p?t.editorTabActive:""}`,onClick:()=>C(!0),role:"tab",type:"button",children:"Page text"})]}),n.jsxs("div",{className:t.editorBody,children:[k&&n.jsxs("section",{className:t.editorSection,children:[n.jsx("h3",{className:t.editorSectionTitle,children:"Design"}),w.map(l=>n.jsxs("label",{className:t.editorToggleRow,children:[n.jsx("input",{checked:De(r,l.key),className:t.editorToggleInput,onChange:f=>g(Ee(a,l.key,f.target.checked)),type:"checkbox"}),n.jsx("span",{"aria-hidden":"true",className:t.editorToggleSwitch}),n.jsx("span",{className:t.editorLabel,children:l.label})]},l.key))]}),p&&b&&n.jsxs("section",{className:t.editorSection,children:[n.jsx("h3",{className:t.editorSectionTitle,children:"Page text"}),_.map(l=>n.jsx(c,{label:l.label,children:l.multiline?n.jsx("textarea",{className:`${t.editorInput} ${t.editorTextarea}`,onChange:f=>g(E(a,l.key,f.target.value)),rows:3,value:D(r,l.key)}):n.jsx("input",{className:t.editorInput,onChange:f=>g(E(a,l.key,f.target.value)),type:"text",value:D(r,l.key)})},l.key))]}),!p&&n.jsx(Ve,{cardDefaults:x,cardKey:i,draft:a,editor:r,mode:s,onChange:g}),!p&&P.length>0&&n.jsxs("section",{className:t.editorSection,children:[n.jsx("h3",{className:t.editorSectionTitle,children:"Features"}),P.map((l,f)=>n.jsx(c,{label:`Feature ${f+1}`,children:n.jsx("textarea",{className:`${t.editorInput} ${t.editorTextarea}`,onChange:$=>g(Ne(r,a,s,i,f,$.target.value)),rows:2,value:l})},`${i}-feature-${f}`))]}),!p&&S&&n.jsxs("section",{className:t.editorSection,children:[n.jsx("h3",{className:t.editorSectionTitle,children:O}),n.jsx(c,{label:"Badge text",children:n.jsx("input",{className:t.editorInput,onChange:l=>g(y(a,{badgeText:l.target.value})),type:"text",value:a.visual.badgeText})}),n.jsx(c,{label:`Badge font size: ${a.visual.badgeFontSize??12}px`,children:n.jsx("input",{className:t.editorRange,max:24,min:9,onChange:l=>g(y(a,{badgeFontSize:Number(l.target.value)})),step:1,type:"range",value:a.visual.badgeFontSize??12})}),n.jsxs("label",{className:t.editorToggleRow,children:[n.jsx("input",{checked:a.visual.badgeFullWidth??!1,className:t.editorToggleInput,onChange:l=>g(y(a,{badgeFullWidth:l.target.checked})),type:"checkbox"}),n.jsx("span",{"aria-hidden":"true",className:t.editorToggleSwitch}),n.jsx("span",{className:t.editorLabel,children:"Full-width banner (off = pill)"})]}),n.jsx(c,{label:"Badge background",children:n.jsxs("div",{className:t.editorColorRow,children:[n.jsx("input",{"aria-label":"Badge background color picker",className:t.editorColor,onChange:l=>g(y(a,{badgeBgColor:l.target.value})),type:"color",value:a.visual.badgeBgColor}),n.jsx("input",{className:`${t.editorInput} ${t.editorColorHex}`,onChange:l=>g(y(a,{badgeBgColor:l.target.value})),type:"text",value:a.visual.badgeBgColor})]})}),n.jsx(c,{label:"Border color",children:n.jsxs("div",{className:t.editorColorRow,children:[n.jsx("input",{"aria-label":"Border color picker",className:t.editorColor,onChange:l=>g(y(a,{borderColor:l.target.value})),type:"color",value:a.visual.borderColor}),n.jsx("input",{className:`${t.editorInput} ${t.editorColorHex}`,onChange:l=>g(y(a,{borderColor:l.target.value})),type:"text",value:a.visual.borderColor})]})}),n.jsx(c,{label:`Border thickness: ${a.visual.borderWidth}px`,children:n.jsx("input",{className:t.editorRange,max:6,min:1,onChange:l=>g(y(a,{borderWidth:Number(l.target.value)})),step:1,type:"range",value:a.visual.borderWidth})}),e.showCtaArrowToggle&&n.jsxs("label",{className:t.editorToggleRow,children:[n.jsx("input",{checked:a.visual.showCtaArrow??!0,className:t.editorToggleInput,onChange:l=>g(y(a,{showCtaArrow:l.target.checked})),type:"checkbox"}),n.jsx("span",{"aria-hidden":"true",className:t.editorToggleSwitch}),n.jsx("span",{className:t.editorLabel,children:"Trailing arrow on CTA"})]})]})]}),n.jsxs("footer",{className:t.editorFooter,children:[n.jsx("button",{className:`${t.editorButton} ${t.editorButtonGhost}`,disabled:!u&&!o,onClick:r.reset,type:"button",children:"Reset to defaults"}),n.jsxs("div",{className:t.editorFooterActions,children:[n.jsx("button",{className:`${t.editorButton} ${t.editorButtonSecondary}`,disabled:!o,onClick:r.cancel,type:"button",children:"Cancel"}),n.jsx("button",{className:`${t.editorButton} ${t.editorButtonPrimary}`,disabled:!o,onClick:r.save,type:"button",children:"Save"})]})]})]})]})}function Ve({cardDefaults:r,cardKey:e,draft:a,editor:i,mode:o,onChange:u}){const d=s=>r?.[s]!=null;return n.jsxs("section",{className:t.editorSection,children:[n.jsx("h3",{className:t.editorSectionTitle,children:"Card copy"}),d("name")&&n.jsx(c,{label:"Plan name",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"name",s.target.value)),type:"text",value:m(i,o,e,"name")})}),d("originalPrice")&&n.jsx(c,{label:"Original price (strikethrough)",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"originalPrice",s.target.value)),type:"text",value:m(i,o,e,"originalPrice")})}),d("annualPrice")&&n.jsx(c,{label:"Annual price (per month)",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"annualPrice",s.target.value)),type:"text",value:m(i,o,e,"annualPrice")})}),d("monthlyPrice")&&n.jsx(c,{label:"Monthly price",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"monthlyPrice",s.target.value)),type:"text",value:m(i,o,e,"monthlyPrice")})}),d("cadence")&&n.jsx(c,{label:"Cadence",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"cadence",s.target.value)),type:"text",value:m(i,o,e,"cadence")})}),d("billingLine")&&n.jsx(c,{label:"Billing line",children:n.jsx("textarea",{className:`${t.editorInput} ${t.editorTextarea}`,onChange:s=>u(h(a,o,e,"billingLine",s.target.value)),rows:2,value:m(i,o,e,"billingLine")})}),d("description")&&n.jsx(c,{label:"Description",children:n.jsx("textarea",{className:`${t.editorInput} ${t.editorTextarea}`,onChange:s=>u(h(a,o,e,"description",s.target.value)),rows:3,value:m(i,o,e,"description")})}),d("cta")&&n.jsx(c,{label:"CTA label",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"cta",s.target.value)),type:"text",value:m(i,o,e,"cta")})}),d("footer")&&n.jsx(c,{label:"Footer note",children:n.jsx("textarea",{className:`${t.editorInput} ${t.editorTextarea}`,onChange:s=>u(h(a,o,e,"footer",s.target.value)),rows:3,value:m(i,o,e,"footer")})}),d("learnMore")&&n.jsx(c,{label:"Learn more link text",children:n.jsx("input",{className:t.editorInput,onChange:s=>u(h(a,o,e,"learnMore",s.target.value)),type:"text",value:m(i,o,e,"learnMore")})})]})}function c({children:r,label:e}){return n.jsxs("label",{className:t.editorField,children:[n.jsx("span",{className:t.editorLabel,children:e}),r]})}We.__docgenInfo={description:"",methods:[],displayName:"EditorPanel",props:{editor:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  config: EditorConfig;
  defaultDraft: EditorDraft;
  baseline: EditorDraft;
  active: EditorDraft;
  draft: EditorDraft;
  isDirty: boolean;
  hasSaved: boolean;
  open: boolean;
  selectedTab: CardKey;
  /**
   * Tracks which pricing mode the prototype is currently displaying. The
   * variant syncs this via \`setMode\` when its own toggle changes so the
   * editor surfaces the right set of card defaults + overrides.
   */
  mode: EditorMode;
  setMode: (mode: EditorMode) => void;
  setOpen: (v: boolean) => void;
  setSelectedTab: (key: CardKey) => void;
  setDraft: (d: EditorDraft) => void;
  save: () => void;
  cancel: () => void;
  reset: () => void;
}`,signature:{properties:[{key:"config",value:{name:"signature",type:"object",raw:`{
  /**
   * Unique id for this prototype variant. Used as the localStorage namespace
   * for the per-browser saved state and in-progress draft.
   * Examples: "pricing-control", "pricing-v1", "pricing-v2", "pricing-v2a",
   * "pricing-v3a".
   */
  variantId: string;
  cards: CardKey[];
  cardLabels?: Partial<Record<CardKey, string>>;
  /**
   * Defaults shown in the editor when in Individual mode. (Historically the
   * only set; kept under this name for backward compatibility with variants
   * that don't yet provide a teams set.)
   */
  cardDefaults: Partial<Record<CardKey, CardDefaults>>;
  /**
   * Defaults shown in the editor when the prototype's Teams toggle is on.
   * When omitted, the editor falls back to \`cardDefaults\` for team mode.
   */
  cardDefaultsTeam?: Partial<Record<CardKey, CardDefaults>>;
  showVisualControls?: boolean;
  visualDefaults?: CoreVisual;
  /**
   * Section heading shown above the visual controls in the editor. Defaults to
   * "Core highlight". Use a variant-specific phrasing when the highlight is
   * styled differently (banner vs pill etc.).
   */
  visualSectionTitle?: string;
  /**
   * The card-tab the visual/design controls live under. Defaults to "core"
   * for backward compatibility with V2/V2a where the highlighted card is Core.
   * Variants that highlight a different card (e.g. V3 highlights Plus) should
   * set this to that key so the controls show up where users expect them.
   */
  visualTab?: CardKey;
  /**
   * When true, the editor exposes a "Trailing arrow" toggle inside the design
   * properties section. Only relevant for variants whose recommended CTA
   * renders a trailing icon (currently V3).
   */
  showCtaArrowToggle?: boolean;
  /**
   * The repo-committed baseline state. Statically imported by each variant
   * from \`app/examples/prototypeEditor/savedState/<variantId>.json\` and passed
   * here. This is what every viewer sees on the bare prototype URL.
   */
  savedStateJson: SavedStateFile;
  title?: string;
  subtitle?: string;
  /**
   * Non-card page text made editable through a dedicated "Page text" tab.
   * When omitted (the default for every existing variant) the tab is hidden
   * and behaviour is unchanged.
   */
  pageTextFields?: PageTextField[];
  /** Baseline values for \`pageTextFields\`, keyed by field key. */
  pageTextDefaults?: Record<string, string>;
  /**
   * Page-level boolean toggles surfaced in a "Design" section at the top of
   * the editor (e.g. "Try alternate version"). When omitted the section is
   * hidden and behaviour is unchanged.
   */
  pageToggleFields?: PageToggleField[];
  /** Baseline values for \`pageToggleFields\`, keyed by field key. */
  pageToggleDefaults?: Record<string, boolean>;
}`,signature:{properties:[{key:"variantId",value:{name:"string",required:!0},description:`Unique id for this prototype variant. Used as the localStorage namespace
for the per-browser saved state and in-progress draft.
Examples: "pricing-control", "pricing-v1", "pricing-v2", "pricing-v2a",
"pricing-v3a".`},{key:"cards",value:{name:"Array",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0}],raw:"CardKey[]",required:!0}},{key:"cardLabels",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"string"}],raw:"Record<CardKey, string>"}],raw:"Partial<Record<CardKey, string>>",required:!1}},{key:"cardDefaults",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1}},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1}},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardDefaults>"}],raw:"Partial<Record<CardKey, CardDefaults>>",required:!0},description:`Defaults shown in the editor when in Individual mode. (Historically the
only set; kept under this name for backward compatibility with variants
that don't yet provide a teams set.)`},{key:"cardDefaultsTeam",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1}},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1}},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardDefaults>"}],raw:"Partial<Record<CardKey, CardDefaults>>",required:!1},description:"Defaults shown in the editor when the prototype's Teams toggle is on.\nWhen omitted, the editor falls back to `cardDefaults` for team mode."},{key:"showVisualControls",value:{name:"boolean",required:!1}},{key:"visualDefaults",value:{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0}},{key:"visualSectionTitle",value:{name:"string",required:!1},description:`Section heading shown above the visual controls in the editor. Defaults to
"Core highlight". Use a variant-specific phrasing when the highlight is
styled differently (banner vs pill etc.).`},{key:"visualTab",value:{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},description:`The card-tab the visual/design controls live under. Defaults to "core"
for backward compatibility with V2/V2a where the highlighted card is Core.
Variants that highlight a different card (e.g. V3 highlights Plus) should
set this to that key so the controls show up where users expect them.`},{key:"showCtaArrowToggle",value:{name:"boolean",required:!1},description:`When true, the editor exposes a "Trailing arrow" toggle inside the design
properties section. Only relevant for variants whose recommended CTA
renders a trailing icon (currently V3).`},{key:"savedStateJson",value:{name:"signature",type:"object",raw:`{
  /**
   * Accepts either the new mode-scoped shape (\`OverridesByMode\`) or the
   * legacy flat shape (\`ModeOverrides\`). Legacy values are migrated into
   * \`{ individual: <flat>, team: {} }\` on load.
   */
  overrides?: OverridesByMode | ModeOverrides;
  visual?: CoreVisual | null;
  pageText?: Record<string, string>;
  pageFlags?: Record<string, boolean>;
}`,signature:{properties:[{key:"overrides",value:{name:"union",raw:"OverridesByMode | ModeOverrides",elements:[{name:"signature",type:"object",raw:`{
  individual: ModeOverrides;
  team: ModeOverrides;
}`,signature:{properties:[{key:"individual",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}},{key:"team",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}}]},required:!0},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}],required:!1},description:"Accepts either the new mode-scoped shape (`OverridesByMode`) or the\nlegacy flat shape (`ModeOverrides`). Legacy values are migrated into\n`{ individual: <flat>, team: {} }` on load."},{key:"visual",value:{name:"union",raw:"CoreVisual | null",elements:[{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0},{name:"null"}],required:!1}},{key:"pageText",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1}},{key:"pageFlags",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1}}]},required:!0},description:"The repo-committed baseline state. Statically imported by each variant\nfrom `app/examples/prototypeEditor/savedState/<variantId>.json` and passed\nhere. This is what every viewer sees on the bare prototype URL."},{key:"title",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"string",required:!1}},{key:"pageTextFields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: string;
  multiline?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"multiline",value:{name:"boolean",required:!1}}]}}],raw:"PageTextField[]",required:!1},description:`Non-card page text made editable through a dedicated "Page text" tab.
When omitted (the default for every existing variant) the tab is hidden
and behaviour is unchanged.`},{key:"pageTextDefaults",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:"Baseline values for `pageTextFields`, keyed by field key."},{key:"pageToggleFields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: string;
  /** Optional helper text shown beneath the toggle label. */
  description?: string;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1},description:"Optional helper text shown beneath the toggle label."}]}}],raw:"PageToggleField[]",required:!1},description:`Page-level boolean toggles surfaced in a "Design" section at the top of
the editor (e.g. "Try alternate version"). When omitted the section is
hidden and behaviour is unchanged.`},{key:"pageToggleDefaults",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1},description:"Baseline values for `pageToggleFields`, keyed by field key."}]},required:!0}},{key:"defaultDraft",value:{name:"signature",type:"object",raw:`{
  overrides: OverridesByMode;
  visual: CoreVisual;
  /**
   * Flat map of non-card page text (hero title, section headings, FAQ items,
   * legal note, etc.). Optional so variants that don't opt into page-wide
   * text editing are unaffected.
   */
  pageText?: Record<string, string>;
  /**
   * Flat map of page-level boolean toggles (e.g. "try alternate version").
   * Optional so variants that don't opt into page toggles are unaffected.
   */
  pageFlags?: Record<string, boolean>;
}`,signature:{properties:[{key:"overrides",value:{name:"signature",type:"object",raw:`{
  individual: ModeOverrides;
  team: ModeOverrides;
}`,signature:{properties:[{key:"individual",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}},{key:"team",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}}]},required:!0}},{key:"visual",value:{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0}},{key:"pageText",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:`Flat map of non-card page text (hero title, section headings, FAQ items,
legal note, etc.). Optional so variants that don't opt into page-wide
text editing are unaffected.`},{key:"pageFlags",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1},description:`Flat map of page-level boolean toggles (e.g. "try alternate version").
Optional so variants that don't opt into page toggles are unaffected.`}]},required:!0}},{key:"baseline",value:{name:"signature",type:"object",raw:`{
  overrides: OverridesByMode;
  visual: CoreVisual;
  /**
   * Flat map of non-card page text (hero title, section headings, FAQ items,
   * legal note, etc.). Optional so variants that don't opt into page-wide
   * text editing are unaffected.
   */
  pageText?: Record<string, string>;
  /**
   * Flat map of page-level boolean toggles (e.g. "try alternate version").
   * Optional so variants that don't opt into page toggles are unaffected.
   */
  pageFlags?: Record<string, boolean>;
}`,signature:{properties:[{key:"overrides",value:{name:"signature",type:"object",raw:`{
  individual: ModeOverrides;
  team: ModeOverrides;
}`,signature:{properties:[{key:"individual",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}},{key:"team",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}}]},required:!0}},{key:"visual",value:{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0}},{key:"pageText",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:`Flat map of non-card page text (hero title, section headings, FAQ items,
legal note, etc.). Optional so variants that don't opt into page-wide
text editing are unaffected.`},{key:"pageFlags",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1},description:`Flat map of page-level boolean toggles (e.g. "try alternate version").
Optional so variants that don't opt into page toggles are unaffected.`}]},required:!0}},{key:"active",value:{name:"signature",type:"object",raw:`{
  overrides: OverridesByMode;
  visual: CoreVisual;
  /**
   * Flat map of non-card page text (hero title, section headings, FAQ items,
   * legal note, etc.). Optional so variants that don't opt into page-wide
   * text editing are unaffected.
   */
  pageText?: Record<string, string>;
  /**
   * Flat map of page-level boolean toggles (e.g. "try alternate version").
   * Optional so variants that don't opt into page toggles are unaffected.
   */
  pageFlags?: Record<string, boolean>;
}`,signature:{properties:[{key:"overrides",value:{name:"signature",type:"object",raw:`{
  individual: ModeOverrides;
  team: ModeOverrides;
}`,signature:{properties:[{key:"individual",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}},{key:"team",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}}]},required:!0}},{key:"visual",value:{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0}},{key:"pageText",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:`Flat map of non-card page text (hero title, section headings, FAQ items,
legal note, etc.). Optional so variants that don't opt into page-wide
text editing are unaffected.`},{key:"pageFlags",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1},description:`Flat map of page-level boolean toggles (e.g. "try alternate version").
Optional so variants that don't opt into page toggles are unaffected.`}]},required:!0}},{key:"draft",value:{name:"signature",type:"object",raw:`{
  overrides: OverridesByMode;
  visual: CoreVisual;
  /**
   * Flat map of non-card page text (hero title, section headings, FAQ items,
   * legal note, etc.). Optional so variants that don't opt into page-wide
   * text editing are unaffected.
   */
  pageText?: Record<string, string>;
  /**
   * Flat map of page-level boolean toggles (e.g. "try alternate version").
   * Optional so variants that don't opt into page toggles are unaffected.
   */
  pageFlags?: Record<string, boolean>;
}`,signature:{properties:[{key:"overrides",value:{name:"signature",type:"object",raw:`{
  individual: ModeOverrides;
  team: ModeOverrides;
}`,signature:{properties:[{key:"individual",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}},{key:"team",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}}]},required:!0}},{key:"visual",value:{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0}},{key:"pageText",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:`Flat map of non-card page text (hero title, section headings, FAQ items,
legal note, etc.). Optional so variants that don't opt into page-wide
text editing are unaffected.`},{key:"pageFlags",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1},description:`Flat map of page-level boolean toggles (e.g. "try alternate version").
Optional so variants that don't opt into page toggles are unaffected.`}]},required:!0}},{key:"isDirty",value:{name:"boolean",required:!0}},{key:"hasSaved",value:{name:"boolean",required:!0}},{key:"open",value:{name:"boolean",required:!0}},{key:"selectedTab",value:{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0}},{key:"mode",value:{name:"union",raw:'"individual" | "team"',elements:[{name:"literal",value:'"individual"'},{name:"literal",value:'"team"'}],required:!0},description:"Tracks which pricing mode the prototype is currently displaying. The\nvariant syncs this via `setMode` when its own toggle changes so the\neditor surfaces the right set of card defaults + overrides."},{key:"setMode",value:{name:"signature",type:"function",raw:"(mode: EditorMode) => void",signature:{arguments:[{type:{name:"union",raw:'"individual" | "team"',elements:[{name:"literal",value:'"individual"'},{name:"literal",value:'"team"'}],required:!0},name:"mode"}],return:{name:"void"}},required:!0}},{key:"setOpen",value:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}},required:!0}},{key:"setSelectedTab",value:{name:"signature",type:"function",raw:"(key: CardKey) => void",signature:{arguments:[{type:{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},name:"key"}],return:{name:"void"}},required:!0}},{key:"setDraft",value:{name:"signature",type:"function",raw:"(d: EditorDraft) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  overrides: OverridesByMode;
  visual: CoreVisual;
  /**
   * Flat map of non-card page text (hero title, section headings, FAQ items,
   * legal note, etc.). Optional so variants that don't opt into page-wide
   * text editing are unaffected.
   */
  pageText?: Record<string, string>;
  /**
   * Flat map of page-level boolean toggles (e.g. "try alternate version").
   * Optional so variants that don't opt into page toggles are unaffected.
   */
  pageFlags?: Record<string, boolean>;
}`,signature:{properties:[{key:"overrides",value:{name:"signature",type:"object",raw:`{
  individual: ModeOverrides;
  team: ModeOverrides;
}`,signature:{properties:[{key:"individual",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}},{key:"team",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:'"core" | "plus" | "ultimate" | "enterprise"',elements:[{name:"literal",value:'"core"'},{name:"literal",value:'"plus"'},{name:"literal",value:'"ultimate"'},{name:"literal",value:'"enterprise"'}],required:!0},{name:"signature",type:"object",raw:`{
  name?: string;
  annualPrice?: string;
  monthlyPrice?: string;
  /** Strikethrough "was" price shown above the current price (July 2026). */
  originalPrice?: string;
  cadence?: string;
  billingLine?: string;
  cta?: string;
  description?: string;
  /** Small footer note pinned near the card bottom (Core / Enterprise). */
  footer?: string;
  learnMore?: string;
  features?: string[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"annualPrice",value:{name:"string",required:!1}},{key:"monthlyPrice",value:{name:"string",required:!1}},{key:"originalPrice",value:{name:"string",required:!1},description:'Strikethrough "was" price shown above the current price (July 2026).'},{key:"cadence",value:{name:"string",required:!1}},{key:"billingLine",value:{name:"string",required:!1}},{key:"cta",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"footer",value:{name:"string",required:!1},description:"Small footer note pinned near the card bottom (Core / Enterprise)."},{key:"learnMore",value:{name:"string",required:!1}},{key:"features",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"Record<CardKey, CardCopy>"}],raw:"Partial<Record<CardKey, CardCopy>>",required:!0}}]},required:!0}},{key:"visual",value:{name:"signature",type:"object",raw:`{
  badgeText: string;
  badgeBgColor: string;
  borderColor: string;
  borderWidth: number;
  /**
   * Optional toggle for the trailing arrow on the highlighted card's CTA.
   * Treated as \`true\` when undefined so existing variants keep their
   * current rendering (variants without a trailing arrow simply ignore it).
   */
  showCtaArrow?: boolean;
  /**
   * Promo badge font size in px. When undefined, the variant uses its own
   * default (banner-style variants ~14px, pill-style ~12px).
   */
  badgeFontSize?: number;
  /**
   * \`true\`  → render as a full-width banner sitting on top of the card
   * \`false\` → render as a centered pill chip floating above the card
   * \`undefined\` → use the variant's natural default.
   */
  badgeFullWidth?: boolean;
}`,signature:{properties:[{key:"badgeText",value:{name:"string",required:!0}},{key:"badgeBgColor",value:{name:"string",required:!0}},{key:"borderColor",value:{name:"string",required:!0}},{key:"borderWidth",value:{name:"number",required:!0}},{key:"showCtaArrow",value:{name:"boolean",required:!1},description:"Optional toggle for the trailing arrow on the highlighted card's CTA.\nTreated as `true` when undefined so existing variants keep their\ncurrent rendering (variants without a trailing arrow simply ignore it)."},{key:"badgeFontSize",value:{name:"number",required:!1},description:`Promo badge font size in px. When undefined, the variant uses its own
default (banner-style variants ~14px, pill-style ~12px).`},{key:"badgeFullWidth",value:{name:"boolean",required:!1},description:"`true`  → render as a full-width banner sitting on top of the card\n`false` → render as a centered pill chip floating above the card\n`undefined` → use the variant's natural default."}]},required:!0}},{key:"pageText",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:`Flat map of non-card page text (hero title, section headings, FAQ items,
legal note, etc.). Optional so variants that don't opt into page-wide
text editing are unaffected.`},{key:"pageFlags",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1},description:`Flat map of page-level boolean toggles (e.g. "try alternate version").
Optional so variants that don't opt into page toggles are unaffected.`}]},required:!0},name:"d"}],return:{name:"void"}},required:!0}},{key:"save",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"cancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"reset",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""}}};const Rt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Logo'%20width='105'%20height='24'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20280.28%2064'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23191919;%20}%20.cls-1,%20.cls-2%20{%20stroke-width:%200px;%20}%20.cls-2%20{%20fill:%20%2387e64b;%20}%20%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20class='cls-1'%20d='M76.34,12.52c9.59,0,18.97,5.65,18.97,18.25,0,1-.05,2.55-.16,3.64-.03.25-.24.44-.49.44h-26.9c.79,4.51,3.94,7.44,8.88,7.44,3.28,0,5.37-1.81,6.5-3.97.14-.27.45-.41.75-.35l10.06,2.19c.31.07.47.4.34.69-2.35,5.33-7.7,10.61-17.73,10.61-13.17,0-20.19-8.59-20.19-19.47s7.3-19.47,19.97-19.47ZM84.07,27.98c-.5-4.29-3.36-6.59-7.52-6.59-5.44,0-7.73,2.79-8.59,6.59h16.11Z'/%3e%3cpath%20class='cls-1'%20d='M98.75,49.82V14.16c0-.27.22-.49.49-.49h10.47c.27,0,.49.22.49.49v4.23c2.51-3.94,6.23-5.87,11.02-5.87,7.01,0,13.03,4.8,13.03,15.53v21.77c0,.27-.22.49-.49.49h-10.47c-.27,0-.49-.22-.49-.49v-20.12c0-4.8-2.51-7.44-6.16-7.44-3.94,0-6.44,2.58-6.44,8.45v19.12c0,.27-.22.49-.49.49h-10.47c-.27,0-.49-.22-.49-.49Z'/%3e%3cpath%20class='cls-1'%20d='M134.95,13.66h11.1c.22,0,.41.14.47.35l8.34,27.64,8.34-27.64c.06-.21.25-.35.47-.35h11.1c.34,0,.58.34.46.66l-12.77,35.53c-.1.27-.36.46-.65.46h-13.92c-.29,0-.55-.18-.65-.46l-12.77-35.53c-.12-.32.12-.66.46-.66Z'/%3e%3cpath%20class='cls-1'%20d='M199.53,49.82v-5.59c-1.79,3.72-5.8,7.23-12.03,7.23-7.23,0-12.6-4.58-12.6-11.02,0-6.8,4.51-11.88,14.39-11.88h5.73c3.15,0,4.01-2.29,3.72-3.79-.43-2.58-2.72-3.94-5.94-3.94-4.07,0-6.53,2.25-6.84,5.34-.03.28-.29.48-.57.44l-9.71-1.62c-.27-.04-.46-.3-.41-.57,1.58-8.45,9.59-11.89,17.81-11.89s17.32,2,17.32,17.18v20.12c0,.27-.22.49-.49.49h-9.9c-.27,0-.49-.22-.49-.49ZM190.87,43.16c4.58,0,7.73-3.44,8.09-7.73h-6.94c-4.22,0-5.73,1.72-5.65,4.08.07,2.51,2.08,3.65,4.51,3.65Z'/%3e%3cpath%20class='cls-1'%20d='M212.13,22.33v-8.18c0-.27.22-.49.49-.49h4.09c1.9,0,3.44-1.54,3.44-3.44V3.85c0-.27.22-.49.49-.49h9.32c.27,0,.49.22.49.49v9.81h7.52c.27,0,.49.22.49.49v8.18c0,.27-.22.49-.49.49h-7.52v13.24c0,4.31,3.67,6.07,7.5,4.71.25-.09.52.1.52.37v8.63c0,.32-.21.6-.52.67-.99.23-2.36.44-3.99.44-8.88,0-14.96-3.01-14.96-15.89v-12.17h-6.38c-.27,0-.49-.22-.49-.49Z'/%3e%3cpath%20class='cls-1'%20d='M280.28,31.99c0,10.74-7.59,19.47-20.04,19.47s-20.04-8.73-20.04-19.47,7.59-19.47,20.04-19.47,20.04,8.73,20.04,19.47ZM268.82,31.99c0-5.3-2.93-9.73-8.59-9.73s-8.59,4.44-8.59,9.73,2.93,9.73,8.59,9.73,8.59-4.44,8.59-9.73Z'/%3e%3c/g%3e%3cg%3e%3ccircle%20class='cls-2'%20cx='25.56'%20cy='61.14'%20r='2.86'/%3e%3cpath%20class='cls-2'%20d='M42,41.64l-16.13,1.73c-.3.03-.45-.34-.21-.53l15.78-12.29c1.02-.84,1.68-2.14,1.4-3.54-.28-2.14-2.05-3.54-4.29-3.26l-17.15,2.51c-.3.04-.46-.34-.22-.53l17-12.98c3.35-2.61,3.63-7.73.56-10.71-2.79-2.79-7.27-2.7-10.06.09L1.29,30c-1.02,1.12-1.49,2.61-1.21,4.19.47,2.52,2.98,4.19,5.5,3.73l14.77-3.01c.32-.07.49.36.22.54l-16.38,10.49c-2.05,1.3-2.98,3.63-2.33,5.96.65,3.07,3.73,4.84,6.71,4.1l24.49-6.03c.28-.07.48.25.3.47l-3.82,4.72c-1.02,1.3.65,3.07,2.05,2.05l12.58-10.34c2.24-1.86.75-5.5-2.14-5.22Z'/%3e%3c/g%3e%3c/svg%3e",jt="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='flux%201'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2027.5773L16.0133%203.33333L32%2027.5773H29.0227L16.012%207.83733L4.628%2025.0747H20.7907L22.4427%2027.5773H0Z'%20fill='var(--fill-0,%20black)'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.7587%2022.2987L13.5227%2018.1453L16.288%2022.2987H10.7587ZM24.32%2027.5773L16.7627%2015.968H19.6653L27.2467%2027.5773H24.32ZM26.32%2015.568L29.16%2011.3147L32%2015.568H26.32Z'%20fill='var(--fill-0,%20black)'/%3e%3c/g%3e%3c/svg%3e",At="/Pepe-design-playground-storybook-public/assets/logo_minimax-CT_5bC2C.svg",It="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%3e%3cpath%20d='M24%2012.2727C24%2011.4218%2023.9221%2010.6036%2023.7774%209.81818H12.2449V14.4655H18.8349C18.5455%2015.96%2017.6772%2017.2255%2016.3748%2018.0764V21.0982H20.3488C22.6642%2019.0036%2024%2015.9273%2024%2012.2727Z'%20fill='%23191919'/%3e%3cpath%20d='M12.2449%2024C15.551%2024%2018.3228%2022.9309%2020.3488%2021.0982L16.3748%2018.0764C15.2839%2018.7964%2013.8924%2019.2327%2012.2449%2019.2327C9.06122%2019.2327%206.35622%2017.1273%205.38776%2014.2909H1.31354V17.3891C3.32839%2021.3055%207.45826%2024%2012.2449%2024Z'%20fill='%23191919'/%3e%3cpath%20d='M5.38776%2014.28C5.14286%2013.56%204.99814%2012.7964%204.99814%2012C4.99814%2011.2036%205.14286%2010.44%205.38776%209.72V6.62182H1.31354C0.478664%208.23636%200%2010.0582%200%2012C0%2013.9418%200.478664%2015.7636%201.31354%2017.3782L4.48609%2014.9564L5.38776%2014.28Z'%20fill='%23191919'/%3e%3cpath%20d='M12.2449%204.77818C14.0482%204.77818%2015.6512%205.38909%2016.9314%206.56727L20.4378%203.13091C18.3117%201.18909%2015.551%200%2012.2449%200C7.45826%200%203.32839%202.69455%201.31354%206.62182L5.38776%209.72C6.35622%206.88364%209.06122%204.77818%2012.2449%204.77818Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/g%3e%3c/svg%3e",He="_page_rnt37_1",$e="_header_rnt37_15",Je="_topBar_rnt37_21",ze="_topBarLeft_rnt37_30",Ke="_brand_rnt37_38",Ze="_brandImage_rnt37_47",Ue="_bottomNav_rnt37_56",Ge="_bottomNavItem_rnt37_64",Qe="_topBarActions_rnt37_76",Xe="_headerLink_rnt37_83",Ye="_headerCta_rnt37_95",er="_headerIconButton_rnt37_111",rr="_headerHamburger_rnt37_124",nr="_headerHamburgerIcon_rnt37_137",tr="_bottomBar_rnt37_143",ar="_searchBar_rnt37_156",ir="_searchDropdown_rnt37_169",or="_searchDivider_rnt37_184",lr="_searchInput_rnt37_190",sr="_heroSection_rnt37_205",dr="_heroContainer_rnt37_211",ur="_heroTitle_rnt37_217",cr="_toggle_rnt37_225",gr="_toggleButton_rnt37_238",pr="_toggleSvgIcon_rnt37_268",mr="_toggleButtonActive_rnt37_289",hr="_toggleButtonDefault_rnt37_298",vr="_teamPlanGrid_rnt37_329",fr="_promoBadgePill_rnt37_345",yr="_promoBadgeBanner_rnt37_362",br="_promoBadgeBannerText_rnt37_377",_r="_planCard_rnt37_386",wr="_teamPlanCard_rnt37_396",kr="_planCardTop_rnt37_400",Cr="_teamCardHeader_rnt37_406",qr="_teamPlanName_rnt37_413",xr="_teamPlanEyebrow_rnt37_419",Tr="_teamPlanTitle_rnt37_424",Sr="_seatSelector_rnt37_430",Pr="_seatSelectorIcon_rnt37_447",Br="_seatSelectorChevron_rnt37_448",Fr="_secondaryButton_rnt37_454",Rr="_enterpriseCard_rnt37_467",jr="_enterpriseDescription_rnt37_471",Ar="_enterpriseLearnMore_rnt37_478",Ir="_planName_rnt37_486",Lr="_priceBlock_rnt37_493",Or="_priceRow_rnt37_499",Mr="_price_rnt37_493",Nr="_cadence_rnt37_511",Dr="_billing_rnt37_516",Er="_selectButton_rnt37_524",Wr="_includesLabel_rnt37_537",Vr="_featureList_rnt37_543",Hr="_featureRow_rnt37_551",$r="_featureContent_rnt37_563",Jr="_badge_rnt37_588",zr="_pricingDisclaimer_rnt37_601",Kr="_modelsBlock_rnt37_613",Zr="_sectionTitle_rnt37_621",Ur="_sectionTitleSmall_rnt37_629",Gr="_logoRowPrimary_rnt37_636",Qr="_logoRowSecondary_rnt37_637",Xr="_logoOpenAi_rnt37_645",Yr="_logoLuma_rnt37_649",en="_logoSeedream_rnt37_653",rn="_logoKling_rnt37_657",nn="_logoElevenLabs_rnt37_661",tn="_vectorTextLogo_rnt37_665",an="_imageTextLogo_rnt37_666",on="_vectorIcon_rnt37_676",ln="_imageTextIcon_rnt37_681",sn="_studentBanner_rnt37_686",dn="_detailsSection_rnt37_717",un="_detailsContainer_rnt37_723",cn="_introBlock_rnt37_734",gn="_introSubtitle_rnt37_741",pn="_proofStack_rnt37_749",mn="_proofRow_rnt37_755",hn="_proofLabel_rnt37_762",vn="_proofContent_rnt37_770",fn="_proofItems_rnt37_774",yn="_compactModels_rnt37_775",bn="_proofItem_rnt37_774",_n="_compactLogoImage_rnt37_796",wn="_compactVectorText_rnt37_802",kn="_compactImageText_rnt37_803",Cn="_compactVectorIcon_rnt37_813",qn="_compactImageTextIcon_rnt37_818",xn="_paymentSection_rnt37_823",Tn="_paymentColumns_rnt37_830",Sn="_paymentColumn_rnt37_830",Pn="_paymentHeading_rnt37_845",Bn="_paymentCopy_rnt37_851",Fn="_paymentLogos_rnt37_858",Rn="_paymentCard_rnt37_864",jn="_paymentImage_rnt37_875",An="_masterCardIcon_rnt37_881",In="_faqSection_rnt37_894",Ln="_faqTitle_rnt37_901",On="_faqList_rnt37_907",Mn="_faqItem_rnt37_912",Nn="_legalNote_rnt37_940",Lt={page:He,header:$e,topBar:Je,topBarLeft:ze,brand:Ke,brandImage:Ze,bottomNav:Ue,bottomNavItem:Ge,topBarActions:Qe,headerLink:Xe,headerCta:Ye,headerIconButton:er,headerHamburger:rr,headerHamburgerIcon:nr,bottomBar:tr,searchBar:ar,searchDropdown:ir,searchDivider:or,searchInput:lr,heroSection:sr,heroContainer:dr,heroTitle:ur,toggle:cr,toggleButton:gr,toggleSvgIcon:pr,toggleButtonActive:mr,toggleButtonDefault:hr,teamPlanGrid:vr,promoBadgePill:fr,promoBadgeBanner:yr,promoBadgeBannerText:br,planCard:_r,teamPlanCard:wr,planCardTop:kr,teamCardHeader:Cr,teamPlanName:qr,teamPlanEyebrow:xr,teamPlanTitle:Tr,seatSelector:Sr,seatSelectorIcon:Pr,seatSelectorChevron:Br,secondaryButton:Fr,enterpriseCard:Rr,enterpriseDescription:jr,enterpriseLearnMore:Ar,planName:Ir,priceBlock:Lr,priceRow:Or,price:Mr,cadence:Nr,billing:Dr,selectButton:Er,includesLabel:Wr,featureList:Vr,featureRow:Hr,featureContent:$r,badge:Jr,pricingDisclaimer:zr,modelsBlock:Kr,sectionTitle:Zr,sectionTitleSmall:Ur,logoRowPrimary:Gr,logoRowSecondary:Qr,logoOpenAi:Xr,logoLuma:Yr,logoSeedream:en,logoKling:rn,logoElevenLabs:nn,vectorTextLogo:tn,imageTextLogo:an,vectorIcon:on,imageTextIcon:ln,studentBanner:sn,detailsSection:dn,detailsContainer:un,introBlock:cn,introSubtitle:gn,proofStack:pn,proofRow:mn,proofLabel:hn,proofContent:vn,proofItems:fn,compactModels:yn,proofItem:bn,compactLogoImage:_n,compactVectorText:wn,compactImageText:kn,compactVectorIcon:Cn,compactImageTextIcon:qn,paymentSection:xn,paymentColumns:Tn,paymentColumn:Sn,paymentHeading:Pn,paymentCopy:Bn,paymentLogos:Fn,paymentCard:Rn,paymentImage:jn,masterCardIcon:An,faqSection:In,faqTitle:Ln,faqList:On,faqItem:Mn,legalNote:Nn},Dn="_heroSectionTight_qhuhv_1",En="_heroControlsStack_qhuhv_5",Wn="_heroControlsStackAlt_qhuhv_12",Vn="_billingToggle_qhuhv_26",Hn="_billingOption_qhuhv_33",$n="_billingOptionActive_qhuhv_44",Jn="_billingSwitch_qhuhv_48",zn="_billingSwitchKnob_qhuhv_59",Kn="_billingSwitchAnnual_qhuhv_70",Zn="_savingsBadge_qhuhv_74",Un="_plansGrid_qhuhv_109",Gn="_billingClarity_qhuhv_114",Qn="_individualCard_qhuhv_126",Xn="_individualCardRecommended_qhuhv_133",Yn="_individualCardWrapper_qhuhv_138",et="_recommendedBadge_qhuhv_151",rt="_recommendedBadgeText_qhuhv_167",nt="_individualCardTop_qhuhv_177",tt="_individualCardAction_qhuhv_186",at="_teamCard_qhuhv_190",it="_individualEnterpriseCard_qhuhv_210",ot="_enterpriseLearnMore_qhuhv_217",lt="_enterpriseCardTopIndividual_qhuhv_222",st="_enterpriseCardTopTeam_qhuhv_231",dt="_enterpriseCardBodyIndividual_qhuhv_240",ut="_enterpriseCardBodyTeam_qhuhv_241",ct="_enterpriseCardActionIndividual_qhuhv_248",gt="_enterpriseCardActionTeam_qhuhv_249",pt="_enterpriseCardHighlighted_qhuhv_254",mt="_unlimitedFeature_qhuhv_260",ht="_unlimitedFeatureBadge_qhuhv_264",vt="_containAsset_qhuhv_268",ft="_proofItemIconWrapper_qhuhv_273",yt="_proofItemIconActual_qhuhv_282",bt="_pricingDisclaimer_qhuhv_290",_t="_modelsBlock_qhuhv_294",wt="_dualBannerRow_qhuhv_302",kt="_bannerCard_qhuhv_310",Ct="_bannerHeader_qhuhv_326",qt="_bannerTitle_qhuhv_333",xt="_bannerBody_qhuhv_341",Tt="_bannerEmphasis_qhuhv_350",St="_bannerLink_qhuhv_354",Ot={heroSectionTight:Dn,heroControlsStack:En,heroControlsStackAlt:Wn,billingToggle:Vn,billingOption:Hn,billingOptionActive:$n,billingSwitch:Jn,billingSwitchKnob:zn,billingSwitchAnnual:Kn,savingsBadge:Zn,plansGrid:Un,billingClarity:Gn,individualCard:Qn,individualCardRecommended:Xn,individualCardWrapper:Yn,recommendedBadge:et,recommendedBadgeText:rt,individualCardTop:nt,individualCardAction:tt,teamCard:at,individualEnterpriseCard:it,enterpriseLearnMore:ot,enterpriseCardTopIndividual:lt,enterpriseCardTopTeam:st,enterpriseCardBodyIndividual:dt,enterpriseCardBodyTeam:ut,enterpriseCardActionIndividual:ct,enterpriseCardActionTeam:gt,enterpriseCardHighlighted:pt,unlimitedFeature:mt,unlimitedFeatureBadge:ht,containAsset:vt,proofItemIconWrapper:ft,proofItemIconActual:yt,pricingDisclaimer:bt,modelsBlock:_t,dualBannerRow:wt,bannerCard:kt,bannerHeader:Ct,bannerTitle:qt,bannerBody:xt,bannerEmphasis:Tt,bannerLink:St};export{We as E,Lt as b,Rt as e,jt as f,At as m,Ot as s,Ft as u,It as v};
