//Convert String to slug
export const createSlug = (string) => {
  const slug = string.toLowerCase().trim().replace(/\s+/g, "-");
  return slug;
};
