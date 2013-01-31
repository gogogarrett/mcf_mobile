$('./body') {
  add_class("_home")

  $$("header._header") {
    insert_after("section", class: "logo_area")
  }

  $$("#bannerXL"){
    move_to("//section[@class='logo_area']")
  }

  insert("section", class: "point_section") {
    insert("section", class: "points")
    insert("section", class: "gift_tokens")
    insert("section", class: "game_tokens")
  }
  insert("section", class: "nav_area")

  $$(".token_and_points_widget") {
    $$("h2") {
      move_to("//section[@class='point_section']")
      remove()
    }

    $$(".box") {
      $$("strong") {
        move_to("//section[@class='points']")
      }
      $$(".bign") {
        move_to("//section[@class='points']")
      }
      remove()
    }

    $$(".game") {
      $$("strong") {
        move_to("//section[@class='game_tokens']")
      }
      $$(".smalln") {
        move_to("//section[@class='game_tokens']")
      }
      remove()
    }

    $$(".gift") {
      $$("strong") {
        move_to("//section[@class='gift_tokens']")
      }
      $$(".smalln") {
        move_to("//section[@class='gift_tokens']")
      }
      remove()
    }
    remove()
  }

  $$("li.mobile_only") {
    move_to("//section[@class='nav_area']")
  }

  $$(".token_and_points_widget") {
    move_to("//section[@class='logo_area']", 'after')
  }

  # things to be removed
  $$(".container") {remove()}
  $$("div.form-section") {remove() }
  $$("#header"){ remove() }

}
