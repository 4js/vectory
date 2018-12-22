### js 基础巩固

### String 常用操作方法

```
let str = 'Hello everyone, Welcome to Hong Kong'

str.length // 36 返回字符串的长度

字符串查找
str.charAt(4) // 'o' 返回指定位置的字符串
str.indexOf('e')  // 1 返回指定字符串首次出现的位置  indexOf(strValue, startIndex) 还可以指定起始位置 未找到返回-1
str.lastIndexOf('e')  // 17 返回指定字符串最后一次出现的位置  lastIndexOf(strValue, startIndex) 还可以指定起始位置 和 indexOf 相反, 未找到返回-1, 未找到返回-1
str.search('e') // 1 返回匹配字符串的子字符串的第一个位置, 未找到返回-1
str.match(/d/g) // null 若匹配到则返回数组 未匹配到则返回 null

字符串截取
str.substring(start, end) //起始位置 结束位置 若end省略 则截取到最后 传入负值则视为0
str.slice(start, end) //起始位置 结束位置 若end省略 则截取到最后 传入负值则从最后开始
str.substr(start, length) //起始位置 长度 若start负数 则倒数开始 若length为空 则默认截取到最后

字符串操作
str.splace(substr/regexp,replacement) 字符串替换 不改变源字符串
str.split(str/regexp,maxLength) 字符串分割 支持正则
```

### Array 常用操作方法

```
let arr = [1, 2, 3, 4, 5]

数组转换
arr.join('|') //  1|2|3|4|5|6 数据转字符串 连接
arr.sort(function(a,b){return a-b}) // 数组排序 改变原数组
arr.reverse() // 数组反转 改变原数组
```
