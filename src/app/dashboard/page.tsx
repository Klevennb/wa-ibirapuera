import { RandomQuote } from "@/components/dashboard/quotes";
import { StreakBanner } from "@/components/dashboard/streak-banner";

export default function Dashboard() {
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