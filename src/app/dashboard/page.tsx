import { Metadata } from "next";
import { Calendar } from '@rewind-ui/core';

export const metadata: Metadata = {
    title: "Dashboard Page | Free Next.js Template for Startup and SaaS",
    description: "This is Dashboard Page for Startup Nextjs Template",
    // other metadata
};

const DashboardPage = () => {
    return (
        <>
           <h1 className="text-lg">Welcome to the Dashboard</h1>

           <div className="mt-8">
            <Calendar />
          </div>
        </>
    )
}
export default DashboardPage;