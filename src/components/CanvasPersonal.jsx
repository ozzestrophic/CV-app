export default function CanvasPersonal({ personalInfo }) {
  return (
    <div className="mb-2 flex flex-col justify-start gap-4 bg-rose-600 p-6 text-left text-white">
      {/* <h2 className="bg-red-100 font-bold">Personal Info</h2> */}

      <h2 className=" text-center text-2xl font-bold">
        {personalInfo[0].name}
      </h2>
      <div className="flex justify-between">
        {personalInfo[0].email && (
          <p className=" text-xs ">{personalInfo[0].email}</p>
        )}
        {personalInfo[0].phone && (
          <p className="text-xs ">{personalInfo[0].phone}</p>
        )}
        {personalInfo[0].address && (
          <p className="text-xs ">{personalInfo[0].address}</p>
        )}
      </div>
    </div>
  );
}
