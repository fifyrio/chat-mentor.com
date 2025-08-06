export default function UseCases() {
  return (
    <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[45px] lg:leading-[52px] font-bold text-white mb-[20px]">
            Transform Your Content with Our Revolutionary AI Image Caption Generator!
          </h2>
          <p className="text-lg text-gray-200">
            Unleash the power of AI to create stunning, engaging captions that will skyrocket your content across Instagram, ALT text, and beyond!
          </p>
        </div>

        <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2">
          {/* Use Case 1 */}
          <div
            className="flex items-start space-x-[20px] text-white"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div className="flex-shrink-0 w-[60px] h-[60px] bg-teal-500 rounded-[12px] flex items-center justify-center">
              <i className="ri-chat-3-fill text-[28px] text-white"></i>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-[12px]">
                Ignite Your Social Media Presence with Viral Captions!
              </h3>
              <p className="text-gray-200 text-[15px] md:text-[16px] leading-[24px]">
                Supercharge your social media game with AI-generated captions that will make your posts go viral and skyrocket your engagement rates!
              </p>
            </div>
          </div>

          {/* Use Case 2 */}
          <div
            className="flex items-start space-x-[20px] text-white"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div className="flex-shrink-0 w-[60px] h-[60px] bg-teal-500 rounded-[12px] flex items-center justify-center">
              <i className="ri-megaphone-fill text-[28px] text-white"></i>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-[12px]">
                Dominate Content Marketing with AI-Powered Captions!
              </h3>
              <p className="text-gray-200 text-[15px] md:text-[16px] leading-[24px]">
                Revolutionize your content marketing strategy with compelling AI-generated captions that will transform your blog posts and landing pages into conversion machines!
              </p>
            </div>
          </div>

          {/* Use Case 3 */}
          <div
            className="flex items-start space-x-[20px] text-white"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div className="flex-shrink-0 w-[60px] h-[60px] bg-teal-500 rounded-[12px] flex items-center justify-center">
              <i className="ri-shopping-cart-2-fill text-[28px] text-white"></i>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-[12px]">
                Explode Your E-commerce Sales with Magnetic Product Captions!
              </h3>
              <p className="text-gray-200 text-[15px] md:text-[16px] leading-[24px]">
                Turn browsers into buyers with irresistible AI-generated product captions that will make your customers click &ldquo;Add to Cart&rdquo; instantly!
              </p>
            </div>
          </div>

          {/* Use Case 4 */}
          <div
            className="flex items-start space-x-[20px] text-white"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <div className="flex-shrink-0 w-[60px] h-[60px] bg-teal-500 rounded-[12px] flex items-center justify-center">
              <i className="ri-hashtag text-[28px] text-white"></i>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-[12px]">
                Conquer Instagram & Pinterest with Trending Captions!
              </h3>
              <p className="text-gray-200 text-[15px] md:text-[16px] leading-[24px]">
                Dominate the algorithm with AI-generated captions that will make your posts explode on Instagram and Pinterest, driving massive traffic to your brand!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 