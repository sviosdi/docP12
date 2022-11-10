---
sidebar_position: 1
---

# Common behaviour of graphic components

## Resizing

The four graphic components adapt their graphic rendering according to their dimensions. For doing so they use two **useEffect()** hook for resizing and drawing, and the **useState()** hook to set the component width as a state.

- The **useEffect()** hook is used one time without dependencies array, to be executed only once when the component is mounted and unmounted. When the component is mounted, an event listener to the **resize** event is added, and removed when the component is unmounted. The resize handler is then called to set the component width as an internal state and force the component to re-render.
- **useEffect()** hook is used one more time with the component width as a dependency and the data to be drawn by the component as another dependency. So whenever the width changes or the data changes, this useEffect() hook will be executed and will call the draw() function to render the component.

## Rendering a component

### The draw() function

The main graphical part of the component is rendered by the draw() function. The component needs only to have a `div` element like this `<div ref={ref}></div>` where `{ref}` is a **useRef()** hook to the corresponding DOM `div` used as a container for inserting some `svg` elements created with the [d3 library](https://d3js.org).

### Cleanup before drawing

Whenever the component needs to be redrawn, the container holding the whole chart will need to be cleaned up by making it empty. This cleanup is done in the **useEffect()** hook (The second one above) and the whole chart can be redrawn from scratch.

## Execution time optimization

Any long runtime calculations for data preparation before drawing will be performed by the appropriate useEffect() hook only when the data changes or when the component is mounted, rather than while drawing.

## Use of the [d3 library](https://d3js.org)

For cutting down the learning curve of **d3** I tried to use as much as possible only some basics commands for drawing **svg** elements to achieve the graphics drawing, rather than trying to find in a voluminous documentation an out of the box function that suits my needs.
Of course, for the activities graph time curve, I didn't try to compute a polynomial interpolation, but tried to find on the internet an example that roughly matches what I was looking for, and I modified that example to suit my needs.
