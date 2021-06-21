import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import BestSeller from '../../components/bestseller.jsx'
import Catagory from '../../components/catagory.jsx'
import SaleOff from '../../components/saleoff.jsx'
import NewProduct from '../../components/new_product'
const HomePage =() =>{
    return(
      <div>
        <Header></Header>
        <BestSeller/>
        <Catagory/>
        <SaleOff/>
        <NewProduct/>
        <Footer/>
      </div>
    );
}

export default HomePage;