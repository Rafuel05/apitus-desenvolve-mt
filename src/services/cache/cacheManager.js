class CacheManager {
  constructor() {
    this.cache = {
      data: null,
      timestamp: null,
      filters: null,
      CACHE_DURATION: 5 * 60 * 1000, // 5 minutos
    };
  }

  isValid(newFilters) {
    if (!this.cache.data || !this.cache.timestamp) return false;
    
    const now = Date.now();
    const isExpired = (now - this.cache.timestamp) > this.cache.CACHE_DURATION;
    
    if (isExpired) return false;
    
    const { status: newStatus, pagina: newPagina, porPagina: newPorPagina, ...newOtherFilters } = newFilters;
    const { status: oldStatus, pagina: oldPagina, porPagina: oldPorPagina, ...oldOtherFilters } = this.cache.filters || {};
    
    return JSON.stringify(newOtherFilters) === JSON.stringify(oldOtherFilters);
  }

  getData() {
    return this.cache.data;
  }

  setData(data, filters = {}) {
    this.cache.data = data;
    this.cache.timestamp = Date.now();
    this.cache.filters = filters;
  }

  clear() {
    this.cache.data = null;
    this.cache.timestamp = null;
    this.cache.filters = null;
  }

  hasData() {
    return !!this.cache.data;
  }
}

export const cacheManager = new CacheManager();