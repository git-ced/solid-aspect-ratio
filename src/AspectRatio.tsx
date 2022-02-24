// ANCHOR Solid
import {
  JSX,
  splitProps,
} from 'solid-js';

export interface AspectRatioProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  ratio: string | number;
}

export default function AspectRatio(
  props: AspectRatioProps,
): JSX.Element {
  const [local, divProps] = splitProps(props, ['ratio']);

  const ratio = (): string => {
    if (typeof local.ratio === 'string' && local.ratio.includes('/')) {
      const [numerator, denominator] = local.ratio.split('/');

      return String(Number(numerator) / Number(denominator));
    }

    return String(local.ratio);
  };

  return (
    <div
      {...divProps}
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: `${(1 / parseFloat(ratio())) * 100}%`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
