export const PromptSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Prompt Section</h2>
      <p className="text-gray-600">
        This section is where you can enter your prompt for the AI model.
      </p>
      <textarea
        className="w-full h-32 p-2 border rounded"
        placeholder="Type your prompt here..."
      />
      <button className="self-end px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit Prompt
      </button>
    </div>
  );
}