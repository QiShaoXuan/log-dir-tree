# log-dir-tree

Log the directory constructor tree like use `tree dir` in linux

## Useage

```bash
npm install log-dir-tree
```

### Log the directory tree

```js
const logDirTree = require('log-dir-tree')

logDirTree.log('./')
```

###  You can also use `parse` method to get the files stat 
 
```js
const logDirTree = require('log-dir-tree')

logDirTree.parse('./')
```

## Example

Run command code, you will get as follows in terminal
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
