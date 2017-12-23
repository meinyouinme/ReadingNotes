:first-letter

:first-line

:before

:after

搜索引擎不会取得伪元素的信息（因为它在标记中并不存在）。因此，不要通过伪
元素添加你想让搜索引擎索引的重要内容。

好吧，我想必须得解释一下为什么要让外边距叠加。如果有一连串段落都被应用了
相同的样式，那么对其中第一段和最后一段来说，它们的上外边距和下外边距决定
了它们与包含元素的间距。而那些位于中间的段落呢，根本不需要两个外边距加起
来那么宽的间距。因此，就像图 3-7 所示的那样，相邻的外边距叠加起来是最合理的，
哪个外边距宽，就以哪个外边距作为段间距。

根据经验，为文本元素设置外边距时通常需要混合使用不同的单位。比如说，一个
段落的左、右外边距可以使用像素，以便该段文本始终与包含元素边界保持固定间
距，不受字号变大或变小的影响。而对于上、下外边距，以 em 为单位则可以让段间
距随字号变化而相应增大或缩小，比如：
/*这里使用了简写属性把上、下外边距设置为.75em，把左、右外边距设置为 30 像素*/
p {font-size:1em; margin:.75em 30px;}
这样，段落的垂直间距始终会保持为字体高度的四分之三（上下外边距都是.75em，
叠加后还是.75em）。如果用户增大了字号，那么不仅段落中的文本会变大，段间距
也会成比例变大。这样，页面的整体布局就会比较协调一致。与此同时，使用像素
单位的左、右外边距不会改变。我想，你应该也不会想让字号变化影响到布局宽
度吧。