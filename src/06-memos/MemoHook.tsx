
export const MemoHook = () => {
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <h1>Mi titulo</h1>

      <h1>Mi Subtitulo</h1>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Cambiar titulo
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Cambiar subtitulo
      </button>

    </div>
  );
};
