const strapi = require('@strapi/strapi');
strapi.createStrapi({ appDir: process.cwd(), distDir: './dist' }).start();
