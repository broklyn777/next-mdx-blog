// import Link from "next/link"

import Link from "next/link"

const Navbar = () => {
  return (
    <div>
 
        {/* <Link href="/">/hem</Link> */}
       <Link href='/blog'>
            <a>
              Blog
            </a>
          </Link>
           <Link href='/kontakt'>
            <a>
              Kontakt
            </a>
          </Link>

    </div>
  )
}

export default Navbar