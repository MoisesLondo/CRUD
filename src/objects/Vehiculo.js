export default class Vehicle
{
    constructor(brand, model, colour, licensePlate, yearVehicle, pictureVehicle)
    {
        this.brand = brand;
        this.model = model;
        this.colour = colour;
        this.licensePlate = licensePlate;
        this.yearVehicle = yearVehicle;
        this.pictureVehicle = pictureVehicle;
    }
    
    asigOwn(people)
    {
        this.own = people; 
    }

    getOwn()
    {
        return this.own;
    }
    getBrand()
    {
        return this.brand;
    }
    getColour()
    {
        return this.colour;
    }
    getLicensePlate()
    {
        return this.licensePlate;
    }
    getYearVehicle()
    {
        return this.yearVehicle;
    }
    getPictureVehicle()
    {
        return this.pictureVehicle;
    }
    getModel()
    {
        return this.model;
    }
    setBrand(newBrand) {
        this.brand = newBrand;
      }
    
      setModel(newModel) {
        this.model = newModel;
      }
    
      setColour(newColour) {
        this.colour = newColour;
      }
    
      setLicensePlate(newLicensePlate) {
        this.licensePlate = newLicensePlate;
      }
    
      setYearVehicle(newYearVehicle) {
        this.yearVehicle = newYearVehicle;
      }
    
      setPictureVehicle(newPictureVehicle) {
        this.pictureVehicle = newPictureVehicle;
      }
    
}