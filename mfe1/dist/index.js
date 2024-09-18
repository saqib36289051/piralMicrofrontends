//@pilet v:2(rolluppr_grievence,{})
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
      (function() {
        var d = document;
        var __bundleUrl__ = function() {
          try {
            throw new Error();
          } catch (t) {
            const e = ("" + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
            if (e)
              return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/, "$1") + "/";
          }
          return "/";
        }();
        ["style.css"].forEach((cf) => {
          ;
          var u = __bundleUrl__ + cf;
          var e = d.createElement("link");
          e.setAttribute("data-origin", "grievence");
          e.type = "text/css";
          e.rel = "stylesheet";
          e.href = u + "?_=" + Math.random();
          d.head.appendChild(e);
        });
      })();
      exports("setup", setup);
      const Page = React.lazy(() => module.import("./Page.b3e2587b.js"));
      function setup(app) {
        app.registerPage("/grievence", Page);
        app.registerMenu(() => /* @__PURE__ */ React.createElement(Link, { to: "/grievence" }, "Grievence"));
        app.registerTile(() => /* @__PURE__ */ React.createElement("div", null, "Welcome to Piral!"), {
          initialColumns: 2,
          initialRows: 2
        });
      }
    }
  };
});
//# sourceMappingURL=index.js.map
