$("./body") {
  add_class("_nomination_process")

  $$(".load_saved_nomination_message") {
    move_to("//body[@class='_nomination_process']")
  }
  
  $$("#header"){ remove() }
}