import useTabs from "../hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

function TabPage() {
  const { currentItem: tab, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, i) => (
        <button onClick={() => changeItem(i)}>{section.tab}</button>
      ))}
      <div>{tab.content}</div>
    </div>
  );
}

export default TabPage;
