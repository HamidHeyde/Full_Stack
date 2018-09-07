
var app = {};
app.setMenu = function(){
    var path = window.location.pathname.slice(6);
    var pageMenus={
        index:['signin','signup'],
        signin:['index','signup'],
        signup:['index','signin'],
        users:['dashboard','signout'],
        dashboard:['users','signout'],
    };
    var menuItems = document.getElementsByClassName('textLink');
    menuItems=Array.from(menuItems);

    menuItems.forEach(function(element){
        var ref = new URL(element.href);
        ref = ref.pathname.slice(6);
        
        if (!pageMenus[path].includes(ref))
        {element.parentNode.classList.add('invisible');}
    });
}

app.init = function () {
    if (window.location.pathname=="/html/"){window.location="/html/index"};
    app.setMenu();
};
app.init();