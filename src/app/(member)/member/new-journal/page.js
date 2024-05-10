import JournalEditor from "./JournalEdtior"

export default function CreateJournal() {
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">New Journal</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div>
        <JournalEditor />
      </div>
    </section>
  )
}
