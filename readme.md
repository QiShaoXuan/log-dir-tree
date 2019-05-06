# log-dir-tree

Log the directory constructor tree like use `tree dir` in linux

## Useage

```bash
npm install log-dir-tree
```

### log the directory tree

```js
const logDirTree = require('./dist/index')

logDirTree.log('./')
```

###  you can also use `parse` method to get the files stat 
 
```js
const logDirTree = require('./dist/index')

logDirTree.parse('./')
```


