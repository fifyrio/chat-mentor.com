import React from 'react';

const ShareLinkComponent = () => {
  return (
    <div className="mt-2 items-center flex space-x-5 flex-wrap gap-y-4">
        <div>
            <a 
            href="https://toolnest.ai/project/ai-chatmentor/" 
            target="_blank" 
            style={{ cursor: 'pointer' }} 
            id="tr"
        >
            <picture>
            <source 
                srcSet="https://toolnest.ai/wp-content/uploads/2024/08/Badge_toolnest_light.jpg.webp" 
                type="image/webp"
            />
            <img 
                loading="lazy" 
                src="https://toolnest.ai/wp-content/uploads/2024/08/Badge_toolnest_light.jpg" 
                style={{ width: '250px', height: '60px' }} 
                width="250" 
                height="60" 
                alt="AI ChatMentor" 
                data-eio="p" 
            />
            </picture>
        </a>
        </div>
        <div>
          <a href="https://tap4.ai/" title="Tap4 AI Tools Directory"><img src='https://tap4.ai/images/tap4-ai.svg' className='max-w-[150px]'/></a>          
        </div>
        <div>
        <a href='https://www.saashub.com/ai-chatmentor?utm_source=badge&utm_campaign=badge&utm_content=ai-chatmentor&badge_variant=color&badge_kind=approved' target='_blank'>
          <img src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" alt="AI ChatMentor badge" className='max-w-[150px]'/>
        </a>        
        </div>

        <div>
        <a href="https://www.saasbaba.com/" target="_blank">
        <img src="https://saasbaba.com/wp-content/uploads/2023/05/featured-on-sb.png" alt="SaasBaba.com" style={{width: '150px', height: '38px'}} /></a>
        </div>

        <div>
        <a href="https://chatgptdemo.com/" style={{ width: '250px', height: '54px' }} > 
            <img src="https://chatgptdemo.com/wp-content/uploads/2023/04/Share-1-5.png" alt="Featured on AI & GPT Tool Directory" style={{ width: '250px', height: '54px' }} />
        </a>
        </div>

        <div>
        <a href="https://topai.tools/t/chat-mentor-com?ref=embed">
          <img src="https://topai.tools/assets/img/topai.tools.gif" alt="ChatMentor Featured on topAI.tools" style={{maxWidth: '300px', maxHeight: '80px'}} />
        </a>
        </div>

    </div>
  );
};

export default ShareLinkComponent;

