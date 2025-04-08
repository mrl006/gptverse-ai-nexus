import React from 'react';
import { ArrowRight, BookOpen, FileText, HeartPulse, BrainCircuit, Laugh, Rocket, ImageIcon, ArrowUpRight, MessageSquare } from 'lucide-react';

export interface AiModelProps {
  id: string;
  name: string;
  iconName: string;
  description: string;
  by: string;
  detailUrl?: string;
  color: string;
  buttonColor: string;
}

// Demo messages for each AI model
export const demoMessages: Record<string, Array<{role: string, content: string}>> = {
  'language-tutor': [
    { role: 'user', content: "How can I improve my English pronunciation?" },
    { role: 'assistant', content: "I can help you improve your English pronunciation! Try these techniques: 1) Listen to native speakers, 2) Record yourself speaking, 3) Practice difficult sounds daily. Would you like to practice some specific sounds?" }
  ],
  'pdf-reader': [
    { role: 'user', content: "Can you summarize the main findings of the report?" },
    { role: 'assistant', content: "Based on the PDF you uploaded, the report indicates a 15% increase in renewable energy adoption across the sector, with solar energy being the fastest growing segment at 22% year over year." }
  ],
  'healty': [
    { role: 'user', content: "What's a good evening routine for better sleep?" },
    { role: 'assistant', content: "Based on your health profile and sleep data, I recommend adjusting your evening routine. Try avoiding screen time 1 hour before bed and consider a 10-minute meditation to improve your sleep quality." }
  ],
  'scriptwriter': [
    { role: 'user', content: "How should I write an opening scene for my screenplay?" },
    { role: 'assistant', content: "For a compelling opening scene, consider starting with a visual that represents the central conflict - perhaps your protagonist facing a symbolic obstacle that foreshadows their journey." }
  ],
  'comedian': [
    { role: 'user', content: "Tell me some science jokes" },
    { role: 'assistant', content: "Why don't scientists trust atoms? Because they make up everything! Speaking of making things up, have you heard about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!" }
  ],
  'alien': [
    { role: 'user', content: "How do you perceive time?" },
    { role: 'assistant', content: "⌬⍙⎎⌇⍜⍾ Earth problem has simple solution. Your species views time as linear, but this limits perception. Consider nested dimensions of possibility where multiple outcomes coexist. ⌬⌿⍙⎒⊡" }
  ],
  'image-generator': []
};

// Extended demo messages for a more conversational experience
export const extendedDemoMessages: Record<string, Array<{role: string, content: string}>> = {
  'chatbot': [
    { role: 'user', content: 'Can you help me understand quantum computing?' },
    { role: 'assistant', content: 'Quantum computing uses qubits that exist in multiple states simultaneously, unlike classical bits (0s and 1s). This allows for solving complex problems much faster.' },
    { role: 'user', content: 'What practical applications does it have?' },
    { role: 'assistant', content: 'Quantum computing has promising applications in cryptography, drug discovery, optimization problems, and material science. These fields can benefit from quantum computing\'s ability to process complex calculations efficiently.' }
  ],
  'language-tutor': [
    { role: 'user', content: 'How can I improve my English pronunciation?' },
    { role: 'assistant', content: 'Practice these three techniques: listen to native speakers, record yourself speaking, and focus on difficult sounds daily.' },
    { role: 'user', content: 'Which sounds are hardest for non-native speakers?' },
    { role: 'assistant', content: 'The "th" sound (as in "the"), the "r" sound, and vowel distinctions like "ship" vs. "sheep" are typically challenging. Let\'s practice the "th" sound - place your tongue between your teeth and blow air.' }
  ],
  'pdf-reader': [
    { role: 'assistant', content: 'I\'ve analyzed your PDF document (Q2 Financial Report). What would you like to know about it?' },
    { role: 'user', content: 'Can you summarize the key metrics?' },
    { role: 'assistant', content: 'Key metrics: Revenue $245.3M (↑18%), Gross Margin 68.7% (↑2.3%), EBITDA $78.2M (↑22%), Net Income $42.1M (↑15%). European market expansion was the primary growth driver.' },
    { role: 'user', content: 'Compare this to last quarter?' },
    { role: 'assistant', content: 'Compared to Q1: Revenue grew 8.3%, Profit margin improved 1.2%, Customer acquisition cost decreased 7.5%. The report indicates stronger performance across all key metrics than last quarter.' }
  ],
  'code-assistant': [
    { role: 'user', content: 'How do I use React hooks?' },
    { role: 'assistant', content: 'React hooks let you use state and effects in function components. The most common are useState for state management and useEffect for side effects.' },
    { role: 'user', content: 'Show me a useState example' },
    { role: 'assistant', content: 'Here\'s a simple counter example:\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```\n\nThe useState hook returns the current state and a function to update it.' }
  ],
  'data-analyzer': [
    { role: 'user', content: 'Can you analyze my sales data trends?' },
    { role: 'assistant', content: 'From your data, I can see: Q4 sales peaked (+34%), Product A grew 18%, Western region outperformed (+22%), and customer acquisition increased 15%.' },
    { role: 'user', content: 'What\'s happening in the Western region?' },
    { role: 'assistant', content: 'Western Region (22% growth): New stores in Seattle and Portland drove growth, online sales increased 37% after targeted marketing, and Premium Subscription is the top performer (41% of revenue).' }
  ],
  'healty': [
    { role: 'user', content: 'What\'s a good evening routine for sleep?' },
    { role: 'assistant', content: 'Based on your health data, try: 1) No screens 1 hour before bed, 2) 10-minute meditation, 3) Maintain room temperature at 65-68°F, 4) Consistent 10:30pm bedtime.' },
    { role: 'user', content: 'What about nutrition for better sleep?' },
    { role: 'assistant', content: 'Your sleep tracking shows disruptions at 2-3am. Try avoiding caffeine after 2pm, limit alcohol, have a light protein snack (like yogurt) 1-2 hours before bed, and consider magnesium-rich foods like nuts or bananas.' }
  ],
  'scriptwriter': [
    { role: 'user', content: 'How do I write a compelling character?' },
    { role: 'assistant', content: 'Create characters with clear desires, conflicting internal/external goals, and specific flaws that affect their decisions. Their choices under pressure should reveal their true nature.' },
    { role: 'user', content: 'How should I structure the first act?' },
    { role: 'assistant', content: 'First act structure: 1) Hook - grab attention with a strong visual or question, 2) Inciting incident - disrupt your character\'s world, 3) First turning point - force a decision, 4) End with stakes raised and a clear path forward.' }
  ],
  'comedian': [
    { role: 'user', content: 'Tell me some science jokes' },
    { role: 'assistant', content: 'Why don\'t scientists trust atoms? Because they make up everything! I would tell another chemistry joke, but all the good ones argon.' },
    { role: 'user', content: 'How about some computer jokes?' },
    { role: 'assistant', content: 'Why do programmers prefer dark mode? Because light attracts bugs! I asked my computer to tell me a joke, but it said "Error 404: Joke not found." Even my computer has dad joke energy.' }
  ],
  'alien': [
    { role: 'user', content: 'How do you perceive time?' },
    { role: 'assistant', content: '⌬⍙⎎⌇⍜⍾ Time concept primitive. We exist across probability branches simultaneously. Your "now" is merely one node in vast possibility network.' },
    { role: 'user', content: 'How do you communicate with each other?' },
    { role: 'assistant', content: '⊘⍜⌇⊕⎏⍾ Communication through quantum entanglement of consciousness. No language needed. Direct transfer of concept-bundles through dimensional folding. ⍙⎋⌇⊡ Primitive translation: we think together as one.' }
  ],
  'writing-assistant': [
    { role: 'user', content: 'Help me write a professional email' },
    { role: 'assistant', content: 'Here\'s a structure: 1) Concise subject line, 2) Brief greeting, 3) Clear purpose in opening sentence, 4) 2-3 supporting points, 5) Specific action request, 6) Professional closing.' },
    { role: 'user', content: 'How do I make it more persuasive?' },
    { role: 'assistant', content: 'To be persuasive: 1) Open with a shared value or goal, 2) Use data to support claims, 3) Acknowledge potential concerns, 4) Offer clear benefits, 5) Create mild urgency, 6) Make the requested action simple and specific.' }
  ]
};

