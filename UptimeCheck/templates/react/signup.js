//===========COMPONENTS===========
var Application = function(props) {
    var out = 
    ce("div",{ className: "application" },
      ce("form", {id:"signin", action:"/api/users",method:"GET"},
        ce("div",{ className: "loginForm" },
          ce("div",{ className: "header" },
            ce("div", { className: "title" }, "LOGIN")
          ),
          ce("div", { className: "content" },
            ce("div", { className: "row" },
                  ce("div", { className: "label" },"First Name"),
                  ce("div", { className: "userInput" },
                      ce("input", {name:"firstName",type:"text",placeholder:"First Name"}),
                  ),
              ),
              ce("div", { className: "row" },
                  ce("div", { className: "label" },"Last Name"),
                  ce("div", { className: "userInput" },
                      ce("input", {name:"lastName",type:"text",placeholder:"Last Name"}),
                  ),
              ),
              ce("div", { className: "row" },
                  ce("div", { className: "label" },"Phone"),
                  ce("div", { className: "userInput" },
                      ce("input", {name:"phone",type:"text",placeholder:"Phone"}),
                  ),
              ),
              ce("div", { className: "row" },
                  ce("div", { className: "label" },"Username"),
                  ce("div", { className: "userInput" },
                      ce("input", {name:"username",type:"text",placeholder:"Username"}),
                  ),
              ),
              ce("div", { className: "row" },
                  ce("div", { className: "label" },"Password"),
                  ce("div", { className: "userInput" },
                      ce("input", {name:"password",type:"text",placeholder:"Password"}),
                  ),
              ),
              ce("div", { className: "row" },
                  ce("div", { className: "label" },"Email"),
                  ce("div", { className: "userInput" },
                      ce("input", {name:"email",type:"text",placeholder:"Email"}),
                  ),
              ),
              ce("div", { className: "row" },
                  ce("input", {type:"button",value:"Signup"})
              )
          )
        )
      )
    );
    return out;
  };
  