import { model, Model, Schema } from 'mongoose';
import { IPackage } from '../types/package.type';


const ObjectId = Schema.Types.ObjectId;


const packageSchema = new Schema({
    status: {
        type: String,
        require: true,
        enum: ['llegada', 'transito', 'enviado']
    },
    priority: {
        type: String,
        require: true,
        enum: ['bajo', 'medio', 'alto']
    },
    packageDetails: {
        type: ObjectId
    }
});

export const PackageModel: Model<IPackage> = model('Package', packageSchema);


