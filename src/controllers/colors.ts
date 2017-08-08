import * as express from 'express'
//import crypto from 'crypto'

const colors: string[] = [
  'red',
  'blue',
  'green',
  'magenta'
]

export function determineColor(req: express.Request, res: express.Response): express.Response{
  const color = colors[Math.floor(Math.random() * colors.length)]
  return res.json({data: color})
}


