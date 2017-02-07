# React Text Cycle

![Demo](demo.gif)

React component for cycling between text headings.

## Install
`npm install react-text-cycle --save`

## Usage
```jsx
const items = ['Friends', 'Family', 'Strangers', 'Weird Uncles']; // Required
const duration = 3000; // The time to wait before rendering the next string
<TextCycle items={items} duration={duration} />
```

## API

#### `items` - Array (required)
An array of React nodes. The array should contain more than one element. If it contains only one, no animation occurs. If it contains none, the component will not appear.
#### `duration` - Number (optional, default = 3000)
Time in between titles, in milliseconds. This does not include the duration of the animations.
#### `className` - String (optional)
Class name transferred to the top level element in the component. Use this for styling the text.
#### `bgClassName` - String (optional)
Class name for the background element that sits behind the text.
#### animationStates - Object  (optional)
Allows for customization of the in and out animations.
* `inStart` String - class name for the initial state of the animation. This class should not have a `transition` property defined.
* `in`:  String - class name for final state of the in animation. This class *should* have a `transition` property defined.
* `outStart`:  String - class name for the final out state of the animation. This class should not have a `transition` property defined.
* `out`:  String - class name for final state of the out animation. This class *should* have a `transition` property defined.
