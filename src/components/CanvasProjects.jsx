export default function CanvasProjects({ projects }) {
  return (
    <div className="mb-2 flex flex-col justify-start gap-2 text-left">
      {projects.length > 0 && (
        <h2 className="bg-red-100 font-bold">Projects</h2>
      )}

      {projects.map((item, index) => {
        if (item.show) {
          return (
            <div key={index}>
              {index !== 0 && (
                <div className="my-2 h-[1px] w-full bg-slate-300"></div>
              )}
              <div className="flex items-center justify-between"></div>
              <p>Projects: {item.project}</p>
              <p className="text-sm text-slate-600">
                Description: {item.description}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
