type User = Partial<{
  id: number;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  uuid: string | null;
  salesforceId: string | null;
  authId: string | null;
  address: string | null;
  favoriteDeals: Deal[];
  viewedDeals: Deal[];
  markets: UserMarket[];
  onboarded: boolean;
  profileImageUrl: string | null;
  timeframe: string | null;
  investmentExperience: string | null;
  investmentStrategies: string | null;
  financialMethods: string | null;
  hearAboutUs: string | null;
  hearAboutUsOther: string | null;
  userType: UserTypes;
  agentName: string | null;
  contactSummaries: ContactSummary[];
  isParent: boolean;
  parentContact: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  investorStage: string | null;
}>;

type UserMarket = Partial<{
  market: Market;
  agent: Agent;
  createdAt: string | null;
  updatedAt: string | null;
}>;

type UserTypes = 'investor' | 'agent';

type ContactSummary = Partial<{
  Id: string | null;
  Market__c: string | null;
  MarketName: string | null;
  OwnerId: string | null;
  OwnerName: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}>;

type UserMarketDetails = Partial<{
  market: Market;
  agent: Agent;
  totalDealCount: number | null;
  totalUnviewedCount: number;
  createdAt: string | null;
  updatedAt: string | null;
}>;
