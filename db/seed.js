import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  const employees = [
    { name: "Conner Daly", birthday: 20000714, salary: 34000},
    { name: "Skippy Lamott", birthday: 20010713, salary: 32000},
    { name: "Erik Latyshev", birthday: 20010330, salary: 400000},
    { name: "Syd Knight", birthday: 20001221, salary: 35000},
    { name: "Patrick McArdle", birthday: 20001019, salary: 55000},
    { name: "John Street", birthday: 20020428, salary: 27000},
    { name: "Bichael Enfield", birthday: 19950817, salary: 84000},
    { name: "Greg Heffley", birthday: 19891118, salary: 92500},
    { name: "Borzchka Breslin", birthday: 19570225, salary: 16000},
    { name: "Jane Roe", birthday: 19740515, salary: 44000},
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }

  console.log("Database seeded successfully");
}
