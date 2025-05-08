import { useState } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  const [myState, setMyState] = useState(true);

  setTimeout(() => {
    if(myState==0) setMyState(1);
    else setMyState(0);
  }, 500);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
            <div
              key={1}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==0 ? "animate-spin" : ""
              }`}
            />

            <div
              key={2}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==1 ? "animate-spin" : ""
              }`}
            />

            <div
              key={3}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==0 ? "animate-spin" : ""
              }`}
            />

            <div
              key={4}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==1 ? "animate-spin" : ""
              }`}
            />

            <div
              key={5}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==0 ? "animate-spin" : ""
              }`}
            />

            <div
              key={6}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==1 ? "animate-spin" : ""
              }`}
            />

            <div
              key={7}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==0 ? "animate-spin" : ""
              }`}
            />

            <div
              key={8}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==1 ? "animate-spin" : ""
              }`}
            />

            <div
              key={9}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                myState==0 ? "animate-spin" : ""
              }`}
            />



            
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;