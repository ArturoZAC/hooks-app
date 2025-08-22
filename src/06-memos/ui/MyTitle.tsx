import type { FC } from "react";
import React from "react";

interface Props {
  title: string;
}

export const MyTitle: FC<Props> = React.memo(({ title }) => {

  console.log('MyTitle - re-render');

  return <h1 className="text-3xl">{title}</h1>
})
