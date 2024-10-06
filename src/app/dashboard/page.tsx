import { Metadata } from "next";
import { Calendar } from '@rewind-ui/core';
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import SignoutBtn from "@/components/Auth/SignoutBtn";

export const metadata: Metadata = {
    title: "Dashboard Page | Free Next.js Template for Startup and SaaS",
    description: "This is Dashboard Page for Startup Nextjs Template",
    // other metadata
};

export default async function DashboardPage() {
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/signin')
    }

    // console.log(data);
    
    return (
        <>
           <h1 className="text-lg">Welcome back, {data.user.email}</h1>

           <SignoutBtn />

           <div className="mt-8">
            <Calendar />
          </div>
        </>
    )
}