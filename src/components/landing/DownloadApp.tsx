import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DownloadAppSectionProps {
  className?: string;
}

export default function DownloadAppSection({
  className,
}: DownloadAppSectionProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="w-full max-w-[1080px] h-auto md:h-[411px] relative mx-auto p-4 md:p-0">
        {/* Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full absolute left-0 top-0 bg-[#F4F1FE] rounded-3xl"
        ></motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 pt-[68px] pl-4 md:pl-[60px] pr-4 md:pr-8"
          >
            <p className="text-xl font-light font-poppins text-[#0f0f0f] leading-[24.8px]">
              Ready to Transform your Music Journey?
            </p>

            <div className="mt-[16px] flex items-center">
              <h2 className="text-[32px] md:text-[44px] font-normal font-poppins text-black leading-[40px] md:leading-[54.56px]">
                Download
                <br />
                Mobile App
              </h2>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="w-10 h-10 md:w-12 md:h-12 ml-[16px] md:ml-[23px]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#090a07] rounded-full shadow-[inset_0.69px_2.06px_5.01px_0px_rgba(89,89,89,0.25)] border border-[#434343] flex items-center justify-center">
                  <Download className="w-[18px] h-[18px] md:w-[22.63px] md:h-[22.63px] text-white" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="mt-[24px] md:mt-[40px]"
            >
              <div className="flex items-center gap-[12px] md:gap-[17.62px]">
                <a
                  href="#"
                  className="inline-block shadow-[-2.57px_3.43px_13.71px_0px_rgba(0,0,0,0.25)]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-[24px] md:h-[30.54px] w-auto"
                  />
                </a>
                <a
                  href="#"
                  className="inline-block shadow-[-2.57px_3.43px_13.71px_0px_rgba(0,0,0,0.25)]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-[24px] md:h-[30.54px] w-auto"
                  />
                </a>
              </div>
              <p className="mt-4 md:mt-8 text-sm font-light font-poppins text-black leading-[17.36px] max-w-[353px]">
                Download Gigsaw for easy jam room rentals and hassle-free music
                sessions anytime, anywhere!
              </p>
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex-1 relative mt-8 md:mt-0 flex justify-center items-end"
          >
            <div className="w-[250px] h-[300px] md:w-[339px] md:h-[359px]">
              <img
                className="w-full h-full rounded-bl-3xl object-contain"
                src="public/assets/phone_mockup.png"
                alt="Mobile app interface"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}