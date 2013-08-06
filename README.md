#Flat Shadow by Pete R.
A small jQuery plugin that will automatically cast a shadow creating depth for your flat UI elements 
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

## Demo
[View demo](http://thepetedesign.com/demos/jquery_flat_shadow_demo.html)

## Usage
To use this on your website, simply include the latest jQuery library found here together with `jquery.flatshadow.js` into your document's `<head>`, follow by the html markup and a function call as follows:
  
````html
<div class="flat-icon"> FLAT </div>
<div class="flat-icon"> UI </div>
...
````

````javascript
$(".flat-icon").flatshadow({
  color: "#2ecc71", // Background color of elements inside. (Color will be random if left unassigned)
  angle: "SE", // Shadows direction. Available options: N, NE, E, SE, S, SW, W and NW. (Angle will be random if left unassigned)
  fade: true, // Gradient shadow effect
  boxShadow: "#d7cfb9" // Color of the Container's shadow
});
````

## Further Customization
With `jquery.flatshadow.js`, you can apply each individual elements with different effect by simply add a `data-color` and `data-angle` to your mark up as follows:

````html
<div data-color="#2ecc71" data-angle="NE" class="flat-icon"> FLAT </div>
<div data-color="#1ABC9C" data-angle="NW" class="flat-icon"> UI </div>
````
and remove the color and angle global options as seen here:

````javascript
$(".flat-icon").flatshadow({
  fade: true,
  boxShadow: "#d7cfb9"
});
````

Now, each individual element will have its own effect without you calling the function multiple times.

## Other Resources
- Tutorial (Coming Soon)