export const carPackages = {
  swiftDzire: {
    name: "Swift Dzire",
    capacity: "4 Seater",
    minCharge: 2999,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 2400
      },
      {
        name: "1 Day Araku Tour",
        cost: 4100
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam, Rama Banam, Rama Thirdam",
        cost: 6000
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Anakapalli Nukambika Temple, Simhachalam",
        cost: 5600
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 4100
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 6300
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 3700
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 5700
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 2000,
      extraHourCost: 200,
      extraKmCost: 12
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 12
    },
    additionalCharges: {
      nightHalt: 1000,
      driverBeta: 300
    }
  },
  toyotaEtios: {
    name: "Toyota Etios",
    capacity: "4 Seater",
    minCharge: 2500,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 2500
      },
      {
        name: "1 Day Araku Tour",
        cost: 4000
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam, Rama Banam, Rama Thirdam",
        cost: 5990
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Anakapalli Nukambika Temple, Simhachalam",
        cost: 5500
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 4000
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 6000
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 3500
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 5500
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 2000,
      extraHourCost: 200,
      extraKmCost: 12
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 12
    },
    additionalCharges: {
      nightHalt: 1000,
      driverBeta: 300
    }
  },
  toyotaInnova: {
    name: "Toyota Innova AC",
    capacity: "7+1 Seater",
    minCharge: 4500,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 4500
      },
      {
        name: "1 Day Araku Tour",
        cost: 6000
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam, Rama Banam, Rama Thirdam",
        cost: 7900
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Anakapalli Nukambika Temple, Simhachalam",
        cost: 7900
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 6000
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 9000
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 5500
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 8500
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 4000,
      extraHourCost: 400,
      extraKmCost: 16
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 16
    },
    additionalCharges: {
      nightHalt: 1500,
      driverBeta: 400
    }
  }
};

export const commonExclusions = [
  "Driver Beta",
  "Tolls and Parking",
  "Border Tax"
];

export const commonNotes = [
  "Border Tax, Tolls and Parking to be paid by Customer",
  "Night halt charges and driver beta are additional",
  "Minimum booking charges apply",
  "All rates are subject to change during peak seasons"
];
