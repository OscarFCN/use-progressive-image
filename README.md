# use-progressive-image

> Lazy load images

[![NPM](https://img.shields.io/npm/v/use-progressive-image.svg)](https://www.npmjs.com/package/use-progressive-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-progressive-image
yarn add use-progressive-image
```

## Usage

```jsx
import React from 'react';
import Header from './Header';
import {useProgressiveImage} from 'use-progressive-image';

const Cover = ({ image, className, isInverted, backgroundImage, children }) => {
  const [loaded, placeholder] = useProgressiveImage(backgroundImage, image);
  const imageStyle = backgroundImage
    ? { backgroundImage: `url(${loaded || placeholder})` }
    : null;
  return (
    <div className={`cover ${className ? className : ''}`} style={imageStyle}>
      <Header className={isInverted ? 'header--invert' : ''} />
      <h1 className='cover__text'>{children}</h1>
      {image && (
        <div className='cover__image'>
          <img src={image} alt='cover' />
        </div>
      )}
    </div>
  );
};

export default Cover;
```

## License

MIT © [Oscar Fernández](https://github.com/Oscar Fernández)
