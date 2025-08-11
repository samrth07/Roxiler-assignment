import app from './app.js'
import config from './config/index.js'


const port = config.PORT || 3000


app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}/api/v1`)
})
