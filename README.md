```
$ npm install
$ npm run tsc
```

`"Generic type ' Example' requires 1 type argument(s)." ts(2314)` is _not_ thrown. But if you rename `src/example.d.ts` to `src/example.ts` you'll see that error.