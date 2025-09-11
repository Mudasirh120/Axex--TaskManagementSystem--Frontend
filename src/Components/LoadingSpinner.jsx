import { Spinner } from "flowbite-react";
function LoadingSpinner() {
  return (
    <div className=" w-full h-20 flex items-center justify-center">
      <Spinner
        color="info"
        aria-label="Info spinner example"
        size="xs"
        className="w-20 h-20"
      />
    </div>
  );
}
export default LoadingSpinner;
