import { PropsWithChildren, useSyncExternalStore } from "react";

// No external source ever changes, so the subscription is a no-op: this hook
// only exists to make useSyncExternalStore report "false" during the server
// render/initial hydration and "true" once mounted on the client.
const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function ClientRunWrapper({ children }: PropsWithChildren) {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }
  return children;
}
