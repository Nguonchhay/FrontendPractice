"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface NavBarItemProps {
    title: string,
    param: string
}

export default function NavBarItem({
    title,
    param
} : NavBarItemProps) {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    return (
        <div>
            <Link 
                href={`/?genre=${param}`} 
                className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre === param ? ' underline underline-offset-8 decoration-4 decoration-amber-500 rounded-l' : ''}`}
                >
                {title}
            </Link>
        </div>
    )
}
