# React Text Cycle

![Demo](demo.gif)

React component for cycling between text headings.

## Install
`npm install react-text-cycle --save`

## Usage
```jsx
const items = ['Friends', 'Family', 'Strangers', 'Weird Uncles']; // Required
const duration = 3000; // The time to wait before rendering the next string
<TextCarousel items={items} duration={duration} />
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
