import { motion } from 'framer-motion'
import Head from 'next/head'
import { WorkGridStyle } from '../grid-items'
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}
export const OutLayout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title ? (
        <Head>
          <title>{title} - Abdelmonaem</title>
        </Head>
      ) : null}
      {children}
      <WorkGridStyle />
    </>
  </motion.article>
)
