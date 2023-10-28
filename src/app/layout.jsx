import './globals.css'
import Header from "@/components/Header";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header></Header>
                    <Navbar></Navbar>
                    {children}
                </Providers>
            </body>
        </html>
  )
}
