# Remix React Flow Example

This codesandbox shows how to use [`react-flow-renderer`](https://reactflow.dev/) in a Remix app.

To ensure the component is client-side rendered only, the `react-flow-renderer.client.tsx` file re-exports everything from the package.

Then render the component inside `<ClientOnly>` from [`remix-utils`](https://github.com/sergiodxa/remix-utils#ClientOnly)
