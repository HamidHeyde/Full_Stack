//===========FUNCTIONS============
//===========GLOBALS============
var ce = React.createElement;
var state = {
  currentComp: "index",
  comps: {
    index: {
      menus: ["Signin", "Signup"]
    },
    signin: {
      menus: ["Home", "Signup"]
    },
    signup: {
        menus: ["Home", "Signin"]
    }
  }
};
//===========COMPONENTS===========
//===========Header
var Header = function(props){
    var out = 
    "";

    return out;
};
//===========Main Application
var App = function(props) {
  var out = ce("div", { className: props.cName },
    //Rendering the Required Componens
    //Rendering Header
    ce(Header, { menus: state.comps[state.currentComp].menus}),
    //Rendering Application
    //ce(Application, { data: state.comps[state.currentComp] })
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
