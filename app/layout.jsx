import '@/assets/styles/globals.css';

export const metadata = {
    title : "Air Bnb Clone",
    keywords : 'rental, property,real state',
    description: 'find the perfect rental property'
}

const MainLayout = ({children}) => {
  return (
    <html>
    <body>
        <main>{children}</main>
    </body>
    </html>
  )
}

export default MainLayout
