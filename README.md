# React rating stars

> Lightweight , Simple yet elegant React rating star component,  drawing star icon by using SVG ,  just drag one file(ratingstar.js, 150 lines) into your project and follow this simple guide and you good to go ：-）



## Demo Example 
![image](https://github.com/bttsea/ratingstar/raw/master/demoimages/demo01.jpg)


 


 ## Run the Demo   
This is a create-react-app, so

### step 0: (If you are NOT using styled components yet, then need to add this line into your package.json)
```sh
    ...
    "styled-components": "^4.4.1"`
    ...
```

### step 1: 
```sh
  npm install
```

### step 2: 
```sh
  npm run start
```

### step 3: 
```sh
  http://localhost:9876/  should be displayed in the browser, copy and paste the address if not
```

## How to use the component

1. No npm install needed, just import the file (ratingstar.js) into your project.
```sh
  import { StarRating } from './ratingstar'
```

2. Use it as editable rating star, the size is in 'px', you want set it to a bigger number when using for editable component, rating score will be brought back into the callback function 
```sh
  ...
   onChangeRating(rating) {
        // the value could be 0.00, 0.25, 0.75, 1.00, 1.25,......., 4.00, 4.25, 4.50, 4.75 or 5.00
        console.log('rating' + rating)
   }
  ...

   <StarRating
        size={86}  
        rating={this.state.rating}
        onChangeRating={this.onChangeRating}
    />
  ...
```

   or

 3. Use it as read only rating star, just set the size of the star and the rating (it can be anywhere from 0.0 to 5.0) 
```sh
    <StarRating 
        size={16} 
        rating={this.props.ratingonproduct}
    />
```




## Props

|Prop|Type|Description|Required|Default|
|---|---|---|---|---|
|**`size`**|`integer`|Width and height of one star in 'px', if editable then better using bigger number| `No`|`32`|
|**`rating`**|`number`| Number between 0.0 to 5.0 |`No`|`0.0`|
|**`onChangeRating`**|`callback function`|Required if you want use it as editable rating star, to get actual user rating from here(called when user click on the component)|`Not required for read only rating star`|*undefined*|




## Acknowledgements

I am so grateful to the authors of existing related projects for their ideas and collaboration:

- [@codepen](https://codepen.io/)
- [@stackoverflow](https://stackoverflow.com/)
- [@google](https://google.com)

## License

This rating star component is open source software [licensed as MIT] .

