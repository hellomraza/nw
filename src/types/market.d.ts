type Market = Partial<{
  id: number;
  uuid: string | null;
  salesforceId: string | null;
  name: string | null;
  label: string | null;
  state: string | null;
  users?: User[];
  offices?: Office[];
  agents?: Agent[];
  deals?: Deal[];
  dealCount?: number | null;
  latitude: number | null;
  longitude: number | null;
  isDFWMarket?: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  enabledForMarketplace: boolean;
}>;
