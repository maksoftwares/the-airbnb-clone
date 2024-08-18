import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
    title : "Air Bnb Clone",
    keywords : 'rental, property,real state',
    description: 'find the perfect rental property'
}

const MainLayout = ({children}) => {
  return (
    <html>
    <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </body>
    </html>
  )
}

export default MainLayout
