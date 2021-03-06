Yalive Server
===========

Minimal Development Server with **Live Reload** Capability.  
(**Y**et **A**nother **Live Server**)

- Rewritten in Golang
- Supportive tool for esbuild

Roadmap
--------

- github actions
- npm install test on Windows and OSX
- support recursive watch
- accept json config file, and more dynamic config options like live-server
- refresh css only
- example project with esbuild

Get Started
------------

```bash
  # global
  $ npm i -g yalive-server

  # As node package
  $ npm i -D yalive-server
```

Usage from command line
-----------------------

```bash
  # Help
  $ yalive-server

  # example dev command
  $ yalive-server dev -c '{"root": "dist", "port": 5501, "cors": true, "https": true, "historyApiFallback": true, "proxy": [{"prefix": "/api", "target": "https://backend", "changeOrigin": true}], "server": {"debug": true, "color": true} }'
```

Usage from node
---------------

```javascript
const yaliveServer = require("yalive-server")

const conf = {
  root: 'dist',
  port: 5501,
  cors: true,
  https: true,
  historyApiFallback: true,
  proxy: [
    {
      prefix: '/api',
      target: 'https://backend',
      changeOrigin: true,
    },
  ],
  server: {
    debug: true,
    color: true,
  },
}

yaliveServer.dev(conf)
```
