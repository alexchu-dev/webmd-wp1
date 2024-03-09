import { useState } from "react"
import { DateRange } from "react-date-range"
import { addDays } from "date-fns"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file
import useMediaQuery from '@mui/material/useMediaQuery';
import './styles.css'

export default function Calendar({ onDateSelect }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ])

  const nonMobile = useMediaQuery('(min-width:600px)');

  return (
    <>
      <DateRange
        onChange={(item) => {
          setState([item.selection]);
          onDateSelect(item.selection.startDate, item.selection.endDate);
        }}
        minDate={addDays(new Date(), 0)}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={nonMobile ? 2 : 1}
        direction="horizontal"
        className="w-full"
      />
    </>
  )
}
