/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var M=["require","exports","vs/base/common/platform","vs/base/common/extpath","vs/base/common/strings","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/base/common/errors","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],L=function(k){for(var e=[],s=0,m=k.length;s<m;s++)e[s]=M[k[s]];return e};define(M[3],L([0,1,7,2,4,9]),function(k,e,s,m,a,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$9f=e.$8f=e.$7f=e.$6f=e.$5f=e.$4f=e.$3f=e.$2f=e.$1f=e.$Zf=e.$Yf=e.$Xf=e.$Wf=e.$Vf=e.$Uf=e.$Tf=void 0;function C(t){return t===47||t===92}e.$Tf=C;function R(t){return t.replace(/[\\/]/g,s.$fc.sep)}e.$Uf=R;function P(t){return t.indexOf("/")===-1&&(t=R(t)),/^[a-zA-Z]:(\/|$)/.test(t)&&(t="/"+t),t}e.$Vf=P;function o(t,f=s.$fc.sep){if(!t)return"";const h=t.length,A=t.charCodeAt(0);if(C(A)){if(C(t.charCodeAt(1))&&!C(t.charCodeAt(2))){let y=3;const O=y;for(;y<h&&!C(t.charCodeAt(y));y++);if(O!==y&&!C(t.charCodeAt(y+1))){for(y+=1;y<h;y++)if(C(t.charCodeAt(y)))return t.slice(0,y+1).replace(/[\\/]/g,f)}}return f}else if(u(A)&&t.charCodeAt(1)===58)return C(t.charCodeAt(2))?t.slice(0,2)+f:t.slice(0,2);let w=t.indexOf("://");if(w!==-1){for(w+=3;w<h;w++)if(C(t.charCodeAt(w)))return t.slice(0,w+1)}return""}e.$Wf=o;function c(t){if(!m.$i||!t||t.length<5)return!1;let f=t.charCodeAt(0);if(f!==92||(f=t.charCodeAt(1),f!==92))return!1;let h=2;const A=h;for(;h<t.length&&(f=t.charCodeAt(h),f!==92);h++);return!(A===h||(f=t.charCodeAt(h+1),isNaN(f)||f===92))}e.$Xf=c;const v=/[\\/:\*\?"<>\|]/g,$=/[\\/]/g,l=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function n(t,f=m.$i){const h=f?v:$;return!(!t||t.length===0||/^\s+$/.test(t)||(h.lastIndex=0,h.test(t))||f&&l.test(t)||t==="."||t===".."||f&&t[t.length-1]==="."||f&&t.length!==t.trim().length||t.length>255)}e.$Yf=n;function i(t,f,h){const A=t===f;return!h||A?A:!t||!f?!1:(0,a.$5e)(t,f)}e.$Zf=i;function r(t,f,h,A=s.sep){if(t===f)return!0;if(!t||!f||f.length>t.length)return!1;if(h){if(!(0,a.$6e)(t,f))return!1;if(f.length===t.length)return!0;let y=f.length;return f.charAt(f.length-1)===A&&y--,t.charAt(y)===A}return f.charAt(f.length-1)!==A&&(f+=A),t.indexOf(f)===0}e.$1f=r;function u(t){return t>=65&&t<=90||t>=97&&t<=122}e.$2f=u;function g(t,f){return m.$i&&t.endsWith(":")&&(t+=s.sep),(0,s.$hc)(t)||(t=(0,s.$ic)(f,t)),t=(0,s.$gc)(t),m.$i?(t=(0,a.$Ne)(t,s.sep),t.endsWith(":")&&(t+=s.sep)):(t=(0,a.$Ne)(t,s.sep),t||(t=s.sep)),t}e.$3f=g;function b(t){const f=(0,s.$gc)(t);return m.$i?t.length>3?!1:I(f)&&(t.length===2||f.charCodeAt(2)===92):f===s.$fc.sep}e.$4f=b;function I(t,f=m.$i){return f?u(t.charCodeAt(0))&&t.charCodeAt(1)===58:!1}e.$5f=I;function E(t,f=m.$i){return I(t,f)?t[0]:void 0}e.$6f=E;function U(t,f,h){return f.length>t.length?-1:t===f?0:(h&&(t=t.toLowerCase(),f=f.toLowerCase()),t.indexOf(f))}e.$7f=U;function N(t){const f=t.split(":");let h,A,w;for(const y of f){const O=Number(y);(0,d.$Ff)(O)?A===void 0?A=O:w===void 0&&(w=O):h=h?[h,y].join(":"):y}if(!h)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:h,line:A!==void 0?A:void 0,column:w!==void 0?w:A!==void 0?1:void 0}}e.$8f=N;const q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",T="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function F(t,f,h=8){let A="";for(let y=0;y<h;y++){let O;y===0&&m.$i&&!f&&(h===3||h===4)?O=T:O=q,A+=O.charAt(Math.floor(Math.random()*O.length))}let w;return f?w=`${f}-${A}`:w=A,t?(0,s.$ic)(t,w):w}e.$9f=F}),define(M[5],L([0,1,10,2,6]),function(k,e,s,m,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.$fg=e.$eg=e.$dg=e.$cg=e.$bg=e.$ag=e.$_f=e.$$f=e.$0f=e.Schemas=void 0;var d;(function(o){o.inMemory="inmemory",o.vscode="vscode",o.internal="private",o.walkThrough="walkThrough",o.walkThroughSnippet="walkThroughSnippet",o.http="http",o.https="https",o.file="file",o.mailto="mailto",o.untitled="untitled",o.data="data",o.command="command",o.vscodeRemote="vscode-remote",o.vscodeRemoteResource="vscode-remote-resource",o.vscodeManagedRemoteResource="vscode-managed-remote-resource",o.vscodeUserData="vscode-userdata",o.vscodeCustomEditor="vscode-custom-editor",o.vscodeNotebookCell="vscode-notebook-cell",o.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",o.vscodeNotebookCellOutput="vscode-notebook-cell-output",o.vscodeInteractiveInput="vscode-interactive-input",o.vscodeSettings="vscode-settings",o.vscodeWorkspaceTrust="vscode-workspace-trust",o.vscodeTerminal="vscode-terminal",o.vscodeChatSesssion="vscode-chat-editor",o.webviewPanel="webview-panel",o.vscodeWebview="vscode-webview",o.extension="extension",o.vscodeFileResource="vscode-file",o.tmp="tmp",o.vsls="vsls",o.vscodeSourceControl="vscode-scm"})(d||(e.Schemas=d={})),e.$0f="vscode-tkn",e.$$f="tkn";class C{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${d.vscodeRemoteResource}`}setPreferredWebSchema(c){this.d=c}setDelegate(c){this.e=c}setServerRootPath(c){this.f=`${c}/${d.vscodeRemoteResource}`}set(c,v,$){this.a[c]=v,this.b[c]=$}setConnectionToken(c,v){this.c[c]=v}getPreferredWebSchema(){return this.d}rewrite(c){if(this.e)try{return this.e(c)}catch(r){return s.$Z(r),c}const v=c.authority;let $=this.a[v];$&&$.indexOf(":")!==-1&&$.indexOf("[")===-1&&($=`[${$}]`);const l=this.b[v],n=this.c[v];let i=`path=${encodeURIComponent(c.path)}`;return typeof n=="string"&&(i+=`&${e.$$f}=${encodeURIComponent(n)}`),a.URI.from({scheme:m.$o?this.d:d.vscodeRemoteResource,authority:`${$}:${l}`,path:this.f,query:i})}}e.$_f=new C,e.$ag="vs/../../extensions",e.$bg="vs/../../node_modules",e.$cg="vs/../../node_modules.asar",e.$dg="vs/../../node_modules.asar.unpacked",e.$eg="vscode-app";class R{static{this.a=e.$eg}asBrowserUri(c){const v=this.b(c,k);return this.uriToBrowserUri(v)}uriToBrowserUri(c){return c.scheme===d.vscodeRemote?e.$_f.rewrite(c):c.scheme===d.file&&(m.$m||m.$q===`${d.vscodeFileResource}://${R.a}`)?c.with({scheme:d.vscodeFileResource,authority:c.authority||R.a,query:null,fragment:null}):c}asFileUri(c){const v=this.b(c,k);return this.uriToFileUri(v)}uriToFileUri(c){return c.scheme===d.vscodeFileResource?c.with({scheme:d.file,authority:c.authority!==R.a?c.authority:null,query:null,fragment:null}):c}b(c,v){return a.URI.isUri(c)?c:a.URI.parse(v.toUrl(c))}}e.$fg=new R;var P;(function(o){const c=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);o.CoopAndCoep=Object.freeze(c.get("3"));const v="vscode-coi";function $(n){let i;typeof n=="string"?i=new URL(n).searchParams:n instanceof URL?i=n.searchParams:a.URI.isUri(n)&&(i=new URL(n.toString(!0)).searchParams);const r=i?.get(v);if(r)return c.get(r)}o.getHeadersFromQuery=$;function l(n,i,r){if(!globalThis.crossOriginIsolated)return;const u=i&&r?"3":r?"2":"1";n instanceof URLSearchParams?n.set(v,u):n[v]=u}o.addSearchParam=l})(P||(e.COI=P={}))}),define(M[8],L([0,1,3,5,7,2,4,6]),function(k,e,s,m,a,d,C,R){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Ig=e.DataUri=e.$Hg=e.$Gg=e.$Fg=e.$Eg=e.$Dg=e.$Cg=e.$Bg=e.$Ag=e.$zg=e.$yg=e.$xg=e.$wg=e.$vg=e.$ug=e.$tg=e.$sg=e.$rg=e.$qg=e.$pg=e.$og=e.$ng=e.$mg=void 0;function P(l){return(0,R.$vc)(l,!0)}e.$mg=P;class o{constructor(n){this.a=n}compare(n,i,r=!1){return n===i?0:(0,C.$Xe)(this.getComparisonKey(n,r),this.getComparisonKey(i,r))}isEqual(n,i,r=!1){return n===i?!0:!n||!i?!1:this.getComparisonKey(n,r)===this.getComparisonKey(i,r)}getComparisonKey(n,i=!1){return n.with({path:this.a(n)?n.path.toLowerCase():void 0,fragment:i?null:void 0}).toString()}ignorePathCasing(n){return this.a(n)}isEqualOrParent(n,i,r=!1){if(n.scheme===i.scheme){if(n.scheme===m.Schemas.file)return s.$1f(P(n),P(i),this.a(n))&&n.query===i.query&&(r||n.fragment===i.fragment);if((0,e.$Dg)(n.authority,i.authority))return s.$1f(n.path,i.path,this.a(n),"/")&&n.query===i.query&&(r||n.fragment===i.fragment)}return!1}joinPath(n,...i){return R.URI.joinPath(n,...i)}basenameOrAuthority(n){return(0,e.$vg)(n)||n.authority}basename(n){return a.$fc.basename(n.path)}extname(n){return a.$fc.extname(n.path)}dirname(n){if(n.path.length===0)return n;let i;return n.scheme===m.Schemas.file?i=R.URI.file(a.$lc(P(n))).path:(i=a.$fc.dirname(n.path),n.authority&&i.length&&i.charCodeAt(0)!==47&&(console.error(`dirname("${n.toString})) resulted in a relative path`),i="/")),n.with({path:i})}normalizePath(n){if(!n.path.length)return n;let i;return n.scheme===m.Schemas.file?i=R.URI.file(a.$gc(P(n))).path:i=a.$fc.normalize(n.path),n.with({path:i})}relativePath(n,i){if(n.scheme!==i.scheme||!(0,e.$Dg)(n.authority,i.authority))return;if(n.scheme===m.Schemas.file){const g=a.$kc(P(n),P(i));return d.$i?s.$Uf(g):g}let r=n.path||"/";const u=i.path||"/";if(this.a(n)){let g=0;for(const b=Math.min(r.length,u.length);g<b&&!(r.charCodeAt(g)!==u.charCodeAt(g)&&r.charAt(g).toLowerCase()!==u.charAt(g).toLowerCase());g++);r=u.substr(0,g)+r.substr(g)}return a.$fc.relative(r,u)}resolvePath(n,i){if(n.scheme===m.Schemas.file){const r=R.URI.file(a.$jc(P(n),i));return n.with({authority:r.authority,path:r.path})}return i=s.$Vf(i),n.with({path:a.$fc.resolve(n.path,i)})}isAbsolutePath(n){return!!n.path&&n.path[0]==="/"}isEqualAuthority(n,i){return n===i||n!==void 0&&i!==void 0&&(0,C.$5e)(n,i)}hasTrailingPathSeparator(n,i=a.sep){if(n.scheme===m.Schemas.file){const r=P(n);return r.length>s.$Wf(r).length&&r[r.length-1]===i}else{const r=n.path;return r.length>1&&r.charCodeAt(r.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(n.fsPath)}}removeTrailingPathSeparator(n,i=a.sep){return(0,e.$Eg)(n,i)?n.with({path:n.path.substr(0,n.path.length-1)}):n}addTrailingPathSeparator(n,i=a.sep){let r=!1;if(n.scheme===m.Schemas.file){const u=P(n);r=u!==void 0&&u.length===s.$Wf(u).length&&u[u.length-1]===i}else{i="/";const u=n.path;r=u.length===1&&u.charCodeAt(u.length-1)===47}return!r&&!(0,e.$Eg)(n,i)?n.with({path:n.path+"/"}):n}}e.$ng=o,e.$og=new o(()=>!1),e.$pg=new o(l=>l.scheme===m.Schemas.file?!d.$k:!0),e.$qg=new o(l=>!0),e.$rg=e.$og.isEqual.bind(e.$og),e.$sg=e.$og.isEqualOrParent.bind(e.$og),e.$tg=e.$og.getComparisonKey.bind(e.$og),e.$ug=e.$og.basenameOrAuthority.bind(e.$og),e.$vg=e.$og.basename.bind(e.$og),e.$wg=e.$og.extname.bind(e.$og),e.$xg=e.$og.dirname.bind(e.$og),e.$yg=e.$og.joinPath.bind(e.$og),e.$zg=e.$og.normalizePath.bind(e.$og),e.$Ag=e.$og.relativePath.bind(e.$og),e.$Bg=e.$og.resolvePath.bind(e.$og),e.$Cg=e.$og.isAbsolutePath.bind(e.$og),e.$Dg=e.$og.isEqualAuthority.bind(e.$og),e.$Eg=e.$og.hasTrailingPathSeparator.bind(e.$og),e.$Fg=e.$og.removeTrailingPathSeparator.bind(e.$og),e.$Gg=e.$og.addTrailingPathSeparator.bind(e.$og);function c(l,n){const i=[];for(let r=0;r<l.length;r++){const u=n(l[r]);l.some((g,b)=>b===r?!1:(0,e.$sg)(u,n(g)))||i.push(l[r])}return i}e.$Hg=c;var v;(function(l){l.META_DATA_LABEL="label",l.META_DATA_DESCRIPTION="description",l.META_DATA_SIZE="size",l.META_DATA_MIME="mime";function n(i){const r=new Map;i.path.substring(i.path.indexOf(";")+1,i.path.lastIndexOf(";")).split(";").forEach(b=>{const[I,E]=b.split(":");I&&E&&r.set(I,E)});const g=i.path.substring(0,i.path.indexOf(";"));return g&&r.set(l.META_DATA_MIME,g),r}l.parseMetaData=n})(v||(e.DataUri=v={}));function $(l,n,i){if(n){let r=l.path;return r&&r[0]!==a.$fc.sep&&(r=a.$fc.sep+r),l.with({scheme:i,authority:n,path:r})}return l.with({scheme:i})}e.$Ig=$}),define(M[11],L([0,1,6,3,8,4,12,2,5]),function(k,e,s,m,a,d,C,R,P){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class o{constructor($,l){this.b=$,this.a=new Map,this.c(l)}c($){const l=$.workspaceFolders.sort((n,i)=>i.length-n.length).map(n=>s.URI.parse(n));for(const n of l){const i=o.createPatterns(n);this.a.set(n,i)}}d($){return this.b.getMirrorModels().find(n=>n.uri.toString()===$)}computeLinks($){const l=this.d($);if(!l)return[];const n=[],i=d.$Se(l.getValue());for(const[r,u]of this.a){const g={toResource:b=>typeof b=="string"?a.$yg(r,b):null};for(let b=0,I=i.length;b<I;b++)n.push(...o.detectLinks(i[b],b+1,u,g))}return n}static createPatterns($){const l=[],n=$.scheme===P.Schemas.file?$.fsPath:$.path,i=[n];R.$i&&$.scheme===P.Schemas.file&&i.push(m.$Uf(n));for(const r of i){const u='[^\\s\\(\\):<>"]',b=`${`(?:${u}| ${u})`}+\\.${u}+`,I=`${u}+`;l.push(new RegExp(d.$Ie(r)+`(${b}) on line ((\\d+)(, column (\\d+))?)`,"gi")),l.push(new RegExp(d.$Ie(r)+`(${b}):line ((\\d+)(, column (\\d+))?)`,"gi")),l.push(new RegExp(d.$Ie(r)+`(${b})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),l.push(new RegExp(d.$Ie(r)+`(${I})(:(\\d+))?(:(\\d+))?`,"gi"))}return l}static detectLinks($,l,n,i){const r=[];return n.forEach(u=>{u.lastIndex=0;let g,b=0;for(;(g=u.exec($))!==null;){const I=d.$Ne(g[1],".").replace(/\\/g,"/");let E;try{const T=i.toResource(I);T&&(E=T.toString())}catch{continue}if(g[3]){const T=g[3];if(g[5]){const F=g[5];E=d.$Fe("{0}#{1},{2}",E,T,F)}else E=d.$Fe("{0}#{1}",E,T)}const U=d.$Ne(g[0],"."),N=$.indexOf(U,b);b=N+U.length;const q={startColumn:N+1,startLineNumber:l,endColumn:N+1+U.length,endLineNumber:l};if(r.some(T=>C.$zs.areIntersectingOrTouching(T.range,q)))return;r.push({range:q,url:E})}}),r}}e.OutputLinkComputer=o;function c(v,$){return new o(v,$)}e.create=c})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2095b6f5a316c998fbfa17586d24f7974e3c8f13/core/vs/workbench/contrib/output/common/outputLinkComputer.js.map