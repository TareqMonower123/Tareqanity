import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { defaultDocumentNode } from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Day One Content Operations',

  projectId: '6koo24mx',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

/**
 * Filter the available tools based on the current user's roles.
 * If the user is an administrator, all tools are available.
 * Otherwise, the 'vision' tool is filtered out.
 * @param {Object} prev - The previous tools configuration.
 * @param {Object} currentUser - The current user.
 * @returns {Object} The filtered tools configuration.
 */
  tools: (prev, {currentUser}) => {
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    if (isAdmin) {
      return prev
    }

    return prev.filter((tool) => tool.name !== 'vision')
  },
})
