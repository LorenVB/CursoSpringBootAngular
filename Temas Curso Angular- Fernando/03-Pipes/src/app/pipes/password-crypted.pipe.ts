import { Pipe, PipeTransform } from "@angular/core";
import { stringify } from "querystring";

@Pipe({
  name: "passwordCrypted"
})
export class PasswordCryptedPipe implements PipeTransform {
  transform(value: string, statusPassword: boolean): string {
    let passwordResponse: string = value;

    if (statusPassword) {
      for (let i = 0; i < value.length; i++) {
        passwordResponse = "*".repeat(value.length);
      }
    }

    return passwordResponse;
  }
}
