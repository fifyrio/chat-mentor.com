export default function GenerateSeoContent() {
  const content = {
    title: "Free AI Story Generator",
    description: "Looking for an effortless way to create engaging stories? The AI Story Generator is available for free on chat-mentor.com. This powerful tool helps unleash your creativity by generating unique and compelling narratives tailored to your preferences.",
    
    keyTakeaways: [
      "AI Story Generator creates unique and engaging narratives instantly",
      "Customizable story elements including plot, characters, and settings",
      "Perfect for writers, content creators, and storytelling enthusiasts",
      "Multiple genre options to suit different writing needs",
      "Save time while maintaining creative control over your stories"
    ],

    howItWorks: {
      title: "How does the AI Story Generator Work?",
      content: [
        "The AI Story Generator utilizes advanced natural language processing to create coherent and engaging narratives. By analyzing vast databases of literary works and storytelling patterns, it generates unique stories that maintain proper structure and flow.",
        "Users can input specific elements they want in their story, such as genre preferences, character types, or plot points. The AI then crafts a narrative that incorporates these elements while maintaining narrative consistency.",
        "The generator can create everything from short stories to longer narratives, adapting its output to match your desired length and complexity while ensuring quality storytelling throughout."
      ]
    },

    benefits: [
      "Time-efficient: Generate complete stories in seconds rather than hours or days",
      "Creativity boost: Get inspired with unique plot ideas and character concepts",
      "Versatility: Create stories for various purposes - from entertainment to education",
      "Customization: Control story elements while letting AI handle the heavy lifting"
    ],

    features: [
      {
        title: "Multiple Genres",
        description: "Generate stories across various genres including fantasy, mystery, romance, and more"
      },
      {
        title: "Customizable Length",
        description: "Create stories of different lengths from short flash fiction to longer narratives"
      },
      {
        title: "Character Integration",
        description: "Seamlessly incorporate specific characters and their traits into your stories"
      }
    ],

    howToUse: [
      "Select your preferred genre and story length",
      "Input any specific elements you want included",
      "Generate your unique story",
      "Edit and refine the generated content as needed",
      "Use the story as is or as inspiration for further development"
    ],

    exampleStory: {
      title: "The Midnight Quest",
      genre: "Fantasy Adventure",
      length: "Short Story",
      elements: ["Magic", "Mystery", "Adventure"]
    },

    faq: [
      {
        question: "How unique are the generated stories?",
        answer: "Each story is uniquely generated using advanced AI algorithms, ensuring original content every time."
      },
      {
        question: "Can I edit the generated stories?",
        answer: "Yes, all generated stories can be freely edited and modified to better suit your needs."
      },
      {
        question: "What genres are available?",
        answer: "The generator supports multiple genres including fantasy, sci-fi, romance, mystery, and more."
      }
    ],

    conclusion: [
      "The AI Story Generator is an invaluable tool for anyone looking to create engaging stories quickly and efficiently.",
      "Whether you're a professional writer seeking inspiration or a content creator needing quick story generation, this free tool can help streamline your creative process."
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

        <h2 className="text-2xl font-bold mb-4">Story Example</h2>
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">{content.exampleStory.title}</h3>
          <p className="mb-2">Genre: {content.exampleStory.genre}</p>
          <p className="mb-2">Length: {content.exampleStory.length}</p>
          <p>Elements: {content.exampleStory.elements.join(', ')}</p>
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
