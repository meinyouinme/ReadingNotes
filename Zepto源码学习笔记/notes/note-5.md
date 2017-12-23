### extend函数实现

$.extend()函数是对对象的扩展

$.extend(target, [source, [source2, ...]])   ⇒ target

$.extend(true, target, [source, ...])   ⇒ target v1.0+

通过源对象扩展目标对象的属性，源对象属性将覆盖目标对象属性。

默认情况下为，复制为浅拷贝（浅复制）。如果第一个参数为true表示深度拷贝（深度复制）。

以下是Zepto的extend实现：

```javascript

var $ = {},
        isPlainObject = function (obj) {//判断纯对象
            return typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype
        },
        isArray = Array.isArray || function (arr) {//判断数组
                return arr instanceof Array
            };
    function extend(target, source, deep) {
        for (var key in source)
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                    target[key] = {}//如果target不是对象而source是对象 则把target设为空对象
                if (isArray(source[key]) && !isArray(target[key]))
                    target[key] = []//如果target不是数组而source是数组 则把target设为空数组
                extend(target[key], source[key], deep)
            }
            else if (source[key] !== undefined) target[key] = source[key]
    }
    $.extend = function (target) {
        var deep, args = [].slice.call(arguments, 1)
        if (typeof target === 'boolean') {//如果第一个参数是bool值 则参数整体向后挪一位
            deep = target
            target = args.shift()
        }
        args.forEach(function (arg) {
            extend(target, arg, deep)
        })
        return target
    }
    var foo = {
        a: 1,
        b: 2,
        c: [1, 2, 3, 4],
        d: {
            x: 1,
            y: 2,
            z: null,
            t: true
        },
        e: 0
    }
    $.extend(true, foo, {
        a: 11,
        b: 22,
        c: [11, 22, 33],
        d: {
            x: 11,
            y: 22,
            z: 33,
            t: false
        },
        e: [1, 2, 3]
    })
    console.log(foo)
    //   {
    //        a: 11,
    //        b: 22,
    //        c: [11, 22, 33, false],
    //        d: {
    //            x: 11,
    //            y: 22,
    //            z: 33,
    //            t: false
    //        },
    //        e:[1,2,3]
    //    }

```