export default (pathname, options) => {
  const { 
      exact = false, 
      path 
  } = options;

  if (!path) {
      return {
        path: null,
        url: pathname,
        isExact: true,
      }
  }

  // 推荐使用：https://github.com/pillarjs/path-to-regexp
  const match = new RegExp(`^${path}`).exec(pathname);

  if (!match) return null;
  const url = match[0]
  const isExact = pathname === url

  if (exact && !isExact) return null;

  return {
      path,
      url,
      isExact,
  };
};
