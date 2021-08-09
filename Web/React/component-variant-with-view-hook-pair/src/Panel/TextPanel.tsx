import { useHeader } from "./parts/Header";
import { useAttributes } from "./parts/Attributes";
import { css } from "@emotion/react";

type Props = { name: string };

type Dependencies = {};

export function useTextPanel({ name }: Props, {}: Dependencies) {
  const { render: Header } = useHeader({ name });
  const { render: Attributes } = useAttributes({ name }, {});

  return {
    render: () => (
      <div
        css={css`
          padding: 16px;
        `}
      >
        <div>
          <Header />
        </div>
        <div
          css={css`
            margin-top: 16px;
          `}
        >
          <Attributes />
        </div>
      </div>
    ),
  };
}
