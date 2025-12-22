import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  className = "",
  fullWidth = false,
}) => {
  if (fullWidth) {
    return (
      <div className={`w-full ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px] xl:px-[110px] ${className}`}>
      {children}
    </div>
  );
};
