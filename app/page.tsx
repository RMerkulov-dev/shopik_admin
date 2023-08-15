import {getServerSession} from "next-auth";
import {options} from "@/app/options";
import {NavBar, UserAvatar} from "@/app/components";

export default async function Home() {
    const session = await getServerSession(options)

    return (
        <main>
            {session ? <UserAvatar user={session.user?.name}/> : <NavBar/>}
        </main>
    )
}
