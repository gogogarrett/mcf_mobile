$('./body') {
  add_class("_select_reason")

  $$("header._header") {
    insert_after("section", class: "_step_3")
  }

  $$("h2.select_reason") {
    move_to("//section[@class='_step_3']")
  }

  $$(".marshall-header span.bold-header") {
    move_to("//section[@class='_step_3']")
  }

  $$("form[action^='/nomination_process/select_reason?nomination_id=']") {
    move_to("//section[@class='_step_3']")
    $$("textarea") {
      attribute("cols") {
        value("50")
      }
    }
  }

  # things to be removed
  $$(".container") { remove()}
  $$("div.clearfix") { remove() }
}
