$("./body") {
  table_dump('.//table')
  $$("#column-1-content") { remove() }
  $$("#step1") { remove() }
  $$("#step2") { remove() }
  $$("#step3") { remove() }
  $$("#step4") { remove() }
  $$(".modal") { remove() }
  $$(".view_details") { remove() }
  $$(".vehicle_tr") { remove() }
  $$(".disbursement_changer") { remove() }
  $$(".notification_email_tr") { remove() }
}