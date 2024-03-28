"use client"
import Image from "next/image"
export default function Privacy() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">Privacy Policy</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <article className="p-8 leading-loose">
        <p>
          <strong>Privacy Policy</strong>
        </p>
        <p>
          At Ports Travel, accessible from www.portstravel.co.uk, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that are collected and recorded
          by Ports Travel Agency and how we use it. If you have additional
          questions or require more information about our Privacy Policy, do not
          hesitate to contact us.
        </p>
        <p>
          <strong>Consent</strong>
        </p>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <p>
          <strong>Information We Collect</strong>
        </p>
        <ul className="list-inside list-disc">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tincidunt augue interdum velit euismod in pellentesque massa
            placerat.
          </li>

          <li>
            Eget mauris pharetra et ultrices neque ornare aenean euismod.
            Gravida neque convallis a cras semper auctor neque. Dui id ornare
            arcu odio ut sem. Nisl suscipit adipiscing bibendum est.
          </li>

          <li>
            Et malesuada fames ac turpis egestas integer eget aliquet nibh.
            Lacus vestibulum sed arcu non odio euismod lacinia at. Non tellus
            orci ac auctor augue mauris augue neque. Iaculis at erat
            pellentesque adipiscing commodo elit. Molestie at elementum eu
            facilisis sed odio morbi quis.
          </li>
        </ul>
        <p>
          <strong>How We Use Your Information</strong>
        </p>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-inside list-disc">
          <li>Nunc id cursus metus aliquam eleifend mi in nulla posuere.</li>
          <li>
            Nisl tincidunt eget nullam non nisi est sit. Cras fermentum odio eu
            feugiat.
          </li>
          <li>Donec ac odio tempor orci dapibus ultrices in iaculis.</li>
          <li>Risus commodo viverra maecenas accumsan lacus vel.</li>
          <li>
            Eget mauris pharetra et ultrices neque ornare aenean euismod.
            Gravida neque convallis a cras semper auctor neque. Dui id ornare
            arcu odio ut sem. Nisl suscipit adipiscing bibendum est. Et
            malesuada fames ac turpis egestas integer eget aliquet nibh.
          </li>
        </ul>
        <p>
          <strong>Log Files</strong>
        </p>
        <p>
          This website is for academic purposes only and does not collect any
          personal data. Semper auctor neque vitae tempus quam pellentesque nec
          nam. Aliquam ultrices sagittis orci a scelerisque purus. Adipiscing
          elit duis tristique sollicitudin nibh sit amet.
        </p>
        <p>
          For any inquiries regarding cancellations, refunds, or amendments to
          your travel arrangements, please contact us at <strong>info@portstravel.co.uk</strong> (Unfortunately you will not be
          able to contact us as this email does not actually exist).
        </p>
      </article>
      <style jsx>{`
        p {
          margin-bottom: 5px;
        }
      `}</style>
    </main>
  )
}
