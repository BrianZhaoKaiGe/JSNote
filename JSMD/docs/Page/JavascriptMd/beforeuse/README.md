# 四色五入，保留小数点后四位

```javascript
let getFloat =  (number, n)=> {
		n = n ? parseInt(n) : 0;
		if (n <= 0) return Math.round(number);
		number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
		return number;
	};
```

