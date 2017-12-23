#### @import 指令必须出现在样式表中其他样式之前，否则@import 引用的样式表不会被加载。

例如这段代码，会成功import style1.css

```css
/*文件style2.css*/
@import "./style1.css";

p{
    color:red
}

```

而下面这种写法无效


```css
/*文件style2.css*/

p{
    color:red
}

@import "./style1.css";

```

#### 当浏览器遇到开标签\<style\>时，就会由解释 HTML 代码切换为解释 CSS 代码。等遇到闭标签\<\/style\>时，它会再切换回解释 HTML代码。

#### CSS选择符

```css

/*上下文选择符*/
article span{
    color:red;
}
/*article里面所有span都会受影响*/

/*子选择符*/
article > span{
    color:red;
}
/*只有article的子span会受影响，孙span、重孙san等不会受影响*/

/*紧邻兄弟元素选择符*/
article + span{
    color:red;
}
/*紧跟在article后面第一个span元素会受影响*/

/*一般兄弟选择符*/
article ~ span{
    color:red;
}
/*article后面的所有span同辈元素都会受影响*/

/*通配符选择符*/
article *{
    color:red;
}
/*article所有后代都会受影响*/
article * a{
    color:red;
}
/*article的所有孙元素a都会受影响，但是子元素a不会*/

/*属性名选择符*/
img[title]{
    width:100px;
}
/*含有title属性的img标签都会受影响*/
/*属性名值选择符*/
img[title="图片"]{
    width:100px;
}
/*含有title属性并且title值为“图片”的img标签都会受影响，双引号可有可无
这里的可有可无指的是属性值是不以数字或符号开头的字符串，如“1”、“1a”、“$abc”、“.abc”等就必须加引号，否则无效
所有最好是都加上引号
*/

```