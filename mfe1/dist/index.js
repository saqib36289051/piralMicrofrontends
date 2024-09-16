//@pilet v:2(rolluppr_mfe1,{})
System.register(["react", "react-router-dom"], function(exports, module) {
  "use strict";
  var React, Link;
  return {
    setters: [(module2) => {
      React = module2;
    }, (module2) => {
      Link = module2.Link;
    }],
    execute: function() {
      exports("setup", setup);
      const Page = React.lazy(() => module.import("./Page.f61e28a7.js"));
      function setup(app) {
        app.registerPage("/page", Page);
        app.registerMenu(() => /* @__PURE__ */ React.createElement(Link, { to: "/page" }, "mfe1"));
        app.registerTile(() => /* @__PURE__ */ React.createElement("div", null, "Welcome to Piral!"), {
          initialColumns: 2,
          initialRows: 2
        });
      }
    }
  };
});
//# sourceMappingURL=index.js.map
