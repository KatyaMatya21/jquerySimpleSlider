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

<div style="width: 600px; height: 600px;"> <!-- please specify outer container dimentions -->
   <ul class="slider">
      <li><img src="img/sample1.jpg" alt="image"></li>
      <li><img src="img/sample2.jpg" alt="image"></li>
      <li><img src="img/sample3.jpg" alt="image"></li>
   </ul>
</div>

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
  autoplayTime: 3000
 };

 var slider = new Slider('.slider', options);
```

###Options

**buttons** - button controls

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
###Customize
You can simply customize button and pager controls by yourself.

###Dependencies
```
jQuery 1.7+
```

###Demo
https://kate-work.ru/slider/slider.html
