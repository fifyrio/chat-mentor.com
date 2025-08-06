export default function GenerateSeoContent() {
  const content = {
    title: "Free AI Image Description Generator",
    description: "Generate detailed, accurate descriptions for any image using our free AI Image Description Generator. Perfect for content creators, SEO specialists, and digital marketers who need high-quality, descriptive text for their visual content.",
    
    keyTakeaways: [
      "Generate detailed descriptions for any image instantly",
      "Improve image accessibility and SEO performance",
      "Create alt text and image captions automatically",
      "Perfect for content managers and digital marketers",
      "Support for multiple languages and image formats"
    ],

    howItWorks: {
      title: "How does the AI Image Description Generator Work?",
      content: [
        "Our AI Image Description Generator employs advanced computer vision and machine learning algorithms to analyze images and produce natural, detailed descriptions. The system identifies objects, scenes, actions, and relationships within the image.",
        "The AI processes multiple aspects simultaneously, including main subjects, background elements, colors, lighting, and spatial relationships, to create comprehensive and contextually accurate descriptions.",
        "These descriptions are optimized for both human readability and search engine understanding, making them perfect for improving web accessibility and SEO performance."
      ]
    },

    benefits: [
      "Time-saving: Generate descriptions in seconds",
      "SEO-friendly: Improve image search visibility",
      "Accessibility: Enhanced content for screen readers",
      "Consistency: Maintain uniform description style"
    ],

    features: [
      {
        title: "Smart Analysis",
        description: "Intelligent recognition of objects, scenes, and activities"
      },
      {
        title: "Multi-format Output",
        description: "Generate alt text, captions, and detailed descriptions"
      },
      {
        title: "Accessibility Focus",
        description: "Screen reader optimized descriptions"
      }
    ],

    howToUse: [
      "Upload your image to the platform",
      "Select your preferred description format",
      "Wait for AI analysis completion",
      "Review and edit the generated description",
      "Copy and use in your content"
    ],

    examplePrompt: {
      title: "Sample Description Output",
      imageType: "Web Content",
      elements: ["Alt Text", "Caption", "Long Description", "Meta Description"],
      outputFormat: "Multiple Format Options"
    },

    faq: [
      {
        question: "What image formats are supported?",
        answer: "We support all major image formats including JPG, PNG, WEBP, and GIF."
      },
      {
        question: "How accurate are the descriptions?",
        answer: "Our AI generates highly accurate descriptions, capturing both primary and secondary elements in the image."
      },
      {
        question: "Can I customize the description length?",
        answer: "Yes, you can generate both short alt texts and detailed long-form descriptions."
      }
    ],

    conclusion: [
      "The AI Image Description Generator is an essential tool for modern digital content creation and management.",
      "By automating the process of creating image descriptions, it helps improve accessibility, SEO, and overall content quality."
    ]
  };

  return (
    <div className="lg:w-3/4 sm:w-full mx-auto mt-6 px-4 md:px-6 py-6">
      <div className="w-full bg-white shadow-md rounded-lg p-6">        
        <p className="mb-6">{content.description}</p>

        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 mb-6">
          {content.keyTakeaways.map((takeaway, index) => (
            <li key={index}>{takeaway}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">{content.howItWorks.title}</h2>
        <div className="space-y-4 mb-6">
          {content.howItWorks.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <ul className="list-disc pl-6 mb-6">
          {content.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="mb-6">
          {content.features.map((feature, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">How to Use</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          {content.howToUse.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold mb-4">Example Analysis</h2>
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">{content.examplePrompt.title}</h3>
          <p className="mb-2">Type: {content.examplePrompt.imageType}</p>
          <p className="mb-2">Elements: {content.examplePrompt.elements.join(', ')}</p>
          <p>Output: {content.examplePrompt.outputFormat}</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-6">
          {content.faq.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <div className="space-y-4">
          {content.conclusion.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
