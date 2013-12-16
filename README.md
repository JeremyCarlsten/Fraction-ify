Fraction-ify
============

Small Jquery/Javascript library to alter an HTML text input to change decimals into a fraction value.


How to Use
----------

Step 1: Download the [minified js](https://github.com/JeremyCarlsten/Fraction-ify/blob/master/js/fractionify-1.0.min.js) (Right click and save as)

Step 2: Make sure you include all js files(including the jQuery library)

```html
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/fractionify.js"></script>
```

Step 3: Add the fractionify class to the input you would like the plugin to change

```html
    <input type="text" class="fractionify" />
```

Step 3: Add this code to the bottom of your page to call the plugin.


```html
    <script type="text/javascript">
        $(document).ready(function () {
            $(".fractionify").change(function () {
                $(this).fractionify();
            });
        });
    </script>
```

Step 4: You're all set shoot me an email or submit an issue if you run into problems.

-----

Note: the class used can be whatever you want simply change the class and the line below to the same text


```html
<input type="text" class="whateverIWant" />
...
<script type="text/javascript">
...
  $(".whateverIWant").change(function(){
...

```
