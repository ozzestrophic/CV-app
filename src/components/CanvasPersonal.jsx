export default function CanvasPersonal({ personalInfo }) {
  return (
    <div className="mb-2 flex flex-col justify-start gap-2 text-left">
      <h2 className="bg-red-100 font-bold">Personal Info</h2>

      <h2>{personalInfo[0].name}</h2>
      <div className="flex justify-between">
        {personalInfo[0].email && (
          <p className=" text-xs text-slate-600">{personalInfo[0].email}</p>
        )}
        {personalInfo[0].phone && (
          <p className="text-xs text-slate-600">{personalInfo[0].phone}</p>
        )}
        {personalInfo[0].address && (
          <p className="text-xs text-slate-600">{personalInfo[0].address}</p>
        )}
      </div>
    </div>
  );
}
