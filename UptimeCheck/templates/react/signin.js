//===========COMPONENTS===========
var Signin = function(props) {
  var out = 
  ce("div",{ className: "application" },
    ce("form", {id:"signin", action:"/api/users",method:"GET"},
      ce("div",{ className: "loginForm" },
        ce("div",{ className: "header" },
          ce("div", { className: "title" }, "Signin")
        ),
        ce("div", { className: "content" },
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
                ce("input", {type:"button",value:"Login"})
            )
        )
      )
    )
  );
  return out;
};
