export default function Skills() {
  let skills = [
    "React",
    "Vite",
    "Nodejs",
    "Express",
    "GraphQL",
    "Python",
    "FastAPI",
    "Django",
    "Flask",
    "PHP",
    "Symfony",
    "SQL",
    "Postgres",
    "Mongo",
    "Jest",
    "Playwright",
    "Pytest",
    "UML & Merise",
    "Agile",
  ];

  return (
    <div className="py-5">
      <h2 className="text-2xl mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 w-full text-xs text-black font-semibold">
        <span className="bg-white mr-1 py-1 px-2 rounded-md items-center  border-transparent hover:opacity-80">
          Typescript
        </span>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white mx-[1px] py-1 px-2 rounded-md items-center  border-transparent hover:opacity-80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
