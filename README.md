# Typescript OrigamiCore CLI (OCCLI)

[OrigamiCore](https://www.npmjs.com/package/@origamicore/core)

[Old OrigamiCore](https://www.npmjs.com/package/origamicore)

## Installation

OriCli requires [Node.js](https://nodejs.org/) v14+ to run.

```sh
npm install @origamicore/cli -g
```

### Mongo Database Managment
```sh
occli mongo
```

### Create Projects

```sh
occli --new projectName

occli -n projectName
```

### Create Service

```sh
occli --addmodule moduleName
occli --a moduleName
```

### Start Project

```sh
occli dev
```

### Start Project as Bunjs

```sh
occli bun
```

### UI Editor

```sh
occli --ui {{port:default 4000}}
```
