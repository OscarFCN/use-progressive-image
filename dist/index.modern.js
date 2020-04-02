import { useState, useEffect } from 'react';

var useProgressiveImage = function useProgressiveImage(src, placeholder) {
  var _useState = useState(null),
      sourceLoaded = _useState[0],
      setSourceLoaded = _useState[1];

  useEffect(function () {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      return setSourceLoaded(src);
    };
  }, [src]);
  return [sourceLoaded, placeholder];
};

export { useProgressiveImage };
//# sourceMappingURL=index.modern.js.map
