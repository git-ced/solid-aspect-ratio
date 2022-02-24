// ANCHOR Solid
import {
  JSX,
  splitProps,
} from 'solid-js';

export interface AspectRatioProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  ratio: string | number;
}

const divideString = (
  string: string,
  delimiter: string,
): number => {
  const [numerator, denominator] = string.split(delimiter);

  return parseFloat(numerator) / parseFloat(denominator);
};

export default function AspectRatio(
  props: AspectRatioProps,
): JSX.Element {
  const [local, divProps] = splitProps(props, ['ratio']);

  const ratio = (): number => {
    if (typeof local.ratio === 'string') {
      if (local.ratio.includes('/')) {
        return divideString(local.ratio, '/');
      }

      if (local.ratio.includes(':')) {
        return divideString(local.ratio, ':');
      }

      return parseFloat(local.ratio);
    }

    return local.ratio;
  };

  return (
    <div
      {...divProps}
      style={{
        position: 'relative',
        width: '100%',
        'padding-top': `${(1 / ratio()) * 100}%`,
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
