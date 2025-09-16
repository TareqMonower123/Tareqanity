import DocumentsPane from 'sanity-plugin-documents-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'

/**
 * A function that returns a default document node structure
 * based on the given schema type.
 *
 * For `artist` schema type, it returns a document node with
 * a form view and a documents pane view that shows all
 * events that reference the current artist.
 *
 * For all other schema types, it returns a document node with
 * a single form view.
 *
 * @param {S} S - The structure builder
 * @param {object} opts - An object with a single property `schemaType`
 * that contains the schema type of the document.
 * @returns {object} A document node structure
 */
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `artist`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[_type == "event" && references($id)]`,
            params: {id: `_id`},
          })
          .title('Events'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}