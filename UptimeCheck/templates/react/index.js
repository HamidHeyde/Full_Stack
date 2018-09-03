//===========FUNCTIONS============
var test = function(id, ev) {
  console.log(id);
  console.log(ev.target);
};
var topMenuClick = function(page, ev) {
  state.currentComp = page;
  //console.log(document.getElementsByTagName('link'));
  renderApp();
};
//===========GLOBALS============
var ce = React.createElement;
var state = {
  currentComp: "index",
  compMenuClick: topMenuClick,
  comps: {
    index: {
      menus: {
        items: ["Signin", "Signup"],
        links: ["signin", "signup"]
      }
    },
    signin: {
      menus: {
        items: ["Home", "Signup"],
        links: ["index", "signup"]
      }
    },
    signup: {
      menus: {
        items: ["Home", "Signin"],
        links: ["index", "signin"]
      }
    }
  }
};
//===========COMPONENTS===========
//===========Header
var Header = function(props) {
  var out = ce(
    "div",
    { className: "header" },
    ce(
      "div",
      { className: "logo" },
      ce("img", { src: "./images/logo.png", alt: "logo" })
    ),
    ce(
      "div",
      { className: "menu" },
      props.menus.items.map(function(element, index) {
        return ce(
          "div",
          { className: "item" },
          ce(
            "a",
            {
              className: "textLink",
              onClick: function(ev) {
                props.menuClickAction(props.menus.links[index], ev);
              }
            },
            element
          )
        );
      })
    )
  );

  return out;
};
//===========Main Application
var App = function(props) {
  var out = ce(
    "div",
    { className: props.cName },
    //Rendering the Required Componens
    //Rendering Header
    ce(Header, {
      menus: state.comps[state.currentComp].menus,
      menuClickAction: state.compMenuClick
    }),
    //Rendering Application
    ce(Application, { data: state.comps[state.currentComp] })
  );
  return out;
};
//===== APP RENDERER =======
var renderApp = function() {
  var divToRender = document.getElementsByTagName("body")[0];
  ReactDOM.render(ce(App, { cName: "wrapper" }), divToRender);
};
//Rendering App
renderApp();
