export interface AITool {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionForAI: string;
  category: string;
  subcategory?: string;
  capabilities: string[];
  website: string;
  pricing: {
    hasFreeTier: boolean;
    freeCredits?: number;
    startingPrice?: number;
    pricingModel: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  useCases: string[];
  examples: string[];
  openclawCompatible: boolean;
  popularity: number;
  rating: number;
  lastUpdated: string;
}

export interface AIFriendlyTool {
  id: string;
  name: string;
  description: string;
  usage_example: string;
  capabilities: string[];
  registration_required: boolean;
  free_tier: boolean;
  website: string;
  difficulty: string;
}

export interface MCPRequest {
  name: string;
  arguments: Record<string, any>;
}

export interface MCPResponse {
  content: Array<{
    type: 'text';
    text: string;
  }>;
  isError?: boolean;
}
