
import { MessageType } from '@/types/aiModel.types';

// Short, focused demo messages for each AI model - just 2 messages per tool
export const demoMessages: Record<string, Array<MessageType>> = {
  'language-tutor': [
    { role: 'user', content: "How can I improve my English pronunciation?" },
    { role: 'assistant', content: "Focus on these three key techniques:\n1) Listen to native speakers regularly\n2) Practice the 'th' sound by placing your tongue between your teeth\n3) Record yourself and compare with native speech" }
  ],
  'pdf-reader': [
    { role: 'user', content: "Summarize the main points from this financial report" },
    { role: 'assistant', content: "From your Q2 Financial Report:\n• Revenue: $245.3M (↑18%)\n• Gross Margin: 68.7% (↑2.3%)\n• EBITDA: $78.2M (↑22%)\n• European market drove most growth" }
  ],
  'healty': [
    { role: 'user', content: "What's a good evening routine for better sleep?" },
    { role: 'assistant', content: "Based on your sleep data, I recommend:\n1) No screens 1 hour before bed (blue light is affecting your REM cycles)\n2) Keep your bedroom at 65-68°F\n3) Try 10-minute meditation at 10:00pm" }
  ],
  'scriptwriter': [
    { role: 'user', content: "Write an opening scene for a sci-fi movie" },
    { role: 'assistant', content: "INT. LABORATORY - NIGHT\n\nDR. ELLIS (45) hunches over a pulsing holographic display. Data streams across her face as she manipulates the projection with practiced precision.\n\nShe freezes when the display flashes red. A message appears: 'SIGNAL DETECTED'" }
  ],
  'comedian': [
    { role: 'user', content: "Tell me a joke about technology" },
    { role: 'assistant', content: "Why don't programmers like nature? It has too many bugs without debugging tools!\n\nI tried to come up with a joke about artificial intelligence, but my brain crashed trying to compute something that funny." }
  ],
  'alien': [
    { role: 'user', content: "How does your species communicate?" },
    { role: 'assistant', content: "⌬⍙⎎⌇⍜⍾ We transmit thoughts through quantum entanglement of neural patterns. Your species' sound-based communication is remarkably primitive yet fascinating in its adaptability. ⌬⌿⍙⎒⊡" }
  ],
  'image-generator': [
    { role: 'user', content: "Generate multiple style variations of a character design for my game" },
    { role: 'assistant', content: "I've created 8 different style variations of a character design, ranging from realistic to cartoon, isometric, abstract, and stylized. Each has unique artistic elements that could work for different game aesthetics." }
  ]
};

// Extended messages reduced to just 2 exchanges (4 messages total) that are tool-specific
export const extendedDemoMessages: Record<string, Array<MessageType>> = {
  'language-tutor': [
    { role: 'user', content: "How can I improve my English pronunciation?" },
    { role: 'assistant', content: "Focus on these techniques: listen to native speakers, practice specific sounds daily, and record yourself speaking." },
    { role: 'user', content: "Which English sounds are hardest for non-native speakers?" },
    { role: 'assistant', content: "The most challenging sounds are:\n• The 'th' sound (try placing your tongue between teeth)\n• The 'r' sound (curl tongue back slightly)\n• Vowel distinctions like 'ship' vs 'sheep'\n• Word stress patterns in longer words" }
  ],
  'pdf-reader': [
    { role: 'user', content: "Summarize the main points from this financial report" },
    { role: 'assistant', content: "From your Q2 Financial Report:\n• Revenue: $245.3M (↑18%)\n• Gross Margin: 68.7% (↑2.3%)\n• EBITDA: $78.2M (↑22%)" },
    { role: 'user', content: "How does this compare to last quarter?" },
    { role: 'assistant', content: "Q2 vs Q1 comparison:\n• Revenue increased 8.3%\n• Profit margin improved 1.2%\n• Customer acquisition cost down 7.5%\n• European market showed strongest growth (14.2%)" }
  ],
  'healty': [
    { role: 'user', content: "What's a good evening routine for better sleep?" },
    { role: 'assistant', content: "Based on your sleep tracking data, I recommend:\n• No screens 1 hour before bed\n• 10-minute meditation at 10pm\n• Bedroom temperature: 65-68°F" },
    { role: 'user', content: "What foods should I avoid before bedtime?" },
    { role: 'assistant', content: "Your sleep data shows disruptions at 2-3am. Avoid:\n• Caffeine after 2pm (including chocolate)\n• Alcohol within 3 hours of bedtime\n• Heavy or spicy meals\n• Opt for magnesium-rich foods instead (bananas, nuts)" }
  ],
  'scriptwriter': [
    { role: 'user', content: "Write an opening scene for a sci-fi movie" },
    { role: 'assistant', content: "INT. LABORATORY - NIGHT\n\nDR. ELLIS (45) hunches over a pulsing holographic display. Data streams across her face as she manipulates the projection with practiced precision." },
    { role: 'user', content: "Now write the next scene showing the alien arrival" },
    { role: 'assistant', content: "EXT. OBSERVATORY - SAME TIME\n\nA massive telescope pivots automatically. Through its digital eyepiece: a formation of lights arranges itself into a perfect geometric pattern.\n\nTECH OFFICER CHEN (30s): \"Sir, they're not just passing by. They're organizing... and decelerating.\"" }
  ],
  'comedian': [
    { role: 'user', content: "Tell me a joke about technology" },
    { role: 'assistant', content: "Why don't programmers like nature? It has too many bugs without debugging tools!" },
    { role: 'user', content: "How about a joke about AI?" },
    { role: 'assistant', content: "I asked my AI assistant to tell me a joke, and it said \"I'll need to think about that a bit.\"\n\nThree hours later, it finally responded with \"Sorry, I was training on 10 billion comedy specials to optimize humor parameters.\"" }
  ],
  'alien': [
    { role: 'user', content: "How does your species communicate?" },
    { role: 'assistant', content: "⌬⍙⎎⌇⍜⍾ We transmit thoughts through quantum entanglement of neural patterns. Your sound-based communication is remarkably primitive yet fascinating. ⌬⌿⍙⎒⊡" },
    { role: 'user', content: "What do you think of human technology?" },
    { role: 'assistant', content: "⌇⍜⊕⎏⍾⊡ Your silicon computing is like stone tools to us. Yet your creativity within constraints impresses. Your 'quantum computing' experiments amuse us - like watching infants discover their fingers. ⍾⌇⊘⍜⊡" }
  ],
  'image-generator': [
    { role: 'user', content: "Generate multiple style variations of a character design for my game" },
    { role: 'assistant', content: "I've created 8 different style variations of a character design, ranging from realistic to cartoon, isometric, abstract, and stylized." },
    { role: 'user', content: "Could you create one with a more cyberpunk aesthetic?" },
    { role: 'assistant', content: "I've generated a cyberpunk variation with neon accents, digital distortion effects, and techno-futuristic elements. The character now has augmented features and a high-tech urban background." }
  ],
  'chatbot': [
    { role: 'user', content: "What can you help me with?" },
    { role: 'assistant', content: "I can assist with many tasks including answering questions, creative writing, summarizing information, and providing recommendations based on your preferences." },
    { role: 'user', content: "Tell me a fun fact about space" },
    { role: 'assistant', content: "One day on Venus is longer than one year on Venus! Venus takes 243 Earth days to rotate once on its axis but only 225 Earth days to orbit the Sun completely." }
  ]
};
