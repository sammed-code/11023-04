# 11023-04

npx -> node package execution

npx create-react-app my-app
cd my-app
npm start

### Components
    -> Class Component
    -> Functional Component

### States
    -> It will be storing all the data required for those components

### Hooks
    -> useState()
    -> import {useState} from "react";
    -> const [counr, setCount] = useState();
        -> count: variable
        -> setCount: method

### Props
    -> The data which I want to transfer to some other component
    -> Parent component ---props---> Child component
    -> Parent Comp => <FuncComponent name-"name" height={11.11} />
    -> Child Comp => props.name, props.height

### Routing
    -> npm i react-router-dom
    -> Router > Routes > Route (/home, /sign-in, ...)
    -> Browser Router