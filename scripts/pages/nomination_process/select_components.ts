$('./body') {
  add_class("_select_components")

  $$("header._header") {
    insert_after("section", class: "_step_4")
  }

  $$("h2.select_components") {
    move_to("//section[@class='_step_4']")
  }

  $$(".marshall-header span.bold-header") {
    move_to("//section[@class='_step_4']")
  }

  $$("form[action^='/nomination_process/save_components?nomination_id=1226']") {
    move_to("//section[@class='_step_4']")
  }

  $$("div.page-footer") {
    move_to("//section[@class='_step_4']")
    insert_before("section", class: "_reward_info")
  }

  $$("#reward_selector") {
    $$(".modal-header") {
      $$("h3") {
        move_to("//form[@id='components_form']")
      }
    }
    $$(".modal-body") {
      $$(".divDialogElements") {
        $$("div") {
          move_to("//form[@id='components_form']")
        }
      }
    }
  }

  $$("#components_form") {
    move_to("//section[@class='_reward_info']")
  }

  $$(".alert-error") {
    move_to("//form[@id='components_form']", 'before')
  }

  # things to be removed
  $$(".inline-error") { remove() }
  $$(".error_inline") { remove() }
  $$(".modal") { remove() }
  $$(".close") { remove() }
  $$(".container") { remove()}
  $$("div.clearfix") { remove() }
}