var react = require('react');

var useProgressiveImage = function useProgressiveImage(src, placeholder) {
  var _useState = react.useState(null),
      sourceLoaded = _useState[0],
      setSourceLoaded = _useState[1];

  react.useEffect(function () {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      return setSourceLoaded(src);
    };
  }, [src]);
  return [sourceLoaded, placeholder];
};

exports.useProgressiveImage = useProgressiveImage;
//# sourceMappingURL=index.js.map
