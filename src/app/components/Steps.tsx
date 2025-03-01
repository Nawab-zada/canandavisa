const data = [
    {
      title: "Step#1",
      description: "The first is the selection in your eden company.selection letter will be given",
    },
    {
      title: "Step#2",
      description: "Your selection letter will be issued.",
    },
    {
      title: "Step#3",
      description: "Visa Stamp and Medical and Immigration.",
    },
  ];
  
  export default function Features() {
    return (
      <div className="  lg:max-w-5xl p-8 bg-slate-50  mx-auto ">
        <h2 className="text-2xl   mb-4 flex justify-center font-bold">Steps</h2>
        <ul className="gap-20 flex flex-col w-full lg:flex-row">
          {data.map((item, index) => (
            <li key={index} className=" mx-auto ">
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  