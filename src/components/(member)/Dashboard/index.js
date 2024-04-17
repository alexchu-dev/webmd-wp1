import MyProfile from "./MyProfile"

export default async function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-neutral-200 border rounded-xl p-4">
        <h2 className="text-xl font-bold">My Itinerary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          No Itinerary yet.
        </div>
      </div>
      <MyProfile />
    </div>
  )
}
