import { useRouter } from 'next/router'
import {AnimatePresence, motion} from 'framer-motion'

const Transition = ({ children }) => {
    const { asPath } = useRouter()
    const variants = {
        inactive: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          },
        },
        out: {
            opacity: 0,
            y: -100,
            transition: {
              duration: 0.01,
              ease: 'easeInOut'
            }
        },
        in: {
            y: 100,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
        }
      };

    return (
        <div className="overflow-hidden">
        <AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
	      <motion.div
          key={asPath}
          variants={variants}
          animate="inactive"
          initial="in"
          exit="out"
          >
	        {children}
	      </motion.div>
	    </AnimatePresence>
        </div>
    )
  };
  
export default Transition;