"use client";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";

export default function About() {
  const sectionRef = useSectionInView("About", 1);
  const age = new Date().getFullYear() - new Date("2003-12-04").getFullYear();

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="mb-32 w-full scroll-mt-24 px-2 text-center sm:w-[35rem]
      sm:px-0 md:w-[40rem] lg:w-[45rem] xl:w-[50rem] 2xl:w-[55rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2.5">
        Greetings! I&apos;m a <strong>{age}-year-old</strong> student currently
        pursuing a{" "}
        <strong>
          Bachelor&apos;s degree in Computer Science and Informatics
        </strong>{" "}
        at the <strong>University of Ljubljana</strong>, following a solid
        academic journey at <strong>Gimnazija Franceta Prešerna</strong>.{" "}
        <i>Sporting</i> has been a significant part of my life, with{" "}
        <strong>13 years</strong> dedicated to{" "}
        <strong>competitive swimming</strong>, including participation in
        prestigious events like the <i>European Youth Olympic Festival</i> and
        the <i>European Junior Championships</i>. These experiences instilled in
        me <u>discipline</u>, <u>perseverance</u>, and the ability to{" "}
        <u>thrive under pressure</u>.
      </p>
      <p>
        Beyond the pool, my passion lies in exploring the vast realm of computer
        science, constantly seeking to <strong>innovate, create</strong>, and{" "}
        <strong>learn new skills</strong>. Outside of academia, I maintain a
        healthy lifestyle through activities such as{" "}
        <strong>mountain biking</strong> and regular{" "}
        <strong>gym sessions</strong>, fostering a well-rounded approach to
        personal and professional growth.
      </p>
    </motion.section>
  );
}
