export interface Make {
  MakeId: number;
  MakeName: string;
}

export interface VehicleModel {
  Model_ID: number;
  Model_Name: string;
}

export async function fetchVehicleMakesRaw(): Promise<any> {
  const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
  return response.json();
}

export async function fetchVehicleModelsRaw(makeId: string, year: string): Promise<any> {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  return response.json();
}
