let arr = [5, 5, 5, 5],
   ar = [5, 3, 5, "5"];

 function foo(a) {
   for (let b = 0; b < a.length; b++)
     if (a[b] !== a[0]) return !1;
   return !0
 };

console.log([foo(arr), foo(ar)])