// AI Models array with colors for styling
export const AiModels: AiModelProps[] = [
  {
    id: 'language-tutor',
    name: 'Language Tutor',
    iconName: 'BookOpen',
    description: 'This AI specializes in teaching English through interactive lessons and personalized feedback, using advanced NLP to adapt to each learner\'s pace.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/language-tutor',
    color: 'bg-blue-800',
    buttonColor: '#0ef34b'
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader',
    iconName: 'FileText',
    description: 'A sophisticated AI that reads and comprehends multiple PDFs, answering specific questions by extracting and summarizing content.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/pdf-reader',
    color: 'bg-orange-700',
    buttonColor: '#00aeff'
  },
  {
    id: 'healty',
    name: 'Healty',
    iconName: 'HeartPulse',
    description: 'An advanced Health Assistant AI creating personalized wellness plans by analyzing real-time health data to meet your unique goals.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/healty',
    color: 'bg-teal-700',
    buttonColor: '#0ef34b'
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    iconName: 'BrainCircuit',
    description: 'AI-powered scriptwriting assistant that helps you craft compelling narratives, dialogue, and story structures for various media formats.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/scriptwriter',
    color: 'bg-indigo-700',
    buttonColor: '#8b5cf6'
  },
  {
    id: 'comedian',
    name: 'Comedian',
    iconName: 'Laugh',
    description: 'An AI with a sense of humor, generating jokes, comedic stories, and witty responses customized to your preferred style of comedy.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/comedian',
    color: 'bg-yellow-600',
    buttonColor: '#d946ef'
  },
  {
    id: 'alien',
    name: 'Alien',
    iconName: 'Rocket',
    description: 'Communicates in unusual and extraterrestrial ways, offering unique perspectives and creative solutions from beyond human thinking.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/alien',
    color: 'bg-green-700',
    buttonColor: '#00aeff'
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    iconName: 'ImageIcon',
    description: 'Creates stunning, high-quality images from text descriptions using advanced AI image generation techniques and style controls.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/image-generator',
    color: 'bg-purple-700',
    buttonColor: '#d946ef'
  }
];

// Helper function to get the icon component by name
export const getIconByName = (name: string): React.ReactNode => {
  switch (name) {
    case 'BookOpen':
      return <BookOpen className="h-5 w-5" />;
    case 'FileText':
      return <FileText className="h-5 w-5" />;
    case 'HeartPulse':
      return <HeartPulse className="h-5 w-5" />;
    case 'BrainCircuit':
      return <BrainCircuit className="h-5 w-5" />;
    case 'Laugh':
      return <Laugh className="h-5 w-5" />;
    case 'Rocket':
      return <Rocket className="h-5 w-5" />;
    case 'ImageIcon':
      return <ImageIcon className="h-5 w-5" />;
    default:
      return <MessageSquare className="h-5 w-5" />;
  }
};
