class APIError extends error{
    constructor(
        statuscode,
        message="Something went wrong",
        error=[],
        stack=""


    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors
        if (stack){
            this.stack=stack
        }
        else
        {
            Error.captureStackTrace(this,this.constructor)
            // captureStackTree=passing instance
        }

    }
}
export{APIError}