
"use client"
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-50 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-600">
        <span className="text-dark text-base mx-16 text-white">
          This website uses necessary cookies to improve user experience. By using our website you consent to the use of cookies in accordance with our <Link href="/about/privacy" className="underline" target="_blank">Privacy Policy</Link>.
        </span>
        <button className="bg-green-500 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;