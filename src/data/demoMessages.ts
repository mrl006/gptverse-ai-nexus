
import { MessageType } from '@/types/aiModel.types';

// Short, focused demo messages for each AI model
export const demoMessages: Record<string, Array<MessageType>> = {
  'language-tutor': [
    { role: 'user', content: "How can I improve my English pronunciation?" },
    { role: 'assistant', content: "Focus on these three key techniques:\n1) Listen to native speakers regularly\n2) Practice the 'th' sound by placing your tongue between your teeth\n3) Record yourself and compare with native speech" }
  ],
  'pdf-reader': [
    { role: 'user', content: "Summarize the financial report" },
    { role: 'assistant', content: "From your Q2 Financial Report:\n• Revenue: $245.3M (↑18%)\n• Gross Margin: 68.7% (↑2.3%)\n• EBITDA: $78.2M (↑22%)\n• European market drove most growth" }
  ],
  'healty': [
    { role: 'user', content: "What's a good evening routine for better sleep?" },
    { role: 'assistant', content: "Based on your sleep data, I recommend:\n1) No screens 1 hour before bed (blue light is affecting your REM cycles)\n2) Keep your bedroom at 65-68°F\n3) Try 10-minute meditation at 10:00pm" }
  ],
  'scriptwriter': [
    { role: 'user', content: "How should I write an opening scene?" },
    { role: 'assistant', content: "Your opening scene should:\n1) Establish a visual that embodies the central conflict\n2) Introduce your protagonist in their normal world\n3) Plant a subtle seed of the upcoming change" }
  ],
  'comedian': [
    { role: 'user', content: "Tell me some science jokes" },
    { role: 'assistant', content: "Why don't scientists trust atoms? Because they make up everything!\n\nI'd tell another chemistry joke but all the good ones argon. Want to hear a physics joke? It's relatively funny!" }
  ],
  'alien': [
    { role: 'user', content: "How do you perceive time?" },
    { role: 'assistant', content: "⌬⍙⎎⌇⍜⍾ Your linear time concept limits perception. We experience probability branches simultaneously. What you call 'now' is merely one node in vast possibility network. ⌬⌿⍙⎒⊡" }
  ],
  'image-generator': []
};

