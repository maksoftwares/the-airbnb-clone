import '@/assets/styles/globals.css';
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
    </body>
    </html>
  )
}

export default MainLayout
