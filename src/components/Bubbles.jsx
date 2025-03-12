import "./Bubbles.css";

export default function Bubbles() {
  const bubbleCount = 100; // Number of bubbles

  const generateRandomStyle = () => {
    const randomLeft = Math.random() * 100; // Random horizontal position
    const randomDelay = Math.random() * 5; // Random animation delay
    const randomDuration = 5 + Math.random() * 5; // Randomize floating speed

    return {
      left: `${randomLeft}%`,
      bottom: `-160px`, // Start below the viewport
      animationDelay: `${randomDelay}s`,
      animationDuration: `${randomDuration}s`, // Vary animation speed
    };
  };

  return (
    <div>
      <div className="bubbleContainer">
        {[...Array(bubbleCount)].map((_, index) => (
          <span
            key={index}
            className="bubble"
            style={generateRandomStyle()}
          ></span>
        ))}
      </div>
    </div>
  );
}