// Extended but more focused demo messages for a better experience
export const extendedDemoMessages: Record<string, Array<MessageType>> = {
  'chatbot': [
    { role: 'user', content: 'Explain quantum computing simply' },
    { role: 'assistant', content: 'Quantum computing uses qubits that exist in multiple states simultaneously (unlike regular 0s and 1s). This allows for solving certain complex problems exponentially faster than classical computers.' },
    { role: 'user', content: 'What practical applications does it have?' },
    { role: 'assistant', content: 'Practical applications include:\n• Cryptography: Breaking and creating more secure encryption\n• Drug discovery: Simulating molecular interactions\n• Optimization: Solving complex logistics problems\n• AI: Accelerating machine learning algorithms' }
  ],
  'language-tutor': [
    { role: 'user', content: 'How can I improve my English pronunciation?' },
    { role: 'assistant', content: 'Focus on these techniques: listen to native speakers, record yourself speaking, and practice difficult sounds daily.' },
    { role: 'user', content: 'Which sounds are hardest for non-native speakers?' },
    { role: 'assistant', content: 'The most challenging sounds are:\n• "th" (as in "the" and "think")\n• "r" and "l" distinction\n• Vowel pairs like "ship" vs. "sheep"\n\nLet\'s practice the "th" sound - place your tongue between your teeth and blow air gently.' }
  ],
  'pdf-reader': [
    { role: 'assistant', content: 'I\'ve analyzed your Q2 Financial Report. What information would you like?' },
    { role: 'user', content: 'Summarize the key metrics' },
    { role: 'assistant', content: 'Key metrics from your Q2 report:\n• Revenue: $245.3M (↑18%)\n• Gross Margin: 68.7% (↑2.3%)\n• EBITDA: $78.2M (↑22%)\n• Customer Acquisition Cost: $42 (↓7%)' },
    { role: 'user', content: 'How does this compare to Q1?' },
    { role: 'assistant', content: 'Q2 vs Q1 comparison:\n• Revenue grew 8.3%\n• Profit margin improved 1.2%\n• Customer acquisition cost decreased 7.5%\n• European market showed strongest growth at 14.2%' }
  ],
  'code-assistant': [
    { role: 'user', content: 'How do I use React hooks?' },
    { role: 'assistant', content: 'React hooks let you use state and effects in function components. The most common are useState for state management and useEffect for side effects.' },
    { role: 'user', content: 'Show me a useState example' },
    { role: 'assistant', content: 'Here\'s a simple counter example with useState:\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```' }
  ],
  'healty': [
    { role: 'user', content: 'What\'s a good evening routine for sleep?' },
    { role: 'assistant', content: 'Based on your sleep tracking data, I recommend:\n• No screens 1 hour before bed\n• 10-minute meditation\n• Bedroom temperature: 65-68°F\n• Consistent 10:30pm bedtime' },
    { role: 'user', content: 'What about nutrition for better sleep?' },
    { role: 'assistant', content: 'Your sleep data shows disruptions at 2-3am. I recommend:\n• No caffeine after 2pm\n• Limit alcohol (affects your REM cycles)\n• Small protein snack 1-2 hours before bed\n• Magnesium-rich foods (bananas, nuts) to reduce restlessness' }
  ],
  'scriptwriter': [
    { role: 'user', content: 'How do I write a compelling character?' },
    { role: 'assistant', content: 'Create compelling characters with:\n• Clear desires that drive actions\n• Conflicting internal/external goals\n• Specific flaws affecting decisions\n• Distinctive voice and perspective' },
    { role: 'user', content: 'How should I structure the first act?' },
    { role: 'assistant', content: 'First act structure:\n1) Hook - Visual or question that grabs attention\n2) Inciting incident - Disruption to normal world\n3) First turning point - Character forced to make a choice\n4) Act break - Stakes raised with clear path forward' }
  ],
  'comedian': [
    { role: 'user', content: 'Tell me some science jokes' },
    { role: 'assistant', content: 'Why don\'t scientists trust atoms? Because they make up everything!\n\nI would tell another chemistry joke, but all the good ones argon.' },
    { role: 'user', content: 'How about some computer jokes?' },
    { role: 'assistant', content: 'Why do programmers prefer dark mode? Because light attracts bugs!\n\nI asked my computer to tell me a joke, but it said "Error 404: Joke not found."' }
  ],
  'alien': [
    { role: 'user', content: 'How do you perceive time?' },
    { role: 'assistant', content: '⌬⍙⎎⌇⍜⍾ Time concept primitive. We exist across probability branches simultaneously. Your "now" is merely one node in vast possibility network.' },
    { role: 'user', content: 'How do you communicate with each other?' },
    { role: 'assistant', content: '⊘⍜⌇⊕⎏⍾ Communication through quantum entanglement of consciousness. Direct transfer of concept-bundles through dimensional folding. ⍙⎋⌇⊡ We think together as one unified entity across dimensional planes.' }
  ],
  'writing-assistant': [
    { role: 'user', content: 'Help me write a professional email' },
    { role: 'assistant', content: 'Professional email structure:\n1) Concise subject line\n2) Brief greeting\n3) Clear purpose in first sentence\n4) 2-3 supporting points\n5) Specific action request\n6) Professional closing' },
    { role: 'user', content: 'How do I make it more persuasive?' },
    { role: 'assistant', content: 'To increase persuasiveness:\n• Open with shared value/goal\n• Use specific data points\n• Address potential concerns\n• Highlight clear benefits\n• Create mild urgency\n• Make requested action simple' }
  ]
};
