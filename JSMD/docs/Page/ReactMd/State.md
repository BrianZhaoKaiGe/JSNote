# State 的更新可能是异步的

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。 

因此，state的更新有可能是异步的。

可以让setState（）  接收一个函数。 来解决这个问题

```javascript
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

上面使用了[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，不过使用普通的函数也同样可以：

```javascript
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

