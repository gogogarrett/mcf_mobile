$('./body') {
  add_class("_select_initiative")

  $$("header._header") {
    insert_after("section", class: "_step_1")
  }

  $$("h2.select_initiative") {
    move_to("//section[@class='_step_1']")
  }

  $$(".step-header") {
    move_to("//section[@class='_step_1']")
  }

  $$(".section_initiative") {
    move_to("//section[@class='_step_1']")
  }


  # things to be removed
  $$("p.clearfix") { remove() }
  $$("br") { remove() }
  $$("#column-1-content") { remove() }
  $$(".click_here") { remove() }
  $$(".selected_text") { remove() }
  $$(".container") { remove()}
  $$("div.clearfix") { remove() }
}
