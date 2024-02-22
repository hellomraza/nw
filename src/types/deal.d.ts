type Deal = Partial<{
  id: number | null;
  uuid: string;
  salesforceId: string;
  standardStatus: DealStatuses;
  streetNumber: string | null;
  streetDirPrefix: string | null;
  streetName: string | null;
  streetDirSuffix?: string | null;
  streetSuffix?: string | null;
  streetSuffixModifier: string | null;
  city: string | null;
  stateOrProvince: string | null;
  postalCode: string | null;
  listPrice: string | null;
  bedroomsTotal: number | null;
  bathroomsTotalInteger: number | null;
  bathroomsFull: number | null;
  bathroomsHalf: number | null;
  livingArea: number | null;
  livingAreaUnits: string | null;
  yearBuilt: string | null;
  garageSpaces: number | null;
  publicRemarks: string | null;
  modificationTimestamp: string | null;
  media: Media[];
  market: Market;
  usersFavorited: User[];
  usersViewed: User[];
  latitude: number | null;
  longitude: number | null;
  agent: Agent;
  favoriteCount: number | null;
  viewCount: number | null;
  description: string | null;
  notes: string | null;
  addressLine: string | null;
  mapUrl: string | null;
  isFavorited: boolean;
  isViewed: boolean;
  expirationStartTime: string | null;
  county: string | null;
  customSellerDisclosureUrl: string | null;
  isDeleted: boolean;
  propertySalesforceId: string | null;
  excludeFromMarketplace: boolean;
  publishedToMarketplace: boolean;
  documents: DocumentTypes[];
  createdAt: string | null;
  updatedAt: string | null;
}>;

type DealStatuses =
  | 'available'
  | 'pending-approval'
  | 'recently-sold'
  | 'closed'
  | 'dead'
  | 'unknown';
