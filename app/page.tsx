import {getServerSession} from "next-auth";
import {options} from "@/app/options";
import {NavBar, Navigation, UserAvatar} from "@/app/components";


export default async function Home() {
    const session = await getServerSession(options)
    const userImage = session?.user?.image

    return (
        <main>
            {session ? <UserAvatar avatar={userImage || ""}/> : <NavBar/>}
            <Navigation/>
        </main>
    )
}
