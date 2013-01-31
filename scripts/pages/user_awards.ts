$('./body') {
  add_class("_user_awards")

  $$(".container") {
    $$("section.mobile_only") {
      move_to("//header[@class='_header']", 'after')
    }
  }

  # things to be removed
  $$(".container") { remove()}
  $$("div.clearfix") { remove() }
  $$("div.form-section") { remove() }
  $$("#header"){ remove() }
}
