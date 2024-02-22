type Agent = Partial<{
  id: number;
  uuid: string | null;
  salesforceId: string | null;
  licenseNumber: string | null;
  imageUrl: string | null;
  office: Office | null;
  status: AgentStatuses | null;
  market: Market | null;
  userId: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  salesforceUserId: string | null;
}>;
