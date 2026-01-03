import React, { useEffect, useState } from 'react';
import { Wrapper, Block, Number, Label, Sep } from './styles';

type Props = {
  targetDate?: string | number | Date;
};

function toNumber(n: number) {
  return String(n).padStart(2, '0');
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  // default target: 30 days from now
  const defaultTarget = Date.now() + 30 * 24 * 60 * 60 * 1000;
  const target = targetDate ? new Date(targetDate).getTime() : defaultTarget;

  const calcRemaining = () => Math.max(0, Math.floor((target - Date.now()) / 1000));

  const [remaining, setRemaining] = useState<number>(calcRemaining());

  useEffect(() => {
    const t = setInterval(() => setRemaining(calcRemaining()), 1000);
    return () => clearInterval(t);
  }, [target]);

  const days = Math.floor(remaining / (24 * 3600));
  const hours = Math.floor((remaining % (24 * 3600)) / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return (
    <Wrapper className="count-down-main">
      <Block className="timer">
        <div>
          <Number className="countdown-element days">{toNumber(days)}</Number>
          <Label>days</Label>
        </div>
      </Block>

      <Sep>:</Sep>

      <Block className="timer">
        <div>
          <Number className="countdown-element hours">{toNumber(hours)}</Number>
          <Label>Hour</Label>
        </div>
      </Block>

      <Sep>:</Sep>

      <Block className="timer">
        <div>
          <Number className="countdown-element minutes">{toNumber(minutes)}</Number>
          <Label>Minutes</Label>
        </div>
      </Block>

      <Sep>:</Sep>

      <Block className="timer">
        <div>
          <Number className="countdown-element seconds">{toNumber(seconds)}</Number>
          <Label>Seconds</Label>
        </div>
      </Block>
    </Wrapper>
  );
};

export default Countdown;
