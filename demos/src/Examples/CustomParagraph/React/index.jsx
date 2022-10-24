import './styles.scss'

import {
  Paragraph as TTParagraph,
} from '@tiptap/extension-paragraph'
import {
  EditorContent,
  NodeViewContent,
  NodeViewWrapper,
  ReactNodeViewRenderer, useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const ParagraphComponent = () => (
  <NodeViewWrapper className="paragraph">
    <NodeViewContent className="content" as="p" />
  </NodeViewWrapper>
)

export const Paragraph = TTParagraph.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ParagraphComponent)
  },
})

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: false,
      }),
      Paragraph,
    ],
    content: '<p>Hello World!</p>',
  })

  return <EditorContent editor={editor} />
}

export default function App() {
  return (
    <div className="App">
      <Tiptap />
    </div>
  )
}
