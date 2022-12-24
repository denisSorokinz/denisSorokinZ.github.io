class UserDto {
  picture = "";
  city = "";
  postcode = 0;
  cell = "";
  name = "";

  constructor(inputData) {
    this.picture = inputData.picture;
    this.city = inputData.city;
    this.postcode = inputData.postcode;
    this.cell = inputData.cell;
    this.name = inputData.name;
  }
}
