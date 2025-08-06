"use client";

import React from "react";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              faq’s
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Frequently Ask Questions
            </h2>
          </div>

          <div className="max-w-[560px] md:max-w-[765px] xl:max-w-[872px] mx-auto">
            <div className="space-y-[25px]">
              <details className="bg-[#F8F6F5] rounded-[20px]" open>
                <summary className="text-[16px] md:text-[20px] text-black-color font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Is your app affiliated with Open AI?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Yes, our app is affiliated with Open AI at the Enterprise Partner level. Subscriptions to our app are separated from the ones with the Open AI website (ChatGPT Plus).
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  What are the chat models used by the app? 
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    The chat models used by our app are GPT-4 and Chat GPT.
                    You can switch between the model of Chat GPT and GPT-4 depending on different purposes. Please tap the button on the top of the chat screen to open the pop-up screen &gt; choose GPT-4/ChatGPT.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Can I use the app from my computer? 
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    No, our app is compatible with mobile devices only. 
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                Does the app require login information? 
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                  No, we do not require/provide any login information (username and password). 
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                What languages does the chatbot support? 
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                  Our bot supports many languages. Please type in the desired language so that the bot responds in your input language. Commands such as &quot;Speak in French&quot;, &quot;Talk to me in Spanish&quot; might help the bot to speak your requested language. 
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Does the Lifetime fee include future updates of the chat models?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Yes, the GPT-4 and other future updates will be enabled from our side. You do not need to take any action or pay any additional fee.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Why is the information incorrect or outdated sometimes? 
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    AI collects information from various sources, including unverified ones and outdated ones. OpenAI is constantly improving the chatbot&#x27;s accuracy, so update the app regularly and be selective with answers for the best experience.
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  What should I do if the app is at capacity? 
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    If you face this issue, please update the app to the latest version, wait for a minute, then come back later. 
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Does the app sync with other platforms such as Gmail or Word?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    No, our app doesn&#x27;t support add-ins or syncing with other apps. Copy the information to your clipboard instead and paste it onto any platform you prefer.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
