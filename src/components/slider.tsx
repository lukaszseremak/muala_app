import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function DistanceSlider({ sliderValue, setSliderValue }) {
  const handleSliderChange = (newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      event.target.value === "" ? 0 : Number(event.target.value);
    const clampedValue = isNaN(inputValue) || inputValue > 100 ? 0 : inputValue;
    setSliderValue(clampedValue);
  };

  return (
    <>
      <h1 className="text-center py-8 text-medium_gray">
        maksymalna odległość
      </h1>
      <Slider
        defaultValue={[sliderValue]}
        value={[sliderValue]}
        max={100}
        step={1}
        onValueChange={handleSliderChange}
      />
      <div className="flex flex-row pt-6 items-center justify-center space-x-1 text-medium_gray">
        <p>+</p>
        <Input
          value={sliderValue}
          onChange={handleInputChange}
          className="w-[60px] h-8 bg-light_gray focus-visible:ring-0 text-center"
        />
        <p>km</p>
      </div>
    </>
  );
}
