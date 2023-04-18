import { motion as m } from "framer-motion";
import { fadeInVariant } from "../utilities/motion-framer";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  country,
  platform
}) => (
  <m.div
    variants={fadeInVariant("", "spring", index * 0.3, 0.75)}
    className='bg-tertiary border-2 border-tertiary p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>&quot;{testimonial}&quot;</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {country} in {platform}
          </p>
        </div>
      </div>
    </div>
  </m.div>
);

export default FeedbackCard;