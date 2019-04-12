Function that sets all the paths dash-array and dash-offset properties to the length of that path. Usually used for the animation of that path

Use: put the [data-svgAnimate] attribute inside the svgs that you want the function to work on.

Eg: `<svg class="your-class" data-svgAnimate>...</svg>`

Then just call svgPathPrepare() in your js file;



# Equlizer

Function that equilizes de height of every element being watched.

### Dependencies

jQuery

## How to use

Alloy equlizer works by blocks. Each block should contain the items to be equalized.

Add to the blocks the data attribute `data-alloyEqualize` 

	`<div class="container" data-alloyEqualize>...</div>`

Then add to the items to be equilized the attribute `data-alloyEqualize-watch` 

```html
	<div class="container" data-alloyEqualize>
		<div class="item" data-alloyEqualize-watch>
      ...
    </div>
    <div class="item" data-alloyEqualize-watch>
      ...
    </div>
	</div>
```

Then just called the function `alloyEqualizer()` in your main js file.

The Blovk element also can take the attribute `alloyEquilize-Responsive = "…"`. Give the attribute the breakpoint in which you want the equilizer to stop equilizing the items.

```html
	<div class="container" data-alloyEqualize data-alloyEquilize-Responsive="640">
		<div class="item" data-alloyEqualize-watch>
      ...
    </div>
    <div class="item" data-alloyEqualize-watch>
      ...
    </div>
	</div>
```

In this case the the function will stop equilizing the items at 640px;

## Options

`alloyEqualizer(options)`

`debug: true` - default false

	Gives debug console logs.

`responsive: false` - default true;

	makes the function responsive or not.