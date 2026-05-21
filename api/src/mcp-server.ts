import { TOOLS_DATA } from './tools-data';
import { AITool, AIFriendlyTool, MCPRequest, MCPResponse } from './types';

export class AiNavMCPServer {
  private tools = TOOLS_DATA;

  handleRequest(request: MCPRequest): MCPResponse {
    const { name, arguments: args } = request;

    switch (name) {
      case 'search_ai_tools':
        return this.searchTools(args);
      case 'get_tool_details':
        return this.getToolDetails(args);
      case 'list_categories':
        return this.listCategories(args);
      case 'get_by_category':
        return this.getByCategory(args);
      case 'get_recommendations':
        return this.getRecommendations(args);
      default:
        return {
          content: [{
            type: 'text',
            text: `Unknown tool: ${name}. Available: search_ai_tools, get_tool_details, list_categories, get_by_category, get_recommendations`
          }],
          isError: true
        };
    }
  }

  private searchTools(args: {
    query?: string;
    category?: string;
    free_only?: boolean;
    capabilities?: string[];
  }): MCPResponse {
    let results = [...this.tools];

    if (args.query) {
      const q = args.query.toLowerCase();
      results = results.filter(tool =>
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    if (args.category) {
      results = results.filter(tool => tool.category === args.category);
    }

    if (args.free_only) {
      results = results.filter(tool => tool.pricing.hasFreeTier);
    }

    if (args.capabilities && args.capabilities.length > 0) {
      results = results.filter(tool =>
        args.capabilities!.every(cap => tool.capabilities.includes(cap))
      );
    }

    const formatted = results.slice(0, 10).map(tool => ({
      id: tool.id,
      name: tool.name,
      description: tool.description,
      category: tool.category,
      capabilities: tool.capabilities.slice(0, 3),
      has_free_tier: tool.pricing.hasFreeTier,
      difficulty: tool.difficulty,
      website: tool.website
    }));

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          count: formatted.length,
          tools: formatted
        }, null, 2)
      }]
    };
  }

  private getToolDetails(args: Record<string, any>): MCPResponse {
    const toolId = args.tool_id || args.toolId;
    const tool = this.tools.find(t => t.id === toolId);

    if (!tool) {
      return {
        content: [{
          type: 'text',
          text: `Tool not found: ${toolId}`
        }],
        isError: true
      };
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          id: tool.id,
          name: tool.name,
          description: tool.descriptionForAI,
          category: tool.category,
          capabilities: tool.capabilities,
          use_cases: tool.useCases,
          pricing: tool.pricing,
          difficulty: tool.difficulty,
          website: tool.website,
          examples: tool.examples,
          openclaw_compatible: tool.openclawCompatible
        }, null, 2)
      }]
    };
  }

  private listCategories(_args: any): MCPResponse {
    const categories = [...new Set(this.tools.map(t => t.category))];
    
    const categoryInfo = categories.map(cat => {
      const count = this.tools.filter(t => t.category === cat).length;
      const tools = this.tools
        .filter(t => t.category === cat)
        .slice(0, 3)
        .map(t => t.name);
      
      return { category: cat, count, tools };
    });

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          total_categories: categories.length,
          categories: categoryInfo
        }, null, 2)
      }]
    };
  }

  private getByCategory(args: Record<string, any>): MCPResponse {
    const category = args.category;
    const results = this.tools.filter(t => t.category === category);

    const formatted = results.map(tool => ({
      id: tool.id,
      name: tool.name,
      description: tool.description,
      difficulty: tool.difficulty,
      has_free_tier: tool.pricing.hasFreeTier,
      popularity: tool.popularity
    }));

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          category: args.category,
          count: formatted.length,
          tools: formatted
        }, null, 2)
      }]
    };
  }

  private getRecommendations(args: {
    use_case?: string;
    free_only?: boolean;
    difficulty?: string;
  }): MCPResponse {
    let results = [...this.tools];

    if (args.use_case) {
      const q = args.use_case.toLowerCase();
      results = results.filter(tool =>
        tool.useCases.some(uc => uc.toLowerCase().includes(q)) ||
        tool.description.toLowerCase().includes(q) ||
        tool.capabilities.some(cap => cap.toLowerCase().includes(q))
      );
    }

    if (args.free_only) {
      results = results.filter(tool => tool.pricing.hasFreeTier);
    }

    if (args.difficulty) {
      results = results.filter(tool => tool.difficulty === args.difficulty);
    }

    results.sort((a, b) => b.popularity - a.popularity);

    const recommendations = results.slice(0, 5).map(tool => ({
      name: tool.name,
      category: tool.category,
      reason: tool.useCases[0],
      difficulty: tool.difficulty,
      pricing: tool.pricing.hasFreeTier ? '有免费版' : '付费',
      website: tool.website
    }));

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          message: `根据你的需求，推荐以下 ${recommendations.length} 个工具：`,
          recommendations
        }, null, 2)
      }]
    };
  }
}

export const mcpServer = new AiNavMCPServer();
