import Highlighter from "react-highlight-words";

interface IProps {
  // 需要被高亮的文本
  text: string
  // 高亮关键字
  keywords: string[]
}

export default function HighlightWords(props: IProps) {
  const { text, keywords } = props

  return (
    <Highlighter
      highlightClassName="hight-light-word"
      highlightStyle={{ fontWeight: "bold" }}
      searchWords={keywords}
      highlightTag="span"
      autoEscape={true}
      textToHighlight={text}
    />
  )
}