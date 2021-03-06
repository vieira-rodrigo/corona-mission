import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

const SEEN_SLIDES_KEY = "seenSlides";
const LOGGED_USER_KEY = "loggedUser";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: Storage) {}

  isSeenSlides(): Promise<boolean> {
    return this.storage.get(SEEN_SLIDES_KEY);
  }

  markSeenSlides(): Promise<any> {
    return this.storage.set(SEEN_SLIDES_KEY, true);
  }

  async setLoggedUser (user: firebase.User) {
    await this.storage.set(LOGGED_USER_KEY, user);
  }

  async getLoggedUser () {
    return await this.storage.get(LOGGED_USER_KEY);
  }
}
