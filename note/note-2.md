### 伪类

#### UI伪类

1、链接伪类

在写链接样式时，请按照下面的顺序写，否则浏览器可能不会显示预期的结果

link => visited => hover => active

```css
a:link{}/*链接默认样式*/
a:visited{}/*已经点击过的链接*/
a:hover{}/*鼠标悬停在链接上*/
a:active{}/*鼠标在链接上按下还未松手*/
```

2、:focus伪类

主要是针对表单元素被聚焦时修改相应样式

3、:target伪类

当点击锚点时，被链接的元素会呈现相应的样式

```html
<style>
:target{
    color:red;
}
</style>
<!--当点击a标签时，对应的p标签字体会变成红色-->
<a href="#info">Info</a>
<p id="info">
 <!--...-->
</p>
```

#### 结构化伪类

1、:first-child :last-child

第一个子元素和最后一个子元素

2、:nth-child

第n个子元素

```css
ul li:nth-child(1){
    /*ul的第一个li*/
}
ul li:nth-child(2){
    /*ul的第二个li*/
}
ul li:nth-child(even){
    /*ul的第偶数个li*/
}
ul li:nth-child(odd){
    /*ul的第奇数个li*/
}
```