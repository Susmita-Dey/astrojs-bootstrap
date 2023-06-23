import { defineConfig } from 'astro/config';
import bootstrapIntegration from './src';

export default defineConfig({
    integrations: [
        bootstrapIntegration(),
    ],
});
