import React from "react";

const Content = ({ props }) => {
  return (
    <>
      <div>
        <div className="flex - flex-col gap-5">
          <div className="flex justify-center m-5 p-5 text-4xl border-4 border-black rounded-3xl">
            List of Users
          </div>
          <div className="relative grid grid-cols-4 gap-4 object-cover">
            {props.map((currElement) => {
              return (
                <div className="flex justify-around " key={currElement.id}>
                  <div className="flex border-4 border-black h-52 w-[325px]">
                    <div className="">
                      <img
                        src={currElement.url}
                        alt=""
                        className="border-2 object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div
                        className="flex justify-center text-sm font-bold w-[117px]"
                        maxLength=""
                      >
                        {currElement.title}
                      </div>
                      <div className="">
                        <img
                          src={currElement.thumbnailUrl}
                          alt=""
                          className="border-2 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
