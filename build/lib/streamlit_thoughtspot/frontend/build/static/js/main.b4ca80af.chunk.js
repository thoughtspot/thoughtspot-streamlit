(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{26:function(e,t,s){e.exports=s(33)},33:function(e,t,s){"use strict";s.r(t);var n=s(10),a=s.n(n),c=s(22),i=s.n(c),r=s(20),d=s(15);var o=Object(r.b)((function(e){var t=e.args,s=t.component,c=t.host,i=!!Object.keys(t).includes("sso")&&t.sso,o=Object.keys(t).includes("height")?t.height:600,l=Object.keys(t).includes("width")?t.width:1e3,h=Object.keys(t).includes("datasources")?t.datasources:[],u=Object.keys(t).includes("searchstring")?t.searchstring:null,m=Object.keys(t).includes("liveboardid")?t.liveboardid:null,b=Object.keys(t).includes("vizid")?t.vizid:null;return r.a.setFrameHeight(o),Object(d.d)({thoughtSpotHost:c,authType:i?d.a.SAML:d.a.None}),Object(n.useEffect)((function(){var e=document.getElementById("ts-embed");"search"==s?new d.c(e,{searchOptions:{searchTokenString:u,executeSearch:!0},dataSources:h,frameParams:{width:l+"px",height:o+"px"}}).render():new d.b(e,{liveboardId:m,vizId:b,frameParams:{width:l+"px",height:o+"px"}}).render()})),a.a.createElement("div",{style:{width:l+"px",height:o+"px"},id:"ts-embed"},"TS Embed")}));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b4ca80af.chunk.js.map