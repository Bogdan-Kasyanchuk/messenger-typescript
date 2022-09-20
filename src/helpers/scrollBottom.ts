import { MutableRefObject } from 'react';

const scrollBottom = (
  chatContainer: MutableRefObject<HTMLDivElement | null>,
): void => {
  const { current }: { current: HTMLDivElement | null } = chatContainer;
  current?.scrollTo(0, current.scrollHeight - current.clientHeight);
};

export default scrollBottom;
