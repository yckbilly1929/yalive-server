export interface DevOptions {
  port?: number
  root?: string
  file?: string
  cors?: boolean
  https?: boolean
  historyApiFallback?: boolean

  proxy?: ProxyMiddleware[]
  server?: Server

  host?: string
}

export interface ProxyMiddleware {
  prefix: string
  target: string
  changeOrigin?: boolean
  secure?: boolean
}

export interface Server {
  // cert file name
  cert?: string
  key?: string

  // logger
  debug?: boolean
  color?: boolean
}

export declare function dev(options: DevOptions): Promise<void>
