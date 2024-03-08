"use client"
import Image from "next/image"
export default function Refund() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">Refund Policy</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <article className="p-8 leading-loose">
        <p>
          <strong>Introduction</strong>
        </p>
        <p>
          At Ports Travel, we strive to ensure that all our customers have a
          satisfying and enjoyable travel experience. We understand that
          sometimes plans change, and you may need to cancel or amend your
          travel arrangements. This policy outlines our refund and cancellation
          terms in accordance with UK legal practices.
        </p>
        <p>
          <strong>Cancellation by You</strong>
        </p>
        <ul>
          <li>
            <p>
              If you wish to cancel your travel booking, you must notify us as
              soon as possible. The following cancellation charges will apply
              from the date we receive your notification:
            </p>
            <ul>
              <li>
                More than 30 days before departure: 20% of the total booking
                cost
              </li>
              <li>
                15-30 days before departure: 40% of the total booking cost
              </li>
              <li>Less than 15 days before departure: No refund available</li>
            </ul>
          </li>
          <li>
            <p>
              For cancellations made within 14 days of booking and where
              departure is more than 30 days away, a full refund will be
              provided, in line with the Consumer Contracts Regulations.
            </p>
          </li>
        </ul>
        <p>
          <strong>Amendments by You</strong>
        </p>
        <p>
          If you need to make changes to your travel arrangements after booking,
          we will do our best to accommodate your needs. Please note that
          amendments may incur additional charges, depending on the nature of
          the changes and the conditions of our service providers.
        </p>
        <p>
          <strong>Cancellation by Us</strong>
        </p>
        <p>
          In the unlikely event that we must cancel your travel arrangements,
          you will have the option to:
        </p>
        <ul>
          <li>
            Accept an alternative travel arrangement of equivalent or higher
            value (if available)
          </li>
          <li>
            Accept an alternative travel arrangement of lower value (if
            available) with a refund of the difference
          </li>
          <li>Receive a full refund of all monies paid</li>
        </ul>
        <p>
          <strong>Force Majeure</strong>
        </p>
        <p>
          We will not provide a refund in cases where the performance or prompt
          performance of our contractual obligations is prevented by reasons of
          force majeure. Such circumstances include, but are not limited to,
          war, threat of war, riot, civil strife, industrial dispute, terrorist
          activity, natural or nuclear disaster, fire, adverse weather
          conditions, pandemics, and all similar events beyond our control.
        </p>
        <p>
          <strong>Travel Insurance</strong>
        </p>
        <p>
          We strongly recommend that all travelers purchase comprehensive travel
          insurance to cover unforeseen circumstances that may lead to the
          cancellation of travel plans. Refunds for cancellations covered by
          travel insurance should be claimed from the respective insurance
          provider.
        </p>
        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          For any inquiries regarding cancellations, refunds, or amendments to
          your travel arrangements, please contact us
          at&nbsp;info@portstravel.co.uk.
        </p>
      </article>
      <style jsx>{`p {margin-bottom: 5px;}`}</style>
    </main>
  )
}
