$('./body') {
  add_class("_home")

  $$("header._header"){

    insert_after("section", class: "logo_area") {
      insert("a", "Logo Here", href: "/")
      insert_after("section", class: "nav_area")
    }
  }

  $$("li.mobile_only") {
    move_to("//section[@class='nav_area']")
  }

  $$(".token_and_points_widget") {

  }



  $$("#header"){ remove() }
  $$("#footer") { remove() }

}