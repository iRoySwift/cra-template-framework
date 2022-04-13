## "0.1.1", (2022-04-13)

# Migrating React from 17 to 18

ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it’s running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

React 18 introduces a new root API which provides better ergonomics for managing roots. The new root API also enables the new concurrent renderer, which allows you to opt-into concurrent features.

```jsx
// Before
import { render } from "react-dom";
const container = document.getElementById("app");
render(<App tab="home" />, container);

// After
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
```

We’ve also changed unmountComponentAtNode to root.unmount:

```jsx
// Before
unmountComponentAtNode(container);

// After
root.unmount();
```

We’ve also removed the callback from render, since it usually does not have the expected result when using Suspense:

```jsx
// Before
const container = document.getElementById("app");
ReactDOM.render(<App tab="home" />, container, () => {
  console.log("rendered");
});

// After
function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App tab="home" />;
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
```

Note: There is no one-to-one replacement for the old render callback API — it depends on your use case. See the working group post for [Replacing render with createRoot](https://github.com/reactwg/react-18/discussions/5) for more information.

Finally, if your app uses server-side rendering with hydration, upgrade hydrate to hydrateRoot:

```jsx
// Before
import { hydrate } from "react-dom";
const container = document.getElementById("app");
hydrate(<App tab="home" />, container);

// After
import { hydrateRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = hydrateRoot(container, <App tab="home" />);
// Unlike with createRoot, you don't need a separate root.render() call here.
```

## Updates to Server Rendering APIs

In this release, we’re revamping our react-dom/server APIs to fully support Suspense on the server and Streaming SSR. As part of these changes, we’re deprecating the old Node streaming API, which does not support incremental Suspense streaming on the server.

Using this API will now warn:

- renderToNodeStream: Deprecated ⛔️️

  Instead, for streaming in Node environments, use:

- renderToPipeableStream: New ✨

We’re also introducing a new API to support streaming SSR with Suspense for modern edge runtime environments, such as Deno and Cloudflare workers:

- renderToReadableStream: New ✨

The following APIs will continue working, but with limited support for Suspense:

- renderToString: Limited ⚠️

- renderToStaticMarkup: Limited ⚠️

Finally, this API will continue to work for rendering e-mails:

- renderToStaticNodeStream

For more information on the changes to server rendering APIs, see the working group post on Upgrading to React 18 on the server, a deep dive on the new Suspense SSR Architecture, and Shaundai Person’s talk on Streaming Server Rendering with Suspense at React Conf 2021.

## Automatic Batching

React 18 adds out-of-the-box performance improvements by doing more batching by default. Batching is when React groups multiple state updates into a single re-render for better performance. Before React 18, we only batched updates inside React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default:

```jsx
// Before React 18 only React events were batched

function handleClick() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will only re-render once at the end (that's batching!)
}

setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will render twice, once for each state update (no batching)
}, 1000);
```

Starting in React 18 with createRoot, all updates will be automatically batched, no matter where they originate from. This means that updates inside of timeouts, promises, native event handlers or any other event will batch the same way as updates inside of React events:

```jsx
// After React 18 updates inside of timeouts, promises,
// native event handlers or any other event are batched.

function handleClick() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will only re-render once at the end (that's batching!)
}

setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);
```

This is a breaking change, but we expect this to result in less work rendering, and therefore better performance in your applications. To opt-out of automatic batching, you can use flushSync:

```jsx
import { flushSync } from "react-dom";

function handleClick() {
  flushSync(() => {
    setCounter((c) => c + 1);
  });
  // React has updated the DOM by now
  flushSync(() => {
    setFlag((f) => !f);
  });
  // React has updated the DOM by now
}
```
