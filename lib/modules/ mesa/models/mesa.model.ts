import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IMesa extends mongoose.Document {  
    mesa: string;
}

 const MesaSchema = new Schema(
    {
        mesa: {
            type: String,
            required: [true, 'mesa required'],
            unique: true
        }
    }
    
 );

const Mesa = mongoose.model<IMesa>("Mesa", MesaSchema);
export default Mesa;