import * as React from "react";

export default function Taihou(): JSX.Element {
  React.useEffect(() => {
    window.location.assign("https://youtu.be/dQw4w9WgXcQ?t=42");
  }, []);

  return null;
}
