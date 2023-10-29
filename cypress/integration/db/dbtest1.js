describe("db test", () => {
  it("Create Table", () => {
    cy.task(
      "queryDb",
      `
          CREATE TABLE Employee (
            ID int,
            FirstName varchar(255),
            Address varchar(255),
            City varchar(255)
          )
        `
    );
  });

  it("Insert Entries into the table", () => {
    // Insert four employee entries
    cy.task(
      "queryDb",
      `INSERT INTO Employee (ID, FirstName, Address, City) 
      VALUES (1, 'John', 'House No.1', 'Helsinki')`
    );
  });
});
