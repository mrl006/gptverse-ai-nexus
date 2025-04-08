
import { AiModelProps } from '@/types/aiModel.types';

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
