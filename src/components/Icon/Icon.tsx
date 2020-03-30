import React from 'react';
import clsx from 'clsx';

import icons from 'icons';

export type IconName = keyof typeof icons;

interface IComponentProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}

const Icon: React.FC<IComponentProps> = ({ name, size: sizeProp, className, ...rest }) => {
  const Component = icons[name] || icons['no-icon'];
  const size = sizeProp && { width: sizeProp, height: sizeProp };

  return <Component className={clsx('icon', `icon-${name}`, className)} {...size} {...rest} />;
};

export default React.memo(Icon);
