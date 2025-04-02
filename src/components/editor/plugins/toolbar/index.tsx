import toolbarIconsList from "./toolbar-icon-list";
import useOnClickListener from "./toolbar-onclick-listener";


const LexicalEditorTopBar = () => {
  const { onClick, selectedEventTypes, blockType } =
    useOnClickListener();

  const isIconSelected = (plugin: { event: string }) =>
    selectedEventTypes.includes(plugin.event) ||
    blockType.includes(plugin.event);

  return (
    <div className="container justify-between  flex space-x-2 p-1"

    >
      {toolbarIconsList.map((plugin) => (
        <div
          key={plugin.id}
          className="cursor-pointer"

        >
          {
            <plugin.Icon
              onClick={() => onClick(plugin.event)}
              color={isIconSelected(plugin) ? "secondary" : undefined}
            />
          }
        </div>
      ))}
    </div>
  );
};

export default LexicalEditorTopBar;
