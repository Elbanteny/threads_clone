import AccountProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();
    if (!user) return null;
    const userInfo = await fetchUser(user.id);

    if (userInfo?.onboarded) redirect('/');

    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
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