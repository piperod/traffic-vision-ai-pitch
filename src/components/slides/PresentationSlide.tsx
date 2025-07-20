import { ReactNode } from "react";

interface PresentationSlideProps {
  children: ReactNode;
}

export const PresentationSlide = ({ children }: PresentationSlideProps) => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 min-h-screen flex items-center">
      <div className="w-full animate-fade-in">
        {children}
      </div>
    </div>
  );
};