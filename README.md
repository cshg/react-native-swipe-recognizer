# react-native-swipe-recognizer

A simple, configurable 4-directional swipe recognizer using the react-native gesture responder system

## Getting started

Add the dependency
- with yarn: `yarn add react-native-swipe-recognizer`
- with npm: `npm install --save react-native-swipe-recognizer`

## Usage

1. Create a panResponder on `componentWillMount` with two functions:
- `onMoveShouldSetPanResponder`: this functions returns `true` for all cases in which a panResponder should be set (e.g. all, horizontal, vertical)
- `onPanResponderRelease`: this function recognizes the actual swipe on release depending on the gesture state (e.g. right, left or up swipe)

2. Pass the panHandlers to the View

```JavaScript
<View { ...this._panResponder.panHandlers }>
```
