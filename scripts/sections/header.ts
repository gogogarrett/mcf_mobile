$('./body') {
  insert_top("header", class: "_header") {
    insert("section", class: "top_banner clearfix") {
      insert("a", "home", href: "/", class: "home_icon")
    }
  }

  $$(".user_settings_link") {
    move_to("//a[@class='home_icon']", "before")
  }
  $$(".brand") {
    move_to("//a[@class='home_icon']", 'before')
  }

  #$$("#logged") {
  #  move_to("//a[@id='logo']", "after")
  #  insert("div", "", class: "clearfix")
  #}

  #$$("#top-dashboard") {
  #  move_to("//a[@id='logo']", "before")
  #  insert("div", "", class: "clearfix")
  #}
  # $$(".contain") {remove()}
  # $$("#header") { remove() }
  $$("#menu") { remove() }
  $$("div.form-section") {
    remove()
  }
  # $$("#right-column") { remove() }
}