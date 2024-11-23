import { Types } from "mongoose";
import { Activity } from "../models/activity.model";
import { DaywiseActivity } from "../models/dayWiseActivity.model";
import { Equipment } from "../models/equipment/equipment.model";
import { EquipmentType } from "../models/equipment/type.model";
import { Location } from "../models/location.model";
import { WorkType } from "../models/work/type.model";
import { Work } from "../models/work/work.model";

export const saveEqpTypes = async () => {
    await EquipmentType.insertMany([
        {
            // "_id": new Types.ObjectId("6473b91234567890123456"),
            "name": "Excavator",
            "cost": 100000
        },
        {
            // "_id": new Types.ObjectId("6473b91334567890123457"),
            "name": "Truck",
            "cost": 50000
        },
        {
            // "_id": new Types.ObjectId("6473b91434567890123458"),
            "name": "Bulldozer",
            "cost": 150000
        }
    ]);
}

export const saveEqp = async () => {
    await Equipment.insertMany([
        {
            "_id": new Types.ObjectId("6473b91534567890123459"),
            "name": "Excavator 1",
            "type": new Types.ObjectId("6473b91234567890123456")
        },
        {
            "_id": new Types.ObjectId("6473b91634567890123460"),
            "name": "Truck 2",
            "type": new Types.ObjectId("6473b91334567890123457")
        },
        {
            "_id": new Types.ObjectId("6473b91734567890123461"),
            "name": "Bulldozer 3",
            "type": new Types.ObjectId("6473b91434567890123458")
        }
    ]);
}

export const saveWorkType = async () => {
    await WorkType.insertMany([
        {
            "_id": new Types.ObjectId("6473b91834567890123462"),
            "name": "flooring"
        },
        {
            "_id": new Types.ObjectId("6473b91934567890123463"),
            "name": "Road Construction"
        },
        {
            "_id": new Types.ObjectId("6473b91a34567890123464"),
            "name": "Building Construction"
        }
    ]);
}

export const saveWork = async () => {
    await Work.insertMany([
        {
            "_id": new Types.ObjectId("6473b91b34567890123465"),
            "name": "Excavation Work",
            "type": new Types.ObjectId("6473b91834567890123462"),
            "equipments": [
                {
                    "equipment": new Types.ObjectId("6473b91534567890123459"),
                    "days": 3
                },
            ],
            'days': 3,
            'totalCost': 2000,
        },
        {
            "_id": new Types.ObjectId("6473b91c34567890123466"),
            "name": "Road Laying Work",
            "type": new Types.ObjectId("6473b91934567890123463"),
            "equipments": [
                {
                    "equipment": new Types.ObjectId("6473b91634567890123460"),
                    "days": 5
                },
                {
                    "equipment": new Types.ObjectId("6473b91734567890123461"),
                    "days": 2
                }
            ],
            'days': 7,
            'totalCost': 1000,
        }
    ]);
}

export const saveActivity = async () => {
    await Activity.insertMany([
        {
            "_id": new Types.ObjectId("6473b91d34567890123467"),
            "name": "Excavation Activity",
            "workTypeSequences": [
                {
                    "workType": new Types.ObjectId("6473b91834567890123462")
                }
            ]
        },
        {
            "_id": new Types.ObjectId("6473b91e34567890123468"),
            "name": "Road Construction Activity",
            "workTypeSequences": [{
                'workType': new Types.ObjectId('6473b91834567890123462')
            },
            {
                "workType": new Types.ObjectId("6473b91934567890123463"),
                'previous': new Types.ObjectId("6473b91834567890123462")
            }
            ]
        }
    ]);
}

export const saveLocation = async () => {
    await Location.insertMany([
        {
            "_id": new Types.ObjectId("6473b91f34567890123469"),
            "name": "Project Site A",
            "activities": [
                {
                    "activity": new Types.ObjectId("6473b91d34567890123467"),
                    "count": 10
                },
                {
                    "activity": new Types.ObjectId("6473b91e34567890123468"),
                    "count": 5
                }
            ]
        },
        {
            "_id": new Types.ObjectId("6473b92034567890123470"),
            "name": "Project Site B",
            "activities": [
                {
                    "activity": new Types.ObjectId("6473b91d34567890123467"),
                    "count": 8
                }
            ]
        }
    ]);
}

export const savedayWiseActivity = async () => {
    await DaywiseActivity.insertMany([
        {
            "_id": new Types.ObjectId("6473b92134567890123471"),
            "equipment": new Types.ObjectId("6473b91534567890123459"),
            "status": "Running",
            "history": [
                {
                    "date": "2023-11-23",
                    "days": 10,
                    "location": new Types.ObjectId("6473b91f34567890123469"),
                    "workingDays": 8
                }
            ],
            "activity": [
                {
                    "date": "2023-11-23",
                    "checkInTime": "2023-11-23T08:00:00Z",
                    "checkOutTime": "2023-11-23T17:00:00Z",
                    "idealTime": 8,
                    "fuel": 10
                }
            ]
        }
    ]);
}

export const saveData = () => {
    saveEqpTypes();
    // saveEqp();
    // saveWorkType();
    // saveWork();
    // saveActivity();
    // saveLocation();
    // savedayWiseActivity()
}