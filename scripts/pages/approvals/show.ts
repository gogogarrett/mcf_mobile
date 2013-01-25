$("./body") {
  add_class("_approvals")

  $$("header._header") {
    insert_after("section", class: "_approval_show")
  }

  $$(".award-detail") {
    move_to("//section[@class='_approval_show']")
  }


  $$("div.clearfix") { remove() }
  $$("#header"){ remove() }
}