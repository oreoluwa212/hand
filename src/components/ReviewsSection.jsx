import React, { useState, useEffect } from "react";

function ReviewsText({ h1, p }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-yellowBg md:text-4xl text-lg font-bold">
        {h1} <span className="counter"></span>
      </h1>
      <p className="text-white text-sm md:text-lg font-medium">{p}</p>
    </div>
  );
}

function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(0) + "M";
  }
  return number.toLocaleString();
}

function ReviewsSection() {
  const [counts, setCounts] = useState([
    { target: 350, current: 0 },
    { target: 20, current: 0 },
    { target: 100, current: 0 },
    { target: 85000000, current: 0 },
  ]);

  const descriptions = [
    "Clients Worldwide",
    "Team Members",
    "Projects Completed",
    "Revenue Generated",
  ];

  useEffect(() => {
    const intervalIds = [];

    counts.forEach((count, index) => {
      const isLargeNumber = count.target >= 1000000;
      const increment = Math.ceil(count.target / (isLargeNumber ? 100 : 1000));

      intervalIds.push(
        setInterval(
          () => {
            setCounts((prevCounts) => {
              const updatedCounts = [...prevCounts];
              if (updatedCounts[index].current < count.target) {
                updatedCounts[index].current = Math.min(
                  updatedCounts[index].current + increment,
                  count.target
                );
                return updatedCounts;
              } else {
                clearInterval(intervalIds[index]);
                return prevCounts;
              }
            });
          },
          isLargeNumber ? 20 : 30
        )
      );
    });

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="bg-black w-full px-[5%] py-6 my-16 flex justify-between items-center">
      {counts.map((count, index) => (
        <ReviewsText
          key={index}
          h1={`${formatNumber(count.current)} +`}
          p={descriptions[index]}
        />
      ))}
    </div>
  );
}

export default ReviewsSection;
