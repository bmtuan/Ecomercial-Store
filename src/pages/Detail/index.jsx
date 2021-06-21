import Header from '../../components/header.jsx'
import Detail from '../../components/detail.jsx'
import Footer from '../../components/footer.jsx'
const DetailPage = (props) => {
  return (
    <div>
      <Header />
      <Detail {...props} />
      <Footer />
    </div>
  );
}

export default DetailPage;