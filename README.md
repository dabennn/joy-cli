# joy-cli
scaffolding projects with joy
## Installation
Dependencies:
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
```bash
$ npm install joy-cli -g
```
## Usage
```bash
$ joy init
```
You can get help information:
```bash
$ joy -h
```
Command list:
- ` joy init|i ` : Generate a new project
- ` joy add|a ` : Add new repository information
- ` joy list|l ` : Repository list
- ` joy delete|d ` : Delete repository information

## Templates
- [joke](https://github.com/dabennn/joke) : webpack + babel-es6 + postcss + stylus

template.json:
```json
{
  "repository": {
    "branch": "description of template project"
  }
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
