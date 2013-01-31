$('./body') {
  add_class("_login")
  
  $$("span.left") { remove() }
  $$("span.right") { remove() }
  $$(".footer") { remove() }

  insert("script", data-keep: "true", 
    type: "text/javascript", src: asset("javascript/localstorage.js"))
}