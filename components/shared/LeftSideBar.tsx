'use client'
import { sidebarLinks } from '@/constants'
import { SignOutButton, SignedIn, useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const LeftSideBar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const { userId } = useAuth()

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;

                    if (link.route === '/profile') link.route = `${link.route}/${userId}`

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link  hover:bg-[#877effdc] ${isActive && 'bg-primary-500'}`}
                        >
                            <Image
                                alt={link.label}
                                src={link.imgURL}
                                width={24}
                                height={24}
                            />
                            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
                        </Link>
                    )
                })}
            </div>

            <div className='mt-10 px-6'>
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                        <div className="flex cursor-pointer gap-4 p-4 hover:bg-red-600 hover:rounded-lg">
                            <Image
                                src={'/assets/logout.svg'}
                                width={24}
                                height={24}
                                alt="logout"
                            />
                            <p className='text-light-2 max-lg:hidden'>Keluar</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )
}

export default LeftSideBar