
import Posts from './screens/Posts'
import './App.css';
import Home from './screens/Home/Home'
// import Posts from './screens/Posts/Posts'
// import PostCreate from './screens/PostCreate/PostCreate'
// import PostEdit from './screens/PostEdit/PostEdit'
// import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/products" component={Products} />
        <Route path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} /> */}
      </Switch>
      

    </div>
  );
}

export default App;
