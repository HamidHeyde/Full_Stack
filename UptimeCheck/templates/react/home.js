var Application = function(prpos) {
    var out = ce("div",{ className: "application" },
      ce(
        "div",
        { className: "loginForm" },
        //Form Header
        ce("div", { className: "header" },
          ce("div", { className: "title" },"Welcome to Uptime Check Website")
          ),
        //Form Content
        ce("div", { className: "content" },
          ce("div", { className: "row" },
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et est commodo, venenatis lacus et, egestas metus. Etiam rhoncus
          fringilla ante ut interdum. Nullam blandit eu eros id lacinia. Morbi id auctor est. Proin vitae felis
          eros. Aliquam at sollicitudin metus. Ut ac ullamcorper ex. Phasellus est est, varius quis pharetra
          eu, lobortis quis nisl. In at gravida nisl. Integer ut fermentum tortor, id venenatis dolor. Etiam
          et tellus laoreet, dapibus augue nec, mollis nisi. Duis pharetra eros id ipsum imperdiet interdum.
          Vestibulum lectus erat, consectetur lobortis neque vitae, vestibulum mattis nisi. Ut enim odio, vulputate
          eu ultrices nec, pulvinar sed felis.`,
          ce("br", {}),
          ce("br", {}),
          `Nam eu velit nibh. Curabitur pellentesque scelerisque laoreet. Nunc aliquet porttitor 
          nibh sit amet commodo. Pellentesque eleifend ligula et tortor placerat fringilla. Integer 
          faucibus tincidunt dolor, ut semper quam sollicitudin aliquam. Nunc sit amet magna lorem. 
          Pellentesque in mi tellus. Integer a ipsum lorem. Donec consectetur risus accumsan eros 
          consectetur, sit amet feugiat massa sodales. Aliquam libero risus, accumsan et metus luctus, 
          varius venenatis orci. Etiam nec neque sed risus auctor consectetur sit amet vel magna. 
          Nullam at eros eu orci tempus suscipit. Suspendisse lectus mi, commodo et vestibulum tempus, 
          varius sed sapien.`
          )
          )
      )
    );
    return out;
  };