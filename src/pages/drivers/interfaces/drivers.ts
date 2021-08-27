//interface for carrot data
export class IDrivers {
  id: string;
  driverName: string
  phoneNumber: string;
  status: string; 
  createdAt: Date;
  constructor(
    id: string,
    driverName: string,
    phoneNumber: string,
    status: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.driverName = driverName; 
    this.phoneNumber = phoneNumber;
    this.status = status;
    this.createdAt = createdAt;
  }
}

//interface for payload creating new drivers
export class IPayloadDrivers {
  driverName: string;
  phoneNumber: string;
  status:string;
  constructor(driverName: string = "", phoneNumber: string, status: string) {
    this.driverName = driverName;
    this.phoneNumber = phoneNumber;
    this.status = status;
  }
}

//interface for payload update carrot
export class IPayloadEditDrivers {
  id: string;
  driverName: string
  phoneNumber: boolean;
  status: string; 
  createdAt: Date;
  constructor(
    id: string,
    driverName: string,
    phoneNumber: boolean,
    status: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.driverName = driverName; 
    this.phoneNumber = phoneNumber;
    this.status = status;
    this.createdAt = createdAt;
  }
}