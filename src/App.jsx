import './App.css';
import './styles/common.css'
import AllRoutes from './routes/AllRoutes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
     <Header />
     <main>
       <AllRoutes />
       <ToastContainer closeOnClick={true} autoClose={4000} pauseOnFocusLoss={false} />
     </main>
     <Footer />
    </>
   
  )
}

export default App
