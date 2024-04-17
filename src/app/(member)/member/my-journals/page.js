import DisplayJournal from "./DisplayJournal";

export default function MyJournals() {
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">My Journals</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="">
        <DisplayJournal />
      </div>
    </section>
  );
}