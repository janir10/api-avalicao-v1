
export default class GenericResponseModel {
    public status: boolean;
    public custom_error: boolean;
    public msg?: string;
    public data?: Object;

    constructor(msg?: string, status: boolean = true, customError = false, data?: Object) {
        this.msg            = msg
        this.status         = status
        this.custom_error   = customError
        this.data           = data
    }
}