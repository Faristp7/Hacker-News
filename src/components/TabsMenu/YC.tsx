import React from "react";

export function YC() {
  const values = [
    "Hacker News",
    "Show",
    "Show New",
    "Ask",
    "Newest",
    "NoobStories",
    "Jobs",
    "Who is hiring? Freelancer?",
    "Today's Best",
    "Yesterdays Best",
    "Week's Best",
  ];

  const availableOnThe = [
    {
      platform: "IOS App Store",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/mac-os.png",
    },
    {
      platform: "Android Play Store",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/android-os.png",
    },
    {
      platform: "Windows Store",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/windows8.png",
    },
    {
      platform: "Mac App Store",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/mac-os.png",
    },
  ];

  return (
    <div className="  ">
      <div>
        {values.map((val: string, index: number) => {
          return (
            <div key={index}>
              <h6 className="p-2.5 text-gray-300">{val}</h6>
              <hr className="border-orange-900 opacity-50" />
            </div>
          );
        })}
      </div>
      <div className="p-2">
        <h1 className="font-medium uppercase text-orange-600">
          available on the
        </h1>
        <hr className="border-orange-600" />
        <div>
          {availableOnThe.map((val) => {
            return (
              <React.Fragment key={val.platform}>
                <div className="flex gap-2 pb-2.5 pt-2">
                  <img className="mt-1 h-4 w-4" src={val.icon} alt="icon" />
                  <p className="text-gray-300">{val.platform}</p>
                </div>
                <hr className="border-orange-900" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="px-2">
        <h1 className="font-medium uppercase text-orange-600">READ LATER</h1>
        <hr className="border-orange-600" />
      </div>
      <div className="p-2">
        <p className="pb-2 text-gray-300">Pocket</p>
        <hr className="border-orange-800"/>
        <p className="pt-1 text-gray-300">Readblity</p>
      </div>
    </div>
  );
}
