System.register(["react"],function(l,L){"use strict";var n,a;return{setters:[e=>{n=e.default,a=e}],execute:function(){const e="",u="http://203.124.35.18:8069/api",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjNmM2Y2M2QyLTg3NDctNDBmZS1hZDhiLTJhMjY1M2E1ZmQ4ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFwcGxpY2F0aW9uX2FkbWluQG5vY2FkbWluLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhcHBsaWNhdGlvbl9hZG1pbkBub2NhZG1pbi5jb20iLCJpcEFkZHJlc3MiOiIyMDIuMTY1LjIyNS4xMTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IisxMTExMTExMTExMTEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNzI2Njk3MjU1LCJpc3MiOiJub2MuYWRtaW4uc2VjdXJpdHkubmV0IiwiYXVkIjoibm9jLmFkbWluLnNlY3VyaXR5Lm5ldCJ9.mt1bPfzgPNWpJBXrZ-_7ESeNW-WDDacE--et3QChtCw",o=c=>{const[t,b]=n.useState(null);n.useEffect(()=>{i()},[]);async function i(){const W=await(await fetch(`${u}${c}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();b(W)}return{data:(t==null?void 0:t.data)??t}},p=l("default",()=>{const{data:c}=o("/NocApplication/GetAllNOCApplication");return a.createElement("div",null,a.createElement("h1",null,"Applications"),c==null?void 0:c.map(t=>a.createElement("div",{key:t.id,className:"card"},a.createElement("p",null,t==null?void 0:t.projectTitle),a.createElement("p",null,t==null?void 0:t.organizationName),a.createElement("p",null,t==null?void 0:t.applicationStatus),a.createElement("p",null,t==null?void 0:t.lastActionDate.substring(0,10)))))})}}});
//# sourceMappingURL=Page.060db45f.js.map