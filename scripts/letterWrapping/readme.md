# letterWrapping

Function that wraps all the letters inside an element with a specific html element.

Eg: `<h1>Hello</h1>` to

```
<h1>
	<span>H</span>
	<span>e</span>
	<span>l</span>
	<span>l</span>
	<span>o</span>
</h1>
```

### Dependencies

jQuery 3x

## How to use

Alloy letterWrapping works by blocks.

Add to the attribute the data attribute `data-letterWrapping` 

	<h1 data-letterWrapping>...</h1>

Then just called the function `letterWrapping()` in your main js file.

## Data-attributes options:

`data-wrapper="..."` : Wrapps letters with that html element.  Default span. Eg:

```
<h1 data-wrapper="div">
  <div>H</div>
  <div>i</div>
</h1>
```
`data-wrappingClass="..."` : Give the attribute the class which you want to use for every letter. Default 'letter' if left blank Eg:

```<h1 wrappingClass="bold" data-wrapper="div">
<h1 data-wrappingClass="bold" data-wrapper="div">  
  <div class="bold">H</div>
  <div class="bold">i</div>
</h1>
```

