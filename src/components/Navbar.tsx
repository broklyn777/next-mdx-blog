// import Link from "next/link"

import Link from "next/link"

const Navbar = () => {
  return (
    <div>
 
        <Link href="/">/hem</Link>
       <Link href='/om-oss'>
      
Om oss        
          </Link>
           <Link href='/kontakt'>
       
              Kontakt
           
          </Link>

    </div>
  )
}

export default Navbar