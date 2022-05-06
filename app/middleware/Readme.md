<!--
 * @Description: 介绍middleware目录用途
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-23 23:31:25
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-23 23:31:41
-->


## 目录用途



### 异常的使用

挂在到ctx上下文对象上`ctx.throw()`
```ts
        /**
         * Throw an error with `msg` and optional `status`
         * defaulting to 500. Note that these are user-level
         * errors, and the message may be exposed to the client.
         *
         *    this.throw(403)
         *    this.throw('name required', 400)
         *    this.throw(400, 'name required')
         *    this.throw('something exploded')
         *    this.throw(new Error('invalid'), 400);
         *    this.throw(400, new Error('invalid'));
         *
         * See: https://github.com/jshttp/http-errors
         */
        throw(message: string, code?: number, properties?: {}): never
        throw(status: number): never
        throw(...properties: Array<number | string | {}>): never
```

出现异常
```sh
##  ctx.throw 只能抛出4xx和5xx开头的错误信息
http-errors deprecated non-first-argument status code; replace with createError(699, ...) node_modules/koa/lib/context.js:97:11
http-errors deprecated non-error status code; use only 4xx or 5xx status codes node_modules/koa/lib/context.js:97:11

```
