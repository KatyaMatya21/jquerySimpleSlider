# jquerySimpleSlider
jquery slider with some options

###Usage

First, add **slider.css** and **slider.js** to your page:

```html
<head>
...
<link rel="stylesheet" href="css/slider.css">
...
<body>

   <ul class="slider">
      <li><img src="img/sample1.jpg" alt="image"></li>
      <li><img src="img/sample2.jpg" alt="image"></li>
      <li><img src="img/sample3.jpg" alt="image"></li>
   </ul>

...
<script src="slider.js"></script>
</body>
```

Next, call plugin:

```js
// default options
var options = {
  buttons: true,
  pager: true,
  autoplay: false,
  autoplayTime: 3000,
  width: 600,
  height: 400
 };

 var slider = new Slider('.slider', options);
```

###Options

**buttons** - button(arrows) controls

```
buttons: true; //default -on
buttons: false;          -off
``` 

**pager** - pager controls
```
pager: true; //default -on
pager: false;          -off
```

**autoplay** 
```
autoplay: false; //default -off
autoplay: true;            -on
```

**autoplayTime**  
```
autoplayTime: 3000; //default 
autoplayTime: 2000;  - your time
``` 

**width**  
```
width: 600; //default 
width: 400;  - your size
``` 

**height**  
```
height: 400; //default 
height: 200;  - your size
``` 

###Customize
You can simply customize button(arrow) and pager controls by yourself.

###Dependencies
```
jQuery 1.7+
```

###Demo
https://kate-work.ru/slider/slider.html
