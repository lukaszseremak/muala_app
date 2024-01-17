"use client";
import { CopyIcon, CheckIcon } from "@/components/ui/icons";
import copy from "copy-to-clipboard";
import { useState } from "react";

import { ReactNode } from "react";

type MatchProps<T extends string | number | symbol> = Record<
  T,
  () => ReactNode
> & {
  value: T;
};

export function Match<T extends string | number | symbol>(
  props: MatchProps<T>
) {
  const render = props[props.value];

  return <>{render()}</>;
}

type IconToShow = "copy" | "copied";

export const CopyText = ({ content, children, ...rest }) => {
  const [iconToShow, setIconToShow] = useState<IconToShow>("copy");

  return (
    <div
      onMouseLeave={() => setIconToShow("copy")}
      onTouchEnd={() => setIconToShow("copy")}
      onClick={() => {
        copy(content);
        setIconToShow("copied");
      }}
      as="span"
      {...rest}
    >
      {children}
      <div as="span">
        <Match
          value={iconToShow}
          copy={() => <CopyIcon />}
          copied={() => <CheckIcon />}
        />
      </div>
    </div>
  );
};
