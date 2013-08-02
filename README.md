#Flat Shadow by Pete R.
A small jQuery plugin that will automatically cast a shadow creating depth for your flat UI elements 
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

## Usage
To use `jquery.flatshadow.js` on your website, simply include the latest jQuery library found here together with `jquery.flatshadow.js` into your document's `<head>` and call the function like this:
  
````html
<div class="flat-icon"> FLAT </div>
<div class="flat-icon"> UI </div>
...
````

````javascript
$(".flat-icon").flatshadow({
  color: "#2ecc71",
  angle: "SE",
  fade: true,
  boxShadow: "#d7cfb9"
});
````

### Color
The color option allows you to assign a background color to all your elements at once. Color will be random if empty.

### Angle
The angle option allows you to assign the direction (N, NE, E, SE, S, SW, W and NW ) of the shadow of the elements inside. Angle will be random if empty.

### Fade
The fade option will turn the flat shadow effect into a gradient shadow effect.

### boxShadow
The boxShadow allows you to apply the same shadow effect to the container of the elements. The option accept a 6 hex color code. For example, "#000000".

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