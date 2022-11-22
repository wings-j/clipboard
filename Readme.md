# clipboard

A clipboard javascript code written within 50 lines, using a invisible textarea as a dummy element.     

## Usage

1. Inlcude the script. 

```HTML
<script src='./Clipboard.js'></script>
```

A variable named ```Clipboard``` is added into ```window```.        

2. Use the function. 

```javascript
Clipboard.copy('Content to be copied');
```

Then the string is in the system clipboard.     

Notice: this method can not be used in ```load``` or ```DOMContentLoaded``` event.      
