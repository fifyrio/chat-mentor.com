export default function SocialPlatforms() {
  return (
    <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-[#F8F9FA]">
      <div className="container">
        <div className="grid gap-[30px] lg:gap-[50px] items-center grid-cols-1 lg:grid-cols-2">
          {/* Left side - Title and description */}
          <div className="space-y-[20px]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[45px] lg:leading-[52px] font-bold text-black-color">
              Ignite Your Social Media Presence with Captivating Captions!
            </h2>
          </div>

          {/* Right side - Platform grid */}
          <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2">
            {/* LinkedIn */}
            <div
              className="bg-white rounded-[15px] p-[25px] md:p-[30px] shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div className="flex items-center mb-[15px]">
                <div className="w-[45px] h-[45px] rounded-[8px] bg-[#0077B5] flex items-center justify-center mr-[12px]">
                  <i className="ri-linkedin-fill text-white text-[24px]"></i>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-black-color">
                  LinkedIn
                </h3>
              </div>
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-[22px]">
                Craft powerful professional captions that showcase your expertise, share groundbreaking insights, and amplify your personal brand! Dominate the B2B landscape with compelling content that drives real business results.
              </p>
            </div>

            {/* X/Twitter */}
            <div
              className="bg-white rounded-[15px] p-[25px] md:p-[30px] shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div className="flex items-center mb-[15px]">
                <div className="w-[45px] h-[45px] rounded-[8px] bg-[#1DA1F2] flex items-center justify-center mr-[12px]">
                  <i className="ri-twitter-x-fill text-white text-[20px]"></i>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-black-color">
                  X/Twitter
                </h3>
              </div>
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-[22px]">
                Create viral-worthy captions that pack a punch in every character! Spark conversations, break news, and deliver witty insights that make your audience hit that retweet button instantly!
              </p>
            </div>

            {/* Instagram */}
            <div
              className="bg-white rounded-[15px] p-[25px] md:p-[30px] shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div className="flex items-center mb-[15px]">
                <div className="w-[45px] h-[45px] rounded-[8px] bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center mr-[12px]">
                  <i className="ri-instagram-fill text-white text-[24px]"></i>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-black-color">
                  Instagram
                </h3>
              </div>
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-[22px]">
                Transform your stunning visuals with magnetic captions that tell unforgettable stories! Perfect for influencers, lifestyle brands, and anyone ready to create content that stops the scroll and drives massive engagement!
              </p>
            </div>

            {/* Facebook */}
            <div
              className="bg-white rounded-[15px] p-[25px] md:p-[30px] shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div className="flex items-center mb-[15px]">
                <div className="w-[45px] h-[45px] rounded-[8px] bg-[#1877F2] flex items-center justify-center mr-[12px]">
                  <i className="ri-facebook-fill text-white text-[24px]"></i>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-black-color">
                  Facebook
                </h3>
              </div>
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-[22px]">
                Build thriving communities with compelling captions that spark meaningful conversations! Drive engagement, promote events, and share detailed updates that keep your audience coming back for more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 