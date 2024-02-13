"use client";

import { sendEmail } from "@/actions";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { ImSpinner } from "react-icons/im";

type ActionState = "Idle" | "Sending" | "Sent" | "Failed";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Contact() {
  const sectionRef = useSectionInView("Contact", 0.5);
  const [actionState, setActionState] = useState<ActionState>("Idle");

  async function handleSubmit(formData: FormData) {
    setActionState("Sending");
    submitCallback(formData);
  }

  async function submitCallback(formData: FormData) {
    await sleep(1000);
    const res = await sendEmail(formData);
    if (res.error) {
      setActionState("Failed");
    } else {
      setActionState("Sent");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mb-32 w-full scroll-mt-24 text-center sm:w-[40rem]"
    >
      <SectionHeading>Contact me</SectionHeading>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mx-4">
          Send me an email to{" "}
          <u>
            <a
              href="mailto:mihavintar3@gmail.com"
              className="outline-none focus:font-medium"
            >
              mihavintar3@gmail.com
            </a>
          </u>{" "}
          or through this form:
        </p>
        <form action={handleSubmit} className="my-3 flex flex-col gap-y-3">
          <input
            type="email"
            name="replyTo"
            placeholder="Your email"
            required
            maxLength={100}
            className="h-10 w-full rounded-xl border border-blue-200
            bg-blue-100 px-3 py-2 outline-none transition
            focus:outline-blue-300 dark:border-gray-700 dark:bg-gray-800
            dark:focus:outline-gray-600"
          />
          <textarea
            placeholder="Your message"
            name="message"
            required
            maxLength={5000}
            className="h-40 w-full rounded-xl border border-blue-200
            bg-blue-100 px-3 py-2 outline-none transition
            focus:outline-blue-300 dark:border-gray-700 dark:bg-gray-800
            dark:focus:outline-gray-600"
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-x-2
            self-center rounded-full border border-amber-400 bg-amber-300 px-4
            py-2 font-medium outline-none transition hover:scale-105
            hover:bg-amber-400 hover:text-slate-950 focus:scale-105
            focus:bg-amber-400 dark:text-slate-900 md:self-start"
          >
            {actionState === "Idle" && (
              <>
                Send
                <FaPaperPlane
                  className="transition group-hover:-translate-y-1
                  group-hover:translate-x-1 group-focus:-translate-y-1
                  group-focus:translate-x-1"
                />
              </>
            )}
            {actionState === "Sending" && (
              <>
                Sending <ImSpinner className="animate-spin" />
              </>
            )}
            {actionState === "Sent" && (
              <>
                Sent <FaCheckCircle />
              </>
            )}
            {actionState === "Failed" && (
              <>
                Failed <FaExclamationCircle />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
