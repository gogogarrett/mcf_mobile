$('./body') {
  insert_top("header", class: "_header") {
    insert("section", class: "top_banner clearfix") {
      insert("a", "home", href: "/", class: "home_icon")
    }
  }

  $$(".user_settings_link") {
    $$("a") {
      add_class("setting_icon")
      move_to("//a[@class='home_icon']", "after")
    }
    remove()
  }
  $$(".brand") {
    move_to("//a[@class='home_icon']", 'before')
  }

  $$("#menu") { remove() }
}