$('./body') {
  add_class("_settings")

  insert("section", class: "settings_form") {
    insert("h2", "Settings") {
      insert("section", class: "locale_changer")
      insert("section", class: "logout")
    }
  }

  $$("#logout_form") {
    move_to("//section[@class='logout']")
  }

  $$("#change_locale") {
    move_to("//section[@class='locale_changer']")
  }

  # things to be removed
  $$("#header"){ remove() }
  $$(".container") {remove()}
}