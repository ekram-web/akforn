import api from "./apiClient";

export const ContentService = {
  async getHomeHero() {
    const { data } = await api.get("/home/hero");
    return data; // { title, subtitle, videoUrl, overlay }
  },
  async getFeaturedProducts() {
    const { data } = await api.get("/home/featured-products");
    return data; // [{image, title, link}]
  },
  async getCoreTechnologies() {
    const { data } = await api.get("/home/core-technologies");
    return data; // [{title, description, image, link}]
  },
  async getNewsroom() {
    const { data } = await api.get("/newsroom/latest");
    return data; // [{tag, date, title, category, link}]
  },
};


