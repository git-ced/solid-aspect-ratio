<p>
  <img 
    width="100%" 
    src="./banner.png" 
    alt="solid-aspect-ratio"
    style="border-radius: 0 0 30px 10px;"
  >
</p>

Creates a component with a proportional relationship between its width and height.

`ratio = width / height`

[![NPM](https://img.shields.io/npm/v/solid-aspect-ratio.svg)](https://www.npmjs.com/package/solid-aspect-ratio)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/solid-aspect-ratio)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/solid-aspect-ratio)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/solid-aspect-ratio)
![NPM](https://img.shields.io/npm/l/solid-aspect-ratio)

## Table of Contents
 - [Demo](#demo)
 - [Installation](#installation)
 - [Setup](#setup)
 - [Usage](#usage)
 - [Authors](#authors)
 - [Changelog](#changelog)
 - [License](#license)

 <!-- toc -->

## Demo
https://solid-aspect-ratio.netlify.app/

Source available in [example](example/)

## Installation

This library is available through the [npm registry](https://www.npmjs.com/).

NPM
```bash
$ npm -i solid-aspect-ratio
```

Yarn
```bash
$ yarn add solid-aspect-ratio
```

## Setup

Start using it by importing the library first.

### CommonJS
```javascript
const AspectRatio = require('solid-aspect-ratio');
```

or 

### ES6
```javascript
import AspectRatio from 'solid-aspect-ratio';
```

## Usage

Possible values for the ratio prop.

```javascript
import AspectRatio from 'solid-aspect-ratio';

export default function Sample() {
  return (
    <AspectRatio ratio="3/4" />
    <AspectRatio ratio="3:4" /> // Same as "3/4"
    <AspectRatio ratio={3/4} /> // Same as "3/4"
    <AspectRatio ratio={0.75} /> // Same as "3/4"
  );
}
```

Using it with an image.

```javascript
<AspectRatio ratio={16 / 9}>
  <img
    src="https://picsum.photos/500"
    alt="Picsum"
    style={{ width: '100%', height: '100%', 'object-fit': 'cover' }}
  />
</AspectRatio>
```

You can check the [example](example/) folder for more usage examples.

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/solid-aspect-ratio/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/solid-aspect-ratio/releases)

## License

  [MIT](LICENSE)
