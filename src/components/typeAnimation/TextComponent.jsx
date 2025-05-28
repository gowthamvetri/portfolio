import { TypeAnimation } from 'react-type-animation';

const TextComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am an Engineer',
        1000,
        'I am a Designer',
        1000,
        'I am an Explorer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TextComponent;