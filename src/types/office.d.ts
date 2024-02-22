type Office = Partial<{
  id: number;
  uuid: string | null;
  salesforceId: string | null;
  name: string | null;
  brokerageFirm: string | null;
  brokerageFirmNumber: string | null;
  addressLine: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  market: Market;
  generalManager: Agent;
  agents: Agent[];
  createdAt: string | null;
  updatedAt: string | null;
}>;
