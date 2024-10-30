import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c : any, next: any) {
  if(c.req.header('Authorization)')){
    // do validation 
    await next()
  }
  else{
    return c.status(401).text('Unauthorized')
  }
}
// fetch json
app.post('/', authMiddleware ,async (c) => {

  console.log(c.req.method)
  console.log(c.req.header('Authorization'))
  console.log(c.req.query('makichu'))

  return c.text('Hello ')
})

export default app
