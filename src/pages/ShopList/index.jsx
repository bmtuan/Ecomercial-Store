import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import ShopList from '../../components/shoplist'
const ShopListPage =(props) =>{
    return(
      <div>
        <Header/>
        <ShopList {...props} />
        <Footer/>
      </div>
    );
}

export default ShopListPage;