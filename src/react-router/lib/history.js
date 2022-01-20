// Router 使用 H5 History API（(pushState, replaceState and the popstate event）来保证 UI 组件和 URL 同步
// history.location：当前路由
// history.listen()：用在<Router>组件里，用来监听路由变化。返回值是unlsten()，用来取消监听的
const createBrowserHistory = () => {
  const listeners = [];
  const location = { pathname: '/' };

  // 监听popstate事件（为了处理浏览器的前进后退）
  // 注意：浏览器的前进后退会触发popstate，但pushState、replaceState均不会触发popstate
  window.addEventListener('popstate', () => {
    location.pathname = window.location.pathname;
    listeners.forEach(listener => listener(location));
  });

  const listen = (listener) => {
    listeners.push(listener);
    return () => listeners.splice(listeners.indexOf(listener), 1);
  }

  const push = (pathname) => {
    location.pathname = pathname;
    // pushState 和 replaceState 都接受三个参数
    // 第一个是与新的历史记录条目相关联的对象，但我们不需要这个功能
    // 第二个是title，我们也不需要它
    // 第三个是pathname
    window.history.pushState(null, '', pathname);
    listeners.forEach(listener => listener(location));
  }

  const replace = (pathname) => {
    location.pathname = pathname;
    // pushState 和 replaceState 都接受三个参数
    // 第一个是与新的历史记录条目相关联的对象，但我们不需要这个功能
    // 第二个是title，我们也不需要它
    // 第三个是pathname
    window.history.replaceState(null, '', pathname);
    listeners.forEach(listener => listener(location));

  }

  return {
    location,
    listen,
    push,
    replace,
  }
}

export default createBrowserHistory;