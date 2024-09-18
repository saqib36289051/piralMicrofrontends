System.register(["react"], function(exports, module) {
  "use strict";
  var React__default, React;
  return {
    setters: [(module2) => {
      React__default = module2.default;
      React = module2;
    }],
    execute: function() {
      const Page$1 = "";
      const badge = "";
      const Badge = ({ children }) => {
        return /* @__PURE__ */ React__default.createElement("div", { className: "badge" }, children);
      };
      const Badge$1 = Badge;
      const BASE_URL = "http://203.124.35.18:8069/api";
      const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjNmM2Y2M2QyLTg3NDctNDBmZS1hZDhiLTJhMjY1M2E1ZmQ4ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFwcGxpY2F0aW9uX2FkbWluQG5vY2FkbWluLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhcHBsaWNhdGlvbl9hZG1pbkBub2NhZG1pbi5jb20iLCJpcEFkZHJlc3MiOiIyMDIuMTY1LjIyNS4xMTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IisxMTExMTExMTExMTEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNzI2Njk3MjU1LCJpc3MiOiJub2MuYWRtaW4uc2VjdXJpdHkubmV0IiwiYXVkIjoibm9jLmFkbWluLnNlY3VyaXR5Lm5ldCJ9.mt1bPfzgPNWpJBXrZ-_7ESeNW-WDDacE--et3QChtCw";
      const useFetchHook = (url) => {
        const [data, setData] = React__default.useState(null);
        React__default.useEffect(() => {
          fetchData();
        }, []);
        async function fetchData() {
          const res = await fetch(`${BASE_URL}${url}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Token}`
            }
          });
          const data2 = await res.json();
          setData(data2);
        }
        return {
          data: (data == null ? void 0 : data.data) ?? data
        };
      };
      const Page = exports("default", () => {
        const { data } = useFetchHook("/Grievance");
        return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Grievence desk"), data == null ? void 0 : data.map((item) => {
          var _a;
          return /* @__PURE__ */ React.createElement("div", { key: item.id, className: "card" }, /* @__PURE__ */ React.createElement("h6", null, item == null ? void 0 : item.userName), /* @__PURE__ */ React.createElement("div", null, (_a = item == null ? void 0 : item.types) == null ? void 0 : _a.map((i) => /* @__PURE__ */ React.createElement(Badge$1, { key: i.id }, (i == null ? void 0 : i.takeCustomValue) ? i == null ? void 0 : i.customValue : i == null ? void 0 : i.name))));
        }));
      });
    }
  };
});
//# sourceMappingURL=Page.b3e2587b.js.map
