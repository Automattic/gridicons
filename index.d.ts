import { ReactElement, SVGProps } from "react";

declare module 'gridicons/dist/*' {
  type GridiconProps = {
    size?: 12 | 18 | 24 | 36 | 48 | 54 | 72;
  } & SVGProps<SVGElement>

  const value: (props: GridiconProps) => ReactElement;
  export default value;
}
