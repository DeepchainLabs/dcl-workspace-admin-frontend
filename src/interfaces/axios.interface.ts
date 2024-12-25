export interface iAxios<ParamObjectType, DataObjectType> {
  url: string;
  params?: ParamObjectType;
  data?: DataObjectType;
  method?: string;
  dataType?: "FormData" | "application/json";
  headers?: Record<string, string>;
  tags?: string[];
  revalidate?: number;
}
