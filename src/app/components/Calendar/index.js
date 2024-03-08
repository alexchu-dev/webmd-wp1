import { useState } from "react"
import { DateRange } from "react-date-range"
import { addDays } from "date-fns"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file

export default function Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ])

  return (
    <>
      <DateRange
        onChange={(item) => setState([item.selection])}
        minDate={addDays(new Date(), 0)}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
        className="w-full"
      />
    </>
  )
}
