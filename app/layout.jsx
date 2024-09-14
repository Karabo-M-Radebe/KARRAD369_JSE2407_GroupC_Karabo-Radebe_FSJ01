import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

/**
 * RootLayout component
 * 
 * @param {ReactNode} children - Child components
 * 
 * @returns {JSX.Element} - RootLayout component
 */
export default function RootLayout({ children }) {
    return (
      <html lang="en">
            <body>
                <Navbar/>
                {children}
                <Footer/>
            </body>
      </html>
    )
  }