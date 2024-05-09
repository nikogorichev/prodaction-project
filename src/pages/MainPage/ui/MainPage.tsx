import { Counter } from "entities/Counter";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";

function humanizeTime(timeMs: number = 0) {
  const minutes = Math.floor(timeMs / 1000 / 60);
  const minutesStr = String(minutes).padStart(2, "0");
  const seconds = Math.floor(timeMs / 1000) % 60;
  const secondsStr = String(seconds).padStart(2, "0");
  const millis = timeMs % 1000;
  const millisStr = String(millis).padStart(3, "0");

  return `${minutesStr}:${secondsStr}.${millisStr}`;
}

const MainPage = () => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");

  const [timeMs, setTimeMs] = useState(0);
  const [timeInterval, setTimeInterval] =
    useState<ReturnType<typeof setInterval>>(null);
  const [isTimeActive, setIsTimeActive] = useState(false);

  const startTimer = () => {
    console.log(123);
    setTimeInterval(
      setInterval(() => {
        setTimeMs((prev) => prev + 1);
      }, 1000)
    );
  };

  const pauseTimer = () => {
    clearInterval(timeInterval);
  };

  const toggleHandler = () => {
    setIsTimeActive((prev) => !prev);
  };

  const resetHandler = () => {
    setTimeMs(0);
    clearInterval(timeInterval);
    setIsTimeActive(false);
  };

  const [counter, setCounter] = useState(0);
  const [timeIntervalCounter, setTimeIntervalCounter] =
    useState<ReturnType<typeof setInterval>>(null);

  const startCounter = () => {
    if (!timeIntervalCounter) {
      setTimeIntervalCounter(
        setInterval(() => {
          setCounter((prev) => prev + 1);
        }, 1000)
      );
    }
  };

  const pauseCounter = () => {
    clearInterval(timeIntervalCounter);
    setTimeIntervalCounter(null);
  };

  const resetCounter = () => {
    setCounter(0);
    pauseCounter();
  };

  const handleChange = (val: string) => {
    setValue(val);
  };

  useEffect(() => {
    if (isTimeActive) {
      startTimer();
    } else {
      pauseTimer();
    }
  }, [isTimeActive]);

  return (
    <div>
      <Text title={t("Главная")} text="обычный текст" />
      <Input value={value} onChange={handleChange} />
      <br />
      <br />

      <br />

      <br />

      <br />

      <br />

      <div className="timer-container">
        <div>{humanizeTime(timeMs)}</div>

        <div className="container">
          <button onClick={toggleHandler}>Start / Pause</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>

      <div>{`Счетчик: ${counter}`}</div>
      <button onClick={startCounter}>Начать</button>
      <button onClick={pauseCounter}>Пауза</button>
      <button onClick={resetCounter}>Сбросить</button>
    </div>
  );
};

export default MainPage;
