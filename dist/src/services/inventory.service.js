"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = exports.savedayWiseActivity = exports.saveLocation = exports.saveActivity = exports.saveWork = exports.saveWorkType = exports.saveEqp = exports.saveEqpTypes = void 0;
const mongoose_1 = require("mongoose");
const activity_model_1 = require("../models/activity.model");
const dayWiseActivity_model_1 = require("../models/dayWiseActivity.model");
const equipment_model_1 = require("../models/equipment/equipment.model");
const type_model_1 = require("../models/equipment/type.model");
const location_model_1 = require("../models/location.model");
const type_model_2 = require("../models/work/type.model");
const work_model_1 = require("../models/work/work.model");
const saveEqpTypes = async () => {
    await type_model_1.EquipmentType.insertMany([
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
};
exports.saveEqpTypes = saveEqpTypes;
const saveEqp = async () => {
    await equipment_model_1.Equipment.insertMany([
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91534567890123459"),
            "name": "Excavator 1",
            "type": new mongoose_1.Types.ObjectId("6473b91234567890123456")
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91634567890123460"),
            "name": "Truck 2",
            "type": new mongoose_1.Types.ObjectId("6473b91334567890123457")
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91734567890123461"),
            "name": "Bulldozer 3",
            "type": new mongoose_1.Types.ObjectId("6473b91434567890123458")
        }
    ]);
};
exports.saveEqp = saveEqp;
const saveWorkType = async () => {
    await type_model_2.WorkType.insertMany([
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91834567890123462"),
            "name": "flooring"
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91934567890123463"),
            "name": "Road Construction"
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91a34567890123464"),
            "name": "Building Construction"
        }
    ]);
};
exports.saveWorkType = saveWorkType;
const saveWork = async () => {
    await work_model_1.Work.insertMany([
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91b34567890123465"),
            "name": "Excavation Work",
            "type": new mongoose_1.Types.ObjectId("6473b91834567890123462"),
            "equipments": [
                {
                    "equipment": new mongoose_1.Types.ObjectId("6473b91534567890123459"),
                    "days": 3
                },
            ],
            'days': 3,
            'totalCost': 2000,
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91c34567890123466"),
            "name": "Road Laying Work",
            "type": new mongoose_1.Types.ObjectId("6473b91934567890123463"),
            "equipments": [
                {
                    "equipment": new mongoose_1.Types.ObjectId("6473b91634567890123460"),
                    "days": 5
                },
                {
                    "equipment": new mongoose_1.Types.ObjectId("6473b91734567890123461"),
                    "days": 2
                }
            ],
            'days': 7,
            'totalCost': 1000,
        }
    ]);
};
exports.saveWork = saveWork;
const saveActivity = async () => {
    await activity_model_1.Activity.insertMany([
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91d34567890123467"),
            "name": "Excavation Activity",
            "workTypeSequences": [
                {
                    "workType": new mongoose_1.Types.ObjectId("6473b91834567890123462")
                }
            ]
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91e34567890123468"),
            "name": "Road Construction Activity",
            "workTypeSequences": [{
                    'workType': new mongoose_1.Types.ObjectId('6473b91834567890123462')
                },
                {
                    "workType": new mongoose_1.Types.ObjectId("6473b91934567890123463"),
                    'previous': new mongoose_1.Types.ObjectId("6473b91834567890123462")
                }
            ]
        }
    ]);
};
exports.saveActivity = saveActivity;
const saveLocation = async () => {
    await location_model_1.Location.insertMany([
        {
            "_id": new mongoose_1.Types.ObjectId("6473b91f34567890123469"),
            "name": "Project Site A",
            "activities": [
                {
                    "activity": new mongoose_1.Types.ObjectId("6473b91d34567890123467"),
                    "count": 10
                },
                {
                    "activity": new mongoose_1.Types.ObjectId("6473b91e34567890123468"),
                    "count": 5
                }
            ]
        },
        {
            "_id": new mongoose_1.Types.ObjectId("6473b92034567890123470"),
            "name": "Project Site B",
            "activities": [
                {
                    "activity": new mongoose_1.Types.ObjectId("6473b91d34567890123467"),
                    "count": 8
                }
            ]
        }
    ]);
};
exports.saveLocation = saveLocation;
const savedayWiseActivity = async () => {
    await dayWiseActivity_model_1.DaywiseActivity.insertMany([
        {
            "_id": new mongoose_1.Types.ObjectId("6473b92134567890123471"),
            "equipment": new mongoose_1.Types.ObjectId("6473b91534567890123459"),
            "status": "Running",
            "history": [
                {
                    "date": "2023-11-23",
                    "days": 10,
                    "location": new mongoose_1.Types.ObjectId("6473b91f34567890123469"),
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
};
exports.savedayWiseActivity = savedayWiseActivity;
const saveData = () => {
    (0, exports.saveEqpTypes)();
    // saveEqp();
    // saveWorkType();
    // saveWork();
    // saveActivity();
    // saveLocation();
    // savedayWiseActivity()
};
exports.saveData = saveData;
//# sourceMappingURL=inventory.service.js.map