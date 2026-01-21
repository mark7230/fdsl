import React, { useState } from "react";
import { motion } from "framer-motion";
import admissionImg from "../assets/online-admission.jpg";
import logoImg from "../assets/logo.png";

export default function Admission() {
  const [infoLoading, setInfoLoading] = useState(false);
  const [applyLoading, setApplyLoading] = useState(false);

  async function submit(path, formData, setLoading, label) {
    try {
      setLoading(true);
      const res = await fetch(`/api/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const ok = res.ok;
      alert(`${label} submitted${ok ? "" : " (server error)"}.`);
    } catch {
      alert(`${label} failed. Check server.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#315262] min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* MAIN WRAPPER */}
        <div className="grid gap-6">

          {/* HERO SECTION */}
          <div className="rounded-xl overflow-hidden h-64 sm:h-80 md:h-[480px] relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${admissionImg})` }}
            />

            {/* BACKGROUND OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-b from-[#315262]/70 to-[#315262]/90"></div>

{/* CONTENT WRAPPER */}
<div className="relative z-10 w-full px-4 sm:px-6 py-6 sm:py-10 
                min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center gap-4 sm:gap-6">

  {/* TITLE */}
  <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
    Online Admission
  </h1>

  {/* SUBTEXT */}
  <p className="text-slate-200 max-w-2xl text-xs sm:text-base leading-relaxed">
    Enroll in self-paced programs designed to help you operate privately and build generational wealth.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
    <a href="#info" className="btn-blue text-center w-full sm:w-auto">Request Info</a>
    <a href="#apply" className="btn-yellow text-center w-full sm:w-auto">Apply Now</a>
  </div>

  {/* SECTION TITLE */}
  <h2 className="text-lg sm:text-2xl font-bold text-white mt-2 sm:mt-4">
    How Do I Apply?
  </h2>

  {/* STEPS */}
  <ol className="list-decimal pl-5 space-y-1 sm:space-y-2 text-slate-300 
                 text-xs sm:text-base max-w-xl">
    <li>Create your student account.</li>
    <li>Select one or more courses that match your goals.</li>
    <li>Complete enrollment and payment.</li>
    <li>Start learning immediately with guided modules.</li>
  </ol>

  {/* LOGO — Responsive & Non-Blocking */}
  <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 pointer-events-none">
    <img 
      src={logoImg}
      alt="FDS Logo"
      className="w-16 h-16 sm:w-28 sm:h-28 object-contain opacity-90"
    />
  </div>

</div>

          </div>

          {/* FORMS WRAPPER */}
          <div id="info" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* REQUEST INFO */}
            <div className="bg-white border border-[#829494] rounded-xl p-4 sm:p-6">
              <h3 className="font-semibold text-[#315262] text-lg sm:text-xl mb-3 sm:mb-4">
                Request Info
              </h3>

              <form
                className="grid gap-3 sm:gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    interest: form.interest.value,
                    query: "Request Info Form Submission",
                  };
                  await submit("info", data, setInfoLoading, "Request Info");
                  form.reset();
                }}
              >
                <label className="grid gap-1 text-[#315262] text-sm">
                  Full Name *
                  <input
                    name="name"
                    required
                    className="bg-[#FBFCFC] border text-[#315262] border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your full name"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-[#FBFCFC] border text-[#315262] border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your email address"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Area of Interest *
                  <select
                    name="interest"
                    required
                    className="bg-[#FBFCFC] border text-[#315262] border-[#829494] rounded px-3 py-2"
                  >
                    <option value="">Select an area of interest</option>
                    <option value="Status Corrections">Status Corrections</option>
                    <option value="Secure Party Creditor">Secure Party Creditor</option>
                    <option value="Unincorporated Business Trust">Unincorporated Business Trust</option>
                    <option value="Credit Optimization">Credit Optimization</option>
                    <option value="Reclaiming Securities & Debt Discharge">Reclaiming Securities & Debt Discharge</option>
                  </select>
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Add Your Message (optional)
                  <textarea
                    name="message"
                    rows="8"
                    className="bg-[#FBFCFC] border text-[#315262] border-[#829494] rounded px-3 py-2"
                    placeholder="Add your message (optional)"
                  />
                </label>

                <button disabled={infoLoading} className="btn-blue mt-2 text-sm sm:text-base">
                  {infoLoading ? "Submitting..." : "Request Info"}
                </button>
              </form>
            </div>

            {/* APPLY NOW */}
            <div className="bg-white border border-[#829494] rounded-xl p-4 sm:p-6" id="apply">
              <h3 className="font-semibold text-[#315262] text-lg sm:text-xl mb-3 sm:mb-4">
                Apply Now
              </h3>

              <form
                className="grid gap-3 sm:gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    phone: form.phone.value,
                    course: form.course.value,
                    experience: form.experience.value,
                    query: "Apply Now Form Submission",
                  };
                  await submit("apply", data, setApplyLoading, "Application");
                  form.reset();
                }}
              >
                <label className="grid gap-1 text-[#315262] text-sm">
                  Full Name *
                  <input
                    name="name"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Phone Number *
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Selected Course *
                  <select
                    name="course"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  >
                    <option value="">Select a course</option>
                    <option value="Status Corrections">Status Corrections</option>
                    <option value="Secure Party Creditor">Secure Party Creditor</option>
                    <option value="Unincorporated Business Trust">Unincorporated Business Trust</option>
                    <option value="Credit Repair & Optimization (Personal)">Credit Repair & Optimization (Personal)</option>
                    <option value="Credit Optimization (Business)">Credit Optimization (Business)</option>
                    <option value="Reclaiming Securities & Debt Discharge">Reclaiming Securities & Debt Discharge</option>
                  </select>
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Relevant Experience
                  <textarea
                    name="experience"
                    rows="4"
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  />
                </label>

                <button disabled={applyLoading} className="btn-yellow mt-2 text-sm sm:text-base">
                  {applyLoading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-8 bg-[#EFAB47]/20 border border-[#EFAB47] rounded-xl p-4 sm:p-6">
            <p className="text-white font-semibold text-xs sm:text-base leading-relaxed">
              Educational disclaimer: Enrollment provides access to educational materials only.
              It does not constitute legal, financial, or tax advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}