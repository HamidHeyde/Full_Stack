//===========FUNCTIONS============
var test = function(id, ev) {
  console.log(id);
  console.log(ev.target);
};
var createComp = function(compName, compArgs) {
  var element = document.createElement(compName);
  var att;
  for (key in compArgs) {
    if (compArgs.hasOwnProperty(key)) {
      var att = document.createAttribute(key);
      att.value = compArgs[key];
      element.setAttributeNode(att);
    }
  }
  return element;
};
var topMenuClick = function(page, ev) {
  
   var pageToPush  = (page=='index')?'Home':page;
    ev.preventDefault();
    ev.stopPropagation();
    window.history.pushState({}, null, pageToPush);
    // console.log(window.history);
    // console.log(window.location);

    //Setting State for Component Loading
    state.currentComp = page;

  var pageLinks =
    page == "index" ? "home" : (page == "signin" ? "signin" : "signup");

  var linkElement = createComp("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "public/css/react/"+pageLinks+".css"
  });

  //Setting the Page Title
  document.getElementsByTagName('title')[0].innerText = 
  (pageLinks.charAt(0).toUpperCase() + pageLinks.slice(1));

  var parent = document.getElementsByTagName('head')[0];
    var linkToReplace = document.getElementsByTagName('link')[0];
    parent.replaceChild(linkElement,linkToReplace);

  
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
      ce("img", { src: "public/images/logo.png", alt: "logo" })
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
    ce((state.currentComp=='index')
            ?Home:(state.currentComp=='signin')
                ?Signin:Signup, 
        {})
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
