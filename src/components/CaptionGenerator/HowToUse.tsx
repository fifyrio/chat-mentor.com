export default function HowToUse() {
  return (
    <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-white">
      <div className="container">
        <div
          className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="false"
        >
          <p className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
            Unleash Your Creative Power
          </p>
          <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
            Transform Your Images Into Viral Captions Instantly!
          </h2>
          <p className="text-gray-600 mt-4">
            Ready to make your images go viral? Follow these powerful steps to create captivating captions that will stop the scroll and boost your engagement!
          </p>
        </div>

        <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div
            className="bg-[#F5F6F7] rounded-[15px] text-center p-[30px] md:p-[40px] group hover:bg-primary-color transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div 
              className="text-white w-[75px] h-[75px] mx-auto leading-[75px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white group-hover:text-teal-500 transition-colors duration-300"
              style={{
                background: 'linear-gradient(180deg, #1ABC9C 0%, #45E68F 100%)'
              }}
            >
              <span className="font-bold">1</span>
            </div>
            <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white font-semibold">
              Drop Your Amazing Image
            </h3>
            <p className="group-hover:text-white">
              Upload your stunning image that deserves a killer caption! We support all your favorite formats.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="bg-[#F5F6F7] rounded-[15px] text-center p-[30px] md:p-[40px] group hover:bg-primary-color transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div 
              className="text-white w-[75px] h-[75px] mx-auto leading-[75px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white group-hover:text-teal-500 transition-colors duration-300"
              style={{
                background: 'linear-gradient(180deg, #1ABC9C 0%, #45E68F 100%)'
              }}
            >
              <span className="font-bold">2</span>
            </div>
            <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white font-semibold">
              Pick Your Perfect Vibe
            </h3>
            <p className="group-hover:text-white">
              Choose the energy that matches your brand! From witty to inspirational, we&apos;ve got the perfect tone for every moment.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="bg-[#F5F6F7] rounded-[15px] text-center p-[30px] md:p-[40px] group hover:bg-primary-color transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div 
              className="text-white w-[75px] h-[75px] mx-auto leading-[75px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white group-hover:text-teal-500 transition-colors duration-300"
              style={{
                background: 'linear-gradient(180deg, #1ABC9C 0%, #45E68F 100%)'
              }}
            >
              <span className="font-bold">3</span>
            </div>
            <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white font-semibold">
              Generate & Dominate
            </h3>
            <p className="group-hover:text-white">
              Hit &apos;Generate Caption&apos; and watch the magic happen! Fine-tune your caption until it&apos;s absolutely perfect for maximum impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 