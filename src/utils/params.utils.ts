export const getPageLimitFromSearchParam = (
  searchParams: Record<string, any>,
  limitDefault = 5
) => {
  const page =
    typeof searchParams.page === "string" && !isNaN(+searchParams.page)
      ? +searchParams.page
      : 1;
  const limit =
    typeof searchParams.limit === "string" && !isNaN(+searchParams.limit)
      ? +searchParams.limit
      : limitDefault;

  return { page, limit };
};
