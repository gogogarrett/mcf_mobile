$('./body') {
  insert_top("header", class: "_header clearfix") {

    insert("section", class: "top_banner") {

      insert("a", "", href: "/users/1/edit", class: "settings")
      
    }

  }

  $$(".brand") {
    move_to("//section[@class='top_banner']")
  }

  $$("#logged") {
    move_to("//a[@id='logo']", "after")
    insert("div", "", class: "clearfix")
  }

   $$("#top-dashboard") {
    move_to("//a[@id='logo']", "before")
    insert("div", "", class: "clearfix")
  }
  # $$(".contain") {remove()}
  # $$("#header") { remove() }
  # $$("#menu") { remove() }
  # $$("#right-column") { remove() }
}