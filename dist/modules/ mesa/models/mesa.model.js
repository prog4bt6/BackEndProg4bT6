"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MesaSchema = new Schema({
    mesa: {
        type: String,
        required: [true, 'mesa required'],
        unique: true
    }
});
const Mesa = mongoose.model("Mesa", MesaSchema);
exports.default = Mesa;
//# sourceMappingURL=mesa.model.js.map