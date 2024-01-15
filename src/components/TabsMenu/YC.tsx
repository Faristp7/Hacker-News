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
  return (
    <div className="h-screen overflow-y-scroll pt-24">
      <div>
        {values.map((val: string, index: number) => {
          return <div key={index}>
            <h6 className="p-2.5 text-gray-300">{val}</h6>
            <hr className="border-orange-900 opacity-50"/>
          </div>;
        })}
      </div>
    </div>
  );
}
