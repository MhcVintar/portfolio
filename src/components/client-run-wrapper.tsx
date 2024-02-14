import { PropsWithChildren, useEffect, useState } from "react";

export default function ClientRunWrapper({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return null;
  }
  return children;
}
