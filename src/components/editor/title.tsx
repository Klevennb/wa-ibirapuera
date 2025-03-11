import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import EditIcon from "@mui/icons-material/Edit";

type TitleProps = {
  isFresh: boolean;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: () => void;
};

const Title: React.FC<TitleProps> = (props) => {
  const { isFresh, title, onChange, onEdit } = props;
  const [isVisible, setIsVisible] = useState(true);

  // TODO: Refine title fade logic to include focus

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsVisible(true);
    handleMouseLeave();
  }
  return (
    <div
      className={`flex justify-center items-center h-full transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-50"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl font-bold">Title</h1>
        <input
          type="text"
          value={isFresh ? "" : title}
          onChange={handleTitleChange}
          className={`ml-4 p-2 border ${
            isFresh ? "border-green-500" : "border-gray-300"
          } rounded  !opacity-100`}
        />
        {!isFresh && (
          <Button onClick={onEdit} className="ml-2">
            <EditIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Title;
