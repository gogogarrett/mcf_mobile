$('./body') {
  add_class("_select_recipients")

  $$("header._header") {
    insert_after("section", class: "_step_2")
  }

  $$("h2.select_recipients") {
    move_to("//section[@class='_step_2']")
  }

  $$(".marshall-header span.bold-header") {
    move_to("//section[@class='_step_2']")
  }

  $$("form[action='/nomination_process/update_recipients']") {
    move_to("//section[@class='_step_2']")
  }

  # things to be removed
  $$(".container") { remove()}
  $$("div.clearfix") { remove() }
}
