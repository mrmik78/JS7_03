const sorting = require("../../app");
 

// describe("Books names test suit", () => {
//   it("Books names should be sorted in ascending order", () => {
//     expect(
//       sorting.sortByName([
//         "Гарри Поттер",
//         "Властелин Колец",
//         "Волшебник изумрудного города",
//       ])
//     ).toEqual([
//       "Властелин Колец",
//       "Волшебник изумрудного города",
//       "Гарри Поттер",
//     ]);
//   });

//   it("Books names not sorted", () => {
//     expect(
//       sorting.sortByName([
//         "Гарри Поттер",
//         "Гарри Поттер",
//         "Гарри Поттер",
//       ])
//     ).toEqual([
//       "Гарри Поттер",
//       "Гарри Поттер",
//       "Гарри Поттер",
//     ]);
//   });

// });

describe("Books names test suit", () => {
  test("test number one", () => {
    const input = [
       "Гарри Поттер",
       "Властелин Колец",
       "Волшебник изумрудного города",
    ];
    
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
      });

      test("test number two", () => {
        const input = [
          "Гарри Поттер",
          "Гарри Поттер",
          "арри Поттер",
        ];

        const expected = [
          "Гарри Поттер",
          "Гарри Поттер",
          "Гарри Поттер",
        ];

        const output = sorting.sortByName(input);

        expect(output).toEqual(expected);

      });
});
