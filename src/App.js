import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import HomePage from './pages/Homepage'
import LoginPage from './pages/Login'
import AccountPage from './pages/Account'
import WishListPage from './pages/WishList'
import CartPage from './pages/Cart'
import ShopListPage from './pages/ShopList'
import DetailPage from './pages/Detail'
function App(){
  return(
    <Router>
      <Route path='/' exact component={HomePage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/account' component={AccountPage}/>
      <Route path='/wishlist' component={WishListPage}/>
      <Route path='/cart' component={CartPage}/>
      <Route path='/list' component={ShopListPage}/>
      <Route path='/detail/:id' component={DetailPage}/>
    </Router>
  )
}

export default App;