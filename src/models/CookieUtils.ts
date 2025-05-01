// Encode & decode helpers
export const getFavoriteBarcodes = (): string[] => {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("favorites="));
    if (!cookie) return [];
    try {
      return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    } catch {
      return [];
    }
  };
  
  export const saveFavoriteBarcodes = (barcodes: string[]) => {
    const encoded = encodeURIComponent(JSON.stringify(barcodes));
    document.cookie = `favorites=${encoded}; path=/; max-age=31536000`; // 1 year
  };