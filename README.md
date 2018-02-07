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

## Simple Example

This example sets the panResponder for horizontal swipes and does `console.logs` on right and left swipes:

```JavaScript
import React from 'react';
import { View, Text, PanResponder } from 'react-native';
import SwipeRecognizer from 'react-native-swipe-recognizer';

class App extends React.Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        const swipe = new SwipeRecognizer(e, gestureState);
        return swipe.isHorizontalSwipe();
      },
      onPanResponderRelease: (e, gestureState) => {
        const swipe = new SwipeRecognizer(e, gestureState);
        if (swipe.isRightSwipe()) console.log('right swipe recognized!');
        if (swipe.isLeftSwipe()) console.log('left swipe recognized!');
      },
    });
  }

  render() {
    return (
      <View { ...this._panResponder.panHandlers }>
        <Text>This view recognizes left and right swipes</Text>
      </View>
    );
  }
}
```

## Custom Options Example

To pass in custom minimum distance and speed for swipes simply define an options object with two properties:
- minimumSwipeDistance (the default value is 30)
- minimumSwipeSpeed (the default value is 0.1)

```JavaScript
const options = {
    minimumSwipeDistance: 100,
    minimumSwipeSpeed: 0.01,
};
```

And pass it as the third argument to the SwipeRecognizer constructor in `onPanResponderRelease`:
```JavaScript
const swipe = new SwipeRecognizer(e, gestureState, options);
```

Full example with custom options:

```JavaScript
import React from 'react';
import { View, Text, PanResponder } from 'react-native';
import SwipeRecognizer from 'react-native-swipe-recognizer';

class App extends React.Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        const swipe = new SwipeRecognizer(e, gestureState);
        return swipe.isHorizontalSwipe();
      },
      onPanResponderRelease: (e, gestureState) => {
        const options = {
            minimumSwipeDistance: 100,
            minimumSwipeSpeed: 0.01,
        };
        const swipe = new SwipeRecognizer(e, gestureState, options);
        if (swipe.isRightSwipe()) console.log('long right swipe recognized!');
        if (swipe.isLeftSwipe()) console.log('long left swipe recognized!');
      },
    });
  }

  render() {
    return (
      <View { ...this._panResponder.panHandlers }>
        <Text>This view recognizes left and right swipes</Text>
      </View>
    );
  }
}
```
