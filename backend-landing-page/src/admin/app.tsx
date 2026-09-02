import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['id', 'en'],
  },
  bootstrap(app: StrapiApp) {
    // Menyuntikkan style CSS untuk menyembunyikan ikon Menu Setting di Sidebar
    const style = document.createElement('style');
    style.id = 'hide-strapi-settings';
    style.innerHTML = `
      /* Sembunyikan ikon dan tautan Settings di sidebar */
      nav a[href*="/settings"],
      nav a[href*="/admin/settings"],
      a[href*="/admin/settings"],
      a[href*="/settings"],
      button[aria-label*="Settings"],
      a[aria-label*="Settings"],
      a[aria-label*="Pengaturan"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  },
};
