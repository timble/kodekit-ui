# kodekit-ui

UI kit for Web Applications

## Code style

Code must look like it's been written by one person, even though a hundred people have worked on it.

### Comments

Use `//` comments for all things Sass

Basically use these kinds of comments when the styling below is not going to appear in the compiled CSS.
Examples would be mixins, variables, functions, @import blocks etc.

Use `/* */` for all things CSS

These blocks will appear in the (uncompressed) CSS files so they should be about the CSS right below them.

Each comment should have two empty lines on top except

- When it's the start of a file.
- When the preceding code is also a comment

Each comment should have one empty line on bottom.

#### Large blocks

```css
/* ==========================================================================
   Global tools
   ========================================================================== */
```

#### Intro blocks

```css
/* Global tools
   ========================================================================== */
```

#### Description blocks

##### Single line

```css
/* Description */
```

##### Multi line

```css
/**
 * Description
 * Can be multi line
 */
```

#### Numbered column blocks

All comments in the declaration block should be written in a numbered list and added to each property / value

Numbered blocks are never single line

##### With title

```css
/**
 * Description
 * 
 * 1. Comment
 */
selector {
  property: value; /* 1 */
}
```

##### Without title

```css
/**
 * 1. Comment
 */
selector {
  property: value; /* 1 */
}
```

##### Long comments

```css
/**
 * 1. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat 
 *    porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
 */
selector {
  property: value; /* 1 */
}
```

#### Styleguide blocks

For easy (markup example) maintenance we don't add an asterisk on each line

```css
/**
Styleguide item

Description
- Extra info
- More info

.class - Modifier

markup:
<h1>Markup can't have any line breaks</h1>

*/
```