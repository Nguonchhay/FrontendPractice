import { auth } from "@/services/AuthService";
import Image from 'next/image';
import Link from 'next/link';
import LogoutForm from "./Forms/LogoutForm";

export const Header = async () => {
  const session = await auth();
  console.log('Session from auth:', session);
  
  return (
    <header className="mb-10">
      <nav>
        <div>
          <Link href="/">
            <span>Next Auth Demo</span>
          </Link>
          <div>
            <ul className="flex">
              <li className="px-2">
                <Link href="/">Home</Link>
              </li>
              <li className="px-2">
                <Link href="/carts">Carts</Link>
              </li>
              <li className="px-2">
                {
                  session?.user === undefined && (
                    <Link href="/api/auth/signin" className="button bg-slate-400 p-1 rounded">
                      <button>Sign in</button>
                    </Link>
                  )
                }
              </li>
              {
                session?.user && (<>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li className="px-2">
                    <div>
                      {
                        session.user.image ? (
                          <Image
                            src={session.user.image}
                            alt=""
                            width={32}
                            height={32}
                          />
                        ) : (
                          <span>{session.user.name}</span>
                        )
                      }
                      <LogoutForm />
                    </div>
                  </li>
                </>)
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}