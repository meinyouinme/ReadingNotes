### 原型继承

```javascript

    function Parent(){}
    function Child(){ Parent.call(this) }
    var child=new Child()
    function isChild(obj){
        return obj instanceof Child 
        //等价于 return obj.__proto__===Child.prototype
    }
    function isParent(obj){
        return obj instanceof Parent 
        //等价于 return obj.__proto__===Parent.prototype
    }
    console.log(isChild(child)) //=>true
    console.log(isParent(child)) //=>false


```

```javascript

    function Parent(){}
    function Child(){ return new Parent() }
    var child=new Child()
    function isChild(obj){
        return obj instanceof Child 
        //等价于 return obj.__proto__===Child.prototype
    }
    function isParent(obj){
        return obj instanceof Parent 
        //等价于 return obj.__proto__===Parent.prototype
    }
    console.log(isChild(child)) //=>false
    console.log(isParent(child)) //=>true


```

```javascript

    function Parent(){}
    function Child(){ 
        return new Parent() 
        //或者这里写 Parent.call(this)
    }
    var child=new Child()
    function isChild(obj){
        return obj instanceof Child 
        //等价于 return obj.__proto__===Child.prototype
    }
    function isParent(obj){
        return obj instanceof Parent 
        //等价于 return obj.__proto__===Parent.prototype
    }
    Child.prototype=Parent.prototype
    console.log(isChild(child)) //=>true
    console.log(isParent(child)) //=>true


```