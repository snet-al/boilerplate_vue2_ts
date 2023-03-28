import "@/plugins/globals";
import api from "@/clients/api";
import eventBus from "@/utils/eventBus";

export class ClientModel {
  id = 0;
  uuid = "";
  phone = "";
  mobilePhone = "";
  gender = "";

  constructor(data?: any, skipTranslation = false) {
    if (!data) {
      return;
    }
    const translatorSecondObj: any = {};
    if (!process.env.VUE_APP_MODELS || skipTranslation) {
      return Object.assign(this, data);
    }
    Object.keys(translatorSecondObj).forEach((localFieldName) => {
      Object.assign(this, {
        [localFieldName]: data[translatorSecondObj[localFieldName]],
      });
    });
  }
}

export class UserModel {
  private static instance: UserModel = new UserModel();
  id = 0;
  uuid = "";
  firstName = "";
  lastName = "";
  email = "";
  mobileNumber = "";
  birthday: Date = new Date();
  password = "";
  client: ClientModel = new ClientModel();
  addresses: any;

  public static getInstance(): UserModel {
    return UserModel.instance;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  saveToServer(successCallback: any, errorCallback: any) {
    const payload: object = {
      id: this.id,
      first_name: this.firstName,
      last_name: this.lastName,
      addresses: this.addresses,
      client: {
        mobile_phone: this.client.mobilePhone,
        phone: this.client.phone,
      },
      phone: this.mobileNumber,
      birthday: this.birthday,
    };

    // call api with payload
  }
}
