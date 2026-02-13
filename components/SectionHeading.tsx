// interface SectionHeadingProps {
//   title: string;
// }

// const SectionHeading = ({ title }: SectionHeadingProps) => {
//   return (
//     <h2
//       className="
//         text-3xl
//         sm:text-4xl
//         md:text-5xl
//         lg:text-6xl
//         font-extrabold
//         bg-gradient-to-r
//         from-neutral-400
//         via-neutral-200
//         to-neutral-400
//         bg-clip-text
//         text-transparent
//         tracking-tight
//         text-center
//       "
//     >
//       {title}
//     </h2>
//   );
// };

// export default SectionHeading;


"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-extrabold
        bg-gradient-to-r
        from-neutral-400
        via-neutral-200
        to-neutral-400
        bg-clip-text
        text-transparent
        tracking-tight
        text-center
        py-8
      "
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeading;

