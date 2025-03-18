declare namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        "shadow-intensity"?: string;
        "camera-controls"?: boolean;
        "touch-action"?: string;
        "environment-image"?: string;
        exposure?: string;
        "disable-zoom"?: boolean;
        "disable-tap"?: boolean;
        "camera-orbit"?: string;
        autoplay?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
  