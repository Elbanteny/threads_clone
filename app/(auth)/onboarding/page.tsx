import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

async function Page() {
    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || '',
        bio: userInfo?.bio || '',
        image: userInfo?.image || user?.ImageUrl,
    }

    return (
        <main className="flex mx-auto justify-start px-10 py-20 flex-col max-w-3xl">
            <h1 className="head-text">Pengenalan Awal</h1>
            <p className="text-base-regular mt-3 text-light-2">Selesaikan informasi profil anda untuk menggunakan threads</p>

            <section className="bg-dark-2 mt-9 p-10">
                <AccountProfile user={userData} btnTitle={'Selanjutnya'} />
            </section>
        </main>
    )
}

export default Page