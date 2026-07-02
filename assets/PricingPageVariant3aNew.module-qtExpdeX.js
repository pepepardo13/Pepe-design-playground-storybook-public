import{r as h,j as t}from"./iframe-B6lUiuK9.js";import{I as N}from"./Icon-Dp9OK90R.js";const J="_editorFab_k9un8_1",G="_editorBackdrop_k9un8_31",z="_editorBackdropOpen_k9un8_41",U="_editorPanel_k9un8_46",X="_editorPanelOpen_k9un8_64",K="_editorHeader_k9un8_68",Y="_editorTitle_k9un8_77",Q="_editorSubtitle_k9un8_84",$="_editorModeBadge_k9un8_91",ee="_editorCloseButton_k9un8_108",re="_editorTabs_k9un8_131",te="_editorTab_k9un8_131",ne="_editorTabActive_k9un8_156",ae="_editorBody_k9un8_171",ie="_editorSection_k9un8_177",oe="_editorSectionTitle_k9un8_186",le="_editorField_k9un8_195",se="_editorLabel_k9un8_206",de="_editorToggleRow_k9un8_212",ue="_editorToggleInput_k9un8_220",ce="_editorToggleSwitch_k9un8_232",ge="_editorInput_k9un8_271",pe="_editorTextarea_k9un8_291",me="_editorColorRow_k9un8_296",ve="_editorColor_k9un8_296",he="_editorColorHex_k9un8_321",fe="_editorRange_k9un8_327",ye="_editorFooter_k9un8_333",be="_editorFooterActions_k9un8_343",Ce="_editorButton_k9un8_349",we="_editorButtonPrimary_k9un8_370",ke="_editorButtonSecondary_k9un8_379",_e="_editorButtonGhost_k9un8_389",n={editorFab:J,editorBackdrop:G,editorBackdropOpen:z,editorPanel:U,editorPanelOpen:X,editorHeader:K,editorTitle:Y,editorSubtitle:Q,editorModeBadge:$,editorCloseButton:ee,editorTabs:re,editorTab:te,editorTabActive:ne,editorBody:ae,editorSection:ie,editorSectionTitle:oe,editorField:le,editorLabel:se,editorToggleRow:de,editorToggleInput:ue,editorToggleSwitch:ce,editorInput:ge,editorTextarea:pe,editorColorRow:me,editorColor:ve,editorColorHex:he,editorRange:fe,editorFooter:ye,editorFooterActions:be,editorButton:Ce,editorButtonPrimary:we,editorButtonSecondary:ke,editorButtonGhost:_e},xe=":saved",qe=":draft";function R(r){return`${r}${xe}`}function M(r){return`${r}${qe}`}function F(r){if(!r||typeof r!="object")return{individual:{},team:{}};const e=r;return"individual"in e||"team"in e?{individual:e.individual??{},team:e.team??{}}:{individual:e,team:{}}}function Ae(r,e){return{overrides:F(r.overrides),visual:r.visual??e.visual,pageText:{...e.pageText??{},...r.pageText??{}},pageFlags:{...e.pageFlags??{},...r.pageFlags??{}}}}function Te(r,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(R(r));if(!a)return e;const i=JSON.parse(a);return{overrides:i.overrides===void 0?e.overrides:F(i.overrides),visual:{...e.visual,...i.visual??{}},pageText:{...e.pageText??{},...i.pageText??{}},pageFlags:{...e.pageFlags??{},...i.pageFlags??{}}}}catch{return e}}function Se(r,e){if(!(typeof window>"u"))try{window.localStorage.setItem(R(r),JSON.stringify(e))}catch{}}function Pe(r){if(!(typeof window>"u"))try{window.localStorage.removeItem(R(r))}catch{}}function Le(r,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(M(r));if(!a)return e;const i=JSON.parse(a);return{overrides:i.overrides===void 0?e.overrides:F(i.overrides),visual:{...e.visual,...i.visual??{}},pageText:{...e.pageText??{},...i.pageText??{}},pageFlags:{...e.pageFlags??{},...i.pageFlags??{}}}}catch{return e}}function Be(r,e){if(!(typeof window>"u"))try{window.localStorage.setItem(M(r),JSON.stringify(e))}catch{}}function L(r){if(!(typeof window>"u"))try{window.localStorage.removeItem(M(r))}catch{}}function Re(r,e){return r.badgeText===e.badgeText&&r.badgeBgColor===e.badgeBgColor&&r.borderColor===e.borderColor&&r.borderWidth===e.borderWidth&&(r.showCtaArrow??!0)===(e.showCtaArrow??!0)&&(r.badgeFontSize??null)===(e.badgeFontSize??null)&&(r.badgeFullWidth??null)===(e.badgeFullWidth??null)}function Me(r,e){return JSON.stringify(r)===JSON.stringify(e)}function Fe(r,e){return JSON.stringify(r??{})===JSON.stringify(e??{})}function Ie(r,e){return JSON.stringify(r??{})===JSON.stringify(e??{})}function B(r,e){return Re(r.visual,e.visual)&&Me(r.overrides,e.overrides)&&Fe(r.pageText,e.pageText)&&Ie(r.pageFlags,e.pageFlags)}const Ve={badgeText:"MOST POPULAR",badgeBgColor:"#C026D3",borderColor:"#C026D3",borderWidth:2},He={core:"Core",plus:"Plus",ultimate:"Ultimate",enterprise:"Enterprise"};function Ln(r){const e=r.variantId,a=h.useMemo(()=>({overrides:{individual:{},team:{}},visual:r.visualDefaults??Ve,pageText:r.pageTextDefaults??{},pageFlags:r.pageToggleDefaults??{}}),[r.visualDefaults,r.pageTextDefaults,r.pageToggleDefaults]),i=h.useMemo(()=>Ae(r.savedStateJson,a),[r.savedStateJson,a]),[o,u]=h.useState(i),[d,s]=h.useState(i),[C,b]=h.useState(!1),[w,k]=h.useState(r.cards[0]??"core"),[p,_]=h.useState("individual");h.useEffect(()=>{const x=Te(e,i);u(x);const P=Le(e,x);s(P)},[e,i]),h.useEffect(()=>{typeof window>"u"||(B(d,o)?L(e):Be(e,d))},[d,o,e]);const q=C?d:o,A=!B(d,o),T=!B(o,i);return{config:r,defaultDraft:a,baseline:i,active:q,draft:d,isDirty:A,hasSaved:T,open:C,selectedTab:w,mode:p,setMode:_,setOpen:b,setSelectedTab:k,setDraft:s,save:()=>{u(d),Se(e,d),L(e),b(!1)},cancel:()=>{s(o)},reset:()=>{typeof window<"u"&&!window.confirm("Reset this prototype to its original defaults?")||(u(i),s(i),Pe(e),L(e),b(!1))}}}function I(r,e){return e==="team"?r.cardDefaultsTeam??r.cardDefaults:r.cardDefaults}function m(r,e,a,i){const o=r.draft.overrides[e]?.[a]?.[i];return o??I(r.config,e)[a]?.[i]??""}function E(r,e,a){const i=r.draft.overrides[e]?.[a]?.features,o=I(r.config,e)[a]?.features??[];return i?o.map((u,d)=>i[d]??u):o}function D(r,e,a,i){const o=r.overrides[e]??{};return{...r,overrides:{...r.overrides,[e]:{...o,[a]:i}}}}function v(r,e,a,i,o){const d={...(r.overrides[e]??{})[a]??{},[i]:o};return D(r,e,a,d)}function Ne(r,e,a,i,o,u){const s=E(r,a,i).map((w,k)=>k===o?u:w),b={...(e.overrides[a]??{})[i]??{},features:s};return D(e,a,i,b)}function y(r,e){return{...r,visual:{...r.visual,...e}}}function j(r,e){const a=r.draft.pageText?.[e];return a??r.config.pageTextDefaults?.[e]??""}function O(r,e,a){return{...r,pageText:{...r.pageText??{},[e]:a}}}function je(r,e){const a=r.draft.pageFlags?.[e];return a??r.config.pageToggleDefaults?.[e]??!1}function Oe(r,e,a){return{...r,pageFlags:{...r.pageFlags??{},[e]:a}}}function Ee({editor:r}){const{config:e,draft:a,selectedTab:i,isDirty:o,hasSaved:u,open:d,mode:s}=r,C=e.pageTextFields??[],b=C.length>0,w=e.pageToggleFields??[],k=w.length>0,[p,_]=h.useState(!1),q=I(e,s)[i],A=e.visualTab??"core",T=!!e.showVisualControls&&i===A,V=e.visualSectionTitle??"Core highlight",S=E(r,s,i),H={...He,...e.cardLabels??{}},x=s==="team"?"Teams":"Individual",P=`${n.editorPanel} ${d?n.editorPanelOpen:""}`,Z=`${n.editorBackdrop} ${d?n.editorBackdropOpen:""}`,g=r.setDraft;return t.jsxs(t.Fragment,{children:[t.jsx("button",{"aria-expanded":d,"aria-label":"Open prototype editor",className:n.editorFab,onClick:()=>r.setOpen(!0),type:"button",children:t.jsx(N,{color:"inherit",height:28,name:"palette",width:28})}),t.jsx("div",{"aria-hidden":!d,className:Z,onClick:()=>r.setOpen(!1)}),t.jsxs("aside",{"aria-hidden":!d,"aria-label":e.title??"Prototype editor",className:P,role:"dialog",children:[t.jsxs("header",{className:n.editorHeader,children:[t.jsxs("div",{children:[t.jsx("h2",{className:n.editorTitle,children:e.title??"Edit prototype"}),t.jsx("p",{className:n.editorSubtitle,children:e.subtitle??"Live changes preview instantly. Save to persist."}),t.jsxs("p",{className:n.editorModeBadge,children:["Editing ",t.jsx("strong",{children:x})," mode"]})]}),t.jsx("button",{"aria-label":"Close editor",className:n.editorCloseButton,onClick:()=>r.setOpen(!1),type:"button",children:t.jsx(N,{color:"inherit",height:20,name:"clear",width:20})})]}),t.jsxs("div",{className:n.editorTabs,role:"tablist",children:[e.cards.map(l=>t.jsx("button",{"aria-selected":!p&&i===l,className:`${n.editorTab} ${!p&&i===l?n.editorTabActive:""}`,onClick:()=>{_(!1),r.setSelectedTab(l)},role:"tab",type:"button",children:H[l]},l)),b&&t.jsx("button",{"aria-selected":p,className:`${n.editorTab} ${p?n.editorTabActive:""}`,onClick:()=>_(!0),role:"tab",type:"button",children:"Page text"})]}),t.jsxs("div",{className:n.editorBody,children:[k&&t.jsxs("section",{className:n.editorSection,children:[t.jsx("h3",{className:n.editorSectionTitle,children:"Design"}),w.map(l=>t.jsxs("label",{className:n.editorToggleRow,children:[t.jsx("input",{checked:je(r,l.key),className:n.editorToggleInput,onChange:f=>g(Oe(a,l.key,f.target.checked)),type:"checkbox"}),t.jsx("span",{"aria-hidden":"true",className:n.editorToggleSwitch}),t.jsx("span",{className:n.editorLabel,children:l.label})]},l.key))]}),p&&b&&t.jsxs("section",{className:n.editorSection,children:[t.jsx("h3",{className:n.editorSectionTitle,children:"Page text"}),C.map(l=>t.jsx(c,{label:l.label,children:l.multiline?t.jsx("textarea",{className:`${n.editorInput} ${n.editorTextarea}`,onChange:f=>g(O(a,l.key,f.target.value)),rows:3,value:j(r,l.key)}):t.jsx("input",{className:n.editorInput,onChange:f=>g(O(a,l.key,f.target.value)),type:"text",value:j(r,l.key)})},l.key))]}),!p&&t.jsx(De,{cardDefaults:q,cardKey:i,draft:a,editor:r,mode:s,onChange:g}),!p&&S.length>0&&t.jsxs("section",{className:n.editorSection,children:[t.jsx("h3",{className:n.editorSectionTitle,children:"Features"}),S.map((l,f)=>t.jsx(c,{label:`Feature ${f+1}`,children:t.jsx("textarea",{className:`${n.editorInput} ${n.editorTextarea}`,onChange:W=>g(Ne(r,a,s,i,f,W.target.value)),rows:2,value:l})},`${i}-feature-${f}`))]}),!p&&T&&t.jsxs("section",{className:n.editorSection,children:[t.jsx("h3",{className:n.editorSectionTitle,children:V}),t.jsx(c,{label:"Badge text",children:t.jsx("input",{className:n.editorInput,onChange:l=>g(y(a,{badgeText:l.target.value})),type:"text",value:a.visual.badgeText})}),t.jsx(c,{label:`Badge font size: ${a.visual.badgeFontSize??12}px`,children:t.jsx("input",{className:n.editorRange,max:24,min:9,onChange:l=>g(y(a,{badgeFontSize:Number(l.target.value)})),step:1,type:"range",value:a.visual.badgeFontSize??12})}),t.jsxs("label",{className:n.editorToggleRow,children:[t.jsx("input",{checked:a.visual.badgeFullWidth??!1,className:n.editorToggleInput,onChange:l=>g(y(a,{badgeFullWidth:l.target.checked})),type:"checkbox"}),t.jsx("span",{"aria-hidden":"true",className:n.editorToggleSwitch}),t.jsx("span",{className:n.editorLabel,children:"Full-width banner (off = pill)"})]}),t.jsx(c,{label:"Badge background",children:t.jsxs("div",{className:n.editorColorRow,children:[t.jsx("input",{"aria-label":"Badge background color picker",className:n.editorColor,onChange:l=>g(y(a,{badgeBgColor:l.target.value})),type:"color",value:a.visual.badgeBgColor}),t.jsx("input",{className:`${n.editorInput} ${n.editorColorHex}`,onChange:l=>g(y(a,{badgeBgColor:l.target.value})),type:"text",value:a.visual.badgeBgColor})]})}),t.jsx(c,{label:"Border color",children:t.jsxs("div",{className:n.editorColorRow,children:[t.jsx("input",{"aria-label":"Border color picker",className:n.editorColor,onChange:l=>g(y(a,{borderColor:l.target.value})),type:"color",value:a.visual.borderColor}),t.jsx("input",{className:`${n.editorInput} ${n.editorColorHex}`,onChange:l=>g(y(a,{borderColor:l.target.value})),type:"text",value:a.visual.borderColor})]})}),t.jsx(c,{label:`Border thickness: ${a.visual.borderWidth}px`,children:t.jsx("input",{className:n.editorRange,max:6,min:1,onChange:l=>g(y(a,{borderWidth:Number(l.target.value)})),step:1,type:"range",value:a.visual.borderWidth})}),e.showCtaArrowToggle&&t.jsxs("label",{className:n.editorToggleRow,children:[t.jsx("input",{checked:a.visual.showCtaArrow??!0,className:n.editorToggleInput,onChange:l=>g(y(a,{showCtaArrow:l.target.checked})),type:"checkbox"}),t.jsx("span",{"aria-hidden":"true",className:n.editorToggleSwitch}),t.jsx("span",{className:n.editorLabel,children:"Trailing arrow on CTA"})]})]})]}),t.jsxs("footer",{className:n.editorFooter,children:[t.jsx("button",{className:`${n.editorButton} ${n.editorButtonGhost}`,disabled:!u&&!o,onClick:r.reset,type:"button",children:"Reset to defaults"}),t.jsxs("div",{className:n.editorFooterActions,children:[t.jsx("button",{className:`${n.editorButton} ${n.editorButtonSecondary}`,disabled:!o,onClick:r.cancel,type:"button",children:"Cancel"}),t.jsx("button",{className:`${n.editorButton} ${n.editorButtonPrimary}`,disabled:!o,onClick:r.save,type:"button",children:"Save"})]})]})]})]})}function De({cardDefaults:r,cardKey:e,draft:a,editor:i,mode:o,onChange:u}){const d=s=>r?.[s]!=null;return t.jsxs("section",{className:n.editorSection,children:[t.jsx("h3",{className:n.editorSectionTitle,children:"Card copy"}),d("name")&&t.jsx(c,{label:"Plan name",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"name",s.target.value)),type:"text",value:m(i,o,e,"name")})}),d("originalPrice")&&t.jsx(c,{label:"Original price (strikethrough)",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"originalPrice",s.target.value)),type:"text",value:m(i,o,e,"originalPrice")})}),d("annualPrice")&&t.jsx(c,{label:"Annual price (per month)",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"annualPrice",s.target.value)),type:"text",value:m(i,o,e,"annualPrice")})}),d("monthlyPrice")&&t.jsx(c,{label:"Monthly price",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"monthlyPrice",s.target.value)),type:"text",value:m(i,o,e,"monthlyPrice")})}),d("cadence")&&t.jsx(c,{label:"Cadence",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"cadence",s.target.value)),type:"text",value:m(i,o,e,"cadence")})}),d("billingLine")&&t.jsx(c,{label:"Billing line",children:t.jsx("textarea",{className:`${n.editorInput} ${n.editorTextarea}`,onChange:s=>u(v(a,o,e,"billingLine",s.target.value)),rows:2,value:m(i,o,e,"billingLine")})}),d("description")&&t.jsx(c,{label:"Description",children:t.jsx("textarea",{className:`${n.editorInput} ${n.editorTextarea}`,onChange:s=>u(v(a,o,e,"description",s.target.value)),rows:3,value:m(i,o,e,"description")})}),d("cta")&&t.jsx(c,{label:"CTA label",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"cta",s.target.value)),type:"text",value:m(i,o,e,"cta")})}),d("footer")&&t.jsx(c,{label:"Footer note",children:t.jsx("textarea",{className:`${n.editorInput} ${n.editorTextarea}`,onChange:s=>u(v(a,o,e,"footer",s.target.value)),rows:3,value:m(i,o,e,"footer")})}),d("learnMore")&&t.jsx(c,{label:"Learn more link text",children:t.jsx("input",{className:n.editorInput,onChange:s=>u(v(a,o,e,"learnMore",s.target.value)),type:"text",value:m(i,o,e,"learnMore")})})]})}function c({children:r,label:e}){return t.jsxs("label",{className:n.editorField,children:[t.jsx("span",{className:n.editorLabel,children:e}),r]})}Ee.__docgenInfo={description:"",methods:[],displayName:"EditorPanel",props:{editor:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
Optional so variants that don't opt into page toggles are unaffected.`}]},required:!0},name:"d"}],return:{name:"void"}},required:!0}},{key:"save",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"cancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"reset",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""}}};const Bn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Logo'%20width='105'%20height='24'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20280.28%2064'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23191919;%20}%20.cls-1,%20.cls-2%20{%20stroke-width:%200px;%20}%20.cls-2%20{%20fill:%20%2387e64b;%20}%20%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20class='cls-1'%20d='M76.34,12.52c9.59,0,18.97,5.65,18.97,18.25,0,1-.05,2.55-.16,3.64-.03.25-.24.44-.49.44h-26.9c.79,4.51,3.94,7.44,8.88,7.44,3.28,0,5.37-1.81,6.5-3.97.14-.27.45-.41.75-.35l10.06,2.19c.31.07.47.4.34.69-2.35,5.33-7.7,10.61-17.73,10.61-13.17,0-20.19-8.59-20.19-19.47s7.3-19.47,19.97-19.47ZM84.07,27.98c-.5-4.29-3.36-6.59-7.52-6.59-5.44,0-7.73,2.79-8.59,6.59h16.11Z'/%3e%3cpath%20class='cls-1'%20d='M98.75,49.82V14.16c0-.27.22-.49.49-.49h10.47c.27,0,.49.22.49.49v4.23c2.51-3.94,6.23-5.87,11.02-5.87,7.01,0,13.03,4.8,13.03,15.53v21.77c0,.27-.22.49-.49.49h-10.47c-.27,0-.49-.22-.49-.49v-20.12c0-4.8-2.51-7.44-6.16-7.44-3.94,0-6.44,2.58-6.44,8.45v19.12c0,.27-.22.49-.49.49h-10.47c-.27,0-.49-.22-.49-.49Z'/%3e%3cpath%20class='cls-1'%20d='M134.95,13.66h11.1c.22,0,.41.14.47.35l8.34,27.64,8.34-27.64c.06-.21.25-.35.47-.35h11.1c.34,0,.58.34.46.66l-12.77,35.53c-.1.27-.36.46-.65.46h-13.92c-.29,0-.55-.18-.65-.46l-12.77-35.53c-.12-.32.12-.66.46-.66Z'/%3e%3cpath%20class='cls-1'%20d='M199.53,49.82v-5.59c-1.79,3.72-5.8,7.23-12.03,7.23-7.23,0-12.6-4.58-12.6-11.02,0-6.8,4.51-11.88,14.39-11.88h5.73c3.15,0,4.01-2.29,3.72-3.79-.43-2.58-2.72-3.94-5.94-3.94-4.07,0-6.53,2.25-6.84,5.34-.03.28-.29.48-.57.44l-9.71-1.62c-.27-.04-.46-.3-.41-.57,1.58-8.45,9.59-11.89,17.81-11.89s17.32,2,17.32,17.18v20.12c0,.27-.22.49-.49.49h-9.9c-.27,0-.49-.22-.49-.49ZM190.87,43.16c4.58,0,7.73-3.44,8.09-7.73h-6.94c-4.22,0-5.73,1.72-5.65,4.08.07,2.51,2.08,3.65,4.51,3.65Z'/%3e%3cpath%20class='cls-1'%20d='M212.13,22.33v-8.18c0-.27.22-.49.49-.49h4.09c1.9,0,3.44-1.54,3.44-3.44V3.85c0-.27.22-.49.49-.49h9.32c.27,0,.49.22.49.49v9.81h7.52c.27,0,.49.22.49.49v8.18c0,.27-.22.49-.49.49h-7.52v13.24c0,4.31,3.67,6.07,7.5,4.71.25-.09.52.1.52.37v8.63c0,.32-.21.6-.52.67-.99.23-2.36.44-3.99.44-8.88,0-14.96-3.01-14.96-15.89v-12.17h-6.38c-.27,0-.49-.22-.49-.49Z'/%3e%3cpath%20class='cls-1'%20d='M280.28,31.99c0,10.74-7.59,19.47-20.04,19.47s-20.04-8.73-20.04-19.47,7.59-19.47,20.04-19.47,20.04,8.73,20.04,19.47ZM268.82,31.99c0-5.3-2.93-9.73-8.59-9.73s-8.59,4.44-8.59,9.73,2.93,9.73,8.59,9.73,8.59-4.44,8.59-9.73Z'/%3e%3c/g%3e%3cg%3e%3ccircle%20class='cls-2'%20cx='25.56'%20cy='61.14'%20r='2.86'/%3e%3cpath%20class='cls-2'%20d='M42,41.64l-16.13,1.73c-.3.03-.45-.34-.21-.53l15.78-12.29c1.02-.84,1.68-2.14,1.4-3.54-.28-2.14-2.05-3.54-4.29-3.26l-17.15,2.51c-.3.04-.46-.34-.22-.53l17-12.98c3.35-2.61,3.63-7.73.56-10.71-2.79-2.79-7.27-2.7-10.06.09L1.29,30c-1.02,1.12-1.49,2.61-1.21,4.19.47,2.52,2.98,4.19,5.5,3.73l14.77-3.01c.32-.07.49.36.22.54l-16.38,10.49c-2.05,1.3-2.98,3.63-2.33,5.96.65,3.07,3.73,4.84,6.71,4.1l24.49-6.03c.28-.07.48.25.3.47l-3.82,4.72c-1.02,1.3.65,3.07,2.05,2.05l12.58-10.34c2.24-1.86.75-5.5-2.14-5.22Z'/%3e%3c/g%3e%3c/svg%3e",Rn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAgCAYAAACRiqPIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABNdJREFUeAHtmv9x2zoMx7/v3fu/2uChE9QbhJ2g6QRRJ0g6gZUJ6kxgZYImE1idIN7A2sDpBG1wps4QBFJ0bSf2lZ87XkSCBCAIEn84QCaTyWQymUwmk8lkMpl0fqlCSr5ScqfkC0NHrJR+HKn2Of5edAxLHJ9S2azwivyLTOYEyImYOQn+w/G5eykPEfkSmb+e10hETrQGh6XAZm1a+HobsEGq3sImpd/EF+bZ91nuqI/9vRQ6Gv/30LCdifeD9S+9DwW2Met8GLMvfW69rpQxDv3nkzKux6E3KyXSIIxvVgjhzRD7NR3xxRk6J6rPQsmvX8o6YvPS0GnZnRp6LJ+t8SXSCfn7DcMNyVyM07IqomsasE2Ib1bnGOZTkFNNRE6YUELsElzNTcTfaYI9LldKp47BYmS8GxlfIo3rETsrpMdqNaJrqmxTwphOb4EETjURpV1OyEs/hhP0e8BmgX7yLgy72l/y7U61P/k28n+1P0VEZzf+xhcdw8WITyXGIdhf3JkvVpLIGJeGfO3HVoHxToyfK9mNjwkZ91MhgUMnYqzIB0BID1KpbMYSTvuj38bUcaTGOQwDHxq7UnYJw1ggMr7EOGWCTZ2osRhb96xf+JmQrZVtiVPjHpT8bI5vPqm6vhFeBD+KusP2ITyqvpNAP9m3W2x3NBhuYBr0F98OYe5U3xZDfYT9uFL1L4bNO6RTY+jjrarL51KoaxL15qX8I8pgXf0au+ZDQOKag2ttEN4ZY3inVmOzUO/gsY24lnQJPlHtbLNEnA8RmbW7brF/8kkI4zYbhDcamh9GW7f7JsMmy7q4cSI+eXuPsF/kHm99jpi6nZeJwTc5TxhD2B4ZNNh+sS5EH5k8XZAtLmEnP5RfbwmJ69CxTIt0Qn2fDbvc9x7D5yTjxvHlXKgtped6jpiCnnKdv54ImRN97sU1YT97b03qC35I3TMv4y8uGXKO+9zLP0Il+rlMzXyDhbj+nDBGTk01htOzDqj8ardKdo/Am3xCyBhRoM8uL0uR2C7jWPvisIkxzz56mUPYJORH2XiOicg02A09PXNw5JpST8utGv8Lb/NV3wUdI8J+G6JQX2v9rGmwjRdhs76eRnScza5ZLpy7n680fLSwEoWUXO6eebfnAvqZFv0AW/ZI2UtZtx4TfQ+l0ecT0rH6lqre+L8cn4UolejT+nor2gZf29f4IvKxwkVEztNegzg1+scTfC2nXkJ/M9Fi+DWosZ2eyZBZfl37aw60Q9/PK6XnJ47HWAz5qOYB/Rix70tslxxcL5GOw+Yrdqvqkm5d/Yz+i83xqkS9QD/5lkhg7FBzhcMdaMvDWkL4sNXS2715nFxrpB0AW76tAn0J9gFwBfvAmiJ2XIIvNOJnrHSsDNka4Z9GZYzLQJ91QO/YPbP8xpcn7H5Af7KJSEj7LbNCmMroP4v056/s2O/bLJ+MxMAZuo+RiOxHLEb6l5G5GFsafdc73DNhj+djTc21quvFKK+13o3IW6TTCj21aLfWbe+xCdgV+scwrbfL01CDMJx0/6u2OtKf9fE0wm/1Bfr/Brb0PnbHFhIdA2tBH+uzaww72CfejVbYnJFOhK+3GK59ZYxZVisfvnpdvF4ssI3zDEP/Wm/b4c+fTyaTyWQymUwmk8lkMpkBvwEp/hHiEpB9uwAAAABJRU5ErkJggg==",Mn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='flux%201'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2027.5773L16.0133%203.33333L32%2027.5773H29.0227L16.012%207.83733L4.628%2025.0747H20.7907L22.4427%2027.5773H0Z'%20fill='var(--fill-0,%20black)'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.7587%2022.2987L13.5227%2018.1453L16.288%2022.2987H10.7587ZM24.32%2027.5773L16.7627%2015.968H19.6653L27.2467%2027.5773H24.32ZM26.32%2015.568L29.16%2011.3147L32%2015.568H26.32Z'%20fill='var(--fill-0,%20black)'/%3e%3c/g%3e%3c/svg%3e",Fn="/Pepe-design-playground-storybook-public/assets/logo_minimax-CT_5bC2C.svg",In="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%3e%3cpath%20d='M24%2012.2727C24%2011.4218%2023.9221%2010.6036%2023.7774%209.81818H12.2449V14.4655H18.8349C18.5455%2015.96%2017.6772%2017.2255%2016.3748%2018.0764V21.0982H20.3488C22.6642%2019.0036%2024%2015.9273%2024%2012.2727Z'%20fill='%23191919'/%3e%3cpath%20d='M12.2449%2024C15.551%2024%2018.3228%2022.9309%2020.3488%2021.0982L16.3748%2018.0764C15.2839%2018.7964%2013.8924%2019.2327%2012.2449%2019.2327C9.06122%2019.2327%206.35622%2017.1273%205.38776%2014.2909H1.31354V17.3891C3.32839%2021.3055%207.45826%2024%2012.2449%2024Z'%20fill='%23191919'/%3e%3cpath%20d='M5.38776%2014.28C5.14286%2013.56%204.99814%2012.7964%204.99814%2012C4.99814%2011.2036%205.14286%2010.44%205.38776%209.72V6.62182H1.31354C0.478664%208.23636%200%2010.0582%200%2012C0%2013.9418%200.478664%2015.7636%201.31354%2017.3782L4.48609%2014.9564L5.38776%2014.28Z'%20fill='%23191919'/%3e%3cpath%20d='M12.2449%204.77818C14.0482%204.77818%2015.6512%205.38909%2016.9314%206.56727L20.4378%203.13091C18.3117%201.18909%2015.551%200%2012.2449%200C7.45826%200%203.32839%202.69455%201.31354%206.62182L5.38776%209.72C6.35622%206.88364%209.06122%204.77818%2012.2449%204.77818Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/g%3e%3c/svg%3e",Vn="data:image/png;base64,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",Hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAgCAYAAAABmdoHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABG5JREFUeAHtm7+PHDUUx78gJIoUHAVISEH4SqAg9AhMBzQXBDUMFemySJRIt0iIEpK/IBOQEAWIu44uk9SRcl3Km0hJlUi5FKkTf2WP1vvG89tzuzn5I301Y8+zd273zXv22z0gkUgkEolEInFW+djoGyQShlcQl/eMvjJ61+gW4rBjtBB9pVGORF+0k+TE6AraWY4YMwtvGF0y+svTJcRBGT0TuoHEEO6g/h5W0h1jpf0xBjI1kp0z+szpHBLbiDK60HJdGxWYkZcxHq67foVNj8nBtpeLHde/xcyMiWT+uiux/UgnKmGjW4VyKjETYyLZ90gORrghYRrS7rwJ5WzaUpactxqjse4QQ1GB1/0hYJdhRqakyxeBY6GmD/o/YcfdrA6MV24Objwewy6oq/PfsXI2Hvdd/7GzuePOs4Z70M7u2Bvjt69huMPJVFkYHcDuEH0+wYzELmFsG0q0myLOjrDdaRhPB7vWMM/C2TNS3EDYIZQ33i8D0CGXaIbjMlhH/BT9U9ueaF93x0Osp1GNGVPmWY9ksWlysApGDkYshXb2vXkyhGtRJeoRR7l76ANttegr3DEP2GeYieRkw6BjFEbfGX2JVWSQNuSqs6HKgE2VyvbFNc656/S6m8dHo93RfTufI+8+eH5qKTM52TBy2HTFI9c2GcI1JqbMhbOhPkQ4Ksk0TZbCdlmfvrOASuSu8tA75/xHgTn7OO9g5nIyfgPwNWyp4yxxNdB3U7RDX7tU6c/nHdf/klDZY2yXMyjUHfFAtA8D4zLMQOyF/2tG593xIayTsWj7L+J9l7lJTibYdI2tSiLUB4FrQ9CiXaIeuXLYHbEPNwryAZlMLCd71ehtozcD16rvNT83+g3W+RIr6ECXYdNrrHQVquIvA30n4jW1a/d5mHoz1ck4/i2nrrmYHphuGNEY2ZKzWVjuCNXvSu9coT+01YG+ffQjQ+RoNmVNxgjFsM4INsRZmT5/wtlbr40hw7qDMYJw58pd5a6nEv3RmMYeIjMmknG99b47joUOuon1mmrov4DNINMaF+d5wG5IGpVznqA9/SnR1oicMsdEMkahB4jHIwyn2vq3iTalGBdaq/iF0U3zJNB3Ef3vT6EeyVhO2W1RaMecISJjItl9oy9gSxRcrJ7HcJ4a/e/0FMNh5On68RzTDssLyuvTsBX5qoi6h+npZQr3RJsPAaNZ6bUX6I8O9B10jOH1y6Iv6i5zysL/H6cFhr0RdCymyDHONZQc9ehVlQkqqnSicPrkWL8/Rqwpv/qVf2uB7rRX2cy2y4xRjKXHfwTrcG3cNfrF6A+cjoORwujnluvVQrvEZijQfn9w10t0o1CPZNfRj1kLs7HqZEyhP8I63N9YT6EsVfxpdBvjoCPkGE7pjkvYD5MpQWH1xPKNvYLVj/hKb+wRwv+sEnqyj4Rd09N/KF7jpnd/7N8T91fAOknh+vyNVhmYfwf1+y3QD74Pzxqu5aIdbUMwFa7X6Fjpp9mJRCKRSCQSicQW8BwWrPXPiK8L/QAAAABJRU5ErkJggg==",Nn="data:image/png;base64,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",jn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-media-&%2338;-editing-/-palette'%3e%3cpath%20id='Icon-color'%20d='M12.9067%203.57333L11.8067%202.47333C11.5049%202.17005%2011.0945%201.99969%2010.6667%202C9.93029%202%209.33333%202.59695%209.33333%203.33333V4.39333C9.3322%204.66296%209.16877%204.90536%208.91923%205.00751C8.6697%205.10966%208.38321%205.05144%208.19333%204.86L8.11333%204.78C7.61281%204.28003%206.93412%203.99944%206.22667%204H5.33333C3.12419%204%201.33333%205.79086%201.33333%208V8.66667C1.33333%2011.6122%203.72115%2014%206.66667%2014H9.33333C10.7478%2014%2012.1044%2013.4381%2013.1046%2012.4379C14.1048%2011.4377%2014.6667%2010.0812%2014.6667%208.66667V7.82C14.667%206.22693%2014.0338%204.69911%2012.9067%203.57333ZM4.33333%209.33333C3.78105%209.33333%203.33333%208.88562%203.33333%208.33333C3.33333%207.78105%203.78105%207.33333%204.33333%207.33333C4.88562%207.33333%205.33333%207.78105%205.33333%208.33333C5.33333%208.88562%204.88562%209.33333%204.33333%209.33333ZM6.33333%2012C5.78105%2012%205.33333%2011.5523%205.33333%2011C5.33333%2010.4477%205.78105%2010%206.33333%2010C6.88562%2010%207.33333%2010.4477%207.33333%2011C7.33333%2011.5523%206.88562%2012%206.33333%2012ZM9.66667%2012C9.11438%2012%208.66667%2011.5523%208.66667%2011C8.66667%2010.4477%209.11438%2010%209.66667%2010C10.219%2010%2010.6667%2010.4477%2010.6667%2011C10.6667%2011.5523%2010.219%2012%209.66667%2012ZM11.6667%209.33333C11.1144%209.33333%2010.6667%208.88562%2010.6667%208.33333C10.6667%207.78105%2011.1144%207.33333%2011.6667%207.33333C12.219%207.33333%2012.6667%207.78105%2012.6667%208.33333C12.6667%208.88562%2012.219%209.33333%2011.6667%209.33333Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",On="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2013.3333%2013.3333'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='stylus_fountain_pen_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24%201'%20clip-path='url(%23clip0_0_320)'%3e%3cpath%20id='Union'%20d='M9.75%2011.5C9.99051%2011.5%2010.208%2011.5693%2010.4023%2011.708C10.5967%2011.8469%2010.7316%2012.0323%2010.8057%2012.2637L11.1113%2013.333H2.22168L2.52734%2012.2637C2.60143%2012.0323%202.73628%2011.8469%202.93066%2011.708C3.12497%2011.5693%203.34248%2011.5%203.58301%2011.5H9.75ZM11.7773%205.38867L9.90234%2011.0557H3.43066L1.55566%205.38867L6.66602%200.555664L11.7773%205.38867ZM7.33301%205.5127C7.73144%205.74326%208%206.17355%208%206.66699C7.99982%207.40311%207.40311%207.99982%206.66699%208C5.93072%208%205.33318%207.40322%205.33301%206.66699C5.33301%206.17365%205.6017%205.7433%206%205.5127V3.35547L3.45801%205.76367L4.97168%209.94434H8.36133L9.875%205.76367L7.33301%203.35547V5.5127Z'%20fill='var(--fill-0,%20%231F1F1F)'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_320'%3e%3crect%20width='13.3333'%20height='13.3333'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",En="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-audiovisual-/-music'%3e%3cpath%20id='Icon-color'%20d='M12%206.82471V7.66437C12%207.84839%2011.8508%207.99757%2011.6667%207.99757H11C10.8159%207.99757%2010.6667%207.84839%2010.6667%207.66437V7.48444C10.6505%206.81551%2010.2657%206.21031%209.66667%205.91175C9.54667%205.84511%209.44%205.76514%209.33333%205.69184V11.6894C9.21988%2013.0551%208.03502%2014.0796%206.66667%2013.9951C5.28871%2014.0791%204.09971%2013.0391%204%2011.6627C4.09971%2010.2864%205.28871%209.24644%206.66667%209.33036C7.13104%209.32939%207.58867%209.44146%208%209.65689V2.3332C8%202.14918%208.14924%202%208.33333%202H9C9.18409%202%209.33333%202.14918%209.33333%202.3332V2.44649C9.3194%203.12128%209.68862%203.74586%2010.2867%204.05916C11.3381%204.57956%2012.0025%205.6519%2012%206.82471Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Dn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-other-/-cube'%3e%3cpath%20id='Icon-color'%20d='M13.82%204.74667L13.7267%204.58C13.6063%204.37846%2013.4365%204.21095%2013.2333%204.09333L8.76%201.51333C8.55744%201.39583%208.32751%201.33375%208.09333%201.33333H7.9C7.66583%201.33375%207.43589%201.39583%207.23333%201.51333L2.76%204.1C2.55798%204.21684%202.39017%204.38465%202.27333%204.58667L2.18%204.75333C2.0625%204.95589%202.00042%205.18583%202%205.42V10.5867C2.00042%2010.8208%202.0625%2011.0508%202.18%2011.2533L2.27333%2011.42C2.39319%2011.6197%202.56032%2011.7868%202.76%2011.9067L7.24%2014.4867C7.44154%2014.6066%207.67215%2014.6689%207.90667%2014.6667H8.09333C8.32751%2014.6663%208.55744%2014.6042%208.76%2014.4867L13.2333%2011.9C13.4374%2011.7858%2013.6058%2011.6174%2013.72%2011.4133L13.82%2011.2467C13.9361%2011.0435%2013.9981%2010.814%2014%2010.58V5.41333C13.9996%205.17916%2013.9375%204.94923%2013.82%204.74667ZM7.9%202.66667H8.09333L12%204.92L8%207.22667L4%204.92L7.9%202.66667ZM12.5667%2010.7467L8.66667%2013V8.38667L12.6667%206.07333V10.58L12.5667%2010.7467Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Zn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-media-&%2338;-editing-/-canvas_graphics'%3e%3cpath%20id='Icon-color'%20d='M14.3333%2010.6667H14V4C14%203.26362%2013.403%202.66667%2012.6667%202.66667H8.66667V1.66667C8.66667%201.48257%208.51743%201.33333%208.33333%201.33333H7.66667C7.48257%201.33333%207.33333%201.48257%207.33333%201.66667V2.66667H3.33333C2.59695%202.66667%202%203.26362%202%204V10.6667H1.66667C1.48257%2010.6667%201.33333%2010.8159%201.33333%2011V11.6667C1.33333%2011.8508%201.48257%2012%201.66667%2012H4.87333L3.42667%2014.0667C3.36719%2014.1505%203.33464%2014.2505%203.33333%2014.3533V14.5C3.33333%2014.592%203.40795%2014.6667%203.5%2014.6667H4.28667C4.50482%2014.6663%204.70899%2014.5592%204.83333%2014.38L6.5%2012H9.5L11.1667%2014.38C11.291%2014.5592%2011.4952%2014.6663%2011.7133%2014.6667H12.5C12.592%2014.6667%2012.6667%2014.592%2012.6667%2014.5V14.3533C12.6654%2014.2505%2012.6328%2014.1505%2012.5733%2014.0667L11.1267%2012H14.3333C14.5174%2012%2014.6667%2011.8508%2014.6667%2011.6667V11C14.6667%2010.8159%2014.5174%2010.6667%2014.3333%2010.6667ZM12.6667%2010.24C12.6667%2010.4756%2012.4756%2010.6667%2012.24%2010.6667C12.111%2010.664%2011.9895%2010.6056%2011.9067%2010.5067L9.46%207.46C9.39673%207.38114%209.3011%207.33526%209.2%207.33526C9.0989%207.33526%209.00327%207.38114%208.94%207.46L7.41333%209.38C7.35019%209.46136%207.25299%209.50896%207.15%209.50896C7.04701%209.50896%206.94981%209.46136%206.88667%209.38L6.22%208.47333C6.15567%208.38927%206.05585%208.33997%205.95%208.33997C5.84415%208.33997%205.74433%208.38927%205.68%208.47333L4.19333%2010.4733C4.09891%2010.5992%203.95071%2010.6733%203.79333%2010.6733C3.67335%2010.6828%203.55497%2010.6411%203.46736%2010.5585C3.37976%2010.476%203.33108%2010.3603%203.33333%2010.24L3.33326%204H12.6667V10.24ZM6.33333%207.33333C6.88562%207.33333%207.33333%206.88562%207.33333%206.33333C7.33333%205.78105%206.88562%205.33333%206.33333%205.33333C5.78105%205.33333%205.33333%205.78105%205.33333%206.33333C5.33333%206.88562%205.78105%207.33333%206.33333%207.33333Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Wn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-devices-/-video_camera'%3e%3cpath%20id='Icon-color'%20d='M14.3333%204.66667H14.2733C14.0984%204.6674%2013.9308%204.73684%2013.8067%204.86L12%206.66667V4.66667C12%203.93029%2011.403%203.33333%2010.6667%203.33333H2.66667C1.93029%203.33333%201.33333%203.93029%201.33333%204.66667V11.3333C1.33333%2012.0697%201.93029%2012.6667%202.66667%2012.6667H10.6667C11.403%2012.6667%2012%2012.0697%2012%2011.3333V9.33333L13.8067%2011.14C13.9308%2011.2632%2014.0984%2011.3326%2014.2733%2011.3333H14.3333C14.5174%2011.3333%2014.6667%2011.1841%2014.6667%2011V5C14.6667%204.8159%2014.5174%204.66667%2014.3333%204.66667ZM3.66667%207.25333C3.48257%207.25333%203.33333%207.10409%203.33333%206.92V6.41333C3.33333%206.22924%203.48257%206.08%203.66667%206.08H6.33333C6.51743%206.08%206.66667%206.22924%206.66667%206.41333V6.92C6.66667%207.10409%206.51743%207.25333%206.33333%207.25333H3.66667Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Jn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2013.333%2011.667'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Subtract'%20d='M6%202.66602L7.66699%202.66699L6.33301%200H8L9.33301%202.66699H11L9.66602%200H12C12.1839%200%2012.3592%200.0371489%2012.5186%200.104492C12.7183%200.188897%2012.8933%200.32044%2013.0293%200.485352C13.1378%200.616914%2013.2215%200.769754%2013.2734%200.936523C13.2864%200.978332%2013.2977%201.02099%2013.3066%201.06445C13.3244%201.15117%2013.333%201.24104%2013.333%201.33301V9.33301C13.333%209.44843%2013.3166%209.56018%2013.2891%209.66699H13.333V10.333C13.333%2011.0694%2012.7364%2011.667%2012%2011.667H1.33301C0.596777%2011.6668%200%2011.0693%200%2010.333V9.66699H0.0439453C0.0163951%209.56022%200%209.44839%200%209.33301V1.33301C0.000176576%200.596887%200.596887%200.000175889%201.33301%200L2.66699%202.66699H4.16699L2.83301%200H4.66699L6%202.66602ZM2%209.66699H11.333V4H2V9.66699Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/svg%3e",Gn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-media-&%2338;-editing-/-bold'%3e%3cpath%20id='Icon-color'%20d='M11%207.26667C11.2147%206.87872%2011.3293%206.44337%2011.3333%206V5.33333C11.3333%203.86057%2010.1394%202.66667%208.66667%202.66667H4.66667C4.29848%202.66667%204%202.96514%204%203.33333V12C4%2012.3682%204.29848%2012.6667%204.66667%2012.6667H9.33333C10.8061%2012.6667%2012%2011.4728%2012%2010V9.33333C11.9955%208.52887%2011.628%207.76945%2011%207.26667ZM8.66667%204.66667C9.03486%204.66667%209.33333%204.96514%209.33333%205.33333V6C9.33333%206.36819%209.03486%206.66667%208.66667%206.66667H6V4.66667H8.66667ZM10%2010C10%2010.3682%209.70152%2010.6667%209.33333%2010.6667H6V8.66667H9.33333C9.70152%208.66667%2010%208.96514%2010%209.33333V10Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",zn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-media-&%2338;-editing-/-image'%3e%3cpath%20id='Icon-color'%20d='M4%204.66667C4%203.93029%204.59695%203.33333%205.33333%203.33333C6.06971%203.33333%206.66667%203.93029%206.66667%204.66667C6.66667%205.40305%206.06971%206%205.33333%206C4.59695%206%204%205.40305%204%204.66667ZM14.5333%2011.1533L10.5333%205.82C10.4373%205.69654%2010.2897%205.62432%2010.1333%205.62432C9.97695%205.62432%209.82932%205.69654%209.73333%205.82L7.06667%209.26667C7.0034%209.34552%206.90777%209.39141%206.80667%209.39141C6.70557%209.39141%206.60993%209.34552%206.54667%209.26667L5.08667%207.49333C4.99177%207.37505%204.84831%207.30622%204.69667%207.30622C4.54502%207.30622%204.40156%207.37505%204.30667%207.49333L1.47333%2011.1533C1.38302%2011.2697%201.33379%2011.4127%201.33333%2011.56V12.1667C1.33692%2012.4413%201.55869%2012.6631%201.83333%2012.6667H14.1667C14.4413%2012.6631%2014.6631%2012.4413%2014.6667%2012.1667V11.5533C14.6667%2011.4091%2014.6199%2011.2687%2014.5333%2011.1533Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Un="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%207.49308%2013.3334'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-GenAI-/-GraphicGen'%3e%3cpath%20id='Line%2020%20(Stroke)'%20d='M3.66863%206.49264e-05L7.49308%206.94922L6.18193%2010.772L5.39838%2010.5033L6.59043%207.02766L4.086%202.47642L4.086%206.2086L3.25786%206.2086L3.25786%202.50243L0.89297%206.87945L1.99811%2010.5173L1.20569%2010.758L2.04371e-05%206.78966L3.66863%206.49264e-05Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cpath%20id='Rectangle%20(Stroke)'%20d='M6.04388%2012.5052V13.3334H1.49223V12.5052H6.04388ZM6.11715%2012.4319V11.1538C6.11711%2011.1134%206.0843%2011.0807%206.04388%2011.0807L1.49223%2011.0807C1.45183%2011.0808%201.4192%2011.1134%201.41915%2011.1538V12.4319C1.41915%2012.4724%201.45181%2012.5052%201.49223%2012.5052V13.3334C0.994382%2013.3333%200.590813%2012.9298%200.590813%2012.4319V11.1538C0.590855%2010.656%200.994408%2010.2524%201.49223%2010.2524L6.04388%2010.2524C6.54173%2010.2524%206.94545%2010.656%206.94549%2011.1538V12.4319L6.94426%2012.4784C6.92009%2012.9547%206.52618%2013.3334%206.04388%2013.3334V12.5052C6.08433%2012.5052%206.11715%2012.4724%206.11715%2012.4319Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cpath%20id='Union'%20d='M3.80679%205.53691C4.69704%205.58204%205.40504%206.31811%205.40504%207.21958L5.40276%207.30627C5.35763%208.19652%204.62156%208.90451%203.72009%208.90452L3.6334%208.90225C2.77185%208.85859%202.0811%208.16782%202.03742%207.30627L2.03515%207.21958C2.03515%206.28902%202.78954%205.53464%203.72009%205.53464L3.80679%205.53691ZM3.72009%206.43604C3.28741%206.43604%202.93655%206.7869%202.93655%207.21958C2.93656%207.65225%203.28742%208.00291%203.72009%208.00291C4.15276%208.0029%204.50342%207.65225%204.50343%207.21958C4.50343%206.7869%204.15277%206.43605%203.72009%206.43604Z'%20fill='var(--fill-0,%20%23B037A6)'/%3e%3c/g%3e%3c/svg%3e",Xn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2013.3333%2012.7225'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-GenAI-/-ImageEdit'%3e%3cpath%20id='Vector%20322%20(Stroke)'%20d='M1.95473%202.36838C2.05294%201.64817%202.71644%201.14384%203.43664%201.24205L10.1581%202.15866C10.6622%202.22743%2011.0815%202.58061%2011.235%203.06564C11.3885%203.55075%2011.2486%204.08095%2010.8758%204.42717L5.68521%209.24672L11.7686%208.07713C12.4823%207.9399%2013.1721%208.40722%2013.3094%209.12098C13.4467%209.83478%2012.9793%2010.5248%2012.2656%2010.662L1.67411%2012.6988C1.09753%2012.8096%200.517251%2012.5252%200.251751%2012.0015C-0.0137476%2011.4778%200.0997283%2010.8414%200.530011%2010.4418L7.04631%204.39097L3.08083%203.8503C2.36069%203.75205%201.85654%203.08854%201.95473%202.36838Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cpath%20id='Ellipse%20215'%20d='M4.68467%202.34235C4.68467%203.63599%203.63597%204.68469%202.34234%204.68469C1.0487%204.68469%200%203.63599%200%202.34235C0%201.0487%201.0487%200%202.34234%200C3.63597%200%204.68467%201.0487%204.68467%202.34235Z'%20fill='var(--fill-0,%20white)'/%3e%3cpath%20id='Ellipse%20215%20(Stroke)'%20d='M3.86994%202.34241C3.86994%201.49875%203.18605%200.814681%202.3424%200.814648C1.49872%200.814648%200.814644%201.49873%200.814644%202.34241C0.814677%203.18606%201.49874%203.86995%202.3424%203.86995V4.6846L2.2218%204.6816C1.02407%204.62089%200.0636659%203.66054%200.00299895%202.4628L0%202.34241C0%201.04877%201.04876%200%202.3424%200L2.46278%200.00299897C3.70045%200.0656885%204.68458%201.08916%204.68458%202.34241L4.68158%202.4628C4.61889%203.70044%203.59561%204.68457%202.3424%204.6846V3.86995C3.18603%203.86992%203.8699%203.18604%203.86994%202.34241Z'%20fill='var(--fill-0,%20%23B037A6)'/%3e%3c/g%3e%3c/svg%3e",Kn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2013.3334%2011.5132'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-GenAI-/-ImageGen'%3e%3cpath%20id='Ellipse%20214%20(Stroke)'%20d='M4.63788%202.02905C4.63788%201.38873%204.11873%200.869603%203.47841%200.869589C2.83808%200.869589%202.31895%201.38872%202.31895%202.02905C2.31896%202.66937%202.83809%203.18852%203.47841%203.18852V4.05807L3.37404%204.05542C2.33653%204.00287%201.50463%203.17093%201.45205%202.13342L1.4494%202.02905C1.4494%200.908476%202.35784%204.07696e-05%203.47841%204.07696e-05L3.58278%200.00268563C4.65485%200.0570211%205.50743%200.943489%205.50743%202.02905L5.50478%202.13342C5.45045%203.20548%204.56397%204.05805%203.47841%204.05807V3.18852C4.11872%203.1885%204.63786%202.66936%204.63788%202.02905Z'%20fill='var(--fill-0,%20%23B037A6)'/%3e%3cpath%20id='Subtract%20(Stroke)'%20d='M11.3812%2010.6437V11.5132H1.95213V10.6437H11.3812ZM12.4638%209.5613V6.21942L10.5499%204.39569L5.76194%209.06671L3.51036%206.87005L0.869568%209.34279V9.5613L0.870992%209.61704C0.900053%2010.1889%201.37294%2010.6437%201.95213%2010.6437V11.5132C0.874054%2011.5132%207.27714e-05%2010.6394%202.02656e-05%209.5613V8.9658L3.52277%205.66746L5.76194%207.85191L10.5428%203.188L13.3334%205.8471V9.5613C13.3333%2010.6394%2012.4593%2011.5132%2011.3812%2011.5132V10.6437C11.9604%2010.6437%2012.4333%2010.1889%2012.4624%209.61704L12.4638%209.5613Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/g%3e%3c/svg%3e",Yn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2012.9496%2013.3334'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-GenAI-/-MusicGen'%3e%3cpath%20id='Vector%20(Stroke)'%20d='M4.36914%2011.1587C4.36914%2010.6802%203.80472%209.97086%202.678%209.97086C1.55065%209.97088%200.986861%2010.6774%200.986861%2011.1587C0.986885%2011.6372%201.55132%2012.3463%202.678%2012.3463C3.80534%2012.3463%204.36911%2011.6399%204.36914%2011.1587ZM5.35623%2011.1587C5.35621%2012.3553%204.16293%2013.3334%202.678%2013.3334C1.19244%2013.3333%202.02363e-05%2012.3515%200%2011.1587C0%209.96202%201.19307%208.98402%202.678%208.984C4.16359%208.984%205.35623%209.96583%205.35623%2011.1587Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cpath%20id='Vector%20(Stroke)_2'%20d='M11.9625%209.88531C11.9625%209.40681%2011.3981%208.69749%2010.2714%208.69749C9.14406%208.6975%208.58027%209.40406%208.58027%209.88531C8.58029%2010.3638%209.14473%2011.0729%2010.2714%2011.0729C11.3988%2011.0729%2011.9625%2010.3666%2011.9625%209.88531ZM12.9496%209.88531C12.9496%2011.082%2011.7563%2012.06%2010.2714%2012.06C8.78585%2012.06%207.59343%2011.0781%207.59341%209.88531C7.59341%208.68864%208.78648%207.71064%2010.2714%207.71063C11.757%207.71063%2012.9496%208.69246%2012.9496%209.88531Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cpath%20id='Vector%20(Stroke)_3'%20d='M12.2877%203.73838L4.95084%205.54149L4.71539%204.58291L12.0522%202.78003L12.2877%203.73838Z'%20fill='var(--fill-0,%20%23B037A6)'/%3e%3cpath%20id='Vector%20(Stroke)_4'%20d='M12.9494%209.96102H11.9626V1.17517L5.35598%202.33448V11.1258H4.36911V1.50581L12.9494%200V9.96102Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/g%3e%3c/svg%3e",Qn="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-devices-/-photo_camera'%3e%3cpath%20id='Icon-color'%20d='M14.6667%206C14.6667%205.26362%2014.0697%204.66667%2013.3333%204.66667H12.5533C12.198%204.66695%2011.8572%204.52536%2011.6067%204.27333L10.5867%203.25333C10.212%202.87815%209.70359%202.66713%209.17333%202.66667H6.82667C6.29641%202.66713%205.78805%202.87815%205.41333%203.25333L4.39333%204.27333C4.1428%204.52536%203.80203%204.66695%203.44667%204.66667H2.66667C1.93029%204.66667%201.33333%205.26362%201.33333%206V12C1.33333%2012.7364%201.93029%2013.3333%202.66667%2013.3333H13.3333C14.0697%2013.3333%2014.6667%2012.7364%2014.6667%2012V6ZM8%2011.3333C6.52724%2011.3333%205.33333%2010.1394%205.33333%208.66667C5.33333%207.19391%206.52724%206%208%206C9.47276%206%2010.6667%207.19391%2010.6667%208.66667C10.6667%209.37391%2010.3857%2010.0522%209.88562%2010.5523C9.38552%2011.0524%208.70724%2011.3333%208%2011.3333Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",$n="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-technology-&%2338;-data-/-website'%3e%3cpath%20id='Icon-color'%20d='M13.3333%202.66667H2.66667C1.93029%202.66667%201.33333%203.26362%201.33333%204V12C1.33333%2012.7364%201.93029%2013.3333%202.66667%2013.3333H13.3333C14.0697%2013.3333%2014.6667%2012.7364%2014.6667%2012V4C14.6667%203.26362%2014.0697%202.66667%2013.3333%202.66667ZM13.3333%2012H2.66667V5.33333H13.3333V12ZM4.33333%2010.6667H7C7.18409%2010.6667%207.33333%2010.5174%207.33333%2010.3333V7C7.33333%206.81591%207.18409%206.66667%207%206.66667H4.33333C4.14924%206.66667%204%206.81591%204%207V10.3333C4%2010.5174%204.14924%2010.6667%204.33333%2010.6667ZM9%208H11.6667C11.8508%208%2012%207.85076%2012%207.66667V7C12%206.81591%2011.8508%206.66667%2011.6667%206.66667H9C8.8159%206.66667%208.66667%206.81591%208.66667%207V7.66667C8.66667%207.85076%208.8159%208%209%208ZM9%2010.6667H10.3333C10.5174%2010.6667%2010.6667%2010.5174%2010.6667%2010.3333V9.66667C10.6667%209.48257%2010.5174%209.33333%2010.3333%209.33333H9C8.8159%209.33333%208.66667%209.48257%208.66667%209.66667V10.3333C8.66667%2010.5174%208.8159%2010.6667%209%2010.6667Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ea="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-files-/-folder'%3e%3cpath%20id='Subtract'%20d='M7.72637%202.66697C7.90126%202.6677%208.06899%202.73716%208.19316%202.86033L9.13945%203.80662C9.26356%203.92971%209.43146%203.99916%209.60625%203.99998H13.3328C14.0691%203.99998%2014.6666%204.59676%2014.6668%205.33298V12C14.6668%2012.7364%2014.0692%2013.333%2013.3328%2013.333H2.6668C1.93042%2013.333%201.33281%2012.7364%201.33281%2012V3.99998C1.33282%203.2636%201.93042%202.66697%202.6668%202.66697H7.72637ZM4.825%206.02537C4.38317%206.02537%204.0252%206.3322%204.0252%206.71091V10.1396C4.02541%2010.5182%204.3833%2010.8252%204.825%2010.8252H8.95879C9.40028%2010.825%209.75838%2010.518%209.75859%2010.1396V9.11033L11.5086%2010.04C11.5831%2010.1033%2011.684%2010.1392%2011.7889%2010.1396H11.825C11.9355%2010.1396%2012.0252%2010.0624%2012.0252%209.96775V6.88181C12.025%206.78729%2011.9353%206.71091%2011.825%206.71091H11.7889C11.684%206.71132%2011.5831%206.74721%2011.5086%206.81052L9.75859%207.73923V6.71091C9.75859%206.33233%209.40041%206.02558%208.95879%206.02537H4.825Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cg%20id='bounding_box:c2all'%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ra="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2012.7776%209.72228'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Main%20Content'%3e%3cpath%20id='Background%20(Stroke)'%20d='M10.8548%208.84797V9.72228H1.92281V8.84797H10.8548ZM11.9033%207.79949V1.70774H0.874326V7.79949C0.874373%208.37851%201.34378%208.84797%201.92281%208.84797V9.72228L1.82377%209.71972C0.840631%209.66984%200.0524041%208.88147%200.00258183%207.89832L2.03848e-05%207.79949V0.833435H12.7776V7.79949L12.775%207.89832C12.7252%208.88148%2011.937%209.66986%2010.9538%209.71972L10.8548%209.72228V8.84797C11.4338%208.84797%2011.9032%208.37851%2011.9033%207.79949Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3cpath%20id='Polygon%202%20(Stroke)'%20d='M4.48185%207.67766L4.48185%202.31422L9.12681%204.99583L4.48185%207.67766ZM5.35616%203.82846L5.35616%206.16342L7.37841%204.99583L5.35616%203.82846Z'%20fill='var(--fill-0,%20%23B037A6)'/%3e%3cpath%20id='Divider'%20d='M0.000101686%200H0.277875V1.94441H0.000101686V0Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/g%3e%3c/svg%3e",ta="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%209.23879%2013.3333'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ico-/-24-/-GenAI-/-VoiceGen'%3e%3cpath%20id='Vector'%20d='M4.67184%209.23877C3.25201%209.23877%202.09969%208.08905%202.09969%206.67244V2.56632C2.09969%201.14971%203.25201%200%204.67184%200C6.09167%200%207.244%201.14971%207.244%202.56632V6.67244C7.244%208.08905%206.09167%209.23877%204.67184%209.23877ZM6.21514%202.56632C6.21514%201.71773%205.52237%201.02653%204.67184%201.02653C3.82132%201.02653%203.12855%201.71773%203.12855%202.56632V6.67244C3.12855%207.52104%203.82132%208.21224%204.67184%208.21224C5.52237%208.21224%206.21514%207.52104%206.21514%206.67244V2.56632Z'%20fill='var(--fill-0,%20%23B037A6)'/%3e%3cpath%20id='Vector_2'%20d='M1.02653%205.98432V6.66795C1.02653%208.65047%202.6416%2010.257%204.61938%2010.257C6.59716%2010.257%208.21224%208.65047%208.21224%206.66795V5.98432H9.23877V6.66795C9.23877%209.04014%207.43892%2010.9953%205.13265%2011.2551V12.3079H6.67244V13.3333H3.25068H2.56632V12.3079H3.25068H4.10612V11.2551C1.79985%2011.0022%200%209.04014%200%206.66795V5.98432H1.02653Z'%20fill='var(--fill-0,%20%23191919)'/%3e%3c/g%3e%3c/svg%3e",Ze="_page_rnt37_1",We="_header_rnt37_15",Je="_topBar_rnt37_21",Ge="_topBarLeft_rnt37_30",ze="_brand_rnt37_38",Ue="_brandImage_rnt37_47",Xe="_bottomNav_rnt37_56",Ke="_bottomNavItem_rnt37_64",Ye="_topBarActions_rnt37_76",Qe="_headerLink_rnt37_83",$e="_headerCta_rnt37_95",er="_headerIconButton_rnt37_111",rr="_headerHamburger_rnt37_124",tr="_headerHamburgerIcon_rnt37_137",nr="_bottomBar_rnt37_143",ar="_searchBar_rnt37_156",ir="_searchDropdown_rnt37_169",or="_searchDivider_rnt37_184",lr="_searchInput_rnt37_190",sr="_heroSection_rnt37_205",dr="_heroContainer_rnt37_211",ur="_heroTitle_rnt37_217",cr="_toggle_rnt37_225",gr="_toggleButton_rnt37_238",pr="_toggleSvgIcon_rnt37_268",mr="_toggleButtonActive_rnt37_289",vr="_toggleButtonDefault_rnt37_298",hr="_teamPlanGrid_rnt37_329",fr="_promoBadgePill_rnt37_345",yr="_promoBadgeBanner_rnt37_362",br="_promoBadgeBannerText_rnt37_377",Cr="_planCard_rnt37_386",wr="_teamPlanCard_rnt37_396",kr="_planCardTop_rnt37_400",_r="_teamCardHeader_rnt37_406",xr="_teamPlanName_rnt37_413",qr="_teamPlanEyebrow_rnt37_419",Ar="_teamPlanTitle_rnt37_424",Tr="_seatSelector_rnt37_430",Sr="_seatSelectorIcon_rnt37_447",Pr="_seatSelectorChevron_rnt37_448",Lr="_secondaryButton_rnt37_454",Br="_enterpriseCard_rnt37_467",Rr="_enterpriseDescription_rnt37_471",Mr="_enterpriseLearnMore_rnt37_478",Fr="_planName_rnt37_486",Ir="_priceBlock_rnt37_493",Vr="_priceRow_rnt37_499",Hr="_price_rnt37_493",Nr="_cadence_rnt37_511",jr="_billing_rnt37_516",Or="_selectButton_rnt37_524",Er="_includesLabel_rnt37_537",Dr="_featureList_rnt37_543",Zr="_featureRow_rnt37_551",Wr="_featureContent_rnt37_563",Jr="_badge_rnt37_588",Gr="_pricingDisclaimer_rnt37_601",zr="_modelsBlock_rnt37_613",Ur="_sectionTitle_rnt37_621",Xr="_sectionTitleSmall_rnt37_629",Kr="_logoRowPrimary_rnt37_636",Yr="_logoRowSecondary_rnt37_637",Qr="_logoOpenAi_rnt37_645",$r="_logoLuma_rnt37_649",et="_logoSeedream_rnt37_653",rt="_logoKling_rnt37_657",tt="_logoElevenLabs_rnt37_661",nt="_vectorTextLogo_rnt37_665",at="_imageTextLogo_rnt37_666",it="_vectorIcon_rnt37_676",ot="_imageTextIcon_rnt37_681",lt="_studentBanner_rnt37_686",st="_detailsSection_rnt37_717",dt="_detailsContainer_rnt37_723",ut="_introBlock_rnt37_734",ct="_introSubtitle_rnt37_741",gt="_proofStack_rnt37_749",pt="_proofRow_rnt37_755",mt="_proofLabel_rnt37_762",vt="_proofContent_rnt37_770",ht="_proofItems_rnt37_774",ft="_compactModels_rnt37_775",yt="_proofItem_rnt37_774",bt="_compactLogoImage_rnt37_796",Ct="_compactVectorText_rnt37_802",wt="_compactImageText_rnt37_803",kt="_compactVectorIcon_rnt37_813",_t="_compactImageTextIcon_rnt37_818",xt="_paymentSection_rnt37_823",qt="_paymentColumns_rnt37_830",At="_paymentColumn_rnt37_830",Tt="_paymentHeading_rnt37_845",St="_paymentCopy_rnt37_851",Pt="_paymentLogos_rnt37_858",Lt="_paymentCard_rnt37_864",Bt="_paymentImage_rnt37_875",Rt="_masterCardIcon_rnt37_881",Mt="_faqSection_rnt37_894",Ft="_faqTitle_rnt37_901",It="_faqList_rnt37_907",Vt="_faqItem_rnt37_912",Ht="_legalNote_rnt37_940",na={page:Ze,header:We,topBar:Je,topBarLeft:Ge,brand:ze,brandImage:Ue,bottomNav:Xe,bottomNavItem:Ke,topBarActions:Ye,headerLink:Qe,headerCta:$e,headerIconButton:er,headerHamburger:rr,headerHamburgerIcon:tr,bottomBar:nr,searchBar:ar,searchDropdown:ir,searchDivider:or,searchInput:lr,heroSection:sr,heroContainer:dr,heroTitle:ur,toggle:cr,toggleButton:gr,toggleSvgIcon:pr,toggleButtonActive:mr,toggleButtonDefault:vr,teamPlanGrid:hr,promoBadgePill:fr,promoBadgeBanner:yr,promoBadgeBannerText:br,planCard:Cr,teamPlanCard:wr,planCardTop:kr,teamCardHeader:_r,teamPlanName:xr,teamPlanEyebrow:qr,teamPlanTitle:Ar,seatSelector:Tr,seatSelectorIcon:Sr,seatSelectorChevron:Pr,secondaryButton:Lr,enterpriseCard:Br,enterpriseDescription:Rr,enterpriseLearnMore:Mr,planName:Fr,priceBlock:Ir,priceRow:Vr,price:Hr,cadence:Nr,billing:jr,selectButton:Or,includesLabel:Er,featureList:Dr,featureRow:Zr,featureContent:Wr,badge:Jr,pricingDisclaimer:Gr,modelsBlock:zr,sectionTitle:Ur,sectionTitleSmall:Xr,logoRowPrimary:Kr,logoRowSecondary:Yr,logoOpenAi:Qr,logoLuma:$r,logoSeedream:et,logoKling:rt,logoElevenLabs:tt,vectorTextLogo:nt,imageTextLogo:at,vectorIcon:it,imageTextIcon:ot,studentBanner:lt,detailsSection:st,detailsContainer:dt,introBlock:ut,introSubtitle:ct,proofStack:gt,proofRow:pt,proofLabel:mt,proofContent:vt,proofItems:ht,compactModels:ft,proofItem:yt,compactLogoImage:bt,compactVectorText:Ct,compactImageText:wt,compactVectorIcon:kt,compactImageTextIcon:_t,paymentSection:xt,paymentColumns:qt,paymentColumn:At,paymentHeading:Tt,paymentCopy:St,paymentLogos:Pt,paymentCard:Lt,paymentImage:Bt,masterCardIcon:Rt,faqSection:Mt,faqTitle:Ft,faqList:It,faqItem:Vt,legalNote:Ht},Nt="_heroSectionTight_qhuhv_1",jt="_heroControlsStack_qhuhv_5",Ot="_heroControlsStackAlt_qhuhv_12",Et="_billingToggle_qhuhv_26",Dt="_billingOption_qhuhv_33",Zt="_billingOptionActive_qhuhv_44",Wt="_billingSwitch_qhuhv_48",Jt="_billingSwitchKnob_qhuhv_59",Gt="_billingSwitchAnnual_qhuhv_70",zt="_savingsBadge_qhuhv_74",Ut="_plansGrid_qhuhv_109",Xt="_billingClarity_qhuhv_114",Kt="_individualCard_qhuhv_126",Yt="_individualCardRecommended_qhuhv_133",Qt="_individualCardWrapper_qhuhv_138",$t="_recommendedBadge_qhuhv_151",en="_recommendedBadgeText_qhuhv_167",rn="_individualCardTop_qhuhv_177",tn="_individualCardAction_qhuhv_186",nn="_teamCard_qhuhv_190",an="_individualEnterpriseCard_qhuhv_210",on="_enterpriseLearnMore_qhuhv_217",ln="_enterpriseCardTopIndividual_qhuhv_222",sn="_enterpriseCardTopTeam_qhuhv_231",dn="_enterpriseCardBodyIndividual_qhuhv_240",un="_enterpriseCardBodyTeam_qhuhv_241",cn="_enterpriseCardActionIndividual_qhuhv_248",gn="_enterpriseCardActionTeam_qhuhv_249",pn="_enterpriseCardHighlighted_qhuhv_254",mn="_unlimitedFeature_qhuhv_260",vn="_unlimitedFeatureBadge_qhuhv_264",hn="_containAsset_qhuhv_268",fn="_proofItemIconWrapper_qhuhv_273",yn="_proofItemIconActual_qhuhv_282",bn="_pricingDisclaimer_qhuhv_290",Cn="_modelsBlock_qhuhv_294",wn="_dualBannerRow_qhuhv_302",kn="_bannerCard_qhuhv_310",_n="_bannerHeader_qhuhv_326",xn="_bannerTitle_qhuhv_333",qn="_bannerBody_qhuhv_341",An="_bannerEmphasis_qhuhv_350",Tn="_bannerLink_qhuhv_354",aa={heroSectionTight:Nt,heroControlsStack:jt,heroControlsStackAlt:Ot,billingToggle:Et,billingOption:Dt,billingOptionActive:Zt,billingSwitch:Wt,billingSwitchKnob:Jt,billingSwitchAnnual:Gt,savingsBadge:zt,plansGrid:Ut,billingClarity:Xt,individualCard:Kt,individualCardRecommended:Yt,individualCardWrapper:Qt,recommendedBadge:$t,recommendedBadgeText:en,individualCardTop:rn,individualCardAction:tn,teamCard:nn,individualEnterpriseCard:an,enterpriseLearnMore:on,enterpriseCardTopIndividual:ln,enterpriseCardTopTeam:sn,enterpriseCardBodyIndividual:dn,enterpriseCardBodyTeam:un,enterpriseCardActionIndividual:cn,enterpriseCardActionTeam:gn,enterpriseCardHighlighted:pn,unlimitedFeature:mn,unlimitedFeatureBadge:vn,containAsset:hn,proofItemIconWrapper:fn,proofItemIconActual:yn,pricingDisclaimer:bn,modelsBlock:Cn,dualBannerRow:wn,bannerCard:kn,bannerHeader:_n,bannerTitle:xn,bannerBody:qn,bannerEmphasis:An,bannerLink:Tn};export{Hn as A,Vn as B,Rn as C,Ee as E,En as a,na as b,Qn as c,zn as d,Bn as e,Gn as f,$n as g,jn as h,Zn as i,On as j,Wn as k,Jn as l,Dn as m,Kn as n,Xn as o,ea as p,ra as q,Yn as r,aa as s,ta as t,Ln as u,Un as v,In as w,Mn as x,Fn as y,Nn as z};
