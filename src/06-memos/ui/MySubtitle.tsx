import { memo, type FC } from "react";

interface Props {
  subtitle: string;
  callMyAPI: (myValue: string) => void
}

export const MySubtitle: FC<Props> = memo(({ subtitle, callMyAPI }) => {

  console.log('MySubtitle - re-render');

  return (
    <>

      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button 
        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer" 
        onClick={() => callMyAPI(subtitle)}
      >
        Llamar a función
      </button>
    </>
  )
});
