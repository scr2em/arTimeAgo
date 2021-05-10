
# arTimeAGo

An NPM package made specifically for arabic timeAgo calculations.



## Features
1- fully compatible with arabic grammer.

2- ability to provide a max number of days after which the function will stop converting


## Examples

```javascript
arTimeAgo({date:Date.now()}) // "ألآن"
arTimeAgo({date:Date.now()-1000}) // "منذ ثانية"
arTimeAgo({date:Date.now()-1000*2}) // "منذ ثانيتين"
arTimeAgo({date:Date.now()-1000*50}) // "منذ 50 ثانية"

arTimeAgo({date:Date.now()-1000*60}) // "منذ دقيقة"
arTimeAgo({date:Date.now()-1000*60*3}) // "منذ 3 دقائق"

arTimeAgo({date:Date.now()-1000*60*60}) // "منذ ساعة"
arTimeAgo({date:Date.now()-1000*60*60*21}) // "منذ 21 ساعة"

arTimeAgo({date:Date.now()-1000*60*60*25}) // "منذ يوم"
arTimeAgo({date:Date.now()-1000*60*60*25*2}) // "منذ يومين"
arTimeAgo({date:Date.now()-1000*60*60*25*4}) // "منذ 4 أيام"

arTimeAgo({date:Date.now()-1000*60*60*25*7}) // "منذ أسبوع"

arTimeAgo({date:Date.now()-1000*60*60*24*14}) // "منذ أسبوعين"
arTimeAgo({date:Date.now()-1000*60*60*24*21}) //"منذ 3 أسابيع"

arTimeAgo({date:Date.now()-1000*60*60*24*30}) // "منذ شهر"
arTimeAgo({date:Date.now()-1000*60*60*24*30*5}) //"منذ 5 أشهر"

arTimeAgo({date:Date.now()-1000*60*60*24*30*13}) // "منذ سنة"
arTimeAgo({date:Date.now()-1000*60*60*24*30*24}) // "منذ سنتين"
arTimeAgo({date:Date.now()-1000*60*60*24*30*36}) // "منذ 3 سنوات"
arTimeAgo({date:Date.now()-1000*60*60*24*30*150}) // "منذ 12 سنة"

...
...

```


the function doesn't know when to stop converting, this scencario might be bad if you are using this in your blog ( I mean you don't want them to see "منذ 4 سنوات"
) so you provide another pararmenter called `max` // in days

  
## Examples

 let's say we don't want to convert any dates after 5 months (5*30 days) 

 Normal behavior:
```javascript
arTimeAgo({date:Date.now()-1000*60*60*24*30*6}) //"منذ 6 أشهر"
```
with `max` property: 
```javascript
arTimeAgo({date:Date.now()-1000*60*60*24*30*6, max:5*30}) // "١١ نوفمبر ٢٠٢٠"
```
## Authors

- [@Mohamed M. Abdelgwad](https://www.github.com/scr2em)


  