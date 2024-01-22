export default function CanvasEducation({ state }) {
  return (
    <div className="mb-2 flex flex-col justify-start gap-2 text-left">
      {state.length > 0 && <h2 className="bg-red-100 font-bold">Education</h2>}

      {state.map((item, index) => {
        if (item.show) {
          return (
            <div key={index}>
              {index !== 0 && (
                <div className="my-2 h-[1px] w-full bg-slate-300"></div>
              )}
              <div className="flex items-start gap-4">
                <div className="text-sm text-slate-600">
                  <p>{item.start}</p>
                  <p>{item.end}</p>
                </div>
                <div>
                  <p>{item.school}</p>
                  <p className="text-sm italic text-slate-600">{item.major}</p>
                  <p className=" mt-4 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
