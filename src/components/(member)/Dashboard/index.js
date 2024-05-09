import JournalEditor from "@/app/(member)/member/new-journal/JournalEdtior"
import MyProfile from "./MyProfile"

export default async function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <MyProfile />
      <div className="border-neutral-200 border rounded-xl p-4">
        <h2 className="text-xl font-bold">My Itinerary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          No Itinerary yet.
        </div>
      </div>
      <div className="border-neutral-200 border rounded-xl p-4 col-span-2">
        <h2 className="text-xl font-bold">New Journal</h2>
        <JournalEditor />
      </div>
    </div>
  )
}
