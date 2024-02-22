type Media = Partial<{
  id: number;
  uuid?: string | null;
  salesforceId?: string | null;
  deal?: Deal;
  order?: number | null;
  mediaUrl?: string | null;
  longDescription?: string | null;
  imageHeight?: number | null;
  imageWidth?: number | null;
  mediaType?: string | null;
  modificationTimestamp?: string | null;
  mediaCategory?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}>;
