export default function GenerateSeoContent() {
  const content = {
    title: "Free AI Image to Text Prompt Generator",
    description: "Transform any image into detailed text prompts with our free AI Image to Text Prompt Generator. Perfect for content creators, artists, and AI enthusiasts who want to extract accurate descriptions from images for use in AI art generation or content creation.",
    
    keyTakeaways: [
      "Instantly convert images into detailed text descriptions",
      "Generate accurate and comprehensive prompts for AI art generation",
      "Save time on manual image description writing",
      "Perfect for content creators and digital artists",
      "Compatible with various image formats and styles"
    ],

    howItWorks: {
      title: "How does the AI Image to Text Prompt Generator Work?",
      content: [
        "Our AI Image to Text Prompt Generator uses advanced computer vision and natural language processing to analyze images and convert them into detailed text descriptions. It identifies objects, colors, styles, compositions, and other visual elements present in the image.",
        "The system processes multiple aspects of the image simultaneously, including foreground elements, background details, lighting conditions, and artistic style, to create comprehensive and accurate text prompts.",
        "These generated prompts can be used directly with AI art generators or modified to suit your specific needs, making it an invaluable tool for creative workflows."
      ]
    },

    benefits: [
      "Efficiency: Convert images to detailed prompts in seconds",
      "Accuracy: Get precise descriptions of visual elements",
      "Versatility: Works with various image types and styles",
      "Workflow Enhancement: Streamline your creative process"
    ],

    features: [
      {
        title: "Comprehensive Analysis",
        description: "Detailed recognition of objects, styles, colors, and composition"
      },
      {
        title: "Multiple Output Formats",
        description: "Generate prompts optimized for different AI art platforms"
      },
      {
        title: "Easy Integration",
        description: "Seamlessly incorporate into your creative workflow"
      }
    ],

    howToUse: [
      "Upload your image to the generator",
      "Wait for the AI analysis to complete",
      "Review the generated text prompt",
      "Copy or modify the prompt as needed",
      "Use the prompt in your preferred AI art generator"
    ],

    examplePrompt: {
      title: "Sample Image Analysis",
      imageType: "Digital Art",
      elements: ["Composition", "Color Palette", "Style", "Mood"],
      outputFormat: "Detailed Text Prompt"
    },

    faq: [
      {
        question: "What image formats are supported?",
        answer: "The generator supports common image formats including JPG, PNG, and WEBP."
      },
      {
        question: "How accurate are the generated prompts?",
        answer: "Our AI provides highly accurate descriptions, capturing both obvious and subtle details in the image."
      },
      {
        question: "Can I edit the generated prompts?",
        answer: "Yes, all prompts can be freely modified to better match your creative vision."
      }
    ],

    conclusion: [
      "The AI Image to Text Prompt Generator is an essential tool for anyone working with AI art generation or needing detailed image descriptions.",
      "By automating the process of creating text prompts from images, it saves time and enhances creativity in your digital art workflow."
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