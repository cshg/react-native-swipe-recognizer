[![npm version](https://badge.fury.io/js/react-native-swipe-recognizer.svg)](https://badge.fury.io/for/js/react-native-swipe-recognizer)

# react-native-swipe-recognizer

A simple, configurable 4-directional swipe recognizer using the react-native gesture responder system

## Getting started

Add the dependency
- with yarn: `yarn add react-native-swipe-recognizer`
- with npm: `npm install --save react-native-swipe-recognizer`

## Usage
1. Create an instance of `SwipeRecognizer` in `componentWillMount` (to pass in options see [custom options example](#custom-options-example))

2. Create a panResponder with the following two functions (see [simple example](#simple-example)):
- `onMoveShouldSetPanResponder`: this functions returns `true` for all cases in which a panResponder should be set (e.g. all, horizontal, vertical)
- `onPanResponderRelease`: this function recognizes the actual swipe on release depending on the gesture state (e.g. right, left or up swipe)

    Within those functions pass the gestureState to the used swipeRecognizer functions, for example:
    ```JavaScript
    swipeRecognizer.isRightSwipe(gestureState);
    ```

3. Within the render function pass the panHandlers to the View:
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
    const swipeRecognizer = new SwipeRecognizer();
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        return swipeRecognizer.isHorizontalSwipe(gestureState);
      },
      onPanResponderRelease: (e, gestureState) => {
        if (swipeRecognizer.isRightSwipe(gestureState)) console.log('right swipe recognized!');
        if (swipeRecognizer.isLeftSwipe(gestureState)) console.log('left swipe recognized!');
      },
    });
  }

  render() {
    return (
      <View style={styles.container} { ...this._panResponder.panHandlers }>
        <Text>This view recognizes left and right swipes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
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

And pass it as the argument to the SwipeRecognizer constructor in `componentWillMount`:
```JavaScript
const swipe = new SwipeRecognizer(options);
```

Full example with custom options:

```JavaScript
import React from 'react';
import { View, Text, PanResponder } from 'react-native';
import SwipeRecognizer from 'react-native-swipe-recognizer';

class App extends React.Component {
  componentWillMount() {
    const options = {
        minimumSwipeDistance: 100,
        minimumSwipeSpeed: 0.01,
    };
    const swipeRecognizer = new SwipeRecognizer(options);
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        return swipeRecognizer.isHorizontalSwipe(gestureState);
      },
      onPanResponderRelease: (e, gestureState) => {
        if (swipeRecognizer.isRightSwipe(gestureState)) console.log('right swipe recognized!');
        if (swipeRecognizer.isLeftSwipe(gestureState)) console.log('left swipe recognized!');
      },
    });
  }

  render() {
    return (
      <View style={styles.container} { ...this._panResponder.panHandlers }>
        <Text>This view recognizes left and right swipes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
