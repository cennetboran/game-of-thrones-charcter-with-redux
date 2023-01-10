export default function HpCards({ student }) {
  console.log("hello", student);
  return (
    <div className="w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg container">
        <img
          className="w-full h-96"
          src={student.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white border px-6 bg-red-900">
            {student.name}
          </div>
        </div>
        <div class=" overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-yellow-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Species
                </th>
                <th scope="col" class="px-6 py-3">
                  {student.species}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-yellow-100 border-b dark:bg-gray-800 dark:border-black">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  House
                </th>
                <td class="px-6 py-4">{student.house}</td>
              </tr>
              <tr class="bg-yellow-100 border-b dark:bg-gray-800 dark:border-black">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Gender
                </th>
                <td class="px-6 py-4">{student.gender}</td>
              </tr>
              <tr class="bg-yellow-100 dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Hair
                </th>
                <td class="px-6 py-4">{student.hairColour}</td>
              </tr>
              <tr class="bg-yellow-100 dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Patronus
                </th>
                <td class="px-6 py-4">{student.patronus}</td>
              </tr>
              <tr class="bg-yellow-100 dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Date of Birth
                </th>
                <td class="px-6 py-4">{student.dateOfBirth}</td>
              </tr>
              <tr class="bg-yellow-100 dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Actor
                </th>
                <td class="px-6 py-4">{student.actor}</td>
              </tr>
              <tr class="bg-yellow-100 dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Ancestry
                </th>
                <td class="px-6 py-4">{student.ancestry}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
