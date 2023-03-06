import express, {Application} from 'express'
import routes from './route/index'

const app: Application = express()
const PORT = 3003
app.use(express.json())

app.use('/', routes)

app.listen(PORT, ()=> console.log(`express start at port ${PORT}`)
)