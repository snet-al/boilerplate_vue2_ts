export const Form = {
  parseErrors(errors: any) {
    const parsedErrors: any = {};

    const errKeys = Object.keys(errors);
    for (let i = 0, len = errKeys.length; i < len; i++) {
      if (errKeys[i].includes(".")) {
        //If key has '.' it is in a nested form.
        // Get its components:
        // 0 => top level form variable
        // 1 => nested form index,
        // 2 => nested form property
        //
        // Checks are performed to see if variables exists, if they do not, they are set to their default values
        const errKeyComponents = errKeys[i].split(".");

        if (!parsedErrors[errKeyComponents[0]]) {
          parsedErrors[errKeyComponents[0]] = [];
        }

        if (!parsedErrors[errKeyComponents[0]][errKeyComponents[1]]) {
          parsedErrors[errKeyComponents[0]][errKeyComponents[1]] = {};
        }

        parsedErrors[errKeyComponents[0]][errKeyComponents[1]][
          errKeyComponents[2]
        ] = errors[errKeys[i]];
      } else {
        //Default behavior, just like assigning id directly (this was how it was done before)
        parsedErrors[errKeys[i]] = errors[errKeys[i]];
      }
    }

    return parsedErrors;
  },

  clearErrors(key = null, nested = false, index = -1, property = ""): any {
    // if (!key) {
    //   return (this.errors = []);
    // }
    // //TODO: kjo elememinon disa errore qe te shfaqen në console por qe duhet te mos kontrollohen
    // if (nested && this.errors[key] && this.errors[key][index]) {
    //   this.errors[key][index][property] = null;
    // } else {
    //   if (nested) {
    //     if (this.errors[key]) {
    //       this.errors[key][index][property] = null;
    //     }
    //   } else {
    //     this.errors[key] = null;
    //   }
    // }
  },
  flashFormErrors(message = null) {
    // this.$snotify.error(
    //   message ? message : `Ju lutem kontrolloni formën për gabime !`,
    //   "Gabim",
    //   {
    //     timeout: 3000,
    //     showProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     preventDuplicates: false,
    //     titleMaxLength: 10,
    //     bodyMaxLength: 40,
    //   }
    // );
  },
  getDefaultAvatar(gender = "F") {
    return gender && gender === "M" ? "/svg/man_1.svg" : "/svg/girl_2.svg";
  },
  getDefaultAvatarBackground() {
    return "/images/avatar_background.jpg";
  },
};
