### each函数和map函数实现

$.each(collection, function(index, item){ ... })   ⇒ collection

遍历数组元素或以key-value值对方式遍历对象。回调函数返回 false 时停止遍历。

以下是Zepto的each实现：

```javascript

var $ = {},
        isWindow = function (obj) {
            return obj != null && obj === obj.window// window==window.window
        },
        likeArray = function (obj) {
            //判断类数组
            //!!0 false   !!null false  !!undefined false !!1.2 true
            //obj不是0 不是null 不是undefined //obj含有length属性
            var length = !!obj && 'length' in obj && obj.length
            return
                //不是函数
                typeof obj !=='function'
                //不是window
                && !isWindow(obj)
                &&
                (
                    //是数组
                    Object.prototype.toString.call(obj)==='[object Array]'
                    || length === 0
                    ||
                    (
                        //length是数字
                        typeof length == 'number'
                        //length是正数
                        && length > 0
                        //最后一个(length-1) in obj 即length是整数
                        && (length - 1) in obj
                    )
                )

        };
    $.each = function (elements, callback) {
        var i, key
        if (likeArray(elements)) {
            //如果是数组或类数组 则采用for循环
            //否则采用for in 循环
            // for...in 效率是最低的。
            // 这是因为 for...in 有一些特殊的要求，包括：
            // 1. 遍历所有属性，不仅是 own properties 也包括原型链上的所有属性。
            // 2. 忽略 enumerable 为 false 的属性。
            // 3. 必须按特定顺序遍历，先遍历所有数字键，然后按照创建属性的顺序遍历剩下的。
            // 所以请优先使用 for...of(es6)
            for(i=0;i<elements.length;i++)
                //如果callback return false 直接返回elements 退出循环
                if(callback.call(elements[i]/*注意这里，改变callback里的this指向*/,i,elements[i])===false) return elements
        }else{
            for(key in elements)
                if(callback.call(elements[key],key,elements[key])===false) return elements
        }
        return elements
    }
    $.each([1,2,3],function(index,item){
        console.log(index,item)
        //0 1
        //1 2
        //2 3
    })
    
    $.map=function(elements,callback){
        //map函数和each函数的区别：
        //1、返回值不同 map函数返回处理过的elements数组（并且还扁平化了）
        //而each函数直接原封不动的返回elements
        //2、处理过程不同 在each函数里 如果callback返回false 直接退出循环
        //但在map函数里 如果callback返回null或undefined 这个返回值过滤掉
        //3、callback的参数顺序不同
        //each是callback(index,value)
        //而map是callback(value,index)
        //所以each函数侧重处理过程 而map函数侧重处理后的值
        var value, values = [], i, key
        if (likeArray(elements))
            for (i = 0; i < elements.length; i++) {
                value = callback(elements[i], i)
                if (value != null) values.push(value)
            }
        else
            for (key in elements) {
                value = callback(elements[key], key)
                if (value != null) values.push(value)
            }
        return flatten(values)//返回扁平化后的数组
    }

```

以上是直接调用的$.each和$.map
其实zepto的collection还有each和map方法

```javascript

$.fn={
    map:function(fn){
        //上面说到map函数注重处理后的结果
        //这里$($.map()) 是返回处理后的zepto collection 
        //支持链式调用
        return $($.map(this,function(el,i){
            return fn.call(el,i,el)
        }))
    },
    // $('p').each(function(index,el){
    //    $(this).addClass('on') //这里this指向el
    //})
    each:function(callback){
        emptyArray.every.call(this,function(el,index){
            return callback.call(el,index,el) !==false
        })
        return this//支持链式调用
    }
}


```

for of 循环看[这里](note-6-1.md)