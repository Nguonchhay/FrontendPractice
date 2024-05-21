import Link  from 'next/link';
import Image from 'next/image';

import logo from './../images/dojo-logo.png';

export default function Navbar() {
  return (
    <nav>
        <Image src={logo} alt="Logo" width={70} quality={80} placeholder="blur" />
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/tickets">Tickets</Link>
            </li>
        </ul>
    </nav>
  )
}
