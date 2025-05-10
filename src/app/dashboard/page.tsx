import { RandomQuote } from "@/components/dashboard/quotes";
import { StreakBanner } from "@/components/dashboard/streak-banner";
import { getAuth } from "../actions/auth/cookie";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const { user } = await getAuth();

    if (!user) {
      redirect('/login');
    }
    return (
        <>
            <div className="m-12">
                <div className="flex flex-col items-center justify-center">
                  <RandomQuote />  
                  <StreakBanner currentStreak={0} hasWritttenToday={false}/>
                </div>
                
            </div>
        </>
    )
}