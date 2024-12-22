import React, { createContext, useContext, useState } from 'react';

const PackageContext = createContext();

export const usePackages = () => {
  return useContext(PackageContext);
};

export const PackageProvider = ({ children }) => {
  const [likedPackages, setLikedPackages] = useState([]);
  const [comparePackages, setComparePackages] = useState([]);

  const toggleLike = (packageId) => {
    setLikedPackages(prev => {
      if (prev.includes(packageId)) {
        return prev.filter(id => id !== packageId);
      }
      return [...prev, packageId];
    });
  };

  const toggleCompare = (packageId) => {
    setComparePackages(prev => {
      if (prev.includes(packageId)) {
        return prev.filter(id => id !== packageId);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 packages at a time');
        return prev;
      }
      return [...prev, packageId];
    });
  };

  const clearCompare = () => {
    setComparePackages([]);
  };

  const isLiked = (packageId) => likedPackages.includes(packageId);
  const isCompared = (packageId) => comparePackages.includes(packageId);

  const value = {
    likedPackages,
    comparePackages,
    toggleLike,
    toggleCompare,
    clearCompare,
    isLiked,
    isCompared,
  };

  return (
    <PackageContext.Provider value={value}>
      {children}
    </PackageContext.Provider>
  );
};

export default PackageContext;
