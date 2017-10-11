# Redux

## What's the problem with distant components in React?

It's complicated. Sharing data is cumbersome and error-prone. 
Parents components are responsible for keeping state that they don't even use themselves.

## What is Redux? Why/when do we use it?

Redux is a store that holds app state. The state is meant to be shared to components that need it. We use redux when it's less painful that using React state.

Rather than explicitly telling React to update state, we tell Redux that an action occurred. The reducers decide how to update their state.

## What are the steps to add Redux to a React app?
1. Basics
    1. Create store
    1. Hook app to store with <Provider> in index.js
    1. Connect components to store with connect(), and use mapStateToProps
1. Allow data changes
    1. Create reducer with actions and action creators
    1. Dispatch actions with dispatch(recommend to use mapDispatchToProps)

## What is a store?

a place to store state, or global/shared app data.

## What is a reducer? What does the reducer do for us in Redux?

A reducer is a function. It gets state and an action, and decides how to update the state based on the action's type.

## What is immutability? Why do we use it?

Redux requires that we don't mutat state. Instead, we create a copy and modify that. Immutability is shat makes re-rendering our app fast. 

## Vocab words
- action: a plain javascript object. Describes what happened. Every action has a type. Actions may optionally have a payload. 
- action create: a function that returns an action.
- dispatch: the term we use to send an action to the store.