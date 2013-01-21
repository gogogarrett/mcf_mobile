$('./body') {
  add_class("_settings")

  insert("section", class: "settings_form") {
    insert("h2", "Settings") {
      insert("section", class: "locale_changer")
      insert("section", class: "logout") {
        insert("a", "Logout", href: "/users/sign_out", data-method: "delete")
      }
    }
  }

  $$("#change_locale") {
    move_to("//section[@class='locale_changer']")
  }

  # things to be removed
  $$("#header"){ remove() }
  $$("#footer") { remove() }
  $$(".container") {remove()}
  $$("#menu") { remove() }
}