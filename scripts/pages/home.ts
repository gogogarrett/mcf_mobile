$('./body') {
  add_class("_home")

  $$("header._header") {
    insert_after("section", class: "logo_area")
  }

  $$("#bannerXL"){
    move_to("//section[@class='logo_area']")
  }

  insert("section", class: "nav_area")
  insert("section", class: "point_section") {
    insert("section", class: "points")
    insert("section", class: "game_tokens")
    insert("section", class: "gift_tokens")
  }

  $$(".token_and_points_widget") {
    $$("h2") {
      move_to("//section[@class='point_section']")
      remove()
    }

    $$(".box") {
      $$(".bign") {
        move_to("//section[@class='points']")
      }
      $$("strong") {
        move_to("//section[@class='points']")
      }
      remove()
    }

    $$(".game") {
      $$(".smalln") {
        move_to("//section[@class='game_tokens']")
      }
      $$("strong") {
        move_to("//section[@class='game_tokens']")
      }
      remove()
    }

    $$(".gift") {
      $$(".smalln") {
        move_to("//section[@class='game_tokens']")
      }
      $$("strong") {
        move_to("//section[@class='game_tokens']")
      }
      remove()
    }
    # remove()
  }


  $$("li.mobile_only") {
    move_to("//section[@class='nav_area']")
  }

  $$(".token_and_points_widget") {
    move_to("//section[@class='logo_area']", 'after')
  }



  $$("#header"){ remove() }
  $$("#footer") { remove() }
  $$(".container") {remove()}
  $$("#menu") { remove() }
  $$("div.form-section") {remove() }
}
