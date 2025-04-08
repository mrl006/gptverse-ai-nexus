
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

export type MessageType = {
  role: string;
  content: string;
};
