"use server"

import {getUserFromCookie} from "@/lib/getUser";
import {redirect} from "next/navigation";
import ClientList from "@/components/clients/ClientList";

export default async function Page() {
    const user = await getUserFromCookie()

    if(!user) return redirect('/login')

    return (
        <div className='min-h-screen w-full flex flex-col py-4 space-y-3 mt-16 bg-gray-50  dark:bg-gray-900 p-6'>
            <div className='container w-full space-y-1'>
                <h1
                    className='text-xl font-semibold text-gray-900 dark:text-white'
                >
                    Clients
                </h1>
                <p className='text-gray-400'>Manage clients</p>
            </div>
            {/** Client List */}
            <ClientList />
        </div>
    )
}