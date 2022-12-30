# 手写Promise
作者: fbk
时间：2022-12-20
地点：济南
>足够优秀再大方拥有

```js
  class Commitment {
            static PENDING = '待定'; static FULFILLED = '成功'; static REJECTED = '拒绝'

            constructor(func) {
                this.result = null
                this.status = Commitment.PENDING
                this.resolveCallbacks = []
                this.rejectCallBaacks = []
                try {
                    func(this.resolve.bind(this), this.reject.bind(this))
                } catch (error) {
                    this.reject(error)
                }
            }
            resolve(result) {
                setTimeout(() => {
                    if (this.status === Commitment.PENDING) {
                        this.status = Commitment.FULFIELD
                        this.result = result
                        this.resolveCallbacks.forEach(callback => {
                            callback(result)
                        })
                    }
                });

            }
            reject(result) {
                setTimeout(() => {
                    if (this.status === Commitment.PENDING) {
                        this.status = Commitment.REJECTED
                        this.result = result
                        this.rejectCallBaacks.forEach(callback => {
                            callback(result)
                        })
                    }
                });

            }
            then(onFULFILLED, onREJECTED) {
                return new Commitment((resolve, reject) => {
                    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { }
                    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
                    if (this.status == Commitment.PENDING) {
                        this.resolveCallbacks.push(onFULFILLED)
                        this.rejectCallBaacks.push(onREJECTED)
                    }
                    if (this.status === Commitment.FULFILLED) {
                        onFULFILLED(this.result)
                    }
                    if (this.status === Commitment.REJECTED) {
                        onREJECTED(thios.result)
                    }
                })

            }
        }
```