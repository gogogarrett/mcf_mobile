$('./body') {
  add_class("_home")

  $$("header._header"){
    insert_after("section", class: "logo_area") {
      insert("a", "Logo Here", href: "/")
    }
  }

  $$(".token_and_points_widget") {
    
  }

  $$("#header"){ remove() }
  $$("#footer") { remove() }

}