import "./Bubbles.css";

export default function Bubbles() {
  const bubbleCount = 30; // Number of bubbles

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

  window.addEventListener("scroll", () => {
    console.log("Scrolling...");
    const progress =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const startColor = [1, 27, 48];
    const endColor = [255, 255, 255];
    const [r, g, b] = startColor.map((start, i) =>
      Math.round(start + (endColor[i] - start) * progress)
    );
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  return (
    <div>
      <div className="thought">Swim to the surface</div>
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
