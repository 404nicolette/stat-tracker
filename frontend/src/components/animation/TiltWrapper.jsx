// animation/TiltWrapper.jsx
import Tilt from 'react-parallax-tilt';

const TiltedCard = ({ children }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.04}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={1200}
      perspective={1400}
      className="w-fit h-fit"
    >
      {children}
    </Tilt>
  );
};

export default TiltedCard;