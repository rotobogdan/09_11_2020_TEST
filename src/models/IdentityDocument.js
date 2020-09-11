class IdentityDocument{
  constructor(
    bib,
    firstName,
    lastName,
    gender,
    race,
    category,
    registrationStatus,
  ) {
    this.bib = bib;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.race = race;
    this.category = category;
    this.registrationStatus = registrationStatus;
  }
}

export default IdentityDocument;