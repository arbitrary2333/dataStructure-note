class Promise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        let resolve = value => {
            if (this.state == 'pending') {
                this.state = 'fulfilled'
                this.value = value
            }
        }
        let reject = reason => {
            if (this.state == 'pending') {
                this.state = 'rejected'
                this.reason = reason
            }
        }
        try {
            executor(resolve, reject)
        } catch {
            reject(err)
        }
    }
    then(onFulfilled, onRejected){
        if(this.state == 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state == 'rejected'){
            onRejected(this.reason)
        }
    }
}