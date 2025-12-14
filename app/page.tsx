'use client'


import { motion } from 'framer-motion'


export default function Home() {
  return (
    <>
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '3rem' }}
        >
          Hussain Zahid
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Advocate • Legal Consultant • ADR & Mediation
        </motion.p>


        <p>Based in Rawalpindi — Practicing in RWP & Islamabad Courts</p>
      </section>


      <section>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          About
        </motion.h2>


        <p>
          I am a law student and practicing advocate with hands‑on experience in
          litigation, drafting, and legal consultancy. I have actively worked
          across District and High Courts of Rawalpindi and Islamabad, with a
          strong inclination toward alternative dispute resolution and mediation.
        </p>
      </section>


      <section>
        <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          Education
        </motion.h2>


        <ul>
          <li>LLB (Shariah & Law) — CGPA 3.5 (ongoing) [YYYY–YYYY]</li>
          <li>FSc (Pre‑Engineering) — Grade A [YYYY]</li>
          <li>Matriculation (Computer Science) — A+ [YYYY]</li>
        </ul>
      </section>


      <section>
        <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          Experience
        </motion.h2>


        <ul>
          <li>Chapter Head — Young Lawyers Association [YYYY–Present]</li>
          <li>Former Member — Young Lawyers Association [YYYY–YYYY]</li>
          <li>Mediation & ADR Experience [Dates]</li>
          <li>Litigation, Drafting & Legal Consultancy Practice</li>
        </ul>
      </section>


      <section>
        <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          Courts & Practice
        </motion.h2>


        <p>
          Experience appearing before District and High Courts in Rawalpindi and
          Islamabad, handling litigation matters, drafting legal documents, and
          providing consultancy services.
        </p>
      </section>


      <section style={{ paddingBottom: 40 }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          © Hussain Zahid — Advocate
        </motion.p>
      </section>
    </>
  )
}