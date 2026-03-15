// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import gruvbox from "starlight-theme-gruvbox";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: "https://thedocslodge.org",
    integrations: [starlight({
        plugins: [
            gruvbox()
        ],
        title: 'The Docs Lodge',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/austindsmith' }],
        sidebar: [
            {
                label: 'Phases',
                autogenerate: { directory: 'phases' },
            },
            {
                label: 'Decisions',
                autogenerate: { directory: 'decisions' },
            },
            {
                label: 'Runbooks',
                autogenerate: { directory: 'runbooks' },
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
    }), mdx()],
});