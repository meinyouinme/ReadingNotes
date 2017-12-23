(function (global, factory) {

    //定义amd接口

}(this, function (window) {
    var Zepto = (function () {
        var zepto,$

        function Z(){
            //Zepto选择器的构造函数
        }
        zepto.Z=function(){
            return new Z()
        }
        zepto.init=function(){
            //省略代码
            return zepto.Z()
        }
        $=function(){
            return zepto.init()
        }

        $.fn={
            constructor:zepto.Z
            //各种函数
        }

        zepto.Z.prototype=Z.prototype=$.fn
        $.zepto=zepto
        return $
    })()

    window.Zepto = Zepto

    window.$ === undefined && (window.$ = Zepto)

    ;(function ($) {

    })(Zepto)

    ;(function ($) {

    })(Zepto)

    ;(function ($) {

    })(Zepto)

    ;(function () {

    })()

    return Zepto

}))