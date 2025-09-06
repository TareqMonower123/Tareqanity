import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '6koo24mx',
    dataset: 'production'
  },
  app: {
    organizationId: 'ofWvxSlDp',
    entry: './src/App.tsx',
  },
})
