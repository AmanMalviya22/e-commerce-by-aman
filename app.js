const db = require('./config/mongoose');
const productsRouter = require('./routes/products');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));
app.use('/products', productsRouter);
// starting the server
app.listen(3000, function(){
    console.log('API is live on http://localhost:3000/products');
});