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

## Example

run command code, you will get this like above in terminal
```
./
├── .babelrc
├── .git
│   ├── COMMIT_EDITMSG
│   ├── FETCH_HEAD
│   ├── HEAD
│   ├── config
│   ├── description
│   ├── hooks
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── prepare-commit-msg.sample
│   │   └── update.sample
...
```
