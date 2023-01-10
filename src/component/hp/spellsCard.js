export default function SpellsCard({ spells }) {
  return (
    <>
      <section class="bg-white container">
        <div class="w-full">
          <div class="-mx-4">
            <div class="px-4">
              <div class="w-96">
                <table>
                  <thead>
                    <tr class="bg-primary text-center">
                      <th class="w-1/6  border-l border-transparent py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4 bg-green-700">
                        Spells
                      </th>
                      <th class="w-1/6  py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4 bg-red-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        {spells.name}
                      </td>

                      <td class="text-dark border-b border-[#E8E8E8]  bg-white py-5 px-2 text-base font-medium">
                        {spells.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
