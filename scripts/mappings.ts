/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      with(/^\/$|^\/\?/) { # / 
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }

      # Settings
      with(/users\/\d+\/edit/) { 
        log("--> Importing pages/setting.ts in mappings.ts")
        @import pages/setting.ts
      }      

      # Nomination Process
      with(/nomination_process\/select_initiative\/*/) { # */
        log("\n\n --> Importing pages/nomination_process/nomination_process.ts in mappings.ts")
        log("\n\n --> Importing pages/nomination_process/select_initiative.ts in mappings.ts")
        @import pages/nomination_process/select_initiative.ts
        @import pages/nomination_process/nomination_process.ts
      }
      with(/nomination_process\/select_recipients\?*/) {
        log("\n\n --> Importing pages/nomination_process/select_initiative.ts in mappings.ts")
        @import pages/nomination_process/select_recipients.ts
        @import pages/nomination_process/nomination_process.ts
      }
      with(/nomination_process\/select_reason\?*/) {
        log("\n\n --> Importing pages/nomination_process/select_reason.ts in mappings.ts")
        @import pages/nomination_process/select_reason.ts
        @import pages/nomination_process/nomination_process.ts
      }
      with(/nomination_process\/select_components\?*/) {
        log("\n\n --> Importing pages/nomination_process/select_initiative.ts in mappings.ts")
        @import pages/nomination_process/select_components.ts
        @import pages/nomination_process/nomination_process.ts
      }
      with(/nomination_process\/save_components\/?*/) {
        log("\n\n --> Importing pages/nomination_process/select_initiative.ts in mappings.ts")
        @import pages/nomination_process/select_components.ts
        @import pages/nomination_process/nomination_process.ts
      }
      with(/nomination_process\/preview\/?*/) {
        log("\n\n --> Importing pages/nomination_process/preview.ts in mappings.ts")
        @import pages/nomination_process/preview.ts
        @import pages/nomination_process/nomination_process.ts
      }
      with(/nomination_process\/*/) {
        log("\n\n --> Importing pages/nomination_process.ts in mappings.ts")
        @import pages/nomination_process/nomination_process.ts
      }

      # Awards 
      # Approvals
      else() {
        log("--> No page match in mappings.ts")
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
