export default function ToolsProgramme() {
  return (
    <section
      id="tools-programme"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start justify-start"
    >
      <div className="border rounded-xl p-4 mb-4 items-center justify-center min-h-[300px]">
        <h2 className="text-xl font-bold mb-2">TRIP BUILDER</h2>
        <div className="trip-builder grid grid-cols-1 p-8 text-center mx-auto items-center justify-center max-w-screen-sm px-4">
          <div className="trip-text mb-4">
            Try our trip builder to create your own custom itinerary. You can
            choose from a variety of destinations, activities, and
            accommodations to create your perfect trip.
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[120px] mx-auto">
            Let's go
          </button>
        </div>
      </div>
      <div className="border rounded-xl p-4 mb-4 items-center justify-center min-h-[300px]">
        <h2 className="text-xl font-bold mb-2">REWARDS</h2>
        <div className="trip-builder grid grid-cols-1 p-8 text-center mx-auto items-center justify-center max-w-screen-md px-4">
          <div className="trip-text mb-4">
            Just like other milage rewards programme, you get rewards for every trip you book with us. The more you travel, the more you earn.
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[120px] mx-auto">
            Learn more
          </button>
        </div>
      </div>
      <div className="border rounded-xl p-4 mb-4 items-center justify-center min-h-[300px]">
        <h2 className="text-xl font-bold mb-2">REFERRAL</h2>
        <div className="trip-builder grid grid-cols-1 p-8 text-center mx-auto items-center justify-center max-w-screen-md px-4">
          <div className="trip-text mb-4">
            Refer your friends and family and earn cashback for every person you refer to us! Travel alone or with them, it's up to you, but you'll always get rewarded.
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[120px] mx-auto">
            Start now
          </button>
        </div>
      </div>
    </section>
  )
}
