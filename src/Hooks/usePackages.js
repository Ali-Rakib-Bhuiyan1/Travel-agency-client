import { useEffect, useState } from "react";

const usePackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://travel-agencynew2-ali-rakib-bhuiyan1.onrender.com/package")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return { packages };
};

export default usePackages;
