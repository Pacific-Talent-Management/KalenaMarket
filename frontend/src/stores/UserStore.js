import { extendObservable} from "mobx";

/**
 * UserStore
 *
 */

class UserStore {
    constructor() {
        extendObservable(this, {
            loading:true,
            isLoggedIn: false,
            email: '',
            firstName: '',
            lastName: '',
            phone: '',

        })
    }
}

export default new UserStore();