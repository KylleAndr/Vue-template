import { Ref } from "vue";

export const useSvgDownload = (
  svgRef: Ref<SVGElement | null>,
  filename: string
) => {
  const download = () => {
    if (svgRef.value) {
      const svgBlob = new Blob([svgRef.value!.outerHTML], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${filename}.svg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };
  return download;
};
