$("./body") {
  add_class("_approvals")

  $$("header._header") {
    insert_after("section", class: "_approval_listing")
  }

  $$("div.container") {
    $$("nav") {
      move_to("//section[@class='_approval_listing']")
    }
    $$("section.award-details") {
      move_to("//section[@class='_approval_listing']")
    }
  }


  $$("div.clearfix") { remove() }
}