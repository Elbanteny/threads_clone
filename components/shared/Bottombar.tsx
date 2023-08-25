'use client'

import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const Bottombar = () => {
    const pathName = usePathname();

    return (
        <section className='bottombar'>
            <div className='bottombar_container'>
                {sidebarLinks.map((link) => {
                    const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`bottombar_link  hover:bg-[#877effdc] ${isActive && 'bg-primary-500'}`}
                        >
                            <Image
                                alt={link.label}
                                src={link.imgURL}
                                width={24}
                                height={24}
                            />
                            <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Bottombar